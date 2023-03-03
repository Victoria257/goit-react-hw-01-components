import PropTypes from 'prop-types';
import css from 'components/Friends/friends.module.css'

export const FriendList = ({ friends }) => {
  
    return <ul className={css.friend__list}>      
        {friends.map(friend => (
            <li key={friend.id} className={css.item}>
                <span className={`${css.status} ${css[friend.isOnline === true ? "status__on" : "status__off"]}`}></span>
                <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={css.name}>{friend.name}</p>
            </li>
        ))}
</ul>
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
