// 💪 Exercise: Refactor TodoList.jsx and App.js into
// Class-based components
import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <>
                <h2>Here's my todo list</h2>
                <ul>
                    <li>Walk the dog</li>
                    <li>Cook food</li>
                    <li>Feed the dog</li>
                    <li>Kick butt</li>
                    <li>Chew bubble gum</li>
                    <li>Learn React!</li>
                </ul>
            </>
        )
    }
}

export default TodoList


// function TodoList() {
//     return (
//         // React Fragment
//         <>
//             <h2>Here's my todo list</h2>
//             <ul>
//                 <li>Walk the dog</li>
//                 <li>Cook food</li>
//                 <li>Feed the dog</li>
//                 <li>Kick butt</li>
//                 <li>Chew bubble gum</li>
//                 <li>Learn React!</li>
//             </ul>
//         </>
//     )
// }
