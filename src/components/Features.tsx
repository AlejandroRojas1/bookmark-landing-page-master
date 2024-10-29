import styles from '../styles/features.module.css'

const Features = () => {
    return (
        <section className={`${styles.featuresContainer} d-flex flex-column align-items-center text-center ms-0`}>
            <h1 className='pb-4'>Features</h1>
            <p className='w-50 mx-5 px-5'>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <ul className={`nav nav-underline p-3 d-flex justify-content-between`}>
                <li className="nav-item">
                    <a href="#" className="nav-link">Simple Bookmarking</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Speedy Searching</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Easy Sharing</a>
                </li>
            </ul>

            <div className={`${styles.featuresContainer} d-flex justify-content-end p-0 mt-4`}>
                <div>
                    <div className={`rounded-end-pill`}></div>
                    <img src="/assets/illustration-features-tab-1.svg" width={475} height={285} />
                </div>
                <div className={`p-5 pe-0 mx-5 me-0 align-self-end`}>
                    <h1 className='text-start'>Bookmark in one click</h1>
                    <p className={`pb-3 text-start`}>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.
                    </p>
                    <button className={`rounded ms-5 px-4 py-2 position-absolute start-0`}>More Info</button>
                </div>
            </div>
        </section>
    )
}

export default Features