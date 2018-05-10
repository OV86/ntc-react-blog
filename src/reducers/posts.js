// posts reducer
const postsReducerDefaultState = [];

// Sets the default state to an empty array is no argument given.
// Handles adding and deleting posts.
const postsReducer = (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      // adds a new item and returns a new array
      return [...state, action.post];
    case 'DELETE_POST':
      // filters our the deleted item and returns a new array
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
};

export default postsReducer;

