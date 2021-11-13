import dogs from './data/dogs.json';


const defaultDog = {
    id:'',
    name: '',
    rescue: '',
    picture: '',
    age: '',
    observations: []
  };

export const getDogOverview = (id) => {
    const dog = dogs.find(dog => dog.id === id);
    return Promise.resolve(dog || defaultDog);
}

export const makeObservation = ({ dogId, category, observation }) => {
  Promise.resolve();
}