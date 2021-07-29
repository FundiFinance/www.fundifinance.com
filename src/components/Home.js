
export function Home() {
  return (
    <>
      <header className="masthead">
        <div className="container h-100">
          <div className="row flex-row-reverse gx-4 h-100 justify-content-center align-items-center">
            <div className="col-md-7 col-sm-12">
              {/* <lottie-player src="js/lottie/hologram.json" background="transparent" speed="1" loop autoplay>
                    </lottie-player> */}
            </div>
            <div className="col-md-5 col-sm-12">
              <h1 className="text-white font-weight-bold">
                DECENTRALIZED FINANCE PROTOCOL
              </h1>
              <p className="text-white">
                A governing board that shares governance with its investor
                community
              </p>
              <a className="btn btn-outline-primary btn-lg" href="#about">
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="page-section" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center" id="logo-desk">
              <img
                className="next-particle"
                data-width="420"
                data-max-width="600"
                data-max-height="600"
                data-particle-gap="2"
                data-mouse-force="10"
                data-layer-count="4"
                data-depth="4"
                data-add-timestamp="true"
                src='/img/fundi-finance-white.png'
                alt=" "
              />
            </div>
            <div className="col-lg-8text-center d-block d-sm-none">
              <img
                className="next-particle"
                data-width="280"
                data-max-width="300"
                data-particle-gap="1"
                data-mouse-force="10"
                data-layer-count="3"
                data-depth="4"
                data-add-timestamp="true"
                src="/img/fundi-finance-white.png"
                alt=""
              />
            </div>
            <div className="col-lg-8 text-center">
              <h2 className="text-primary my-4 mt-0">What is Fundi Finance?</h2>
              <h4 className="text-white mb-4 my-4">
                Fundi Finance is a digital protocol exploring the boundaries of
                utility use cases for digital assets, whilst providing liquidity
                pools for investors through decentralised finance.
              </h4>
              <div className="col-sm-2 mx-auto" width="56px">
                <a href="#services">
                  {/* <lottie-player src="js/lottie/scroll-down.json" style="width: 3rem;" background="
                                transparent" speed="1" loop autoplay>
                            </lottie-player> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section text-white" id="services">
        <div className="container py-5 px-4 px-lg-5 text-center">
          <div className="row align-items-center justify-content-center">
            <h2 className="text-primary mt-0">FUNDI FINANCES KEY POINTS</h2>
            <h4 className="col-sm-8 text-white-75 mb-4">
              Open-source crowd funding into exciting new areas for digital
              asset utility, such as Real Estate, Renewable energy, Natural
              Resources, Farming, and agriculture.​
            </h4>
          </div>
          <div className="row d-flex py-4 d-flex justify-content-center">
            <div className="col-md-4">
              <ul className="list-display list-checkmarks">
                <li>AMM Yield Farming</li>
                <li>Total Transparency</li>
                <li>Community Governance</li>
                <li>Open Voting</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-display list-checkmarks">
                <li>Open Treasury</li>
                <li>Liquidity Pools</li>
                <li>Lending And Borrowing</li>
                <li>An Exchange For Digital Assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="gobernance">
        <div className="container px-4 px-lg-5 justify-content-center">
          <h2 className="text-center text-primary mt-0">GOVERNANCE</h2>
          <hr className="divider" />
          <div className="col-md-8 mx-auto justify-content-center">
            {/* <lottie-player src="js/lottie/gobernance.json" background="transparent" speed="1" loop autoplay>
                </lottie-player> */}
          </div>
        </div>
      </section>
      <section className="page-section" id="wallets">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-3">
              <a
                target="_blank"
                href="https://testnet.bscscan.com/tx/0x1a0ccfd030c49ca6aa4cdda121dcc18831fac923ccafd97aa7b6e5b79563b117"
              >
                <img
                  className="p-4"
                  width="220px"
                  src="/img/wallets/metamask-fox-wordmark-horizontal.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3">
              <a target="_blank" href="https://www.binance.com/es/download">
                <img
                  className="p-4"
                  src="/img/wallets/binance-logo-hor.svg"
                  width="220px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3">
              <a target="_blank" href="https://walletconnect.org/">
                <img
                  className="p-4"
                  src="/img//wallets/wallet-connect-hor.svg"
                  width="220px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark py-5">
        <div className="container-fluid px-4 px-lg-5">
          <div className="small text-center text-muted my-4">
            <a className="btn btn-link" href="mailto:founder@fundifinance.com">
              founder@fundifinance.com
            </a>
          </div>
          <div className="social-icons text-center my-4">
            <a
              className="social-icon"
              target="_blank"
              href="https://twitter.com/FundiFinance"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon"
              target="_blank"
              href="https://fundifinance.medium.com/"
            >
              <i className="fab fa-medium"></i>
            </a>
            <a
              className="social-icon"
              target="_blank"
              href="https://discord.gg/hxYr4SJA"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              className="social-icon"
              target="_blank"
              href="https://t.me/FundiFinance"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              className="social-icon"
              target="_blank"
              href="https://github.com/FundiFinance"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="small text-center text-muted">
            Copyright &copy; 2021 - Fundi Finance
          </div>
        </div>
      </footer>
    </>
  );
}