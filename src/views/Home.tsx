import ObservationCards from '../components/ObservationCards';

import user from '../data/user.json';
import sortedObservations from '../data/sortedObservations.json';
import '../styles/Home.css';

const Home = () => {
    return (
      <div>
        <div>
          Hello {user.name}
        </div>
        <ObservationCards observations={sortedObservations}/>
      </div>
    );
  }
  
  export default Home;