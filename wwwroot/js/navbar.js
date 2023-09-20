function update_navbar () {
    var current_url = window.location.href;
    console.log(current_url);
    var current_page = current_url.split("/")[3];
    var navbar_items = document.getElementsByClassName("nav-link item");
    var idx;
    console.log(current_page);
    switch (current_page) {
        case "":
            idx = 0;
            break;
        case "News":
            idx = 1;
            break;
        case "About":
            idx = 2;
            break;
        case "Voting":
            idx = 3;
            break;
        case "Ranking":
            idx = 4;
            break;
        default:
            idx = 5;
    }
    console.log(idx);
    console.log(navbar_items);
    for (let i = 0; i < navbar_items.length; i++) {
        if (i===idx) {
            navbar_items[i].classList.add("blue-color");
        }
        else {
            navbar_items[i].classList.remove("blue-color");
        }
    }
}

window.addEventListener('load', update_navbar);