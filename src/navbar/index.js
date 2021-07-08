import ConnectButton from "../connectButton";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container-fluid px-lg-5">
        <a class="navbar-brand" href="#page-top">
          <img
            src="/img/FF-logo-xs.png"
            alt=""
            width="80"
            height="auto"
            class="d-inline-block align-text-top"
          />
        </a>
        <ConnectButton />
        <div class="nav-container" id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu" class="nav-toggle text-center">
            <a href="#page-top">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a target="_blank" href="#!">
              <li>Docs</li>
            </a>
            <a target="_blank" href="#!">
              <li>Disclaimer</li>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://bscscan.com/token/0x897611baba794d22d0a10f4c60a136baf298128d"
            >
              <li>Buy FF</li>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://bscscan.com/token/0xd6368dfd288a3d9ac769889c0ddfa7d0e20d5c29"
            >
              <li>Buy CRA</li>
            </a>
            <hr />
            <div class="my-4">
              <div class="small text-center text-muted my-2">
                <a class="btn btn-link" href="mailto:founder@fundifinance.com">
                  founder@fundifinance.com
                </a>
              </div>
              <div class="social-icons text-center my-4">
                <a
                  rel="noreferrer"
                  class="social-icon"
                  target="_blank"
                  href="https://twitter.com/FundiFinance"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  rel="noreferrer"
                  class="social-icon"
                  target="_blank"
                  href="https://fundifinance.medium.com/"
                >
                  <i class="fab fa-medium"></i>
                </a>
                <a
                  rel="noreferrer"
                  class="social-icon"
                  target="_blank"
                  href="https://discord.gg/hxYr4SJA"
                >
                  <i class="fab fa-discord"></i>
                </a>
                <a
                  rel="noreferrer"
                  class="social-icon"
                  target="_blank"
                  href="https://t.me/FundiFinance"
                >
                  <i class="fab fa-telegram"></i>
                </a>
                <a
                  rel="noreferrer"
                  class="social-icon"
                  target="_blank"
                  href="https://github.com/FundiFinance"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
