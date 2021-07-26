import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export default function Personalization() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Personalization</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Personalization 🕵️‍♀️
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <a href="" ><h2>Boxever (Sitecore CDP)&rarr;</h2></a>
                        With ongoing name change and brand change to Sitecore it's hard to find Boxever materials
                        <h4>Docs</h4>
                        <a href="" className={styles.link}><li>Documentation</li></a>
                        <h4>Discover</h4>
                        <a href="" className={styles.link}><li>Discover Boxever</li></a>
                        <h4>Learn</h4>
                        <a href="" className={styles.link}><li>Getting Started</li></a>
                        <h4>Playground</h4>
                        <a href="" className={styles.link}><li>Playground</li></a>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <a href="https://jss.sitecore.com/" ><h2>JSS&rarr;</h2></a>
                        <h4>Docs</h4>
                        <a href="https://doc.sitecore.com/en/developers/101/xp/index.html" className={styles.link}><li>Documentation</li></a>
                        <h4>Discover</h4>
                        <a href="" className={styles.link}><li>Discover Sitecore XP</li></a>
                        <h4>Learn</h4>
                        <a href="https://learning.sitecore.com/pathway/sitecore-experience-platform--technical" className={styles.link}><li>Sitecore Experience Platform—Technical</li></a>
                        <h4>Playground</h4>
                        <a href="" className={styles.link}><li>Playground</li></a>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <a href="https://www.sitecore.com/products/sitecore-ai" ><h2>Sitecore AI&rarr;</h2></a>
                        <h4>Docs</h4>
                        <a href="https://doc.sitecore.com/en/users/100/sitecore-experience-platform/sitecore-ai---automated-personalization.html" className={styles.link}><li>Documentation</li></a>
                        <h4>Discover</h4>
                        <a href="" className={styles.link}><li>Discover Sitecore AI</li></a>
                        <h4>Learn</h4>
                        <a href="" className={styles.link}><li>Sitecore Experience Platform—Technical</li></a>
                        <h4>Playground</h4>
                        <a href="" className={styles.link}><li>Playground</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new personalization things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new personalization things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Commerce Socials</h2>
                        <a href="https://sitecore.stackexchange.com/?tags=jss" className={styles.link}><li>JSS Stack Exchange Tag</li></a>
                        <a href="https://sitecore.stackexchange.com/questions/tagged/personalization" className={styles.link}><li>Personalization Stack Exchange Tag</li></a>
                        <a href="https://twitter.com/search?q=sitecorejss&src=typed_query&f=live" className={styles.link}><li>#SitecoreJSS latest Tweets</li></a>
                        <a href="https://twitter.com/boxever" className={styles.link}><li>Boxever Twitter</li></a>
                    </div>
                </div>
            </main>

            <Footer />

        </div>)
}
