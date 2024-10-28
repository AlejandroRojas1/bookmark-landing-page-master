import styles from '../styles/info.module.css'

const Info = () => {
    return (
        <section className='d-flex my-5 py-5'> 
            <div className={`my-5 w-50 ${styles.descriptionContainer}`}>
                <h1 className=''>A Simple Bookmark Manager</h1>
                <p className={`${styles.descriptionInfo} pb-3`}>
                    A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <button className={`${styles.button} rounded px-5 py-3 me-4`}>Get it on Chrome</button>
                <button className={`${styles.button} rounded px-5 py-3 `}> Get it on Firefox</button>
            </div>
            <div>
                <img src="/assets/illustration-hero.svg" width={575} height={385}/>
                <div className={`${styles.bgIllustration} rounded-start-pill`}></div>
            </div>
        </section>
    )
}

export default Info