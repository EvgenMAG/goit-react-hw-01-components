import React from "react"
import TransactionRow from "./Transaction-row/Transaction"
import s from "./Transfer-history.module.css"

const TransactionHistory = ({items, children}) => (
  <>
     {children}
    <table className={s.history}>
  <thead>
    <tr className={s.title__container}>
      <th className={s.title}>Type</th>
      <th className={s.title}>Amount</th>
      <th className={s.title}>Currency</th>
    </tr>
  </thead>

   <TransactionRow figures={items}/>
    </table>
    </>
)


export default TransactionHistory