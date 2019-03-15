document.querySelector('.search').addEventListener('click', () => {
  const name = document.querySelector('.name').value;
  document.querySelector('.result').innerHTML = '';
  fetch(`/search?name=${name}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('he said not to do this');
    })
    .then(user => {
      if (user == null) {
        document.querySelector(
          '.result'
        ).innerHTML = `<p>${name} not found</p>`;
      } else {
        document.querySelector('.result').innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Age: ${user.age}</p>`;
      }
    });
});
document.querySelector('.addBtn').addEventListener('click', () => {
  const name = document.querySelector('.addName').value;
  const age = document.querySelector('.addAge').value;
  if (name & age) {
    fetch('/', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ name, age })
    });
  }
});
