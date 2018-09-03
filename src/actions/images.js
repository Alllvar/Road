import * as actions from '../constants';

const fetch = window.fetch;
const KEY = '9797284-4a52a8537958550b9ce0d956f';

export const request = () => ({ type: actions.IMAGES_REQUEST });
export const receive = (entities, result = {}) => ({type: actions.IMAGES_RECEIVE, payload: { entities }});

export const fetchImages = ( searchTerms = {}) => async function (dispatch) {
    dispatch(request());

    const response = await fetch(`https://pixabay.com/api/?key=${KEY}&q=${searchTerms.query}&image_type=${searchTerms.type}&order=${searchTerms.order}&per_page=${searchTerms.per_page}&orientation=${searchTerms.orientation}&editors_choice=${searchTerms.editors_choice}&category=${searchTerms.category}&colors=${searchTerms.colors}`);
    const data = await response.json();
    dispatch(receive(data.hits));
};
