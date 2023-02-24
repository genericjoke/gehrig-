import {React, useState, useEffect} from 'react';
import IndiThought from './IndiThought.js'
function Thoughts() {
    const [opinions, setOpinions] = useState([])

    function handleOpinions(answers){
        const fullOpinions = answers.forEach(answer => <IndiThought name={answer.name} opinion={answer.opinion} key = {answer.name}></IndiThought>)
        setOpinions(fullOpinions)
    }

    useEffect(() => {
        fetch('http://localhost:3001/opinions')
            .then(r => r.json())
            .then(answers => {
                handleOpinions(answers);
            });
    }, []);


    return (
        <div>
            {opinions}
        </div>
    )
}

export default Thoughts;