import { IAdvantageCardProps } from '../../shared/ts/models';

import './AdvantageCard.scss';

export const AdvantageCard: React.FC<IAdvantageCardProps> = ({ children, title, description }) => {
  return (
    <div className="home__advantages_card">
      <div>{children}</div>
      <h3 className="home__advantages_card-title">{title}</h3>
      <p className="home__advantages_card-description">{description}</p>
    </div>
  );
};
