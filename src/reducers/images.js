import * as actions from '../constants';

const initialState = {
    entities: [],
    isFetching: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.IMAGES_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case actions.IMAGES_RECEIVE: {
            const { entities } = action.payload;

            return {
                entities,
                isFetching: false,
            };
        }

        default: {
            return state;
        }
    }
}
