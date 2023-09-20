import styles from './ProjectItem.module.css';
import {
    AiFillLinkedin,
    AiFillGithub
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function ProjectItem({project}){
    const {name, description, techStack, gitUrl, demoUrl, imgUrl} = project

    return(
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <img src={imgUrl} alt="Project" />
            </div>

            <div className={styles.itemText}>
                <h3>{name}</h3>

                <p>{description}</p>

                <div className={styles.techStack}>
                    {techStack.map((tech) => <h4 key={tech}><strong>{tech}</strong></h4>)}
                </div>

                <div className={styles.externalLinks}>
                    <IconContext.Provider value={{size: "40px", color: "var(--primary-color)"}}>
                    <a href={gitUrl}>
                        <AiFillGithub/>
                    </a>

                    <a href={demoUrl}>
                        <AiFillLinkedin/>
                    </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}