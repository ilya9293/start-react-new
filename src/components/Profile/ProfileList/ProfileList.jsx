import PropTypes from 'prop-types';
import styles from './ProfileList.module.css';

function ProfileList({ stats }) {
  return (
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
}

ProfileList.propTypes = {
  stats: PropTypes.object,
};

export default ProfileList;
