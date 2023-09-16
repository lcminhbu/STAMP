function init_slide_show(image_urls) {
    banner = document.getElementById("slideshow-container");
    for (var i = 0; i < image_urls.length; i++) {
        let slide = document.createElement("div");
        slide.classList.add("slide");
        slide.innerHTML = `<img src="${image_urls[i]}">
        `
        banner.appendChild(slide);
    }

    slide_show();
}

let slide_index = 0;

function slide_show() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        if (i === slide_index) {
            slides[i].style.opacity = 1;
        }
        else {
            slides[i].style.opacity = 0;
        }
    }
    slide_index = (slide_index + 1) % slides.length;
    setTimeout(slide_show, 3000);
}