import styles from './Nav.module.css';

export default function Nav(){
    return(
        <nav>
            <a href="">Logo</a>

            <div className={styles.pageNavigation}>
                 <a href="#">Home</a>
                 
                 <a href="#">About</a>
                 
                 <a href="#">Projects</a>
                 
                 <a href="#">Contact</a>
            </div>
        </nav>
    );
}