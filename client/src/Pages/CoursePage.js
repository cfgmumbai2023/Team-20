import '../Styles/CoursePage.css';
import React from "react";

export default function CoursePage({props}) {

    const [lessonData, setLessonData] = React.useState(null);
<<<<<<< HEAD
=======
    const [giveAssessment, setGiveAssessment] = React.useState(false);
    const [starCnt, setStarCnt] = React.useState(0);
    const stars = [1, 2, 3, 4, 5];

    var answerArr = [], finalAnswer = -1;
>>>>>>> 9b409a4adfbe4b26074cbf330fbe159f275cb52b

    function toggleOn(data){
        setLessonData(data);
    }

    function toggleOff(){
        setLessonData(null);
    }

<<<<<<< HEAD
    return(
        <div className="coursepage-container">
            <div className="banner">
                <div className="banner-text">
                    <div className="big">{props.title}</div>
                    <div className="small">{props.description}</div>
                    <div className="medium">Author: {props.instructor}</div>
                    <div className="medium">Rating: {props.rating}/5</div>
                    <div className="medium">Views: {props.views}</div>
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
=======
    function getColor(num){
        if(num > starCnt) return "gray";

        return "green";
    }

    function toggleAssessment(){
        setGiveAssessment(prev => !prev);
    }

    function setAnswers(idx, value){
        if(answerArr.length == 0){
            for (let index = 0; index < props.assessment.length; index++) {
                answerArr.push("")
            }
        }

        answerArr[idx] = value;
    }

    function checkScores(){
        var cnt=0;
        for (let index = 0; index < props.assessment.length; index++) {
            const element = props.assessment[index];

            if(answerArr[index] === element.answer) cnt++;
        }

        finalAnswer = (cnt/props.assessment.length * 100).toFixed(2)
    }

    return(
        <div className="coursepage-container">
                <div className="banner">
                    <div className="banner-text">
                        <div className="big">{props.title}</div>
                        <div className="small">{props.description}</div>
                        <div className="medium">Author: {props.instructor}</div>
                        <div className="medium">Rating: {props.rating}/5</div>
                        <div className="medium">Views: {props.views}</div>
                    </div>
                    <div className="banner-img">
                        <img src={props.image} alt="" />
                        <div className="img-footer">
                            <div className="btn">Buy</div>
                            <div className="medium">Price: {props.price}</div>
                        </div>
                    </div>
                </div>

            <div className="grid">

                <div>
                    <div className="list">
                        <div className="big">Lessons</div>
                        {props.lessons.map(element => {
                            return (<div key={element.title} onClick={()=>toggleOn(element)} className="list-item">
                                <div className="medium">{element.title}</div>
                            </div>)
                        })}
                    </div>

                    <div className="feedback">
                        <div className="big">Feedback</div>
                        <div className="stars-container">
                            {stars.map(item => {
                                return (<div key={item} style={{color: getColor(item)}} onClick={()=>{setStarCnt(item)}}>☆</div>)
                            })}
                        </div>
                        <textarea placeholder='Anything you would like to suggest?'></textarea>
                        
                        <div className="btns">
                            <div className="btn">Submit</div>
                            <div className="btn" onClick={toggleAssessment}>Give Assessment</div>
                        </div>
                    </div>
                </div>

                {
                    giveAssessment === true && 
                    <div className="assessment">
                        <div className="big">Assessment</div>
                            <div className="assessment-container">
                                {props.assessment.map((item, idx) => {
                                    return (
                                        <div key={idx} className="question">
                                            <div className="medium">{item.question}</div>
                                            <div className="options">
                                                {item.options.map((op, i) => {
                                                    return (<div key={i} className="medium">{i+1}. {op}</div>)
                                                })}
                                            </div>
                                            <input type="text" onChange={(e)=>setAnswers(idx, e.target.value)}/>
                                        </div>
                                    )
                                })}

                                <div className="btn" onClick={checkScores}>Submit</div>
                            </div>
                    </div>
                }
>>>>>>> 9b409a4adfbe4b26074cbf330fbe159f275cb52b
            </div>

            {
                lessonData !== null &&

                <div className="overlay">
                    <div className="overlay-container">
                        <div className="xmark" onClick={toggleOff}>X</div>
                        <div className="overlay-title">
                            {lessonData.title}
                        </div>
<<<<<<< HEAD
                        <iframe width="560" height="315" src={lessonData.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
=======
                            {   
                                lessonData.format === "video" &&
                                <iframe width="560" height="315" src={lessonData.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            }
                            {
                                lessonData.format !== "video" && 
                                <iframe src={lessonData.link} width="400px" height="500px"  />
                            }
>>>>>>> 9b409a4adfbe4b26074cbf330fbe159f275cb52b
                        <div className="overlay-description">
                            {lessonData.description}
                        </div>
                    </div>
                </div>
            }
<<<<<<< HEAD
=======


>>>>>>> 9b409a4adfbe4b26074cbf330fbe159f275cb52b
        </div>
    )
}