import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/authConfig";

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

export default function ensureAuthenticated({request,response,next}:IExpress):void{
  const authHeader = request.headers.authorization;

  if(!authHeader) throw new Error('JWT token is missing');

  const [ , token] = authHeader.split(' ');

  try {
    const decoded = verify(token,authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    request.user = { id: sub,}

    return next();
  } catch{
    throw new Error('Invalid JWT token')
  }
}