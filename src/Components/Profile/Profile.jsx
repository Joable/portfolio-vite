import styles from './Profile.module.css';

import {
    AiFillLinkedin,
    AiFillGithub
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function Profile(){
    return(
        <section id='profile' className={styles.profile}>

            <div className={styles.profileWrapper}>

                <div className={styles.profileHeader}>
                    <h2>Front-End React Developer</h2>

                    <p>Hi, i'm Joaquin Altable. A passionate React front-end developer from Buenos Aires, Argentina.</p>
                </div>

                <div className={styles.imageWrapper}>
                    <img src="../../img/cheeto-chan.PNG" alt="cheeto chan" />
                </div>

                <div className={styles.externalLinks}>

                    <IconContext.Provider value={{size: "40px", color: "black"}}>
                        <a href="#">
                            <AiFillLinkedin/>
                        </a>
                        <a href="#">
                            <AiFillGithub/>
                        </a>
                    </IconContext.Provider>
                    
                </div>

            </div>

            <div className={styles.techStack}>
                <h3>Tech stack</h3>

                <img src="../../img/HTML.svg" alt="HTML" />
                <img src="../../img/CSS.svg" alt="CSS" />
                <img src="../../img/JavaScript.svg" alt="JavaScript" />
                <img src="../../img/React.svg" alt="React" />
            </div>
            
        </section>
    );
}