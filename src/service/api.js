import { instance } from './apiConfig';

export const questionnaireSubmit = (data) => {
    return instance.post('', data)
};