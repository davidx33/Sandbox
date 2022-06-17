import React from 'react'

function Api2() {
    const [apiData, setapiData] = React.useState({});
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setapiData(data))
        .catch(err => {
            throw Error("do not do this")
        })
    }, []);
  return (
    <div>
        <h1>
        We are about to display some Data
        </h1>
        <pre>
            {JSON.stringify(apiData, null, 2)}
        </pre>
    </div>
  )
}

export default Api2