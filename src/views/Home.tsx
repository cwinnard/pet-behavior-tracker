import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ObservationCards from '../components/ObservationCards';

import { getHomeData } from '../api/User';
import '../styles/Home.css';

const Home = () => {
    // const [user, setUser] = useState({
    //   name: '',
    //   recentObservations: [{
    //       id: 1,
    //       picture: '',
    //       name: '',
    //       timestamp: '',
    //       category: '',
    //       observation: ''
    //   }]
    // });
    // useEffect(() => {
    //   getHomeData().then(user => setUser(user))
    // })
    const user = useSelector((state: any) => state.user);

    return (
      <div>
        <div>
          Hello {user.name}
        </div>
        {/* <ObservationCards observations={user.recentObservations}/> */}
      </div>
    );
  }
  
  export default Home;