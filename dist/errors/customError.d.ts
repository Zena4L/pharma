export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor();
    abstract output(): {
        message: string;
    }[];
}
