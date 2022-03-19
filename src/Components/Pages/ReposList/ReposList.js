import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faStar } from '@fortawesome/free-solid-svg-icons'

import Header from '../../Header/Header'

import './ReposList.css'

export const ReposList = () => {

    const [repos, setRepos] = useState([])  // 用於儲存當前全部的 Repository。
    const [page, setPage] = useState(1)     // 為了讓 API 能夠換頁設置的變數
    // const [error, setError] = useState('')
    const params = useParams()

    useEffect(() => {
        searchRepos()   // 讓專案在一開始就先打一次 API 獲取前 10 筆資料，也就是 10 個 Repository。
    },[])

    //----------------------------------------------------------------
    // 10 筆 Repository 的 API 請求。
    const searchRepos = async() => {
        if(params.username != null){
            axios({
                method: 'GET', url: `https://api.github.com/users/${params.username}/repos?per_page=10&page=${page}`,
            }).then(res => {
                if(res.data.length === 0 && page === 1){
                    alert('此用戶沒有任何 Repository。')
                }
                setPage(page+1) // 每獲取完一次 API 就將下次要獲取的頁數 +1 ，好讓下次執行 API 不會重複獲取一樣的資料。
                setRepos(repos.concat(res.data)) // 將api的回傳值 (用戶的 repository list)，設定給 repos。 這邊使用 concat() ，將舊的陣列與新的陣列合併。
            }).catch((error) => {
                alert(error.response.status+'：查無此用戶，請返回搜尋頁面並輸入正確用戶帳號。')
            })
        }
        else{
            alert('使用者名稱為空，請輸入用戶使用者名稱在進行查詢。')
        }
    }

    //----------------------------------------------------------------
    // 列出User的repository
    const renderRepo = (repo) => {
        return (
            /* React 會希望開發者在使用 map 函式渲染時加一個 key 上去，因為 key 必須是獨一無二的，所以這邊使用repos回傳的id (加上 key 的目的是為了效能優化)。
            舉例：假設今天有一個array:[a,b,c] index:[1,2,3]，若是今天陣列內的 b 被刪除或是等等原因造成陣列變動 => array:[a,c] index:[1,2]，由此可見，不能使用 index 作為 key。*/
            // 將從repos接收來的值，也就是當前獲取的 Repository 顯示出來，並且取用。
            <div className="reposList" key={repo.id}>
                <Link to = {'/SearchRrepositoryReact/users/'+params.username+'/repos/'+repo.name}>
                    <div className="row">
                        <h2 className='repo-name'><FontAwesomeIcon icon={ faBook } /> {repo.name}</h2>
                        <div><FontAwesomeIcon icon={ faStar } /> {repo.stargazers_count}</div>
                    </div>
                </Link>
            </div>
        )
    }

    //----------------------------------------------------------------
    //監聽滾動條
    useEffect(() => {
        window.addEventListener('scroll',isTouchBottom)
        return () => { window.removeEventListener('scroll',isTouchBottom) } //防止重複監聽，移除監聽。
    },[repos])  //當repos有更新時，執行監聽並判斷滾動條是否已滑至底部。

    const isTouchBottom = () => {
        // 參考資料：https://www.shouxicto.com/article/1589.html , https://juejin.cn/post/6955448936324661256
        const showHeight = window.innerHeight || document.documentElement.clientHeight;  // 當前瀏覽器頁面高度
        const scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop ; // 網頁滾動條頂部離網頁頂部的距離 
        const allHeight = document.body.scrollHeight || document.documentElement.scrollHeight;   // 所有内容高度
        // (所有内容高度 = 當前瀏覽器頁面高度 + 網頁滾動條頂部離網頁頂部的距離) 時就是觸底了，也就是在觸底時去打下 10 筆資料的 API。
        if (allHeight <= showHeight + scrollTopHeight) {
            // console.log("觸底了")
            searchRepos()
        }
    };

    //----------------------------------------------------------------

    return (
        <div className="mainDiv">
            <Header username={params.username}/>
            <div className="mainReposListDiv">
                <div className="reposListDiv">
                    {repos.map(renderRepo)} {/* 使用map將遍歷array(repos)當中每個元素，將元素傳入指定的函數(renderRepo)後，接收回傳值。 */}
                    <Link to={'/SearchRrepositoryReact'}>
                        <h1 className='returnToSearchPage'>Return to search page</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ReposList