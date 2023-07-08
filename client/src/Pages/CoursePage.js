export default function CoursePage(props) {
    return(
        <>
            <div className="banner">
                <div className="banner-text">
                    <div className="big">{props.title}</div>
                    <div className="small">{props.image}</div>
                </div>
                <div className="banner-img">
                    <img src={props.image} alt="" />
                    <div className="medium">Price: {props.price}</div>
                    <div className="btn">Buy</div>
                </div>
            </div>

            <div className="list">
                {props.lessons.array.forEach(element => {
                    <div className="list-item">
                        <div className="small">{element.title}</div>
                    </div>
                })}
            </div>
        </>
    )
}