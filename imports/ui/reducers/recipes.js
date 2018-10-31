const recipes = (state = [], action) => {  
    switch (action.type) {
      case 'GET_RECIPES':
        return action.payload;
      case 'CREATE_RECIPE':
        const { name, _id } = action.payload;
  
        return [
          ...state,
          { name, _id }
        ]
      default:
        return state
    }
  }
  
  export default recipes