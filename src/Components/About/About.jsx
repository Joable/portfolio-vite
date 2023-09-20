import styles from './About.module.css';

export default function About(){
    return(
        <section id='about' className={styles.about}>

            <div className={styles.aboutWrapper}>

                <div className={styles.aboutText}>
                    <h3>ABOUT ME</h3>
                    <h2>THE BIGGEST OF THEM ALL</h2>

                    <p>
                        Curabitur congue aliquet pellentesque. Aenean at finibus lacus. Aliquam molestie, 
                        odio sed ornare ultrices, magna augue faucibus urna, quis malesuada elit mauris ac massa. 
                        Nulla fermentum turpis a purus pharetra, ut elementum ex euismod. Mauris malesuada nunc dolor, 
                        id faucibus neque laoreet quis. Pellentesque odio est, sollicitudin eu ante ac, consectetur rhoncus augue. 
                        Nam sagittis efficitur nisl et molestie. Etiam porta nisl sed turpis cursus consequat. 
                        Suspendisse sagittis tellus tempus, hendrerit ipsum quis, sagittis magna. Cras id arcu ipsum.
                    </p>
                </div>

                <div className={styles.aboutImage}>
                    <img src="../../img/whenithits.jpg" alt="About" />
                </div>

            </div>
            
        </section>
    );
}