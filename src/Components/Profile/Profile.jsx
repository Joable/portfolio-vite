import styles from './Profile.module.css';


export default function Profile(){
    return(
        <div className={styles.profile}>
            <div className={styles.profileHeader}>
                <h2>Front End Developer</h2>
                <h3>Joaquin Altable</h3>
                <p>joaquin el frontend Developer</p>
            </div>
            <img src="../../img/cheeto-chan.PNG" alt="cheeto chan" />
        </div>
    );
};