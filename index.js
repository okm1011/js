const title = document.querySelector("#title");
const CLASS = "clicked";
function handleclick() {
  const c__cname = title.className;
  if (c__cname !== CLASS) {
    c__cname = CLASS;
  } else {
    c__cname = "";
  }
}

function init() {
  title.addEventListener("click", handleclick);
}
init();
