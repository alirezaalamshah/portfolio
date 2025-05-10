import { useTranslation } from 'react-i18next';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  const openProject = () => {
    window.open(project.link, '_blank');
  };

  return (
    <div className="project-card" onClick={openProject}>
      <img src={project.image} alt={t(project.titleKey)} className="project-image" />
      <div className="overlay">
        <h3>{t(project.titleKey)}</h3>
        <p>{t(project.descriptionKey)}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
