import React, {useEffect} from 'react';

const App : React.FC = () => {
    const url = "/api/controllers";

    let charge = () =>  {
        fetch(url, {method: "GET", mode:"no-cors"})
        .then(res => console.log("RES",res.json()))
        .catch(err => console.log(err))
    }
    return (
        <div className="app-container">
            <h1>Hello, world!</h1>
            <button onClick={charge}>LETS</button>
        </div>
    )
}

export default App;