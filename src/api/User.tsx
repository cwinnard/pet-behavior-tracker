import user from './data/user.json';

export const getHomeData = () => {
    return Promise.resolve(user);
}
