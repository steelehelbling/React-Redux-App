import axios from 'axios';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const fetchspell = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_SPELL_START' });
    axios
      .get('https://www.dnd5eapi.co/api/monsters/')
      .then(res => {
      
        console.log(res.data.results[1].name)
        console.log(res.data.results[getRandomIntInclusive(1, 300)].url)
        const apimake = res.data.results[getRandomIntInclusive(1, 300)].url;
      
        // dispatch({ type: 'FETCH_SPELL_SUCCESS', payload: res.data.results[getRandomIntInclusive(1, 300)].name});
      axios
      .get(`https://www.dnd5eapi.co${apimake}`)
      .then(res => {
        console.log(res.data.actions)
        
        console.log(res.data)
        dispatch({ type: 'FETCH_SPELL_SUCCESS', payload: res.data})
        
      })
      .catch(err => console.log(err.response));

      })
      .catch(err => console.log(err.response));


   };
};

export const updateTitle = newTitle => {
  return {};
};