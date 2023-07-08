import '../Styles/CoursePage.css';
import React from "react";

export default function CoursePage({props}) {

    function redirect(data){
        fetch("http://localhost:5000/test")
        .then(res => { return res.json()})
        .then(res => {
            console.log(res)
        });
    }

    return(
        <>
            <div className="banner">
                <div className="banner-text">
                    <div className="big">{props.title}</div>
                    <div className="small">{props.description}</div>
                    <div className="medium">Author: {props.instructor}</div>
                </div>
                <div className="banner-img">
                    <img src={props.image} alt="" />
                    <div className="img-footer">
                        <div className="btn">Buy</div>
                        <div className="medium">Price: {props.price}</div>
                    </div>
                </div>
            </div>

            <div className="list">
                <div className="big">Lessons</div>
                {props.lessons.map(element => {
                    return (<div key={element.title} onClick={()=>redirect(element)} className="list-item">
                        <div className="medium">{element.title}</div>
                    </div>)
                })}
            </div>
        </>
    )
}