function resize_frame () {
    const frame = document.getElementsByClassName("stamp-frame");
    for (var i=0; i<frame.length; i++) {
        f = frame[i];

        const img = f.getElementsByClassName("stamp-img")[0];
        console.log(f.offsetWidth);
        img.style.width = f.offsetWidth*81/100+"px";
        const height = img.offsetHeight *100/83 +"px";
        f.style.height = height;
    }
}

window.addEventListener('load', resize_frame);
window.addEventListener('resize', resize_frame);