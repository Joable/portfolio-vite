import styles from './Contact.module.css';

export default function Contact(){
    return(
        <section className={styles.contact}>
            <div className={styles.contactWrapper}>    
                <h3>Contact</h3>
                <h2>Contact me!</h2>

                <div className={styles.email}>
                    <img src="../../img/smiley2.png" alt="smile" />

                    <h3>Email</h3>
                    <p>Joaodasilva@shroogle.com</p>
                </div>
            </div>
        </section>
    );
}