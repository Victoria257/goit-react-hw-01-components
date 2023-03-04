import PropTypes from 'prop-types';
import css from 'components/Friends/FriendList.module.css'
import { FriendListItem } from 'components/Friends/FriendListItem'

export const FriendList = ({ friends }) => {
  
    return (<ul className={css.friend__list}>      
        {friends.map(({id,name, avatar, isOnline}) => (
            <FriendListItem key={id} name={name} avatar= {avatar} isOnline={isOnline}>
            </FriendListItem>
        ))}
</ul>)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
};
