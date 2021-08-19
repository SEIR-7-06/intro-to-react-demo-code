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
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1 className="person-header">Hi my name is { this.props.name }!</h1>
                <p>My Zodiac Sign is: { this.props.zodiac }</p>
                <p>My age is: { this.props.age }</p>
            </div>
        )
    }
}

export default Person