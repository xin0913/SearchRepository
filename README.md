# 開啟專案步驟
## Step.1
### 將當前路徑使用 cd 指令至該專案資料夾。
<br>

## Step.2
### `npm install`
從 package.json install 該專案需要用到的套件。
### `npm start`
使用該指令開始運行該專案。
<br><br>

# 專案架構
該專案進入點為 index.js ，進入點會直接與 Router.js 連接，並且在 Router.js 內使用 react-router-dom 這個套件實現網頁與網頁間的切換。
<br><br>
執行 npm start 指令會直接因為 package.json 內的 homepage 參數，將預設頁面設置為 SearchPage。
<br><br>
而 SearchPage 內的搜尋按鈕，會將使用者輸入的 username 使用 Link 標籤將 username 與切換至 ReposList 的網址(/search_repository_react/users/:username/repos)串接。
<br><br>
並且在 ReposList 使用 useParams 這個 Hook 取得使用者在 SearchPage 輸入的 username 去串接 GitHub API。<br>
當網頁切換至 ReposList 時，會使用 useEffect 先去取得一次 API 的回傳值，在此時若是回傳值為 error 則會提醒使用者重新輸入 username，反之則去取得第一次的 API 回傳值，並將回傳值加入 repos 這個變數中，當 repos 改變時會有另一個 useEffect 去判斷網頁是否至底，若網頁至底的話，則再去取得一次 API 回傳值，重複上述順序直至沒有任何新的 Repository 可以加載，而顯示 Repository 的方式則是使用 map 去遍歷 repos 進而達到顯示的目的。
<br><br>
若是在 ReposList 按下任何一個 Repository 則會使用 useParams 這個 Hook 取得使用者是按下哪個 Repository 並將按下的 Repository name 與在 SearchPage 輸入的 username 去串接 GitHub API。<br>
跟 ReposList 一樣，當網頁切換至 ReposDetail 時會取得一次 API 的回傳值，並顯示在頁面上，同時將剛剛的 username 以及 Repository name 與網址串接並且在按鈕上設定一個可以連接到 Repository 的超連結。

![alt 属性文本](./src/assets/homework.png)

# 本專案使用套件
* SearchPage
  - useState (react)
  - Link (react-router-dom)
  - FontAwesomeIcon (@fortawesome/react-fontawesome)
  - faMagnifyingGlass (@fortawesome/free-solid-svg-icons)

* ReposList
  - useState, useEffect (react)
  - useParams, Link (react-router-dom)
  - axios (axios)
  - FontAwesomeIcon (@fortawesome/react-fontawesome)
  - faBook, faStar (@fortawesome/free-solid-svg-icons)
  
* ReposDetail
  - useState, useEffect (react)
  - useParams, Link (react-router-dom)
  - axios (axios)
  - FontAwesomeIcon (@fortawesome/react-fontawesome)
  - faBook, faStar (@fortawesome/free-solid-svg-icons)

* Router
  - BrowserRouter, Routes, Route (react-router-dom)

