import './Header.css'

export const Header = ( {username} ) => {
  
  return (
    <header className="headerMain">
        <div className="headerImgDiv"><a href='https://www.dcard.tw/f' target="blank"><img id="HeaderIcon" src="https://www.dcard.tw/_next/static/media/logo.8b5bbef2.svg" width='86' height='32'/></a></div>
        <div className="headerUsernameDiv">Username：{username}</div>
    </header>
  )
}

export default Header
