document.addEventListener('DOMContentLoaded', function() {
    const comics = [
        'body47-tb-framed.png',
        'gorgeous-tb-framed.png',
        'eden-tb-framed.png',
        'ai-job-tb-framed.png',
/*
        'corporate-tb-framed.png',
        'day-jobs-tb-framed.png',
        'adam-and-eve-tb-framed.png',
        'autodidact-tb-framed.png',
        'consent-tb-framed.png',
        'bitcoin-tb-framed.png',
        'body-part-tb-framed.png',
        'cardio-tb-framed.png',
*/
    ];
    currentIndex = comics.length - 1;
    
    const comicImg = document.getElementById('comic-img');
    const firstButton = document.getElementById('first');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const randomButton = document.getElementById('random');
    const lastButton = document.getElementById('last');

    firstButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex=0;
            firstButton.disabled=true;
            prevButton.disabled=true;
            lastButton.disabled=false;
            nextButton.disabled=false;            
            updateComic();
        }
    });

    lastButton.addEventListener('click', function() {
        if (currentIndex < comics.length - 1) {
            currentIndex=comics.length - 1;
            lastButton.disabled=true;
            nextButton.disabled=true;            
            firstButton.disabled=false;
            prevButton.disabled=false;
         updateComic();
        }
    });


    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            if (currentIndex==0) {firstButton.disabled=true; prevButton.disabled=true;}
            lastButton.disabled=false;
            nextButton.disabled=false;            

            updateComic();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < comics.length - 1) {
            currentIndex++;
            if (currentIndex==comics.length - 1) {lastButton.disabled=true; nextButton.disabled=true;}
            firstButton.disabled=false;
            prevButton.disabled=false;            
            updateComic();
        }
    });

    randomButton.addEventListener('click', function() {
        currentIndex = Math.floor(Math.random() * comics.length);
        if (currentIndex==comics.length - 1) {lastButton.disabled=true; 
                                              nextButton.disabled=true; 
                                              firstButton.disabled=false; 
                                              prevButton.disabled=false;}           
        else if (currentIndex==0) {lastButton.disabled=false; 
                                   nextButton.disabled=false; 
                                   firstButton.disabled=true; 
                                   prevButton.disabled=true;}           
        else {lastButton.disabled=false; 
              nextButton.disabled=false; 
              firstButton.disabled=false; 
              prevButton.disabled=false;} 
        updateComic();
    });

    function updateComic() {
        comicImg.src = comics[currentIndex];
    }
});
