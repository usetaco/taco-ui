/// <reference types="react" />
declare const useTacoContext: () => {
    tacoTheme: import("../../types/TacoTheme").TacoTheme | undefined;
    setTacoTheme: import("react").Dispatch<import("react").SetStateAction<import("../../types/TacoTheme").TacoTheme | undefined>>;
};
export default useTacoContext;
