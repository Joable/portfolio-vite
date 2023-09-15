import styles from './ProjectItem.module.css';

export default function ProjectItem({project}){
    const {name, description, techStack, gitUrl, demoUrl, imgUrl} = project

    return(
        <div className={styles.item}>
            <img src={imgUrl} alt="Project" />

            <h3>{name}</h3>

            <p>{description}</p>

            {techStack.map((tech) => <h4 key={tech}><strong>{tech}</strong></h4>)}

            <div className={styles.externalLinks}>
                <a href={gitUrl}>
                    GitHub
                </a>

                <a href={demoUrl}>
                    Live Demo
                </a>
            </div>
        </div>
    )
}