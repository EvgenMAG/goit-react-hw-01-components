import React from "react"
import PropTypes from 'prop-types'
import StatTemplate from "./StatisticTemp/StatisticTemplate"

const Statistics = ({ title, stats }) => (
    <section className="statistics">
        {title && (
      <h2 className="title">{title}</h2>
        )}
      

        < StatTemplate
         item = {stats}
        />
           
   
</section>
)

Statistics.defaultProps = {
    title: "",
}
Statistics.propTypes = {
    title: PropTypes.string,
    
}

export default Statistics