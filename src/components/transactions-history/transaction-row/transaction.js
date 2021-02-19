import React from "react"
import PropTypes from 'prop-types';
import s from "./Transaction-row.module.css"

const TransactionRow = ({ figures }) => (
    <>
       
    <tbody>
        {figures.map(({id,type,amount,currency}) => (
                <tr key={id}>
      <td className={s.info}>{type}</td>
      <td className={s.info}>{amount}</td>
      <td className={s.info}>{currency}</td>
    </tr>             
            ))}     
    </tbody>
    </>

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