import * as React from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const network56Url = "https://bsc-dataseed.binance.org";
const AuthContext = React.createContext();

async function loginMetaMask(state) {
  const provider = await detectEthereumProvider();
  if (provider) {
    if (provider !== window.ethereum) {
      window.alert("Do you have multiple wallets installed?");
      return state;
    } else {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0])
      return { ...state, account: accounts[0] };
    }
  } else {
    window.alert("Please install MetaMask!");
    return state;
  }
}

async function login(state, providerName) {
  switch (providerName) {
    case "metamask": {
      return loginMetaMask(state);
    }
    default: {
        throw new Error(`Unhandled provider: ${providerName}`);
      }
  }
}

async function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      return login(state, action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, {
    account: null,
    name: null,
    balances: {},
    blockNumber: 0,
    spaces: {},
    network: {
      name: "mainnet",
      chainId: 56,
      rpc_url: network56Url,
    },
  });
  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
