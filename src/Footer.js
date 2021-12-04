import React from 'react'

const fooTer = ( { fooTer }) => {
    return (
        <div className="Footer">
            <div className="description-Footer col-half ">
                <h2 className="">{fooTer[0].name}</h2>
                <p className="">{fooTer[0].address}</p>
                <p className="">{fooTer[0].phone}</p>
                <p className="">{fooTer[0].mail}</p>

            </div>
            <div className="map-Footer  col-half">
                <h2>BẢN ĐỒ CHỈ DẪN</h2>
                <iframe src={fooTer[1].link} height="400" width="600"></iframe>
            </div>
            <div className="clear"></div>
        </div>
    )
}
export default fooTer