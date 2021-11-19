import '../styles/ObservationOptionCards.css';

const ObservationOptionCard = ({ name, image, onClick }) => {
    return (
      <div
        className="option-card"
        onClick={onClick}>
          {name}
      </div>
    );
}

const ObservationOptionCards = ({ options }) => {
  return (
    <div className="observation-options-container">
      {options.map(option => (
          <ObservationOptionCard
            name={option.name}
            image={option.image}
            onClick={option.onClick}
          />
      ))}
  </div>
  );
}
  
export default ObservationOptionCards;