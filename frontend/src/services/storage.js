const lst = localStorage.getItem('token');

export function getUsers() {
  return fetch('http://localhost:3000/customers').then((res) => res.json());
}

export function addUser(newUser) {
  return fetch('http://localhost:3000/customers/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  });
}

export function updateUser(user, updatedUser) {
  return fetch('http://localhost:3000/customers/update', {
    method: 'put',
    headers: { 'Content-Type': 'application/json', token: lst },
    body: JSON.stringify(user, updatedUser),
    //not sure that it's written correctly. build backend and check again
  });
}

export function signin(userSignin) {
  return fetch('http://localhost:3000/customers/signin', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      token: lst,
    },
    body: JSON.stringify(userSignin),
  });
}

export function getCards() {
  return fetch('http://localhost:3000/cards').then((res) => res.json());
}

export function addCard(newCard) {
  return fetch('http://localhost:3000/cards/create', {
    method: 'post',
    headers: { 'Content-Type': 'application/json', token: lst },
    body: JSON.stringify(newCard),
  });
}

export function getCardById(id) {
  return fetch('http://localhost:3000/cards/getmycardbyid?cardId=' + id, {
    headers: { token: lst },
  });
}

export function updateCard(id, card) {
  return fetch('http://localhost:3000/cards/updatecard?cardid=' + id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json', token: lst },
    body: JSON.stringify(card),
  });
}

export function deleteCard(id, name) {
  return fetch('http://localhost:3000/cards/deleteone?cardid=' + id, {
    method: 'delete',
    headers: { token: lst },
    body: JSON.stringify(name),
  });
}
