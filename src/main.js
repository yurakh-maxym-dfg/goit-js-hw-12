'use strict';

import { getImagesByQuery } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');


let page = 1;
let query = '';
let totalPages = 0;
const perPage = 15;

async function onSubmit(event) {
    event.preventDefault();
    query = event.currentTarget.elements['search-text'].value.trim();
    page = 1;

    if (!query) return;

    hideLoadMoreButton();
    clearGallery();
    showLoader();
    
    try {
        const data = await getImagesByQuery(query, page)
        
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topRight"
            });
            return;
        }

        totalPages = Math.ceil(data.totalHits/ perPage);
        
        createGallery(data.hits);
        page = 2;
        if (totalPages > 1) {
        showLoadMoreButton();
        }
    } catch (error) {
        iziToast.error({
            message: 'Sorry, some error just happen',
            position: "topRight"
        });                
     } finally {
        hideLoader();
            }
}
async function onLoad(event) {
    showLoader();

    
    try {
        const data = await getImagesByQuery(query, page);
        createGallery(data.hits);
        const firstCard = document.querySelector(".gallery-item");
        const cardHeight = firstCard.getBoundingClientRect().height;
        if (!firstCard) return;
        window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
        });
        if (page >= totalPages) {
            hideLoadMoreButton();
            iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight'
            })
            return;    
        }
        page += 1;
    } catch (error) {
        iziToast.error({
            message: 'Sorry, some error just happen',
            position: "topRight"
        });                
    } finally {
        hideLoader();
    }
    
}

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoad);

