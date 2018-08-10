import {fromJS, Iterable} from 'immutable'


// eslint-disable-next-line no-unused-vars
function immutableAction({ getState }) {
    return (next) => (action) => {
        let returnValue = action
        if (!action){
            return next(action)
        }
        try{
            if (action.type.indexOf('@@') === 0){
                return next(action)
            }
            // Call the next dispatch method in the middleware chain.
            let {payload} = action
            let transformed = payload;
            if (transformed && !Iterable.isIterable(transformed)){
                transformed = fromJS(transformed)
            }
            if (transformed){
                action.payload = transformed
            }

            return next(action)
        }
        catch (e){
            console.error(e)
        }
        return returnValue
    }
}

export default immutableAction;
