const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)
const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

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

export const deletePost = (id) => (
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: { ...headers }
  })
  .then(res => res.json())
)

export const editPost = (id, post) => {
  return (
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: { ...headers },
    body: JSON.stringify({ ...post }),
  })
  .then(res => res.json())
)}

export const deleteComment = (id) => (
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: { ...headers }
  })
  .then(res => res.json())
)

export const editComment = (id, comment) => {
  return (
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: { ...headers },
    body: JSON.stringify({ ...comment }),
  })
  .then(res => res.json())
)}

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
