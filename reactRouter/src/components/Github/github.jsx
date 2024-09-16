import { useEffect } from 'react'
import {React,useState} from 'react'

function Github(){
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/TilokDutta')
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
    },[])
    return(
        <div className='bg-gray-600 text-white text-center text-3xl p-4'>Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Github Profile" width={300}/>
        </div>
    )
}

export default  Github
