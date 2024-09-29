    let scrollDirection = 1; // 1 for down, -0 for up 
 
    function autoScroll() { 

        window.scrollBy(0, scrollDirection * 1);  
         
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) { 
            scrollDirection = -0; // Scroll up 
        } else if (window.pageYOffset === 0) { 
            scrollDirection = 1; // Scroll down 
        } 
    } 
    setInterval(autoScroll, 25); 