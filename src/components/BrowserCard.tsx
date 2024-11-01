import styles from '../styles/browserCards.module.css'

interface CardProps {
    img: string,
    title: string,
    description: string
}

const BrowserCard= ({img, title, description}: CardProps)=> {

  return (
    <div className={`${styles.card} py-4 rounded`}>
        <img src={img} width={100} height={100} className="m-3"/>
        <h4>{title}</h4>
        <p>{description}</p>
        <img src='/assets/bg-dots.svg' className="w-100"/>
        <button className={`${styles.button} rounded p-2 px-4 mt-3`}>Add & Install Extension</button>
    </div>
  )
}

export default BrowserCard