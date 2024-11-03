import { useState, FormEvent } from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
    const [mail, setMail] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    const handleChange = (letterEmail: string): void => {
        setMail(letterEmail)
    }
    return (
        <section className={`${styles.contactContainer} text-center`}>

            <p className='pt-5 pb-3'>35,000+ ALREADY JOINED</p>
            <h3>Stay up-to-date with what we’re doing</h3>

            <form onSubmit={(e): void => { handleSubmit(e) }} className={`${styles.form} mt-4`}>
                <div className='d-flex w-100 justify-content-center'>
                    <input
                        onChange={(e) => { handleChange(e.target.value) }}
                        value={mail}
                        className={`${styles.mail} rounded p-2`}
                        placeholder="Enter your email address"
                        type="email"
                    />
                    <button type='submit' className={`${styles.button} rounded p-2 ms-2`}>Contact Us</button>
                </div>

            </form>
        </section>
    )
}

export default Contact