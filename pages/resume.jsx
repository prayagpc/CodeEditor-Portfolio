import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>B.Tech in Computer Science</h4>
          <div>Institution: Prestige Institute of Engineering Management & Research (PIEMR)</div>
          <div>2020 - 2024</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Higher Secondary</h4>
          <div>Institution: Central India Academy</div>
          <div>2019-2020</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Secondary School</h4>
          <div>Institution: Central India Academy</div>
          <div>2017-2018</div>
        </div>
      </div>

      <div className={styles['work-section']}>
        <h3 className={styles.heading}>Professional Experience</h3>


        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Infosys</h4>
          <div>Full Stack Engineer</div>
          <div>Location: Remote</div>
          <div>March 2024 - June 2024</div>
          <div>Key Responsibilities: Led a team to develop a full-stack inventory management system with ReactJS, NodeJS, and MongoDB. Implemented authentication, authorization, and CRUD functionality.</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
