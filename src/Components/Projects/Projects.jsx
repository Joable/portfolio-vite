import styles from './Projects.module.css';

import {
    useEffect,
    useState
} from 'react';

import {projectsList} from './ProjectsList.js';

import ProjectItem from '../ProjectItem/ProjectItem';

export default function Projects(){
    const [projects, setProjects] = useState("");
    const [activateHover, setActivateHover] = useState(0);
    const [containerHeight, setContainerHeight] = useState("");

    useEffect(() => {
        setProjects(document.getElementsByClassName('projectImage'));

        setContainerHeight(
            Number.parseFloat(
                window.getComputedStyle(document.getElementById('imageContainer')).getPropertyValue('height')
            )
        );
    },[])

    useEffect(() =>{
        if(projects !== ""){
            let imageHeight = "";

            for(let i = 0; i < projects.length ; i++){
                imageHeight = Number.parseFloat(window.getComputedStyle(projects[i]).getPropertyValue('height'));

                projects[i].style.setProperty('--image-scroll', `-${imageHeight - containerHeight}px`)
            };
        }
    },[activateHover]);


    return(
        <section id='projects' className={styles.projects}>
            <div id='projectsWrapper' className={styles.projectsWrapper}>
            
            <div className={styles.title}>
                <h3>Projects</h3>
            </div>

                {projectsList.map((project) => <ProjectItem key={project.name} project={project} onHover = {() => setActivateHover(1)}/>)}

            </div>

        </section>
    );
}