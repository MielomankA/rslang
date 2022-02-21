import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

import './HomeAdvantages.scss';
import { AdvantageCard } from './AdvantageCard';

export const HomeAdvantages = () => {
  return (
    <section className="home__advantages">
      <h2 className="home__advantages_title">Преимущества приложения</h2>
      <div className="home__advantages_content">
        <AdvantageCard
          title="Учебник"
          description="Электронный учебник состоит из шести разделов. В каждом разделе 30 страниц по 20 слов. Представлены перевод слова, тематическое изображение, а также произношение как слова отдельно, так и в составе словосочетания."
        >
          <MenuBookIcon sx={{ fontSize: 40 }} className="home__advantages_content-icon" />
        </AdvantageCard>
        <AdvantageCard
          title="Словарь"
          description="Словарь содержит списки изучаемых слов, слов, которые не нужно учить, а также тех, которые вызывают затруднения. В словаре отражена статистика по каждому разделу и успеваемость учащихся."
        >
          <BookIcon sx={{ fontSize: 40 }} className="home__advantages_content-icon" />
        </AdvantageCard>
        <AdvantageCard
          title="Игры"
          description="Для изучения слов и закрепления запоминания в приложении есть 2 игры: Аудиовызов и Спринт, которые помогут вам в игровой форме «прокачать» словарный запас."
        >
          <VideogameAssetIcon sx={{ fontSize: 40 }} className="home__advantages_content-icon" />
        </AdvantageCard>
        <AdvantageCard
          title="Статистика"
          description="Весь прогресс обучения можно посмотреть в статистике, где представлены данные как за текущий день, так и за весь период обучения. Информация представлена ​​как в виде таблицы, так и в виде графиков, что очень удобно."
        >
          <QueryStatsIcon sx={{ fontSize: 40 }} className="home__advantages_content-icon" />
        </AdvantageCard>
      </div>
    </section>
  );
};
