/// <reference types="react" />
declare const useTacoError: () => {
    error: import("../../types/TacoError").TacoError | undefined;
    setError: import("react").Dispatch<import("react").SetStateAction<import("../../types/TacoError").TacoError | undefined>>;
};
export default useTacoError;
