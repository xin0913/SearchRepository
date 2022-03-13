import { useState } from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Header from '../../Header/Header'

import './SearchPage.css'

export const SearchPage = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = () => {
        // window.location.href='/search_repository_react/users/'+username+'/repos'
        alert('請勿使用Enter搜尋，請改用滑鼠按下搜尋鍵。')
    }

    return (
        <div className="mainDiv">
            <Header username={username}/>
            <div className="searchDiv">
                <form className="searchForm" onSubmit={handleSubmit}>
                    <input type="text" className="searchInput" value={username} placeholder="GitHub Username" onChange={e=>setUsername(e.target.value)} />
                    <button type="button" className="searchButton" >
                        <Link to={'/search_repository_react/users/'+username+'/repos'}>
                            <FontAwesomeIcon icon={ faMagnifyingGlass } />
                        </Link>
                    </button>
                </form>
            </div>
            <div className='searchImgDiv'><a href='https://boards.greenhouse.io/dcard/jobs/3874615?gh_src=9d4dfc871us'><img id='searchImg' src="https://img.onl/KRuzE6" /></a></div>
        </div>
    )
}

export default SearchPage