import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Header from '../../Header/Header'

import './SearchPage.css'

export const SearchPage = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/SearchRrepositoryReact/users/"+username+"/repos");
    }

    return (
        <div className="mainDiv">
            <Header username={username}/>

            <div className="searchDiv">
                <form className="searchForm" onSubmit={handleSubmit}>
                    <input type="text" className="searchInput" value={username} placeholder="GitHub Username" onChange={e=>setUsername(e.target.value)} />
                    <button type="button" className="searchButton">
                        <Link to={'/SearchRrepositoryReact/users/'+username+'/repos'}>
                            <FontAwesomeIcon icon={ faMagnifyingGlass } />
                        </Link>
                    </button>
                </form>
            </div>
            <div className='searchImgDiv'>
                <a href='https://boards.greenhouse.io/dcard/jobs/3874615?gh_src=9d4dfc871us' target="blank">
                    <img id='searchImg' src="https://img.onl/KRuzE6" alt='' />
                </a>
            </div>
        </div>
    )
}

export default SearchPage