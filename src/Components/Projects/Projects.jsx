import styles from './Projects.module.css';

import {
    useEffect,
    useState
} from 'react';

import {projectsList} from './ProjectsList.js';

import ProjectItem from '../ProjectItem/ProjectItem';

export default function Projects(){
    const [projects , setProjects] = useState("");
    const [containerHeight, setContainerHeight] = useState("");

    useEffect(() => {
        setProjects(document.getElementsByClassName('_projectImage_jqj6t_33'));

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
    },[projects]);


    return(
        <section id='projects' className={styles.projects}>
            
            <h3>Projects</h3>
            
            <div id='projectsWrapper' className={styles.projectsWrapper}>

                {projectsList.map((project) => <ProjectItem key={project.name} project={project}/>)}

            </div>

        </section>
    );
}