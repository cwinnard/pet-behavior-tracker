import { Card, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import '../styles/ObservationCard.css';

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
  
  export default ObservationCard;