const css = `
body, tr, th, td, ul, a, li, ltr, class{
    background-color: black !important;
    color: #ffffff !important;
  }
button, input, select, textarea, {
    background-color: #bb86fc;
}
div, span{
    background-color: black !important;
    color: #b1e66c !important;

}
h1, h2, h3, h4, h5, h6, p, span, li {
    color: #ffffff !important;
}

`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

