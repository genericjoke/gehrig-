import React from 'react';
import IndiThought from './IndiThought.js'
function Thoughts({opinions}) {

    function handleOpinions(answers) {
        const fullOpinions = answers.map((answer) => {
            return <IndiThought 
            name={answer.name} 
            opinion={answer.opinion} 
            key={answer.name}/>
        })
        return fullOpinions
    }


    return (
        <div className = "page-container">
            {handleOpinions(opinions)}
        </div>
    )
}

export default Thoughts;