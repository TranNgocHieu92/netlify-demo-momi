const Feedback = ({ feedBackBase }) => {
    return (
       
        <div className="feedback-box">
            <h1 className="feedback-title">PHẢN HỒI CỦA KHÁCH HÀNG</h1>

            {feedBackBase.map( (item) => {
                const {id, name, description} = item
                if(id > feedBackBase.length - 4) {
                    return (
                        <div className="col col-quarter" key={id}>
                            <img src = "" />
                            <div className="feedback-box-name">
                                <h2 className="sub-feedback-box-name">{name}</h2>
                            </div>
                            <div className="feedback-box-description">
                                <p className="sub-feedback-box-description">{description.slice(0,100)}...</p>
                            </div>
                        </div>
                    )
                }
            })
            }
            
            <div className="clear"></div>
        </div>
    )
}

export default Feedback