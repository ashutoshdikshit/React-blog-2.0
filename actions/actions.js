export function createBlog(text) {
  return {
    type: 'CREATE_BLOG',
    text,
    date: Date.now()
  }
}
export function editBlog(id, text) {
  return {
    type: 'EDIT_Blog',
    id,
    text,
    date: Date.now()
  };
}
export function deleteBlog(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}

export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}