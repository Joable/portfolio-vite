import styles from './Footer.module.css';

export default function Footer(){
    return(
        <footer>
            <div className={styles.footerContent}>
                <button>Go up</button>

                <a href='#'>Github</a>

                <a href="#">Linkedin</a>
            </div>
        </footer>
    );
}