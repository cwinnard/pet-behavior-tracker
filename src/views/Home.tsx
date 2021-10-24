import ObservationCard from '../components/ObservationCard';

import user from '../data/user.json';
import sortedObservations from '../data/sortedObservations.json';
import '../styles/Home.css';

const Home = () => {
    return (
      <div>
        <div>
          Hello {user.name}
        </div>
        <div className="observations-container">
          {sortedObservations.map((observation) => {
              return (
                  <ObservationCard
                    id={observation.id}
                    picture={observation.picture}
                    name={observation.observation}
                  />
              )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;