import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import styling from '../styles/Home.module.css';;
import Image from 'next/image';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNode } from '@fortawesome/free-brands-svg-icons';


export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I CODE</h1>
          <h1>FUTURE!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Prayag Choudhary</h1>
            <h6 className={styles.bio}>Debugging Like a 
              <span className={styles.react}> Pro.</span></h6>

            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>
              {/* Skill item for JavaScript */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faJs} size="3x" className={`${styling.icon} ${styling.jsIcon}`} />
                <div className={styling.skillText}>JavaScript</div>
              </div>

              {/* Skill item for Express.js */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faNode} size="3x" className={`${styling.icon} ${styling.nodeIcon}`} />
                <div className={styling.skillText}>Express.js</div>
              </div>

              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faReact} size="3x" className={`${styling.icon} ${styling.reactIcon}`} />
                <div className={styling.skillText}>React</div>
              </div>

              {/* Skill item for Nextjs */}
              <div className={styling.skillItem}>
                <img src="/nextjs-icon.svg" alt="Next.js" className={`${styling.icon} ${styling.nextIcon}`} />
               
                <div className={styling.skillText}>Next.js</div>
              </div>



              {/* Skill item for PgSql */}
              <div className={styling.skillItem}>
                <img src="/pgsql.svg" alt="PgSql" className={`${styling.icon} ${styling.nextIcon}`} />

              
                <div className={styling.skillText}>PostgreSQL</div>
              </div>
            </div>


            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.button} ${styling.workBtn}`}>View Work</button>
              </Link>
              <Link href="/resume">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>My Resume</button>
              </Link>
            </div>
          </div>
          {/* Logo image */}
          <div className={styling.imageWrapper}>
            
            <Image src="/Logo2.png" alt="Sarcastic Geek Logo" className={styling.myImg} width={300} height={350} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
