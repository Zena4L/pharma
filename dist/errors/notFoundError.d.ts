import { CustomError } from "./customError";
import { Request } from "express";
export declare class NotFoundError extends CustomError {
    req: Request;
    statusCode: number;
    constructor(req: Request);
    output(): {
        message: string;
    }[];
}
