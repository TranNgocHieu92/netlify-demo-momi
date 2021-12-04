import React from 'react'

const Catergory = ({selectCategory}) => {

    return (
            <div className="btn-container">
                <button className="filter-btn" 
                    type = "button" onClick={() => {
                        selectCategory("all")
                    }}>
                ALL
                </button>
                <button className="filter-btn" 
                    type = "button" onClick={() => {
                        selectCategory("ao-dai-tay")
                    }}>
                Áo Gia Đình Dài Tay
                </button>
                <button className="filter-btn" 
                    type = "button" onClick={() => {
                        selectCategory("ao-coc-tay")
                    }}>
                Áo Gia Đình Cộc Tay
                </button>
                <button className="filter-btn" 
                    type = "button" onClick={() => {
                        selectCategory("ao-cong-ty")
                    }}>
                Đồng Phục Công Ty
                </button>
                <button className="filter-btn" 
                    type = "button" onClick={() => {
                        selectCategory("ao-hoc-sinh")
                    }}>
                Đồng Phục Học Sinh
                </button>

            </div>
            
        )}
export default Catergory;
