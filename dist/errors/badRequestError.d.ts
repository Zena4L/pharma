import { CustomError } from "./customError";
export declare class BadRequestError extends CustomError {
    messgae: string;
    statusCode: number;
    constructor(messgae: string);
    output(): {
        message: string;
    }[];
}
