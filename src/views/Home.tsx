import user from '../data/user.json';

const Home = () => {
    return (
      <div>
        <div>
          Hello {user.name}
        </div>
      </div>
    );
  }
  
  export default Home;