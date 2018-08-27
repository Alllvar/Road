import * as actions from '../constants';

const fetch = window.fetch;
const KEY = '9797284-4a52a8537958550b9ce0d956f';

export const request = () => ({ type: actions.IMAGES_REQUEST });
export const receive = (entities, result = {}) => ({type: actions.IMAGES_RECEIVE, payload: { entities }});

export const fetchImages = () => async function (dispatch) {
    dispatch(request());

    const response = await fetch(`https://pixabay.com/api/?key=${KEY}`);
    const { hits } = await response.json();

    dispatch(receive(hits));
};
