import ajax from './apiConfig';

export const questionnaireSubmit = (data) => {
    return ajax.post('', data, { showLoading: true })
};
export const login = (data) => {
    return ajax.post('/app/login', data)
}