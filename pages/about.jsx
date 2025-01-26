import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src="/Logo1.jpeg"
              alt="About Me"
              
              width={150}
              height={150}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>Full Stack Engineer</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Name: </strong>
                  Prayag Choudhary</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span> <strong className={styles.strong}>Nationality: </strong>
                India 🇮🇳</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>College Degree: </strong>
                B.Tech in Computer Science and Engineering</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.paragraph}>
        Experienced Full Stack Engineer passionate about building reliable, scalable solutions. I approach coding with a problem-solving mindset, where every line is an adventure<span className={styles.paragraphSpan}>—Sometimes Easy, Sometimes Bug-Filled.</span></div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
        <h3 className={styles.textHead}>Skills</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <span className={styles.skillName}>JavaScript</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '89%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>ReactJS & NextJS  </span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>CSS, Bootstrap & TailwindCSS</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>ExpressJS & NodeJS</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>PostgreSQL & MongoDB</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Java</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Firebase & Appwrite</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Git & Postman</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}
