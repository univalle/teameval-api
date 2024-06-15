import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class JsonErrorInterceptor implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
