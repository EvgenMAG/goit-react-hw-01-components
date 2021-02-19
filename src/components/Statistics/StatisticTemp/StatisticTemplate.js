import React from "react"
import PropTypes from 'prop-types'
import s from "./StatisticTemplate.module.css"


function getRandomColor() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length === 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

const StatTemplate = ({ item }) => (
    
<ul className={s.stat__list}>
            {item.map(({ id, label, percentage }) => (
              <li className={s.item} key={id}
              style={{ backgroundColor: getRandomColor() }}
              >
      <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
              
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