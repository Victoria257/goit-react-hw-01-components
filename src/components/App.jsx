import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import items from 'transactions.json';


import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/statistics';
import { FriendList } from 'components/Friends/friends';
import {TransactionHistory} from 'components/TransactionHistory/transactionHistory'



export const App = () => {
  const { username, tag, location, avatar, stats } = user; 
  
  return <div>

    <div>
      <TransactionHistory
        items={items}
      />
    </div>

    <div>
      <FriendList
        friends={friends}
      />
    </div>

    <div>
      <Statistics
        title="Upload stats"
        stats={data}
      />
    </div>

      <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      </div>
  </div>

};
