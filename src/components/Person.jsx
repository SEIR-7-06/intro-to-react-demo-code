// 💪 Write a "Person" component
// It renders a <h1>Hi my name is henry</h1>

// Example of a "functional" component
// function Person() {
//     return (
//         <div>
//             <h1>My name is asdf</h1>
//         </div>
//     )
// }

// export default Person

// Example of a "class-based" component
import React from 'react'
import './Person.css'

class Person extends React.Component {
    render() {
        return (
            <div>
                <h1 className="person-header">Hi my name is Henry!</h1>
            </div>
        )
    }
}

export default Person