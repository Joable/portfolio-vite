import styles from './ProjectItem.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import {
    useEffect,
    useState
} from 'react';

export default function ProjectItem({project}){
    const {name, description, techStack, gitUrl, demoUrl, imgUrl} = project;
    const [containerStyles, setContainerStyle] = useState("");
    const [imageStyles, setImageStyles] = useState("");
    
    useEffect(() => {
        setContainerStyle(window.getComputedStyle(document.getElementById('imageContainer')));

        setImageStyles(window.getComputedStyle(document.getElementById('projectImage')));
    
    } ,[]);

    useEffect(() =>{
        if(imageStyles !== "") console.log(imageStyles.getPropertyValue("height"));
        }, [imageStyles])

    useEffect(() =>{
        if(containerStyles !== "") console.log(containerStyles.getPropertyValue("height"))
        }, [containerStyles])

    return(
        <div className={styles.item}>
            <div id='imageContainer' className={styles.itemImage}>
                <img id='projectImage' src={imgUrl} alt="Project" />
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
                    </IconContext.Provider>

                    <IconContext.Provider value={{size: "20px", color: "var(--primary-color)"}}>
                    <a className={styles.demoLink} href={demoUrl}>
                        <h4>Live Demo </h4>

                        <FiExternalLink/>
                    </a>
                    </IconContext.Provider>
                    
                </div>
            </div>
        </div>
    )
}