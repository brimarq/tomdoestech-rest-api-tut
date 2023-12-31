import { get } from "lodash";
import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services/session.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken =
    get(req, "cookies.accessToken") ||
    get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

  const refreshToken =
    get(req, "cookies.refreshToken") ||
    (get(req, "headers.x-refresh", "") as string);

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);

      res.cookie("accessToken", newAccessToken, {
        maxAge: 900000, // 15 mins
        httpOnly: true,
        domain: "localhost", //todo: set in env var
        path: "/",
        sameSite: "strict",
        secure: false, // todo: set according to env
      });

      const result = verifyJwt(newAccessToken);
      res.locals.user = result.decoded;
    }

    // const result = verifyJwt(newAccessToken);
    // res.locals.user = result.decoded;

    return next();
  }

  return next();
};

export default deserializeUser;
