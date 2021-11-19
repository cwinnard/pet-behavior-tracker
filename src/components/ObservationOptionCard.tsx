const ObservationOptionCard = ({ name, image, onClick }) => {
    return (
      <div onClick={onClick}>
          Hello {name}
      </div>
    );
  }
  
  export default ObservationOptionCard;