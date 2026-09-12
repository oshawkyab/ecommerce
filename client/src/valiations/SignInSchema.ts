import { z } from "zod";

export const signInSchema = z.object({
   email: z.string().email().min(1, { message: "Email Address is required" }),
   password: z.string().min(8, { message: "password must be at least 8 char" }).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should contain at least 1 special character",
   })
})

export type SignInTypes = z.infer<typeof signInSchema>