import http from '../services/http';

export const userRegistration = async (user: any) => {
    const response = await http.post('/users/register', user);
    return handleResponse(response);
};

export const userLogin = async (credentials: any) => {
    try {
        const user = await http.post( '/users/authenticate', credentials);
        return handleResponse(user);
      } catch (error) {
        throw error;
      }
};

const handleResponse = (response: any) => {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
};

export const fakeLogin = async (credentials: any) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    };

    return fetch('http://localhost:4000/users/authenticate', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
};

export const fakeRegister = async (user: any) =>  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };

    return fetch(`http://localhost:4000/users/register`, requestOptions).then(handleResponse);
};
