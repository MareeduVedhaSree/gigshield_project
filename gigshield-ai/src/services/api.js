const API_BASE_URL = 'http://localhost:9999/api';

export const api = {
    signup: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return response.json();
    },
    
    login: async (credentials) => {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        return response.json();
    },
    
    getWallet: async (username) => {
        const response = await fetch(`${API_BASE_URL}/wallet/balance?username=${username}`);
        return response.json();
    }
};