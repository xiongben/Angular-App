import {Injectable} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
               event => console.log("logging interceptor"),
               error => console.log(error)
            ),
            finalize(()=>{
                //doing something
            })
        )
    };
}