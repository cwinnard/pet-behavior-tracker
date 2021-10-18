import { useParams } from 'react-router';

import dogs from '../data/dogs.json';


const PetOverview = () => {
  // TSTODO
  const { id } = useParams() as any;
  const dog = dogs.find(dog => dog.id === id) as any;
  return (
    <div>
      <div>
        Hello {dog.name} id {id}
      </div>
    </div>
  );
}
  
  export default PetOverview;