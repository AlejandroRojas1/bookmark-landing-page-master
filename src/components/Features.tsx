import styles from '../styles/features.module.css'
import { useState } from 'react'

type FeaturesTypes = {
    img: string,
    title: string,
    description: string
}
type FeaturesKeys = 'simpleBookmarking' | 'speedySearching' | 'easySharing'

const features: Record<FeaturesKeys, FeaturesTypes> = {
    simpleBookmarking: {
        img: '/assets/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    speedySearching: {
        img: '/assets/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    easySharing: {
        img: '/assets/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    }
}

const Features = () => {
    const [featuresRender, setfeaturesRender] = useState<string>('speedySearching')

    const handleChangeFeature = (feature: string): void => {
        setfeaturesRender(feature)
    }

    return (
        <section id="features-link" className={`${styles.featuresContainer} d-flex flex-column align-items-center text-center ms-0`}>
            <h1 id="features-link" className='pb-4'>Features</h1>
            <p className='w-50 mx-5 px-5'>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            
                <ul className={`${styles.nav} pb-0 d-flex justify-content-between`}>
                    <li className={`${styles.navItem}`}>
                        <span onClick={()=>handleChangeFeature('simpleBookmarking')} tabIndex={0} className={`${styles.navLink}`}>Simple Bookmarking</span>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <span onClick={()=>handleChangeFeature('speedySearching')} tabIndex={0} className={`${styles.navLink}`}>Speedy Searching</span>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <span onClick={()=>handleChangeFeature('easySharing')} tabIndex={0} className={`${styles.navLink}`}>Easy Sharing</span>
                    </li>
                </ul>
                <span className={styles.hr}></span>
            
            <div className={`${styles.featuresContainer} d-flex justify-content-end p-0 mt-4`}>
                <div>
                    <div className={`rounded-end-pill`}></div>
                    <img src={features[featuresRender as FeaturesKeys].img} width={450} height={285} />
                </div>
                <div className={`p-5 pe-0 mx-5 me-0 align-self-end`}>
                    <h1 className='text-start'>{features[featuresRender as FeaturesKeys].title}</h1>
                    <p className={`pb-3 text-start`}>
                        {features[featuresRender as FeaturesKeys].description}
                    </p>
                    <button className={`rounded ms-5 px-4 py-2 position-absolute start-0`}>More Info</button>
                </div>
            </div>
        </section>
    )
}

export default Features