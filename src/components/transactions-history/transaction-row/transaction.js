import React from "react"
import PropTypes from 'prop-types';

const TransactionRow = ({ figures }) => (
    <tbody>
        {figures.map(({id,type,amount,currency}) => (
                <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>             
            ))}     
    </tbody>
    

)

TransactionRow.propTypes = {
    figures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
    
}

export default TransactionRow