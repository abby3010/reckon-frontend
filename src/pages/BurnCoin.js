import React from 'react'
import { burnCoin } from '../api/api'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function BurnCoin() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => ({ ...state }));
    const [data, setData] = React.useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const quantity = data.quantity;
        burnCoin(user.user.walletAddress, quantity).then((res) => {
            toast.success('Coin Burned Successfully');
            navigate('/user/wallet');
        })
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <div className="vh-100 d-flex justify-content-center">
            <div className="form-access my-auto">
                <form onSubmit={handleSubmit}>
                    <span>Burn ACoin</span>
                    <div className="form-group">
                        <input type="text" className="form-control" name='quantity' placeholder="Enter Quantity" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Withdraw to Eth</button>
                </form>
            </div>
        </div>
    )
}
