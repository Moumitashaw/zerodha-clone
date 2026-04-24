import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-3" style={{ fontSize: "2.5rem", color: "#424242" }}>The Zerodha Universe</h1>
        <p className="mb-5" style={{ fontSize: "1.2rem", color: "#666" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row">
          {/* First Row */}
          <div className="col-md-4 p-4">
            <img src="/media/images/fund-house.svg" alt="Zerodha Fund House" className="mb-4" style={{ height: "40px" }} />
            <p className="text-muted">
              Our asset management venture that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-md-4 p-4">
            <img src="/media/images/sensibull.svg" alt="Sensibull" className="mb-4" style={{ height: "40px" }} />
            <p className="text-muted">
              Options trading platform that lets you create strategies, analyze positions,
              and examine data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-md-4 p-4">
            <img src="/media/images/tijori.svg" alt="Tijori" className="mb-4" style={{ height: "40px" }} />
            <p className="text-muted">
              Investment research platform that offers detailed insights on stocks,
              sectors, supply chains, and more.
            </p>
          </div>

          {/* Second Row */}
          <div className="col-md-4 p-4">
            <img src="/media/images/streak.svg" alt="Streak" className="mb-4" style={{ height: "40px" }} />
            <p className="text-muted">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-md-4 p-4">
            <img src="/media/images/smallcase.svg" alt="Smallcase" className="mb-4" style={{ height: "40px" }} />
            <p className="text-muted">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-md-4 p-4">
            <img src="/media/images/ditto.svg" alt="Ditto" className="mb-4" style={{ height: "40px" }} />
            <p className="text-muted">
              Personalized advice on life and health insurance. No spam
              and no mis-selling.
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary mt-4 mb-5 px-4 py-2"
          style={{ 
            fontSize: "1.1rem", 
            borderRadius: "4px",
            backgroundColor: "#387ed1",
            border: "none",
            width: "auto",
            minWidth: "200px"
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
