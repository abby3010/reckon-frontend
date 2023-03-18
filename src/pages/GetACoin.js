import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GetACoin = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  const [coin, setcoin] = React.useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    let data = {
      account: user.user.walletAddress,
      numACoins: coin,
    };
    await axios.post("http://localhost:8000/acoin/buy", data).then((res) => {
      console.log(res);
      if (res.data.error) {
        toast.error(res.data.error);
      }
      if (res.status === 200) {
        setcoin("");
        toast.success("Coin Purchased");
        navigate("/user/wallet");
      }
    });
  };

  return (
    <>
      {console.log(user.user)}
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form onSubmit={handleRegister}>
            <span>Get A Coin</span>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={coin}
                placeholder="No of Coin"
                name="coin"
                onChange={(e) => setcoin(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Buy Coin
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default GetACoin;
