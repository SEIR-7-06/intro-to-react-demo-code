import React from 'react'
import './App.css';
import Person from './components/Person'
import TodoList from './components/TodoList'

class App extends React.Component {
    render() {
        let myFunMsg = "Nice!"
        let motivationalMessages = ["You're doing great!", "Very hardworking!", "Looking kinda cute today"]
        return (
            <div>
                <Person />
                <p>{ myFunMsg }</p>
                <div>{ motivationalMessages }</div>
                <TodoList />
            </div>
        )
    }
}

export default App;

// function App() {
//     let myFunMsg = "oh cool!"
//     let motivationalMessages = ["You're doing great!", "Very hardworking!", "Looking kinda cute today"]

//     // 💪 Exercise: 
//     // Create a Todo.jsx component
//     // Refactor App.js to put the Todo code inside the
//     // Todo component
//     // Then import the Todo component into App, 
//     // And render it!

//     return (
//         // React "Fragments"
//         <>
//             <Person />
//             <Person />
//             <Person />
//             <p>{ myFunMsg }</p>
//             <p>Woohoo!</p>
//             <div>{ motivationalMessages }</div>

//             <TodoList />
            
//         </>
//     )
// }





