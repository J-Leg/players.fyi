import Head from 'next/head'
import Header, {siteTitle} from './header'
import Styles from './layout.module.scss'

function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={Styles.Layout}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="player population data"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className={Styles.Content}>{children}</div>
    </div>
  )
}

export default Layout;
