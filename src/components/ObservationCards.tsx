import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

import '../styles/ObservationCards.css';

const ObservationCard = ({ id, picture, name }) => {
    return (
        <Card className="observation-card">
            <Link to={`/dog/${id}`} style={{ textDecoration: 'none' }}>
            <div className="pet-info">
                <img className="pet-avatar" src={picture} />
                {name}
            </div>
            </Link>
        </Card>
    );
  }

  const ObservationCards = ({ observations }) => {
      return (
        <div className="observations-container">
            {observations.map((observation) => {
                return (
                    <ObservationCard
                        id={observation.id}
                        picture={observation.picture}
                        name={observation.observation}
                    />
                )
            })}
        </div>
      )
  }
  
  export default ObservationCards;