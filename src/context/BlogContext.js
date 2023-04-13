import createDataContex from "./createDataContex";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state,
                { title: `Blog Post #${state.length + 1}` }
            ];
        case 'edit_blogpost':
            return state;
        case 'detele_blogpost':
            return state;
        default:
            return state;
    };
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    };
};

export const { Context, Provider } = createDataContex(
    blogReducer, 
    { addBlogPost },
    [] 
);