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
        'yes-tb-framed.png',
        'whythanks1-tb-framed.png',
        'whythanks2-tb-framed.png',
        'whythanks3-tb-framed.png',
        'chinese-food-tb-framed.png',
        'elect-tb-framed.png',
        'automation-tb-framed.png',
        'wonder-tb-framed.png',
        'words-tb-framed.png',
        '9-9-6-tb-framed.png',
        'police-tb-framed.png',
        'san-francisco-tb-framed.png',
        'blaming-tb-framed.png',
        'chewbacca-tb-framed.png',
        'metric-tb-framed.png',
        'cardiac-tb-framed.png',
        'americans-tb-framed.png',
        'statues-tb-framed.png',
        'pray-tb-framed.png',
        'pareto-tb-framed.png',
        'analogy-tb-framed.png',
        'cryptographer-tb-framed.png',
        'eel-tb-framed.png',
        'holier-tb-framed.png',
        'gradient-tb-framed.png',
        'probably-not-tb-framed.png',
        'but-it-moves-tb-framed.png',
/*
        'alone-tb-framed.png',
        'hegemon-tb-framed.png',
        'jacket-tb-framed.png',
        'kierkegaard-tb-framed.png',
        'verify-tb-framed.png',
        'after-tb-framed.png',
        'anxiety-tb-framed.png',
        'appropriation-tb-framed.png',
        'argue-tb-framed.png',
        'artist-tb-framed.png',
        'askme-tb-framed.png',
        'ask-tb-framed.png',
        'awkward-tb-framed.png',
        'bedtime-tb-framed.png',
        'beg-tb-framed.png',
        'booty-tb-framed.png',
        'briefing-tb-framed.png',
        'call-tb-framed.png',
        'careful-tb-framed.png',
        'censoring-tb-framed.png',
        'chatbot2-tb-framed.png',
        'chatbot-tb-framed.png',
        'cocaine-tb-framed.png',
        'defeat-tb-framed.png',
        'dialog-tb-framed.png',
        'diary-tb-framed.png',
        'difficult-tb-framed.png',
        'dirty-rat-tb-framed.png',
        'donate-tb-framed.png',
        'dont-talk-tb-framed.png',
        'drawrings-tb-framed.png',
        'dylan-tb-framed.png',
        'elephant-tb-framed.png',
        'fantasies-tb-framed.png',
        'fighter-tb-framed.png',
        'fonts-tb-framed.png',
        'for-realz-tb-framed.png',
        'functioning-tb-framed.png',
        'gaslighting-tb-framed.png',
        'g-ddammit-tb-framed.png',
        'genetics-tb-framed.png',
        'goldfish-tb-framed.png',
        'goodtime-tb-framed.png',
        'guilty-tb-framed.png',
        'handsome-tb-framed.png',
        'headstands-tb-framed.png',
        'home-depot-tb-framed.png',
        'ibm-tb-framed.png',
        'immigrants-tb-framed.png',
        'impertinent-tb-framed.png',
        'jen-tb-framed.png',
        'maga-tb-framed.png',
        'mayaphone-tb-framed.png',
        'metoo-tb-framed.png',
        'nda-tb-framed.png',
        'not-fat-tb-framed.png',
        'omg-tb-framed.png',
        'passive-tb-framed.png',
        'person-tb-framed.png',
        'pessimistic-tb-framed.png',
        'power-tb-framed.png',
        'rack-tb-framed.png',
        'resume-tb-framed.png',
        'role-model-tb-framed.png',
        'say-that-tb-framed.png',
        'spock-tb-framed.png',
        'stoplosingwar-tb-framed.png',
        'sugar-baby-tb-framed.png',
        'u-and-i-tb-framed.png',
        'violence-tb-framed.png',
        'work-life-tb-framed.png',
        'youtube-tb-framed.png',
        'validate-tb-framed.png',
        'stuck-tb-framed.png',
        'yellow-fever-tb-framed.png',
        'boots-tb-framed.png',
        'clock-check-tb-framed.png',
        'coach-tb-framed.png',
        'competition-tb-framed.png',
        'conceptual-tb-framed.png',
        'hell-out-tb-framed.png',
        'international-tb-framed.png',
        'ken-tb-framed.png',
        'nice-ass-tb-framed.png',
        'not-crazy-tb-framed.png',
        'phone-number-tb-framed.png',
        'probably-tb-framed.png',
        'rap-tb-framed.png',
        'regulated-tb-framed.png',
        'restaurant-tb-framed.png',
        'restroom-tb-framed.png',
        'room-six-tb-framed.png',
        'schoolgirl-tb-framed.png',
        'scotch2-tb-framed.png',
        'seem-awesome-tb-framed.png',
        'shaved-tb-framed.png',
        'sisyphus-tb-framed.png',
        'solitude-tb-framed.png',
        'solve-tb-framed.png',
        'starbucks-tb-framed.png',
        'stick-tb-framed.png',
        'talking-tb-framed.png',
        'tanktops-tb-framed.png',
        'tired-tb-framed.png',
        'traffic-tb-framed.png',
        'tugging-tb-framed.png',
        'u2-tb-framed.png',
        'unemployed-tb-framed.png',
        'used-to-them-tb-framed.png',
        'vc-tb-framed.png',
        'war-tb-framed.png',
        'welding-tb-framed.png',
        'witness-tb-framed.png',
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
