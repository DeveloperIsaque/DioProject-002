const BASE_URL = 'https://thatcopy.pw/catapi/rest';

const getCats = async () => {
    const data = await fetch(BASE_URL);
    const json = await data.json();
}