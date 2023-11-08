import { CustomError } from "./customError";
import { ValidationError } from "express-validator";
export declare class RequestValidationError extends CustomError {
    error: ValidationError[];
    statusCode: number;
    constructor(error: ValidationError[]);
    output(): {
        message: any;
    }[];
}
