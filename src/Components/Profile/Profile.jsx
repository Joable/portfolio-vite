import styles from './Profile.module.css';


export default function Profile(){
    return(
        <section className={styles.profile}>
            <div className={styles.profileWrapper}>
                <div className={styles.profileHeader}>
                    <h2>Front End Developer</h2>
                    <h3>Joaquin Altable</h3>
                    <p>joaquin el frontend Developer</p>
                </div>

                <div className={styles.imageWrapper}>
                    <img src="../../img/cheeto-chan.PNG" alt="cheeto chan" />
                </div>
            </div>

            <div className={styles.techStack}>
                <h3>Tech stack</h3>

                <img src="../../img/smiley.png" alt="logo1" />
                <img src="../../img/divine.png" alt="logo2" />
                <img src="../../img/osaka1.jpg" alt="logo3" />
            </div>
        </section>
    );
};