"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TacoWalletContext = void 0;
var react_1 = __importStar(require("react"));
var ethereum_1 = require("@web3modal/ethereum");
var wagmi_1 = require("wagmi");
var chains_1 = require("wagmi/chains");
exports.TacoWalletContext = (0, react_1.createContext)({});
var TacoWalletProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(), ethereumClient = _b[0], setEthereumClient = _b[1];
    var chains = [chains_1.arbitrum, chains_1.mainnet, chains_1.polygon];
    var projectId = 'taco-labs';
    var publicClient = (0, wagmi_1.configureChains)(chains, [
        (0, ethereum_1.w3mProvider)({ projectId: projectId }),
    ]).publicClient;
    var wagmiConfig = (0, wagmi_1.createConfig)({
        autoConnect: true,
        connectors: (0, ethereum_1.w3mConnectors)({ projectId: projectId, chains: chains }),
        publicClient: publicClient,
    });
    (0, react_1.useEffect)(function () {
        var newEthereumClient = new ethereum_1.EthereumClient(wagmiConfig, chains);
        setEthereumClient(newEthereumClient);
    }, [wagmiConfig]);
    return (react_1.default.createElement(exports.TacoWalletContext.Provider, { value: {
            ethereumClient: ethereumClient,
            setEthereumClient: setEthereumClient,
        } },
        react_1.default.createElement(wagmi_1.WagmiConfig, { config: wagmiConfig }, children)));
};
exports.default = TacoWalletProvider;
//# sourceMappingURL=TacoWalletProvider.js.map