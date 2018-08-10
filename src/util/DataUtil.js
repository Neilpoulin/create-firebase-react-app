import Immutable from 'immutable'

export function toJS(obj)
{
    if (!obj){
        return obj;
    }

    if (Immutable.Iterable.isIterable(obj)){
        return obj.toJS()
    }

    return obj;
}

export function removeEmptyKeys(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    for (var i = 0; i < propNames.length; i++) {
        var propName = propNames[i];
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
}