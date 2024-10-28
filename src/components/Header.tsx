import styles from '../styles/header.module.css'


const Header = () => {


    return (
        <>
            <nav className="navbar pt-4">
                <div className={`container ${styles.header}`}>
                    <a className="navbar-brand" href="#">
                        <img src="/assets/logo-bookmark.svg" alt="bookmark" width="30" height="24" className="w-100" />
                    </a>
                    <span className="w-50 d-flex justify-content-evenly align-items-center">
                        <a>FEATURES</a>
                        <a>PRICING</a>
                        <a>CONTACT</a>
                        <button className={`${styles.button} rounded px-4 py-1`}>Login</button>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Header