fetch("../json/menu.json")
  .then((response) => response.json())
  .then((response) => menu(response.menu,response.icon));

  let header = document.querySelector("header");
  let nav = document.querySelector("nav");
  let navDiv=document.createElement("div")
  nav.appendChild(navDiv)
  nav.setAttribute("class","w-10/12 m-auto flex items-center justify-between px-8 py-02")
  header.setAttribute(
    "class",
    "header sticky top-0 bg-black backdrop-blur-md shadow-md z-10"
  );
  navDiv.setAttribute("class", "nav font-montserrat text-white font-semibold text-lg te");
  //create element
  //logo
  let logoSpan = document.createElement("span");
  logoSpan.classList.add("w-3/12");
  let logoA = document.createElement("a");
  logoA.setAttribute("href", "/index.html");

  let logo = document.createElement("img");
  logo.classList.add("w-[100px]");
  logo.setAttribute("src", "../image/shopping.png");

  // menu
  let menUl = document.createElement("ul");
  menUl.setAttribute("class", "flex items-center");

  //icon
  let iconDiv = document.createElement("div");
  

  //appendchild logo
  nav.appendChild(logoSpan);
  logoSpan.appendChild(logoA);
  logoA.appendChild(logo);
  nav.insertBefore(logoSpan, navDiv);

  //appendChild menu
  navDiv.appendChild(menUl);
const menu = (menu,icon) => {
  Object.keys(menu).map((elt) => {
    let menuLi = document.createElement("li");
    let menuA = document.createElement("a");
    menUl.appendChild(menuLi);
    menuLi.appendChild(menuA);
    menuA.textContent = elt;
    menuA.setAttribute("href", menu[elt]);
    menuLi.setAttribute(
      "class",
      "p-4 border-b-2 border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:text-yellow-500 duration-200 cursor-pointer"
    );
  });

};
//   appendchild icon
nav.appendChild(iconDiv)
iconDiv.setAttribute("class","w-3/12 flex justify-end items-center gap-4")

let iconSvg1 = document.createElement("svg");
let iconSvg2 = document.createElement("svg");
iconDiv.append(iconSvg1,iconSvg2)
iconSvg1.setAttribute("class","search p-1 text-white hover:text-yellow-500 cursor-pointer duration-200 fa-solid fa-magnifying-glass fa-xl")
iconSvg2.setAttribute("class"," shopping-cart relative p-1 text-white hover:text-yellow-500 duration-200 fa-solid fa-cart-shopping fa-xl cursor-pointer")


let shoppingSvg=document.querySelector('.shopping-cart')
const notif=document.createElement('span')
shoppingSvg.appendChild(notif)
notif.setAttribute("class","absolute -top-4 right-1 rounded px-1 py-1.5 bg-red-800 text-white text-[10px] ")
notif.innerHTML=0
notif.style.visibility="hidden"

let profil=document.createElement('img')
let profilA=document.createElement('a')
profil.setAttribute("src","../image/profile.png")
profil.setAttribute("class","w-[50px]")
iconDiv.appendChild(profilA)
profilA.appendChild(profil)
profilA.setAttribute("href","../html/admin.html")


export { notif };
