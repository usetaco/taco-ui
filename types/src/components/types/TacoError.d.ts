export declare class TacoError {
    errorCode: number;
    errorTitle: string;
    errorMessage: string;
    constructor(errorCode: number, errorTitle: string, errorMessage: string);
    static createError({ errorCode, errorTitle, errorMessage, }: {
        errorCode?: number;
        errorTitle?: string;
        errorMessage?: string;
    }): TacoError;
}
