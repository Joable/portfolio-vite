import styles from './ProjectItem.module.css';

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
                    <a href={gitUrl}>
                        GitHub
                    </a>

                    <a href={demoUrl}>
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}