import { z } from "zod"

export const signUpSchema = z.object({
   firstName: z.string().min(1, { message: "firstName is required" }),
   lastName: z.string().min(1, { message: "lastName is required" }),
   email: z.string().email().min(1, { message: "email is required" }),
   password: z.string().min(8, { message: "password must be at least 8 char" }).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should contain at least 1 special character",
   }),
   confirmPassword: z.string().min(1, { message: "firstName is required" }),
}).refine((input) => input.confirmPassword === input.password, {
   message: "password and confirm password does not match",
   path: ["confirmPassword"]
})

export type TSignUpFields = z.infer<typeof signUpSchema>