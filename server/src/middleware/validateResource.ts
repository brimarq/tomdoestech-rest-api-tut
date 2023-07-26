import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

// Use currying here to take in a schema and return an express route call function
// whose request object will be validated against that schema
const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validate;
