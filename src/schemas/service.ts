import { z } from "zod";

export const serviceSchema = z.object({
  title: z.string().min(5),
  hourly_rate: z.number().min(0),
  duration_minutes: z.number().int().min(15),
  coverage_radius_miles: z.number().positive(),
}).strict();