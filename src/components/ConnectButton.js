export function ConnectButton({setIsModalOpened, isModalOpened}) {
  return (
      <button
        type="button"
        id="wallet-desk"
        className="btn btn-primary ms-auto me-4 my-3 my-lg-0"
        data-bs-toggle="modal"
        data-bs-target="#walletModal"
        onClick={() => setIsModalOpened(!isModalOpened)}
      >
        CONNECT WALLET
      </button>
  );
}