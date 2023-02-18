fetch("../json/products.json")
  .then((response) => response.json())
  .then((response) => productItem(response.products));

  const productItem = (items)=>{
     /*--------------------------------- Caroussel Section-----------------------*/
//caroussel section
let carousselSection = document.querySelector('#caroussel')
//variable caroussel
let carousselDivImg = document.createElement('div')
let carousselDivDescription = document.createElement('div')
let carousselImg = document.createElement('img')
let carousselText = document.createElement('h1')
let carousselBtn = document.createElement('button')


//appendChild caroussel 
carousselSection.append(carousselDivDescription,carousselDivImg)
carousselDivImg.appendChild(carousselImg)
carousselDivDescription.append(carousselText,carousselBtn)
carousselText.innerHTML="New arrival"
carousselBtn.innerHTML="Voir plus"

// set attribute caroussel
carousselSection.setAttribute("class","flex items-center justify-around bg-[#cd031d]")
carousselDivDescription.setAttribute("class","flex flex-col gap-8 items-center")
carousselText.setAttribute("class","text-5xl font-montserrat font-medium text-white")
carousselBtn.setAttribute("class","w-8/12 bg-white px-6 py-1 rounded-md font-montserrat font-bold text-red-900 hover:bg-yellow-500 active:bg-yellow-600" )

carousselImg.setAttribute("src","/image/nike.jpg")

/*--------------------------------- Last product Section-----------------------*/
let lastProduct=document.querySelector('#lastProduct')
let lastProductDiv=document.createElement('div')
let lastProductsTitle=document.createElement("h1")

//attribute
lastProduct.setAttribute("class","bg-white flex flex-col items-center pt-8")
lastProductDiv.setAttribute("class","flex  m-auto w-10/12 gap-4")
lastProductsTitle.setAttribute("class","font-montserrat font-medium text-2xl")


//appendchild
lastProduct.append(lastProductsTitle,lastProductDiv)
lastProductsTitle.innerHTML="New Product"


Object.keys(items).map((item)=>{
    let lastProductItem=document.createElement('div')
    let lastProductImg=document.createElement('img')
    let lastProductImgDiv=document.createElement('div')
    let lastProductEtoileDiv=document.createElement('div')
    let lastProductVoteSpan=document.createElement('span')

    lastProductItem.setAttribute("class","w-4/12 p-2 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-yellow-600 transition-all transform duration-500 mt-8")
    lastProductImg.setAttribute("src",items[item].image)
    lastProductImg.setAttribute("class","object-cover aspect-video")

    lastProductImgDiv.appendChild(lastProductImg)
    lastProductDiv.appendChild(lastProductItem)
    lastProductItem.append(lastProductImgDiv,lastProductEtoileDiv)
    for (let i = 0; i < 5; i++) {
        let lastProductEtoileIcon=document.createElement('i')
        lastProductEtoileDiv.append(lastProductEtoileIcon,lastProductVoteSpan)
        lastProductEtoileIcon.setAttribute("class","fa-regular fa-star text-red-800")
        lastProductEtoileIcon.setAttribute("style","--fa-border-color:red ")
        
    }
    lastProductEtoileDiv.setAttribute("class","flex items-center mt-2 mb-2")
    lastProductVoteSpan.setAttribute("class","bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3")
    lastProductVoteSpan.innerHTML=items[item].vote
})

  }
//   <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>