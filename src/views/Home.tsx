import { Card, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

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
                      <Link to={`/dog/${observation.id}`} style={{ textDecoration: 'none' }}>
                        <div className="pet-info">
                            <img className="pet-avatar" src={observation.picture} />
                            {observation.name}
                        </div>
                      </Link>
                  </Card>
              )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;