import * as constants from '../constants';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case constants.ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch(action.type) {
        case constants.ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {
    switch(action.type) {
        case constants.ITEMS_FETCH_DATA_SUCCESS:
            return action.items;
        default:
            return state;
    }
}
