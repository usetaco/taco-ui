/// <reference types="react" />
declare const useTacoApiClient: () => {
    tacoApiClient: import("../../types/TacoApiClient").TacoApiClient | undefined;
    setTacoApiClient: import("react").Dispatch<import("react").SetStateAction<import("../../types/TacoApiClient").TacoApiClient | undefined>>;
};
export default useTacoApiClient;
