export const apiUrl = `https://rickandmortyapi.com/api/character/`;

export const fetchCharacter = async (url: string) => {
    return fetch(url).then(res => res.json());
};