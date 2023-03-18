import React from 'react'

export default function NFTCard({nft}) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="markets-capital-item">
                <h2>
                    <img src={nft.image}
                        style={{
                            width: '150px',
                            height: '100px',
                        }}
                        alt="LTC" />
                </h2>
                <span className='text-white'>{nft.name}</span>
                <div className="markets-capital-details">
                    <h4>{nft.price}</h4>
                    <h3 className="red">{nft.shares}<i className="icon ion-md-arrow-down"></i></h3>
                </div>
            </div>
        </div>
    )
}
