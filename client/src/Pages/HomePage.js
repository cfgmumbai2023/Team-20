import React from 'react'
import Header from '../Component/Header'
import MainPage from './MainPage';
import '../Css/mainPage.css'

export default function HomePage() {

<<<<<<< HEAD
=======
  const data = {
    title: "The Complete Football Bootcamp From Zero to Hero",
    description: "Learn Football coaching like a Professional. Start from the basics and go all the way to creating your own strategies.",
    image: "https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg",
    instructor: "John Doe",
    rating: 4,
    views: 165,
    price: 500,
    duration: 12.5,
    lessons: [
      {
        title: "Basics of coaching",
        link: "https://www.youtube.com/embed/cGyGsSnZ4x4",
        description: "How do I become a coach? This has been among the most asked questions in the past year. Ask yourself: Why do I want to be a coach?",
        format: "video"
      },
      {
        title: "Building the attack",
        link: "https://www.youtube.com/embed/x_H_Q-tJVS8",
        description: "David Powderly, presents three coaching ideas to help young players build the attack. During this session players will develop their understanding of...",
        format: "pdf"
      },
      {
        title: "Ball mastery and soccer drills",
        link: "https://www.youtube.com/embed/IeMYh7roBjk",
        description: "Ball Mastery drills and Coerver Coaching improves your technique perfektly. Improve your ball controll, dribbling,  fast footwork, technique, first touch, fast feet  and coordination with 30 Football Soccer Ball Mastery & Coerver drills als at home!",
        format: "video"
      }
    ],
    assessment: [
      {
        question: "What is the answer for this?",
        answer: "op1",
        options: ["op1", "op2", "op3", "op4"]
      },
      {
        question: "What is the answer for question 2?",
        answer: "op2",
        options: ["op1", "op2", "op3", "op4"]
      },
      {
        question: "What is the answer for the next?",
        answer: "op3",
        options: ["op1", "op2", "op3", "op4"]
      }
    ]
  }

>>>>>>> 9b409a4adfbe4b26074cbf330fbe159f275cb52b
  return (
    <div>
        <Header />
        <MainPage />
    </div>
  )
}
