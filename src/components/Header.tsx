import styles from '../styles/header.module.css'


const Header = () => {


    return (
        <>
            <nav className="navbar pt-4">
                <div className={`container ${styles.header}`}>
                    <a className="navbar-brand" href="#">
                        <img src="/assets/logo-bookmark.svg" alt="bookmark" width="35" height="30" className="w-100" />
                    </a>
                    <span className="w-50 d-flex justify-content-evenly align-items-center">
                        <ul className='navbar-nav w-75 d-flex flex-row justify-content-evenly'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>FEATURES</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>PRICING</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>CONTACT</a>
                            </li>
                        </ul>
                        <button className={`${styles.button} rounded px-4 py-1`}>Login</button>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Header