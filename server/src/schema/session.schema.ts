import { TypeOf, object, string } from "zod";

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: "Email is required.",
    }),
    password: string({
      required_error: "Password is required.",
    }),
  }),
});

// export const createSessionSchema = object({
//   body: object({
//     email: string({
//       required_error: "Email is required.",
//     }).email("Not a valid email."),
//     password: string({
//       required_error: "Password is required.",
//     }).min(6, "Password is too short - should be 6 chars minimum."),

//   }).refine((data) => data.password === data.passwordConfirmation, {
//     message: "Passwords do not match.",
//     path: ["passwordConfirmation"],
//   }),
// });

// export type CreateSessionInput = TypeOf<typeof createSessionSchema>;
