import { Request, Response, NextFunction } from "express";
import { validatePassword } from "../services/user.service";
import {
  createSession,
  findSessions,
  updateSession,
} from "../services/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the user's password. req.body = { email, password }
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid email or password.");
  }

  // create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 minutes
  );

  // create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenTtl") } // 1 year
  );

  res.cookie("accessToken", accessToken, {
    maxAge: 900000, // 15 mins
    httpOnly: true,
    domain: "localhost", //todo: set in env var
    path: "/",
    sameSite: "strict",
    secure: false, // todo: set according to env
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 3.154e10, // 1 yr
    httpOnly: true,
    domain: "localhost", //todo: set in env var
    path: "/",
    sameSite: "strict",
    secure: false, // todo: set according to env
  });

  // return access & refresh tokens
  return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;

  //? Confusing... why use update for a delete operation?? WTF?
  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
