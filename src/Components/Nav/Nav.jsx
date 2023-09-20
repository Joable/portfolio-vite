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

    const handleScroll = (element) => {
        const elementTop = element.getBoundingClientRect().top;
        const bodyTop = document.body.getBoundingClientRect().top    
    
        document.documentElement.scrollTop = elementTop - bodyTop;
    };

    return(
        <nav>
            <a href="#">Logo</a>

            <div className={styles.pageNavigation}>
                 <button onClick={() => handleScroll(profileElement)}>Profile</button>
                 
                 <button onClick={() => handleScroll(aboutElement)}>About</button>

                 <button onClick={() => handleScroll(projectsElement)}>Projects</button>
                 
                 <button onClick={() => handleScroll(contactElement)}>Contact</button>
            </div>
        </nav>
    );
}