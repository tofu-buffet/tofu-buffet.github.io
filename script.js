document.addEventListener('DOMContentLoaded', function() {
    const comics = [
        'body47-tb-framed.png',
        'gorgeous-tb-framed.png',
        'eden-tb-framed.png',
        'ai-job-tb-framed.png',
        'autodidact-tb-framed.png',
        'land-tb-framed.png',
        'hospital-tb-framed.png',
        'yakistani-tb-framed.png',
        'straws-tb-framed.png',
        'bitcoin-tb-framed.png',
        'body-part-tb-framed.png',
        'cardio-tb-framed.png',
        'corporate-tb-framed.png',
        'day-jobs-tb-framed.png',
        'eaten-tb-framed.png',
        'flying-cars-tb-framed.png',
        'french-tb-framed.png',
        'shameless-plug-tb-framed.png',
        'gaslighting2-tb-framed.png',
        'satan-tb-framed.png',
        'gemini-tb-framed.png',
        'girlfriend-tb-framed.png',
        'gladly-tb-framed.png',
        'gulls-tb-framed.png',
        'height-tb-framed.png',
        'love-and-understanding-tb-framed.png',
        'prostitutes-tb-framed.png',
        'management-tb-framed.png',
        'meteor-tb-framed.png',
        'stomachs-tb-framed.png',
        'paige-tb-framed.png',
        'norse-tb-framed.png',
        'testimony.png',
        'privilege-tb-framed.png',
        'racist-baby-tb-framed.png',
        'really-tb-framed.png',
        'rest-assured-tb-framed.png',
        'best-case-tb-framed.png',
        'rich-people-tb-framed.png',
        'sayit-tb-framed.png',
        'secretly-tb-framed.png',
        'feelings-tb-framed.png',
        'consent-tb-framed.png',
        'normal-tb-framed.png',
        'offensive-tb-framed.png',
        'pedantophile-tb-framed.png',
        'players-tb-framed.png',
        'significantly-tb-framed.png',
        'type-tb-framed.png',
        'veni-tb-framed.png',
        'with-us-tb-framed.png',
 /*
        'whythanks1-tb-framed.png',
        'whythanks2-tb-framed.png',
        'whythanks3-tb-framed.png',
        'validate-tb-framed.png',
        'wonder-tb-framed.png',
        'stuck-tb-framed.png',
        'words-tb-framed.png',
        'yellow-fever-tb-framed.png',
        'yes-tb-framed.png',
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
