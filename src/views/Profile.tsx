import { useEffect, useState } from 'react';

import { query } from '../api/clients/HasuraClient';
import dogsQuery from '../api/graphql/dogsQuery';


const Profile = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    query(dogsQuery).then((response) => {
      console.log(response);
      setDogs([])
    })
  }, [])
  return (
    <div>
      Hello profile
    </div>
  );
}
  
export default Profile;