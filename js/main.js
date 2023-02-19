// var products  = []
// fetch("../json/products.json")
//   .then((response) => response.json())
//   .then((response) => {
//     products = response.products;
//     render_items();

//   });

// const render_items = () => {
//   products.forEach(prd => {
//     let temp = document.getElementById('#product-item');
//     var clon = temp.content.cloneNode(true);
    
//   })
  
  
// }
import { notif } from './header.js';



fetch("../json/products.json")
  .then((response) => response.json())
  .then((response) => productItem(response.products));

/*--------------------------------- Caroussel Section-----------------------*/
  //caroussel section
  let carousselSection = document.querySelector("#caroussel");
  //variable caroussel
  let carousselDivImg = document.createElement("div");
  let carousselDivDescription = document.createElement("div");
  let carousselImg = document.createElement("img");
  let carousselText = document.createElement("h1");
  let carousselBtn = document.createElement("button");

  //appendChild caroussel
  carousselSection.append(carousselDivDescription, carousselDivImg);
  carousselDivImg.appendChild(carousselImg);
  carousselDivDescription.append(carousselText, carousselBtn);
  carousselText.innerHTML = "New arrival";
  carousselBtn.innerHTML = "Voir plus";

  // set attribute caroussel
  carousselSection.setAttribute(
    "class",
    "flex items-center justify-around bg-[#cd031d]"
  );
  carousselDivDescription.setAttribute(
    "class",
    "flex flex-col gap-8 items-center"
  );
  carousselText.setAttribute(
    "class",
    "text-5xl font-montserrat font-medium text-white"
  );
  carousselBtn.setAttribute(
    "class",
    "w-8/12 bg-white px-6 py-1 rounded-md font-montserrat font-bold text-red-900 hover:bg-yellow-500 active:bg-yellow-600"
  );

  carousselImg.setAttribute("src", "/image/nike.jpg");

  /*--------------------------------- Last product Section-----------------------*/
  let lastProduct = document.querySelector("#lastProduct");
  let lastProductDiv = document.createElement("div");
  let lastProductsTitle = document.createElement("h1");

  //attribute
  lastProduct.setAttribute("class", "bg-white flex flex-col items-center pt-8 gap-12");
  lastProductDiv.setAttribute("class", "flex  m-auto w-10/12 gap-4");
  lastProductsTitle.setAttribute(
    "class",
    "font-montserrat font-medium text-2xl"
  );

  //appendchild
  lastProduct.append(lastProductsTitle, lastProductDiv);
  lastProductsTitle.innerHTML = "New Product";
  let cartCount =0

const productItem = (items) => {
  Object.keys(items).map((item) => {
    let lastProductItem = document.createElement("div");
    let lastProductImg = document.createElement("img");
    let lastProductImgDiv = document.createElement("div");
    let lastProductEtoileDiv = document.createElement("div");
    let lastProductVoteSpan = document.createElement("span");
    let stars = []
    let starsCalc=[]

    lastProductItem.setAttribute(
      "class",
      "w-4/12 p-2 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all transform duration-500 "
    );
    lastProductImg.setAttribute("src", items[item].image);
    lastProductImg.setAttribute("class", "object-cover aspect-video");

    lastProductImgDiv.appendChild(lastProductImg);
    lastProductDiv.appendChild(lastProductItem);

    
    for (let i = 0; i < 5; i++) {
      let lastProductEtoileIcon = document.createElement("i");
      lastProductEtoileDiv.append(lastProductEtoileIcon, lastProductVoteSpan);
      lastProductEtoileIcon.setAttribute(
        "class",
        "fa-regular fa-star text-red-800"
      );
      stars.push(lastProductEtoileIcon)
      lastProductEtoileIcon.addEventListener("mouseover", () => {
        for (let j = 0; j <= i; j++) {
          stars[j].setAttribute("class", "fa-solid fa-star text-red-800");
        }
      });

      lastProductEtoileIcon.addEventListener("mouseout", () => {
        for (let j = 0; j <= i; j++) {
          stars[j].setAttribute("class", "fa-regular fa-star text-red-800");
        }
      });

      // add event listener to star element to track click state
      lastProductEtoileIcon.addEventListener("click", () => {
        starsCalc.push(i + 1);
        let average = 0;
        if (starsCalc.length > 0) {
          average = starsCalc.reduce((a, b) => a + b, 0) / starsCalc.length;
        }
        lastProductVoteSpan.innerHTML = isNaN(average) ? 0 : average.toFixed(1);
      })
    }

    lastProductEtoileDiv.setAttribute("class", "flex items-center mt-2 mb-2");
    lastProductVoteSpan.setAttribute(
      "class",
      "bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded ml-3"
    );
    lastProductVoteSpan.innerHTML = items[item].vote;
    let lastProductAddPriceDiv = document.createElement("div");
    let lastProductAddbtn = document.createElement("button");
    let lastProductPrice = document.createElement("span");
    lastProductAddPriceDiv.append(lastProductPrice, lastProductAddbtn);
    lastProductItem.append(
      lastProductImgDiv,
      lastProductEtoileDiv,
      lastProductAddPriceDiv
    );
    lastProductPrice.innerHTML = `${items[item].price} MAD`;
    lastProductAddbtn.innerHTML = "Add to cart";

    lastProductAddPriceDiv.setAttribute(
      "class",
      "mx-2 flex justify-between items-center"
    );
    lastProductPrice.setAttribute(
      "class",
      "block text-xl font-semibold text-gray-700 cursor-auto"
    );
    lastProductAddbtn.setAttribute(
      "class",
      "text-lg block font-semibold py-2 px-6 text-red-100 hover:text-white bg-red-700 rounded-lg shadow hover:shadow-md transition duration-300"
    );

    lastProductAddbtn.addEventListener("click",(e)=>{
      e.preventDefault();
      if (!items[item].isAdded){
        items[item].isAdded=true
        notif.innerHTML=++cartCount;
        if (cartCount===1){notif.style.visibility="visible"}
      }
      
    })
  });
};

let otherProduct=document.createElement('button')
lastProduct.appendChild(otherProduct)
otherProduct.innerHTML="Other Product"
otherProduct.setAttribute("class","px-8 py-2 bg-red-700 text-white rounded-md mb-8")