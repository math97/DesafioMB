import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/authConfig";
import AppError from "../errors/AppError";

interface IExpress {
  request:Request,
  response: Response,
  next: NextFunction,
}

interface ITokenPayload{
  iat: number,
  exp: number,
  sub: string,
}


export default function ensureUserAuthenticated(request:Request,response:Response,next:NextFunction):void{
  
  const authHeader = request.headers.authorization;

  if(!authHeader) throw new AppError('JWT token is missing',400);

  const [ , token] = authHeader.split(' ');

  try {
    const decoded = verify(token,authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    request.user = { id: sub,}

    return next();
  } catch{
    throw new AppError('Invalid JWT token',403)
  }
}