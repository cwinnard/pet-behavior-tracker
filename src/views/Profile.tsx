import { useEffect, useState } from 'react';

import { query } from '../api/clients/HasuraClient';
import dogsQuery from '../api/graphql/dogsQuery';


const Profile = () => {
  const [dogs, setDogs] = useState([{
    name: ''
  }]);

  // Array as second param so only run once
  useEffect(() => {
    query(dogsQuery).then((response: any) => {
      setDogs(response.data.dogs)
    });
  }, []);

  return (
    <div>
      Hello profile
      {dogs.map(dog => (
        <div>
          Hello {dog.name}
        </div>
      ))}
    </div>
  );
}
  
export default Profile;