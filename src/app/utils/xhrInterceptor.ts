import {Injectable, Optional} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest,HttpHeaders,HttpResponse,HttpErrorResponse} from "@angular/common/http";
import {retry,catchError} from "rxjs/operators";
import { Observable ,throwError } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class XhrInterceptor implements HttpInterceptor {
  constructor(
    private authService:AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = "";//this.authService.getBearertoken();
    let xhr = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    });
    // let xhr = req.clone({
    //   headers: req.headers.set('Authorization', `Bearer ${token}`)
    // });
    //For Error Handling
    return next.handle(xhr).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = 'Error: ${error.error.message}';

        } else {
          // server-side error
          errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';

        }
        return throwError(errorMessage);
      })
    );
  }
}
