import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class TokenInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = this.setTokenHeader(req);

    return next.handle(modified);
  }

  protected setTokenHeader(request: HttpRequest<any>): HttpRequest<any> {
    const authorizationToken: string | null = localStorage.getItem('authorization');

    if (authorizationToken) {
      return request.clone({
        setHeaders: {
          // Authorization: authorizationToken
        }
      });
    }

    return request;
  }
}
