// components/ProjectCard.jsx
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardLink}
      >
        <div className={styles.imageContainer}>
          <Image 
            src={project.image} 
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.projectImage}
            priority={project.id === 1} // Load first image with priority
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.projectTitle}>{project.name}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className={`${styles.tag} ${styles[tag.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;