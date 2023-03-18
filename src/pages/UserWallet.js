/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAcoinBalance } from "../api/api";
import "./style.css";

export default function UserWallet() {
  const { user } = useSelector((state) => ({ ...state }));
  const [balance, setBalance] = React.useState(0);
  const [acoinBalance, setAcoinBalance] = React.useState(0);

  React.useEffect(() => {
    getBalance();
    getAcoinBalanceData();
  }, []);

  const getBalance = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accounts.length > 0) {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      setBalance(balance);
    }
    // const web3 = () => {
    //     return new Web3(
    //     new Web3.providers.HttpProvider('https://e159-103-250-36-82.ngrok.io'));
    // }
    // await window.ethereum.enable()
    // const _balance = await (web3()).eth.getBalance('0x47Cc91d299487a5dED85731F7Ed6c0c9cAC86A0b')
    // setBalance(_balance);
  };

  const getAcoinBalanceData = () => {
    getAcoinBalance(user.user.walletAddress).then((res) => {
      console.log(res.data);
      setAcoinBalance(res.data);
    });
  };

  return (
    <div className="settings mtb15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="settings-wallet"
                role="tabpanel"
                aria-labelledby="settings-wallet-tab"
              >
                <div className="wallet">
                  <div className="row">
                    <div className="col-md-12 col-lg-4">
                      <div
                        className="nav flex-column nav-pills"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link d-flex justify-content-between align-items-center active"
                          data-toggle="pill"
                          href="#coinBNB"
                          role="tab"
                          aria-selected="true"
                        >
                          <div className="d-flex">
                            <img src="/assets/img/icon/18.png" alt="btc" />
                            <div>
                              <h2>AC</h2>
                              <p>Acoin</p>
                            </div>
                          </div>
                          <div>
                            <h3>{acoinBalance.acoinBalance}</h3>
                          </div>
                        </a>
                        <a
                          className="nav-link d-flex justify-content-between align-items-center"
                          data-toggle="pill"
                          href="#coinTRX"
                          role="tab"
                          aria-selected="true"
                        >
                          <div className="d-flex">
                            <img src="/assets/img/icon/1.png" alt="btc" />
                            <div>
                              <h2>ETH</h2>
                              <p>Ethereum</p>
                            </div>
                          </div>
                          <div>
                            <h3>
                              {(parseInt(balance) / 1000000000000000000)
                                .toFixed(6)
                                .toString()}
                            </h3>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-8">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="coinBNB"
                          role="tabpanel"
                        >
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Balances</h5>
                              <ul>
                                <li className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <i className="icon ion-md-cash"></i>
                                    <h2>Total Equity</h2>
                                  </div>
                                  <div>
                                    <h3>7.342 BNB</h3>
                                  </div>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <i className="icon ion-md-checkmark"></i>
                                    <h2>Available Margin</h2>
                                  </div>
                                  <div>
                                    <h3>0.332 BNB</h3>
                                  </div>
                                </li>
                              </ul>
                              <Link to="/get-coin" className="btn btn-success">
                                Deposit
                              </Link>{" "}
                              &nbsp;&nbsp;&nbsp;
                              <Link to="/burn-coin" className="btn btn-danger">
                                Withdraw
                              </Link>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">
                                Latest Transactions
                              </h5>
                              <div className="wallet-history">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>No.</th>
                                      <th>Date</th>
                                      <th>Status</th>
                                      <th>Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>25-04-2019</td>
                                      <td>
                                        <i className="icon ion-md-checkmark-circle-outline green"></i>
                                      </td>
                                      <td>4.5454334</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>25-05-2019</td>
                                      <td>
                                        <i className="icon ion-md-checkmark-circle-outline green"></i>
                                      </td>
                                      <td>0.5484468</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>25-06-2019</td>
                                      <td>
                                        <i className="icon ion-md-close-circle-outline red"></i>
                                      </td>
                                      <td>2.5454545</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>25-07-2019</td>
                                      <td>
                                        <i className="icon ion-md-checkmark-circle-outline green"></i>
                                      </td>
                                      <td>1.45894147</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>25-08-2019</td>
                                      <td>
                                        <i className="icon ion-md-close-circle-outline red"></i>
                                      </td>
                                      <td>2.5454545</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
