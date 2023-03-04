import PropTypes from 'prop-types';
import css from 'components/Friends/FriendListItem.module.css'

export const FriendListItem = ({name, avatar, isOnline}) => {
    return (
            <li className={css.item}>
                <span className={`${css.status} ${css[isOnline === true ? "status__on" : "status__off"]}`}></span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>)
}


FriendListItem.propTypes = { 
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
};
 
              
