import css from 'components/Statistics/Statistics1.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/render-color';

export const Statistics = ({title, stats}) => {

    return (<section className={css.statistics}>
         {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat__list}>
            {stats.map(({id,label, percentage}) => (
                <li style= {{backgroundColor: getRandomHexColor()}}
                    key={id} className={css.item}>
                    <p className={css.label}>{label}</p>
                    <span className={css.percentage}>{percentage}</span>
                </li>
            ))}
        </ul>
    </section>);

}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
}


