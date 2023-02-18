fetch("../json/menu.json")
  .then((response) => response.json())
  .then((response) => menu(response.menu,response.icon));

const menu = (menu,icon) => {
  document.body.setAttribute("class","bg-black")
  
    let header = document.querySelector("header");
  let nav = document.querySelector("nav");
  let navDiv=document.createElement("div")
  nav.appendChild(navDiv)
  nav.setAttribute("class","w-10/12 m-auto flex items-center justify-between px-8 py-02")
  header.setAttribute(
    "class",
    "header sticky top-0 bg-transparent backdrop-blur-md shadow-md z-10"
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
  let iconA = document.createElement("a");
  

  //appendchild logo
  nav.appendChild(logoSpan);
  logoSpan.appendChild(logoA);
  logoA.appendChild(logo);
  nav.insertBefore(logoSpan, navDiv);

  //appendChild menu
  navDiv.appendChild(menUl);

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

//   appendchild icon
nav.appendChild(iconDiv)
iconDiv.setAttribute("class","w-3/12 flex justify-end gap-4")
Object.keys(icon.svg).map(elt=>{
    let iconSvg = document.createElement("svg");
    iconDiv.appendChild(iconSvg)
    Object
    multipleAttributes(iconSvg,icon.svg[elt])
})
};

const multipleAttributes = (elem, elemAttributes)=>{
    Object.keys(elemAttributes).forEach(attribute => {
    elem.setAttribute(attribute, elemAttributes[attribute]);
    });
}
