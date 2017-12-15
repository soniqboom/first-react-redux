import * as constants from '../constants';

export const itemsHasErrored = (bool) => ({type: constants.ITEMS_HAS_ERRORED, hasErrored: bool});
export const itemsIsLoading = (bool) => ({type: constants.ITEMS_IS_LOADING, isLoading: bool});
export const itemsFetchDataSuccess = (items) => ({type: constants.ITEMS_FETCH_DATA_SUCCESS, items});

export const itemsFetchData = (url) => (dispatch) => {
    dispatch(itemsIsLoading(true));
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(itemsIsLoading(false));

            return response;
        })
        .then(response => response.json())
        .then(items => dispatch(itemsFetchDataSuccess(items)))
        .catch(() => dispatch(itemsHasErrored(true)));
}
