import { Request, Response } from "express";
import { omit } from "lodash";
import logger from "../utils/logger";
import { createUser } from "../services/user.service";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"] /* typing the req.body */>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    // return res.send(omit(user.toJSON(), "password"));
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    res.status(409).send(e.message);
  }
}

export async function getCurrentUser(req: Request, res: Response) {
  return res.send(res.locals.user);
}
