import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
