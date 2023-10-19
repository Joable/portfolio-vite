import styles from './About.module.css';

export default function About(){
    return(
        <section id='about' className={styles.about}>

            <div className={styles.aboutWrapper}>

                <div className={styles.aboutImage}>
                    <img src="../../img/coding.jpg" alt="About" />
                </div>

                <div className={styles.aboutText}>
                    <h3>ABOUT ME</h3>
                    <h2>I Like Programming In React</h2>

                    <p>
                        I'm a programmer from Buenos Aires studying computer engineering.
                        I've started learning React on my own and been developing my skills with the library, 
                        to the point that i've a couple of projects with React to show what i'm capable of.
                        The core of this projects is focusing in a simple design.
                    </p>
                </div>

            </div>
            
        </section>
    );
}