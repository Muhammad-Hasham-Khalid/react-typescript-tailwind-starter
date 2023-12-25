import { z } from 'zod';

export const env = z.object({
  // server
  PORT: z.coerce.number(),

  // client
  VITE_APP_TITLE: z.string().min(1),
});

type Environment = Readonly<z.infer<typeof env>>;

export type ClientEnvironment = {
  readonly [K in Extract<keyof Environment, `VITE_${string}`>]: Environment[K];
};
