// posts reducer
const postsReducerDefaultState = [];

const postsReducer = (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.post]; // adds a new item and returns a new array
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id);
    case 'EDIT_POST':
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates,
          };
        }
        return post;
      });
    default:
      return state;
  }
};

export default postsReducer;

