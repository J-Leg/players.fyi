import Styles from './header.module.scss'

export const siteTitle = 'players.fyi'

function Header() {
  return (
    <div className={Styles.Header}>
      {siteTitle} 
    </div>
  )
}

export default Header;
