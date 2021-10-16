import React from 'react'


//without jsx
// const Hello = () => {
// return(
 //   <div className= 'PranavClass'>
  //  <h1>hello Pranav</h1>
// </div>
// )
// }


//using jsx
const Hello = () => {

    return React.createElement('div',{id: 'helloPranav',className: 'PranavClass'}, React.createElement('h1',null,'Hello Pranav'))
}

export default Hello