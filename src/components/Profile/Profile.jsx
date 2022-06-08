import styles from './Profile.module.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileList from './ProfileList/ProfileList';

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
      <ProfileList stats={stats} />
    </div>
  );
};

export default Profile;
