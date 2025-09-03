import { Request, Response, NextFunction } from 'express';
import { Prisma } from '../../generated/prisma';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle Prisma specific errors
    switch (err.code) {
      case 'P2002':
        return res.status(409).json({
          message: 'A record with this value already exists'
        });
      case 'P2025':
        return res.status(404).json({
          message: 'Record not found'
        });
      default:
        return res.status(400).json({
          message: 'Database error',
          code: err.code
        });
    }
  }

  // Handle other types of errors
  res.status(500).json({
    message: 'Internal server error'
  });
};
