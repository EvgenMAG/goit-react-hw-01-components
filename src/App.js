import React from "react"

import Profile from "./components/profile-social/profile.js"
import user from "./components/profile-social/users.json"
import Statistics from "./components/Statistics/statistics.js"
import statisticalData from "./components/Statistics/StatisticTemp/statistical-data.json"
import FriendList from "./components/friend-list/FriendList"
import friends from "./components/friend-list/friends.json";
import TransactionHistory from "./components/transactions-history/transfer-history"
import transactions from "./components/transactions-history/transactions.json"


const App = () => {
  return (
    <>
    <div>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
    </div>
    <div>
       <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div>
        <Statistics stats={statisticalData} />
      </div>
      <div>
         <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
      </>
  );
};

export default App