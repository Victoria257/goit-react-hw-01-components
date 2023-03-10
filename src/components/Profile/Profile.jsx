import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats: {followers,views, likes} }) => {
 
  return (<div className={css.profile}>
    <div key={username } className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
      />
      <p className={css.name}>Petra Marica</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.stats__wrapper}>
        <p className={css.label}>Followers</p>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.stats__wrapper}>
        <p className={css.label}>Views</p>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.stats__wrapper}>
        <p className={css.label}>Likes</p>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div >);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
}
