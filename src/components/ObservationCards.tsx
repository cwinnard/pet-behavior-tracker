import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

import '../styles/ObservationCards.css';

const ObservationCard = ({ id, picture = null, name, date }) => {
    return (
        <Card className="observation-card">
            <Link to={`/dog/${id}`} style={{ textDecoration: 'none' }}>
            <div className="pet-info">
                {picture && <img className="pet-avatar" src={picture} />}
                {name}
                {date}
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
                        date={observation.timestamp}
                    />
                )
            })}
        </div>
      )
  }
  
  export default ObservationCards;