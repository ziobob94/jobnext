import React, {useEffect, useState} from 'react';
import axios from "axios";

const App : React.FC = () => {

    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        getJobs()
            .then((res) => setJobs(res))
    },[])


    return (
        <div className="app-container">
            <h1>Hello, world!</h1>
            <ul>
                {jobs.map((el:any,index) => <li key={index}>{el.location}</li>)}
            </ul>

        </div>
    )
}

async  function getJobs ()
{
    const url = "/api/controllers";
    return await axios(url)
        .then((res) => {
            return res.data;
        })
        .catch()
}


export default App;