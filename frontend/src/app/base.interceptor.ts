import { HttpInterceptorFn } from '@angular/common/http';

export const baseInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeader = req.clone({
    headers: req.headers.set('X-Client-Version', '1.0.0'),
  });

  return next(reqWithHeader);
};
