import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNode } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/HomePage.module.css';

// Skills data for easy maintenance
const SKILLS = [
  { 
    name: 'JavaScript', 
    icon: <FontAwesomeIcon icon={faJs} className={`${styles.icon} ${styles.jsIcon}`} />,
    isCustom: false 
  },
  { 
    name: 'Express.js', 
    icon: <FontAwesomeIcon icon={faNode} className={`${styles.icon} ${styles.nodeIcon}`} />,
    isCustom: false 
  },
  { 
    name: 'React.js', 
    icon: <FontAwesomeIcon icon={faReact} className={`${styles.icon} ${styles.reactIcon}`} />, 
    isCustom: false 
  },
  { 
    name: 'Next.js', 
    icon: <img src="/nextjs-icon.svg" alt="Next.js" className={styles.icon} />,
    isCustom: true 
  },
  { 
    name: 'PostgreSQL', 
    icon: <img src="/pgsql.svg" alt="PostgreSQL" className={styles.icon} />,
    isCustom: true 
  }
];

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I CODE</h1>
          <h1>FUTURE!</h1>
        </div>
        
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Prayag Choudhary</h1>
            <h2 className={styles.bio}>
              Debugging Like a <span className={styles.react}>Pro.</span>
            </h2>

            {/* Skills section */}
            <div className={styles.skillsContainer}>
              {SKILLS.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  {skill.icon}
                  <div className={styles.skillText}>{skill.name}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className={styles.buttonContainer}>
              <Link href="/projects" className={styles.linkButton}>
                <button className={`${styles.button} ${styles.workBtn}`}>
                  View Work
                </button>
              </Link>
              <Link href="/resume" className={styles.linkButton}>
                <button className={`${styles.outlined} ${styles.contactBtn}`}>
                  My Resume
                </button>
              </Link>
            </div>
          </div>
          
          {/* Profile image */}
          <div className={styles.imageWrapper}>
            <Image 
              src="/Logo2.png" 
              alt="Sarcastic Geek Logo" 
              className={styles.myImg} 
              width={300} 
              height={350}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}