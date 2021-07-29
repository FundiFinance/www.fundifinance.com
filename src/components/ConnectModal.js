import { BinanceButton } from "./BinanceButton";
import { MetaMaskButton } from "./MetaMaskButton";
import { WalletConnectButton } from "./WalletConnectButton";

export function ConnectModal({ isModalOpened, setIsModalOpened }) {
  return (
    <div
      className={`modal fade ${isModalOpened ? "show" : ""}`}
      style={{ display: isModalOpened ? "block" : "none" }}
      aria-labelledby="walletModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="walletModalLabel">
              Connect Wallet
            </h5>
            <button
              onClick={() => setIsModalOpened(!isModalOpened)}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="d-flex flex-column">
                <MetaMaskButton />
                <WalletConnectButton />
                <BinanceButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
