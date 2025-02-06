import jwt from 'jsonwebtoken';
import {serialize} from 'cookie';

const SECRET_KEY = '983f6748-1cb9-4386-b4df-af68c3c2187a';

export function generateToken(user) {
  return jwt.sign(user, SECRET_KEY, {expiresIn: '1h'});
}

export function setTokenCookie(res, token) {
  const cookie = serialize('auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 3600, // 1 hour
    path: '/',
  });
  res.setHeader('Set-Cookie', cookie);
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

export function getTokenFromCookie(req) {
  const { auth } = req.cookies;
  return auth || null;
}
