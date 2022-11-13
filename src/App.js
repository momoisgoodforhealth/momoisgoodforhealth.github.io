import React, { useState } from 'react'
import './styling.css'
import image from './images/momocha2.jpg';

const Course = (props) => {

    const cor = props.courses
    const parts = cor.parts
 //   var totalExercises = parts.reduce(function (sum, part) {
   //     return sum + part.exercises
   // },0)

    

    const Heading = () => <div><h1>{cor.name}</h1></div>
    const Content = () => {
        return (
            cor.map(course =>
             //   for (var i = 0; i < parts.length; i++) {}
                <div>
                    <ul>
                        <li>{course.name}</li>
                        <li>{course.parts.map(part =>
                            <p>{part.name} {part.exercises}</p>
                            )}</li>
                    </ul>
                    <p>Sum = {course.parts.reduce(function (sum, part) {
                        return sum + part.exercises
                    }, 0)}</p>
                </div>)
         
                   )
          
    /*      
     *         cor.map(part =>
                       <div>
                           <ul>
                               <li>{part.name} {part.exercises}</li>
                               <li></li>
                           </ul>
                       </div>
                       parts.map(part =>
                <div>
                    <ul>
                        <li>{part.name}</li>
                        </ul> 
                    </div>)  */
        
       
    }
      /*  return (parts.map(part =>
            <div>
                <ul><li>{part.name} {part.exercises}</li></ul>
                
            </div>))
    }
    */

   // const Total = () => <div><p1>{totalExercises} </p1></div>
    return(
        <div>
            <Heading />
            <Content />
     
        </div>
    )

}



const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div class="container">
            <h2>Under Construction</h2>
        </div>
        
        )
}

export default App