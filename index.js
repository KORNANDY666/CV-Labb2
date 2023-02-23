const button = document.querySelector("#btn");

const changeC = () =>{
    const C = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${C}`;
}
button.addEventListener("click",changeC);


