import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={styles.profile}>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

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
    </div>
  );
};

Profile.propTypes = {
  stats: PropTypes.object,
};

export default Profile;
