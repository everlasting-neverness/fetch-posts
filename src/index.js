import { getData } from './api.js';

let root = document.getElementById('root');

function loading() {
  let loading = document.createElement('p');
  loading.innerText = 'Loading...';
  document.body.appendChild(loading);
  console.log('load');
}

loading();

function emptyElement(el) {
  while (el.firstChild) {
    el.firstChild.remove()
  }
}

function renderData(posts) {
  emptyElement(root);
  console.log(posts.length);
  posts.forEach(post => {
    let div = document.createElement('div');
    div.classList.add('post');
    div.innerText = post.data.title;
    let button = document.createElement('button');
    button.style = "display: inline-block; margin-left: 20px; font-size: 15 px;"
    button.innerText = 'X';
    button.id = post.data.id;
    button.addEventListener('click', function(e) {
      console.log(e.target.id);
      console.log(posts.length);
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].data.id === e.target.id) {
          console.log(posts[i]);
          posts.splice(i, 1);
        }
      }
      console.log(posts.length);
      renderData(posts);
    });
    div.appendChild(button);
    root.appendChild(div);
  });
  let p = document.querySelector('p');
  if (p) {
    p.remove();
  }
}

getData().then(posts => {
  data = posts;
  renderData(data);
});

let data = null;
