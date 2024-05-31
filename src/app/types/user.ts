import { z } from "zod";

export const createUser = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});