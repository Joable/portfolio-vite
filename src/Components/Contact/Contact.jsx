import styles from './Contact.module.css';

export default function Contact(){
    return(
        <section id='contact' className={styles.contact}>

            <div className={styles.contactWrapper}>    

                <h3>Contact</h3>
                <h2>Contact me!</h2>

                <div className={styles.email}>
                    <div className={styles.icon}>
                        <img src="../../img/mail.svg" alt="Mail" />
                    </div>
                    
                    <div className={styles.emailWrapper}>
                        <h3>Email</h3>
                        <p>Joaodasilva@shroogle.com</p>
                    </div>
                </div>

            </div>

        </section>
    );
}