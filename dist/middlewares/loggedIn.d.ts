import { RequestHandler } from "express";
interface Payload {
    id: string;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: Payload;
        }
    }
}
export declare const loggedIn: RequestHandler;
export {};
