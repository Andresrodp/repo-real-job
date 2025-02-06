import {NextResponse} from 'next/server'

export const config = {
  matcher: '/backoffice',
}

const EXPIRATION_TIME = 3600 * 1000; // 1 hora

export function middleware(req) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'casa-admin' && pwd === '0f8f367c-e631-4c52-aca3-869a945129d7') {

      const cookies = req.cookies;
      const authTime = cookies['auth_time'];
      const currentTime = Date.now();

      if (authTime) {
        const authTimeParsed = parseInt(authTime, 10);

        // Si la autenticación ha expirado, solicitar autenticación nuevamente
        if (currentTime - authTimeParsed > EXPIRATION_TIME) {
          return new NextResponse('Session expired', {
            status: 401,
            headers: {
              'WWW-Authenticate': 'Basic realm="Secure Area"',
            },
          });
        }
      }

      const response = NextResponse.next()
      response.cookies.set('auth_time', currentTime.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: EXPIRATION_TIME / 1000, // Tiempo de expiración en segundos
        path: '/',
      });
      return response
    }
  }

  // Si no se proporcionaron credenciales o las credenciales son incorrectas, devolver un 401
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
