// pages/projects.js
import { getProjects } from './api/projects';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <div className={styles.projectsWrapper}>
      <h2 className={styles.heading}>Stuff I've Built ...</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { 
      title: 'Projects', 
      projects 
    },
    // Revalidate every 24 hours
    revalidate: 86400,
  };
}

export default ProjectsPage;