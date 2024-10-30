import BrowserCard from "./BrowserCard"
import styles from '../styles/browsers.module.css'

type BrowsersInfo = {
  img: string,
  title: string,
  description: string
}
const googleInfo: BrowsersInfo = {
  img: '/assets/logo-chrome.svg',
  title: 'Add to Chrome',
  description: 'Minimum version 62'
}
const fireFoxInfo: BrowsersInfo = {
  img: '/assets/logo-firefox.svg',
  title: 'Add to Firefox',
  description: 'Minimum version 55'
}
const operaInfo: BrowsersInfo = {
  img: '/assets/logo-opera.svg',
  title: 'Add to Opera',
  description: 'Minimum version 46'
}

const Browsers = () => {
  return (
    <section className={`${styles.container} text-center`}>
        <h1>Download the extension</h1>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.</p>
        <div className={`${styles.cardsContainer}d-flex flex-row justify-content-evenly`}>
            <BrowserCard img={googleInfo.img} title={googleInfo.title} description={googleInfo.description} />
            <div className="position-absolute"></div>
            <BrowserCard img={fireFoxInfo.img} title={fireFoxInfo.title} description={fireFoxInfo.description} />
            <BrowserCard img={operaInfo.img} title={operaInfo.title} description={operaInfo.description} />
            
        </div>
    </section>
  )
}

export default Browsers