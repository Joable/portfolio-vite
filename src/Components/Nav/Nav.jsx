import styles from './Nav.module.css';

import { 
    useState,
    useEffect
} from 'react';

export default function Nav(){
    const [projectsId, setProjectsId] = useState("");

    useEffect(() => {
        setProjectsId(document.getElementById('projects'));

        console.log(projectsId)
    },[]);

    return(
        <nav>
            <a href="">Logo</a>

            <div className={styles.pageNavigation}>
                 <button onClick={() => console.log(1)}>Home</button>
                 
                 <button onClick={() => console.log(1)}>About</button>

                 <button onClick={() => console.log(1)}>Projects</button>
                 
                 <button onClick={() => console.log(1)}>Contact</button>
            </div>
        </nav>
    );
}