import Immutable from 'immutable'

const initialState = Immutable.fromJS({

})

export default function reducer(state=initialState, action){
    switch(action.type){

        default:
            break
    }
    return state
}

export function testAddFunction(a, b){
    return a + b;
}