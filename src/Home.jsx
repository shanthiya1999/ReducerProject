import React from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
function Home() {
    const [data] = useSearchParams()
    console.log(data)
    return (
        <div>
            <h2>Home</h2>
            {data.get("category")}
            {data.get("color")}

            <Link to="/greet">Greet</Link>
        </div>
    )
}

export default Home