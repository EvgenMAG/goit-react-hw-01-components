import React from "react"
import TransactionRow from "./transaction-row/transaction"


const TransactionHistory = ({items}) => (

    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

   <TransactionRow figures={items}/>
</table>
)


export default TransactionHistory