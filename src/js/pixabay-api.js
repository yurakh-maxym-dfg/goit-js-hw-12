'use strict';

import axios from 'axios';

const pixUrl = 'https://pixabay.com/api/';
const pixKey = '55689404-30812b5f2fcb74649db21ff43';

export async function getImagesByQuery(query, page) {
    const response = await axios.get(pixUrl, {
            params: {
                key: pixKey,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page,
                per_page: 15,
            }
        })
    return response.data;

}