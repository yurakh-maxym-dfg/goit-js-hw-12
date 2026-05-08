import{a as d,S as m,i as a}from"./assets/vendor-B9XTSgqu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="55689404-30812b5f2fcb74649db21ff43";function h(o){return d.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${i}" alt="${e}" />
            </a>

        <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${s}</p>
            <p class="info-item"><b>Comments</b> ${u}</p>
            <p class="info-item"><b>Downloads</b> ${f}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const v=document.querySelector(".form");function x(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();r&&(L(),S(),h(r).then(i=>{if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}).catch(i=>{a.error({message:"Sorry, some error just happen",position:"topRight"})}).finally(()=>{q()}))}v.addEventListener("submit",x);
//# sourceMappingURL=index.js.map
