import '../Styles/CoursePage.css';
import React from "react";

export default function CoursePage({props}) {

    const [lessonData, setLessonData] = React.useState(null);

    function toggleOn(data){
        setLessonData(data);
    }

    function toggleOff(){
        setLessonData(null);
    }

    return(
        <div className="coursepage-container">
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
                    return (<div key={element.title} onClick={()=>toggleOn(element)} className="list-item">
                        <div className="medium">{element.title}</div>
                    </div>)
                })}
            </div>

            {
                lessonData !== null &&

                <div className="overlay">
                    <div className="overlay-container">
                        <div className="xmark" onClick={toggleOff}>X</div>
                        <div className="overlay-title">
                            {lessonData.title}
                        </div>
                        <iframe width="560" height="315" src={lessonData.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className="overlay-description">
                            {lessonData.description}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}