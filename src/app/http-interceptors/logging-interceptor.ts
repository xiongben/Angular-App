import {Injectable} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        var newReqParams;
        // console.log(req)
        const httpMethod = req.method;
        if(httpMethod == "GET"){
            newReqParams = {...req.params}["map"];
            newReqParams.set("token", ["6666666666666"]);
            console.log(newReqParams);
        }
        
        // console.log(newReq);
        const authReq = req.clone({ setHeaders: { Authorization: "xb1993" } });
        return next.handle(authReq).pipe(
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