export let randomCharacter: number = Math.floor(Math.random() * 800);

export const apiUrl = `https://rickandmortyapi.com/api/character/${randomCharacter}`;

export const fetchCharacter = async (url: string) => {
    return fetch(url)
      .then(res => res.json());
  };