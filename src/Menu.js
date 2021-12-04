import React from "react";

const Menu = ( { memuItems } ) => {
    
    return (
        <div className="">
            
            {memuItems.map((item) => {
                const {title, id, descripton, price, image, amount, tag} = item
                    return(
                        <div className="product-item col col-quarter" key={id}>
                            <div className="sub-col">
                                <img className ="product-img" src={image} alt={title}/>
                                <div>
                                    <h4 className="product-title detailproduct">{title}</h4>
                                </div>
                                <div className="product-description detailproduct">
                                    <p className="sub-product-description">{descripton}</p>
                                </div>
                                <div className="product-tag detailproduct">
                                    <span className="sub-product-tag">{tag}</span>
                                </div>
                                <div className="product-price detailproduct">
                                    <span className="sub-product-price">{price}</span>
                                </div>
                                <div className="product-star detailproduct">
                                    <img className ="sub-product-star" src="./image/star.png" alt="" />
                                    <img className ="sub-product-star" src="./image/star.png" alt="" />
                                    <img className ="sub-product-star" src="./image/star.png" alt="" />
                                    <img className ="sub-product-star" src="./image/star.png" alt="" />
                                    <img className ="sub-product-star" src="./image/star.png" alt="" />
                                </div>
                                <div className="product-amount detailproduct">
                                    <p className="sub-product-amount">Đã bán {amount} áo</p>
                                </div>
                                <div className="product-btn">
                                    <button className="sub-product-btn" type="button">Đặt Hàng</button>
                                </div>
                            </div>
                        </div> 
                )
                })}
            <div className="clear"></div>
        </div>
    )
}
export default Menu;