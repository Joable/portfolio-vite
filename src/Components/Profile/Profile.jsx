import styles from './Profile.module.css';

import {
    AiFillLinkedin,
    AiFillGithub
} from 'react-icons/ai'

export default function Profile(){
    return(
        <section className={styles.profile}>

            <div className={styles.profileWrapper}>

                <div className={styles.profileHeader}>
                    <h2>Front-End React Developer</h2>

                    <p>Hi, i'm Joaquin Altable. A passionate React front-end developer from Buenos Aires, Argentina.</p>
                </div>

                <div className={styles.imageWrapper}>
                    <img src="../../img/cheeto-chan.PNG" alt="cheeto chan" />
                </div>

                <div className={styles.externalLinks}>
                    <a href="#">
                        <AiFillLinkedin/>
                    </a>
                    <a href="#">
                        <AiFillGithub/>
                    </a>
                </div>

            </div>

            <div className={styles.techStack}>
                <h3>Tech stack</h3>

                <img src="../../img/smiley.png" alt="logo1" />
                <img src="../../img/smiley.png" alt="logo2" />
                <img src="../../img/smiley.png" alt="logo3" />
            </div>
            
        </section>
    );
}