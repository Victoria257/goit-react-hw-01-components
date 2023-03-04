import css from 'components/TransactionHistory/TransactionHistory1.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return <table className={css.transaction__history}>
        <thead className={css.transaction__head}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>{
            items.map(({ id, type, amount, currency }) => (
                <tr className={css.transaction__set} key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    
};