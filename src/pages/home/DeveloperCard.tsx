import GitHubIcon from '@mui/icons-material/GitHub';
import { grey } from '@mui/material/colors';

import { IDeveloperCardProps } from '../../shared/ts/models';

import './DeveloperCard.scss';

export const DeveloperCard: React.FC<IDeveloperCardProps> = ({
  avatarUrl,
  name,
  githubUrl,
  jobStatus,
  description,
}) => {
  return (
    <div className="developers__card">
      <img src={avatarUrl} alt="" className="developer__card_image" />
      <div className="developer__card_description">
        <div className="developer__card_name">
          <h3>{name}</h3>
          <a href={githubUrl} target="_blank" rel="noreferrer noopener">
            <GitHubIcon sx={{ color: grey[900] }} />
          </a>
        </div>
        <p className="developer__card_job">{jobStatus}</p>
        <p className="developer__card_work-title">Вклад в разработку</p>
        <div className="developer__card_characteristic">{description}</div>
      </div>
    </div>
  );
};
