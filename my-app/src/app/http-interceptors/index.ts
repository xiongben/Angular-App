
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoopInterceptor } from './noop-interceptor';
import { LoggingInterceptor } from './logging-interceptor';
import { from } from 'rxjs';

export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
]