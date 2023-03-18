import React from 'react'
import NFTCard from '../components/NFTCard'
import { getApprovedNFTS } from '../api/api'


export default function Market() {
    const [nfts, setNfts] = React.useState([]);
    React.useEffect(() => {
        getApprovedNFTS().then((res) => {
            console.log(res.data.nft)
            setNfts(res.data.nft)
        })
    }, [])
    return (
        <div className="markets-capital pt70 pb40">
            <div className="container">
                <div className="row">
                    {nfts && nfts.map((nf, index) =>
                    (
                        <NFTCard key={index} nft={nf} />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}
