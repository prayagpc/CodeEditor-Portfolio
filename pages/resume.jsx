// components/ResumePage.jsx
import React from 'react';
import styles from '../styles/ResumePage.module.css';

const ResumePage = () => {
  const educationHistory = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Prestige Institute of Engineering Management & Research (PIEMR)',
      period: '2020 - 2024'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Central India Academy',
      period: '2019-2020'
    },
    {
      degree: 'Secondary School',
      institution: 'Central India Academy',
      period: '2017-2018'
    }
  ];

  const workExperience = [
    {
      company: 'Infosys',
      role: 'Full Stack Engineer',
      location: 'Remote',
      period: 'March 2024 - June 2024',
      responsibilities: 'Led a team to develop a full-stack inventory management system with ReactJS, NodeJS, and MongoDB. Implemented authentication, authorization, and CRUD functionality.'
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.heading}>Education History</h2>
        <div className={styles.timeline}>
          {educationHistory.map((edu, index) => (
            <div key={`education-${index}`} className={styles.item}>
              <h3 className={styles.itemTitle}>{edu.degree}</h3>
              <div className={styles.itemDetail}>Institution: {edu.institution}</div>
              <div className={styles.itemDetail}>{edu.period}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Professional Experience</h2>
        <div className={styles.timeline}>
          {workExperience.map((work, index) => (
            <div key={`work-${index}`} className={styles.item}>
              <h3 className={styles.itemTitle}>{work.company}</h3>
              <div className={styles.itemDetail}>{work.role}</div>
              <div className={styles.itemDetail}>Location: {work.location}</div>
              <div className={styles.itemDetail}>{work.period}</div>
              <div className={styles.itemDetail}>Key Responsibilities: {work.responsibilities}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;

export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
  };
}