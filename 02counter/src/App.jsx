import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [counter, setCounter] = useState(0); // change ko propagate krega

    // let counter = 15;

    const addValue = () => {
        // console.log("clicked", counter)
        // if(counter<30){
        // counter = counter + 1;
        // }
        // setCounter(counter)

        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
    }

    const decreaseValue = () => {
        // if(counter>0){
        // counter = counter - 1;
        // }
        // setCounter(counter)
        setCounter(counter - 1)


    }
    return ( <
        >
        <
        h1 > Chai or React < /h1> <
        h2 > Counter Value: { counter } < /h2> <
        button onClick = { addValue } >
        Increase Value < /button> <
        br / >
        <
        button onClick = { decreaseValue } >
        Decrease Value < /button> <
        />
    )
}

export default App