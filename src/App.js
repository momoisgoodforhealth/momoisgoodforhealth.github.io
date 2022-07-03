import React, { useState } from 'react'

const Course = (props) => {
    const cor = props.course
    const parts = cor.parts
    var totalExercises = parts.reduce(function (sum, part) {
        return sum + part.exercises
    },0)

    const Heading = () => <div><h1>{cor.name}</h1></div>
    const Content = () => {
        return (parts.map(part =>
            <div>
                <ul><li>{part.name} {part.exercises}</li></ul>
                
            </div>))
    }
    const Total = () => <div><p1>{totalExercises} </p1></div>
    return(
        <div>
            <Heading />
            <Content />
            <Total />
        </div>
    )

}



const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
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
            }
        ]
    }

    return <Course course={course} />
}

export default App