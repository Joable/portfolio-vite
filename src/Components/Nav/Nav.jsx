import styles from './Nav.module.css';

import { 
    useState,
    useEffect
} from 'react';

export default function Nav(){
    const [profileElement, setProfileElement] = useState("");
    const [aboutElement, setAboutElement] = useState("");
    const [projectsElement, setProjectsElement] = useState("");
    const [contactElement, setContactElement] = useState("");
    

    useEffect(() => {
        setProfileElement(document.getElementById('profile'));
        setAboutElement(document.getElementById('about'));
        setProjectsElement(document.getElementById('projects'));
        setContactElement(document.getElementById('contact'));
    },[]);

    return(
        <nav>
            <a href="#">Logo</a>

            <div className={styles.pageNavigation}>
                 <button onClick={() => console.log(profileElement)}>Profile</button>
                 
                 <button onClick={() => console.log(aboutElement)}>About</button>

                 <button onClick={() => console.log(projectsElement)}>Projects</button>
                 
                 <button onClick={() => console.log(contactElement)}>Contact</button>
            </div>
        </nav>
    );
}