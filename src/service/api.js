import ajax from './apiConfig';

export const questionnaireSubmit = (data) => {
    return ajax.post('', data, { showLoading: true })
};