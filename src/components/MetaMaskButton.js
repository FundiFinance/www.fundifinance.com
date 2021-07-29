import { useAuth } from "./AuthContext";

export function MetaMaskButton() {
  const { dispatch } = useAuth();
  return (
    <button
      className="m-2 btn btn-dark"
      onClick={() => dispatch({ type: "LOGIN", payload: "metamask" })}
    >
      <img
        title="metamask"
        width="15%"
        src="/img/wallets/metamask-fox.svg"
        alt=""
      />
      Meta Mask
    </button>
  );
}
