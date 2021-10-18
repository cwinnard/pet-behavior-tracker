import user from '../data/user.json';
import dogs from '../data/dogs.json'

const Profile = () => {
    return (
      <div>
        <div>
          Hello {user.name}
        </div>
        <p>
          Your Dogs
        </p>
        <div>
          {dogs.map((dog) => (
            <p>
              {dog.name}
            </p>
          ))}
        </div>
      </div>
    );
  }
  
  export default Profile;