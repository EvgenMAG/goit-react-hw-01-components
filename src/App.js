import React from "react"

import Profile from "./components/Profile-social/Profile.js"
import user from "./components/Profile-social/users.json"
import Statistics from "./components/Statistics/Statistics.js"
import statisticalData from "./components/Statistics/StatisticTemp/statistical-data.json"
import FriendList from "./components/Friend-list/FriendList"
import friends from "./components/Friend-list/friends.json";
import TransactionHistory from "./components/Transactions-history/Transfer-history"
import transactions from "./components/Transactions-history/transactions.json"

import s from "./App.module.css"




const App = () => {
  return (
    <>
      <div className={s.blocks}>
        <Profile
        name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        >
          <h2 className={s.title}>Task 1</h2>
        </Profile>
    </div>
      <div className={s.blocks}>
        <Statistics title="Upload stats" stats={statisticalData}>
          <h2 className={s.title}>Task 2</h2>
        </Statistics>
      </div>
      <div className={s.blocks}>
        <Statistics stats={statisticalData} />
      </div>
      <div className={s.blocks}>
        <FriendList friends={friends} >
       <h2 className={s.title}>Task 3</h2>
        </FriendList>
      </div>
      <div className={s.blocks}>
        <TransactionHistory items={transactions}>
          <h2 className={s.title}>Task 4</h2>
        </TransactionHistory>
      </div>
      </>
  );
};

export default App