import PropTypes from 'prop-types';

function FriendList(props) {
  return (
    <ul class="friend-list">
      {props.map(({ avatar, name, isOnline }) => (
        <li class="item">
          <span class="status"></span>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <p class="name">{name}</p>
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
