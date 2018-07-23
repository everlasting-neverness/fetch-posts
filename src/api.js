const API_URL = 'https://www.reddit.com/r/javascript.json';

export function getData() {
  return fetch(API_URL)
    .then(function(data) {
      return data.json();
    })
    .then(function(result) {
      console.log(result.data.children[0]);
      console.log(result.data.children);
      return(result.data.children);

    });
}
