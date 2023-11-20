import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'


export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Just a photo of me working" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I have experience in building an optimized sites </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience in developing fast and optimized APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Development Engineer in Test</h3>
                            <p>I have experience in developing UI and API test case automation</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
