import React from "react"
import PropTypes from 'prop-types'


const StatTemplate = ({ item }) => (
    
<ul className="stat-list">
            {item.map(({ id, label, percentage }) => (
                <li className="item" key={id}>
       <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
              
                </li>
            ))}
  </ul>
    
)

StatTemplate.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
    )
    
}

export default StatTemplate