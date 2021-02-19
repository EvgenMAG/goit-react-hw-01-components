import React from "react"
import PropTypes from 'prop-types'
import StatTemplate from "./StatisticTemp/StatisticTemplate"
import s from "./Statistic.module.css"

const Statistics = ({ title, stats, children }) => (
    <>
        {children}
    <section className={s.statistics}>
        {title && (
      <h2 className={s.title}>{title}</h2>
        )}
      

        < StatTemplate
         item = {stats}
        />
           
   
        </section>
        </>
)

Statistics.defaultProps = {
    title: "",
}
Statistics.propTypes = {
    title: PropTypes.string,
    
}

export default Statistics