const footer = document.getElementsByTagName('footer');
const fecha = new Date().toLocaleDateString();
const parrafoFooter = document.createElement('p');
footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = fecha;
