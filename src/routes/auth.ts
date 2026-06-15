import type { Env } from '..';
import { bearerAuth } from 'hono/bearer-auth';
import { timingSafeEqual } from 'hono/utils/buffer';

export const bearerAuthFromEnv = bearerAuth<{ Bindings: Env }>({
  verifyToken: (token, c) => timingSafeEqual(c.env.TURBO_TOKEN, token),
});
