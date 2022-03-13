import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faStar, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Header from '../../Header/Header'

import './ReposDetail.css'

export const ReposDetail = () => {

  const [details, setDetails] = useState({})
  const params = useParams()

  useEffect(() => {
    getDetails()  // 讓該程式被呼叫時，同時打一次 API 請求。
  },[])

  //----------------------------------------------------------------
  // ReposDetail 的 API 請求
  const getDetails = () => {
    // setDetailsLoading(true);
    axios({
        method: 'GET',url: `https://api.github.com/repos/${params.username}/${params.repo}`,
    }).then(res =>{
        setDetails(res.data)      // 將api的回傳值(用戶的repository details)，設定給details。
    });
  }

  //----------------------------------------------------------------
  return (
    <div className="mainDiv">
      <Header username={params.username}/>
      <div className="detailDiv">
        <div className="detailInfo">
          <h5 className="detailFullName"><FontAwesomeIcon icon={ faBook } /> Repository Full Name：{details.full_name}</h5>
          <h5 className="detailDescription"><FontAwesomeIcon icon={ faFileLines } /> Repository Description：{details.description}</h5>
          <h5 className="detailStarCount"><FontAwesomeIcon icon={ faStar } /> Repository Star：{details.stargazers_count}</h5>
          <div>
            <button className="detailButton"><a href = {'https://github.com/'+params.username+'/'+params.repo}><FontAwesomeIcon icon={ faGithub } /> GitHub</a></button>
            <button className="detailButton"><Link to={'/search_repository_react'}>Search Page</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReposDetail