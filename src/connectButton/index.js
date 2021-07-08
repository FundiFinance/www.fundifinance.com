import React, { useState } from "react";
function ConnectButton() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <button
        type="button"
        id="wallet-desk"
        class="btn btn-primary ms-auto me-4 my-3 my-lg-0"
        data-bs-toggle="modal"
        data-bs-target="#walletModal"
        onClick={() => setIsModalOpened(!isModalOpened)}
      >
        CONNECT WALLET
      </button>
      <div
        class={`modal fade ${isModalOpened ? "show" : ""}`}
        style={{ display: isModalOpened ? "block" : "none" }}
        tabindex="-1"
        aria-labelledby="walletModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="walletModalLabel">
                Connect Wallet
              </h5>
              <button
                onClick={() => setIsModalOpened(!isModalOpened)}
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="d-flex flex-column">
                  <button class="m-2 btn btn-dark">
                    <img
                      title="metamask"
                      width="15%"
                      src="/img/wallets/metamask-fox.svg"
                      alt=""
                    />
                    Meta Mask
                  </button>
                  <button class="m-2 btn btn-dark">
                    <img
                      title="wallet connect"
                      width="15%"
                      src="/img/wallets/walletconnect-logo.svg"
                      alt=""
                    />
                    Wallet Connect
                  </button>
                  <button class="m-2 btn btn-dark">
                    <img
                      title="binance"
                      width="15%"
                      src="/img/wallets/binance-brandmark-logo.svg"
                      alt=""
                    />
                    Binance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectButton;
