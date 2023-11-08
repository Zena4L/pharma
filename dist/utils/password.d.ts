export declare class Password {
    static toHarsh(password: string): Promise<string>;
    static compare(storedPassword: string, supplyPassword: string): Promise<boolean>;
}
