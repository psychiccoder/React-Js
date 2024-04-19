import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setdata] = useState("")
    // useEffect(() => {
    //     fetch('https://api.github.com/users/psychiccoder')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setdata(data)
    //         })
    // }, [])



    return (
        <div className='text-centre m-4 bg-white text-orange-700 p-4 text-3xl'>
            {/* Github Followers : {data.followers}
            <br />
            Repository : {data.repos_url}
            */}

            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                    Github Followers : {data.followers}
                </li>
                <li>
                    Github Following : {data.following}
                </li>
                <li>
                    Public Repos : {data.public_repos}
                </li>
                <li>
                    <img src={data.avatar_url} alt="Git picture" width={300} srcset="" />
                </li>
            </ul>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/psychiccoder')
    return response.json()
}

// export const githubInfoLoader = () => {
//     return fetch('https://api.github.com/users/psychiccoder')
//         .then(response => response.json())


// };
