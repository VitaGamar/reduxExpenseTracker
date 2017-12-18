import {createRequestTypes, action, REQUEST, SUCCESS, FAILURE} from './../../utils/actions';

export const ADD_BILL = createRequestTypes('ADD_BILL');

export const addBill = {
    request: data => action(ADD_BILL[REQUEST], {data}),
    success: () => action(ADD_BILL[SUCCESS]),
    failure: error => action(ADD_BILL[FAILURE], {error})
};
