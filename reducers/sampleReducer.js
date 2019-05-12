const state = {
    sample:'',
}

const sampleReducer = (state=state, action) => {
    switch(action.type){

        case 'CHANGE':
            return{
                ...state,
                sample: action.sample,
            };

        default:
            return { ...state };
    }
}

export default sampleReducer
