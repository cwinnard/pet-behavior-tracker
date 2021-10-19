import { Card } from '@mui/material';

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
                  <Card className="observation-card">
                      <img className="pet-avatar" src={observation.picture} />
                      Hello observation
                  </Card>
              )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;