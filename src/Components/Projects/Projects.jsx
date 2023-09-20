import ProjectItem from '../ProjectItem/ProjectItem';
import styles from './Projects.module.css';
import {projectsList} from './ProjectsList.js';

export default function Projects(){

    return(
        <section id='projects' className={styles.projects}>
            
            <h2>Projects</h2>
            
            <div className={styles.projectsWrapper}>

                {projectsList.map((project) => <ProjectItem key={project.name} project={project}/>)}

            </div>

        </section>
    );
}