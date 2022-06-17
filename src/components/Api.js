import React from 'react'
import { useState } from 'react'

function Api() {
    const [starData, setStarData] = useState({});
    const [count, setCount] = useState();
    // https://swapi.dev/api/people/1"

    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarData(data))
        .catch(err => {
            console.log("failed to fetch data")
        })
    }, []);

    // React.useEffect(function() {
    //     throw Error("this not valid, sorry :(")
    // }, [count])



  return (
    <div>

        <pre>
            {JSON.stringify(starData, null, 3)}
        </pre>
        <pre>
            {JSON.stringify(starData, null, 3)}
        </pre>

    </div>
  )
}

export default Api