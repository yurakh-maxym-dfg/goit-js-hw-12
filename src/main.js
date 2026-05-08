'use strict';

import { getImagesByQuery } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector('.form');

function onSubmit(event) {
    event.preventDefault();
    const query = event.currentTarget.elements['search-text'].value.trim();

    if (!query) return;

    clearGallery();
    showLoader()
    
    getImagesByQuery(query)
        .then((data) => {
        if (data.hits.length === 0) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: "topRight"
        });
        return;
            }
            createGallery(data.hits);
        })
        .catch((data) => {
            iziToast.error({
                message: 'Sorry, some error just happen',
                position: "topRight"
            })                
        })
        .finally(() => {
                    hideLoader();
                });
}

form.addEventListener('submit', onSubmit);

