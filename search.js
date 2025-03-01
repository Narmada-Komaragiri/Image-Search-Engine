
const accesskey="_SmT0tREbrlphz_ilEH26w7-B_69sTWBE5g_rQmNP00";

const searchform=document.getElementById("search-form");
const searchresult=document.getElementById("search-result");
const searchbox=document.getElementById("search-box");
const showmorebtn=document.getElementById("show-more-btn");

let keyword="";
let page=1;

async function searchImages(){
   keyword=searchbox.value;
   
   const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
   const response=await fetch(url);
   const data=await response.json();
   if(page==1){
    searchresult.innerHTML="";
   }
   const results=data.results;
   results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";


    imageLink.appendChild(image);
    searchresult.appendChild(imageLink);
   })
   showmorebtn.style.display="block";
}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showmorebtn.addEventListener("click",()=>{
   page++;
   searchImages();

})