import { IGameCardProps } from '../../shared/ts/models';

import './GameCard.scss';

export const GameCard: React.FC<IGameCardProps> = ({ children, text }) => {
  return (
    <div className="textbook-page__games_card">
      <div>{children}</div>
      <div>{text}</div>
    </div>
  );
};
