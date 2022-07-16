 /* import React, { useState } from 'react'


/* const Statistics = (props) => {

    const Heading = () => <div><h1>give feedback</h1></div>
    const Heading2 = () => <div><h1>statistics</h1></div>

    const Goodval = ({ v }) => {
        return (<div>good {v}</div>)

    }

    const Neutralval = ({ v }) => {
        return (<div>neutral {v}</div>)
    }

    const Badval = ({ v }) => {
        return (<div>bad {v}</div>)
    }

    const Total = ({ total }) => <div>all {total}</div>
    const Avg = ({ ave }) => <div>average {ave}</div>
    const Pos = ({ posi }) => <div>positive {posi}%</div>

    const Button = ({ onClick, text }) => {
        return (
            <button onClick={onClick}>
                {text}
            </button>
        )
    }

    const good1 = () => props.setGood(props.good + 1)
    const neutral1 = () => props.setNeutral(props.neutral + 1)
    const bad1 = () => props.setBad(props.bad + 1)


    var tot = props.good + props.bad + props.neutral
    var avg = (props.good - props.bad) / tot
    var poscent = (props.good / tot) * 100

    if (tot != 0) {
        console.log('total value is' + props)
        console.log('total value is', props)

        return (
            <div>
                <Heading />
                <Button onClick={good1}
                    text='good' />
                <Button onClick={neutral1}
                    text='neutral' />
                <Button onClick={bad1}
                    text='bad' />
                <Heading2 />
                <Goodval v={props.good} />
                <Neutralval v={props.neutral} />
                <Badval v={props.bad} />
                <Total total={tot} />
                <Avg ave={avg} />
                <Pos posi={poscent} />
            </div>
        )

    }
    return (
        <div>
            <Heading />
            <Button onClick={good1}
                text='good' />
            <Button onClick={neutral1}
                text='neutral' />
            <Button onClick={bad1}
                text='bad' />
            <Heading2 />
            <div>No feedback given</div>
        </div>
    )


}


const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [good, setGood] = useState(0)
  /*  const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [anecdote, setAnec] = useState('get bitches')
    const [vote, setVote] = useState(0)
    const [arrayn, setArrayn] = useState(0)
    const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0])
    setArray[0] = 5
    console.log(array)
    //  var ane = 0
    const points = [0, 0, 0, 0, 0, 0, 0]
    const copy = [...points]

    const bitches = () => {
        const rnd = Math.floor(Math.random() * 7)
        console.log('rnd=' + rnd)
        setAnec(anecdotes[rnd])
        setArrayn(rnd)
        //anec = rnd
        console.log('anec=' + arrayn)
    }

    const vot = () => {
        console.log('anec=' + arrayn)
        copy[arrayn] += 1
        setVote(copy[arrayn])
        console.log(copy)
    }





    /* const Total = ({ total }) => <div>all {total}</div>
    const Avg = ({ ave }) => <div>average {ave}</div>
    const Pos = ({posi}) => <div>positive {posi}%</div>

    const good1 = () => setGood(good + 1)
    const neutral1 = () => setNeutral(neutral + 1)
    const bad1 = () => setBad(bad + 1)

    var tot = good + bad + neutral
    var avg = (good - bad) / tot
    var poscent = (good/tot) *100
    */
 /*    return (
        <div>
            <Statistics setGood={setGood} good={good} setBad={setBad} bad={bad} setNeutral={setNeutral} neutral={neutral} />
            <button onClick={bitches}>
                Next Anecdote
            </button>
            <p>{anecdote}</p>
            <button onClick={vot}>
                Number of Votes : {vote}
            </button>
        </div>
    )
}

export default App