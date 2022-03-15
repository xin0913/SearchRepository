import { BrowserRouter, Routes, Route } from "react-router-dom"

import SearchPage from '../Pages/SearchPage/SearchPage'
import ReposList from '../Pages/ReposList/ReposList'
import ReposDetail from '../Pages/ReposDetail/ReposDetail'

export const Router = () => {
  // 使用 : 去讓 element 呼叫的程式可以使用 useParams() 去獲取 username 以及 repo？
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/SearchRrepositoryReact" element={<SearchPage />} />
      <Route path="/SearchRrepositoryReact/users/:username/repos" element={<ReposList />} />
      <Route path="/SearchRrepositoryReact/users/:username/repos/:repo" element={<ReposDetail />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router
