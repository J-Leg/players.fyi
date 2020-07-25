import Styles from './header.module.scss'

export const siteTitle = 'Tracula'

function Header() {
  return (
    <div className={Styles.Header}>
      <img src="/images/tracula-chrome.png" />
      {siteTitle} 
    </div>
  )
}

export default Header;
