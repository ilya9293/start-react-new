import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  return (
    'rgb(' +
    getRandomInt(0, 255) +
    ', ' +
    getRandomInt(0, 255) +
    ', ' +
    getRandomInt(0, 255) +
    ')'
  );
}

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
