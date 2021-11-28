function foldingNav() {
    const sidebar = document.querySelector('.sidebar-items');
    sidebar.classList.toggle("hidden");

}

const items = document.querySelectorAll('.dropdown-arrow');
items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const closestUl = item.parentNode.querySelector('.sub-menus');
        closestUl.classList.toggle("hidden");
    })
});

if (window.location.href.indexOf('login.html') != -1){
    document.querySelector("#login").value = "";
    document.querySelector("#pass").value = "";
} else if (window.location.href.indexOf('register.html') != -1){
    document.querySelector("#login").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#pass").value = "";
    document.querySelector("#rpass").value = "";
}