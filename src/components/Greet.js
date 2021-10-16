import React from 'react'

// function Greet(){
//     return <h1>hello Pranav</h1>
// }

//export const Greet = () => <h1>hello Pranav</h1>
//if using export here need the import in app.js in curly braces
const Greet = ({name,heroName}) => {

    return (
        <div>
            <h1>hello {name} aka {heroName}</h1>
           
        </div>
    )
}
export default Greet
