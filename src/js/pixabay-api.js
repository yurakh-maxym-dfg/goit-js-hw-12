'use strict';

import axios from 'axios';

const pixUrl = 'https://pixabay.com/api/';
const pixKey = '55689404-30812b5f2fcb74649db21ff43';

export function getImagesByQuery(query) {
    return axios
        .get(pixUrl, {
            params: {
                key: pixKey,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            }
        })
        .then((response) => {
            return response.data;
        });
};