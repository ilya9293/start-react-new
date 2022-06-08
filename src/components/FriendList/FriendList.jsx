import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <span className={s.status}></span>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendList;
