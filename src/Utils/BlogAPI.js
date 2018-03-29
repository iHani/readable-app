
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)
console.log(token);
const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

// export const get = (bookId) =>
// fetch(`${api}/books/${bookId}`, { headers })
// .then(res => res.json())
// .then(data => data.book)

export const getAllCategories = () =>
fetch(`${api}/categories`, { headers })
.then(res => res.json())

export const getAllPosts = () =>
fetch(`${api}/posts`, { headers })
.then(res => res.json())

export const getPost = (id) =>
fetch(`${api}/posts/${id}`, { headers })
.then(res => res.json())

export const getComments = (id) =>
fetch(`${api}/posts/${id}/comments`, { headers })
.then(res => res.json())


export const postPost = (post) => (
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ ...post }),
  })
  .then(res => res.json())
)

export const postComment = (comment) => (
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ ...comment }),
  })
  .then(res => res.json())
)

export const votePost = (id, option) => (
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ option }),
  })
  .then(res => res.json())
)

export const voteComment = (id, option) => (
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ option }),
  })
  .then(res => res.json())
)

//
// export const update = (book, shelf) =>
// fetch(`${api}/books/${book.id}`, {
//   method: 'PUT',
//   headers: {
//     ...headers,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ shelf })
// }).then(res => res.json())
//
// export const search = (query) =>
// fetch(`${api}/search`, {
//   method: 'POST',
//   headers: {
//     ...headers,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ query })
// }).then(res => res.json())
// .then(data => data.books)
