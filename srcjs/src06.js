let scrollerID;
let speed = 5; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 5;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0, 1);
    }, interval);
    return id;
}
scrollerID = startScroll();