import styles from '../styles/faq.module.css'

const Faq = () => {
    return (
        <section className={styles.faqContainer}>

            <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
            <p className={`${styles.faqDescription} text-center`}>Here are some of our FAQs. If you have any other questions you’d like
                answered please feel free to email us.</p>

            <div className={`${styles.acordionContainer} accordion accordion-flush`} id="accordionFlushExample">
                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What is Bookmark?
                        </button>
                    </h3>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className={`${styles.textAcordionItem} accordion-body`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            How can I request a new browser?
                        </button>
                    </h3>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className={`${styles.textAcordionItem} accordion-body`}>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Is there a mobile app?
                        </button>
                    </h3>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className={`${styles.textAcordionItem} accordion-body`}>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                            sollicitudin ex et ultricies bibendum.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        What about other Chromium browsers?
                        </button>
                    </h3>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className={`${styles.textAcordionItem} accordion-body`}>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq