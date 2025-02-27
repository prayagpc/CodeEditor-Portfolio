import Image from 'next/image';
import styles from '../styles/About.module.css';

// Skills data for better maintainability
const SKILLS = [
  { name: 'JavaScript', proficiency: 89 },
  { name: 'ReactJS & NextJS', proficiency: 85 },
  { name: 'CSS, Bootstrap & TailwindCSS', proficiency: 92 },
  { name: 'ExpressJS & NodeJS', proficiency: 85 },
  { name: 'PostgreSQL & MongoDB', proficiency: 80 },
  { name: 'Java', proficiency: 75 },
  { name: 'Firebase & Appwrite', proficiency: 85 },
  { name: 'Git & Postman', proficiency: 85 }
];

// Personal info data
const PERSONAL_INFO = [
  { label: 'Name', value: 'Prayag Choudhary' },
  { label: 'Nationality', value: 'India 🇮🇳' },
  { label: 'College Degree', value: 'B.Tech in Computer Science and Engineering' }
];

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Profile Section */}
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src="/Logo1.jpeg"
              alt="Prayag Choudhary"
              width={150}
              height={150}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h1 className={styles.textHead}>Full Stack Engineer</h1>
            <ul className={styles.list}>
              {PERSONAL_INFO.map((info, index) => (
                <li key={index} className={styles.listItem}>
                  <i className={`${styles.icon} bi bi-chevron-right`}></i>
                  <span>
                    <strong className={styles.strong}>{info.label}: </strong>
                    {info.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bio Section */}
        <div className={styles.paragraph}>
          Experienced Full Stack Engineer passionate about building reliable, scalable solutions. 
          I approach coding with a problem-solving mindset, where every line is an adventure
          <span className={styles.paragraphSpan}>—Sometimes Easy, Sometimes Bug-Filled.</span>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h2 className={styles.textHead}>Skills</h2>
          <div className={styles.skillsGrid}>
            {SKILLS.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <span className={styles.skillName}>{skill.name}</span>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{ width: `${skill.proficiency}%` }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}