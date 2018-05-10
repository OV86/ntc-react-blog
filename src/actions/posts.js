import moment from 'moment';

// add post action generator. Returns an object that gets passed to the reducer
export const addPost = (
  {
    userId = '',
    id = '',
    title = '',
    body = '',
    createdAt = moment().format('ddd, MMM Do YYYY, h:mm:ss a'), // generate current date time
  } = {}) => (
    {
      type: 'ADD_POST',
      post: {
        userId,
        id,
        title,
        body,
        createdAt,
      },
    });

// delete post action generator. Returns an object that gets passed to the reducer
export const deletePost = ({ id }) => ({
  type: 'DELETE_POST',
  id,
});

// edit post action generator. Returns an object that gets passed to the reducer
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates,
});
