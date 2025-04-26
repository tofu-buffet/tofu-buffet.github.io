document.addEventListener('DOMContentLoaded', function() {
    const comics = [
'chinese-food-tb-framed.png',
'jesus-tb-framed.png',
'norse-tb-framed.png',
'just-friends-tb-framed.png',
'acceptable-tb-framed.png',
'ai-job-tb-framed.png',
'best-case-tb-framed.png',
'blaming-tb-framed.png',
'body-part-tb-framed.png',
'body47-tb-framed.png',
'but-it-moves-tb-framed.png',
'cardio-tb-framed.png',
'cave-tb-framed.png',
'cockatiel-tb-framed.png',
'contrarian-tb-framed.png',
'free-speech-tb-framed.png',
'french-tb-framed.png',
'gaslighting2-tb-framed.png',
'gemini-tb-framed.png',
'hegemony-charge-tb-framed.png',
'gorgeous-tb-framed.png',
'holier-tb-framed.png',
'gulls-tb-framed.png',
'hospital-tb-framed.png',
'land-tb-framed.png',
'management-tb-framed.png',
'love-and-understanding-tb-framed.png',
'monk-tb-framed.png',
'meteor-tb-framed.png',
'motivation-tb-framed.png',
'narc3-tb-framed.png',
'automation-tb-framed.png',
'china-cheaper-tb-framed.png',
'deepfake-tb-framed.png',
'red-flag-tb-framed.png',
'okeefe-tb-framed.png',
'paige-tb-framed.png',
'passive-aggressive-tb-framed.png',
'pedantophile-tb-framed.png',
'personality-tb-framed.png',
'players-tb-framed.png',
'probably-not-tb-framed.png',
'privilege-tb-framed.png',
'prostitutes-tb-framed.png',
'rich-people-tb-framed.png',
'secretly-tb-framed.png',
'san-francisco-tb-framed.png',
'satan-tb-framed.png',
'rest-assured-tb-framed.png',
'role-model-tb-framed.png',
'ruby-tb-framed-white.png',
'sayit-tb-framed.png',
'shameless-plug-tb-framed.png',
'significantly-tb-framed.png',
'rich-tb-framed.png',
'stomachs-tb-framed.png',
'testimony.png',
'too-much-art-tb-framed.png',
'veni-tb-framed.png',
'trust-anybody-tb-framed.png',
'with-us-tb-framed.png',
'who-they-really-are-tb-framed.png',
'wonder-tb-framed.png',
'wrongdoing-tb-framed.png',
'racist-baby-tb-framed.png',
'ride-this-ride-tb-framed.png',
'straws-tb-framed.png',
'sugar-baby-tb-framed.png',
'yakistani-tb-framed.png',
'height-tb-framed.png',
'joie-tb-framed.png',
'work-life-tb-framed.png',
'tofu-buffet-cover.png'
    ];
    currentIndex = comics.length - 1; 
    
    const comicImg = document.getElementById('comic-img');
    const comicNumber = document.getElementById('comic-number'); // Added this line
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
    // * 95);
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
        comicNumber.textContent = `[ ${currentIndex + 1} / ${comics.length} ]`;
    }
});
