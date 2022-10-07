import * as redis from "redis";

import { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/AppError";
import { RateLimiterRedis } from "rate-limiter-flexible";

export interface IRequestIp extends Request {
  ip: string;
}

const redisClient = redis.createClient({
  legacyMode: true,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    sessionTimeout: 20,
  },
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "rateLimiter",
  points: 5, // 10 requests
  duration: 5, // per 1 second by IP
});

export const rateLimiterMiddleware = async (
  req: IRequestIp,
  res: Response,
  next: NextFunction
) => {
  try {
    await redisClient.connect();

    await limiter.consume(req.ip);

    return next();
  } catch (e) {
    throw new AppError("Too many requests", 429);
  } finally {
    await redisClient.disconnect();
  }
};
