import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';


import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'



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

    {/* <div>
      <Statistics
        title="Upload stats"
        stats={data}
      />
    </div> */}

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

