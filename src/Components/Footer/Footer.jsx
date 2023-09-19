import styles from './Footer.module.css';

import {
    AiFillLinkedin,
    AiFillGithub
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function Footer(){
    return(
        <footer>
            <div className={styles.footerContent}>
                <button className={styles.goUp}>Go up</button>


                <div className={styles.links}>
                    <IconContext.Provider value={{size: "40px", color: "white"}}>
                        <a href="#">
                            <AiFillLinkedin/>
                        </a>
                        <a href="#">
                            <AiFillGithub/>
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </footer>
    );
}