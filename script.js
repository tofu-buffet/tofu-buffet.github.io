document.addEventListener('DOMContentLoaded', function() {
    const comics = [
        'body47-tb-framed.png',
        'gorgeous-tb-framed.png',
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
        'milf-tb-framed.png',
        'awkward-tb-framed.png',
        'censoring-tb-framed.png',
        'homeless-tb-framed.png',
        'defeat-tb-framed.png',
        'for-realz-tb-framed.png',
        'hegemon-tb-framed.png',
        'elvis-tb-framed.png',
        'ssn-tb-framed.png',
        'fighter-tb-framed.png',
        'after-tb-framed.png',
        'cockatiel-tb-framed.png',
        'appropriation-tb-framed.png',
        'jen-tb-framed.png',
        'artist-tb-framed.png',
        'hegemony-charge-tb-framed.png',
        'nda-tb-framed.png',
        'personality-tb-framed.png',
        'too-much-art-tb-framed.png',
        'briefing-tb-framed.png',
        'work-life-tb-framed.png',
        'whythanks1-tb-framed.png',
        'whythanks2-tb-framed.png',
        'whythanks3-tb-framed.png',
        'eden-tb-framed.png',
        'drawrings-tb-framed.png',
        'stalk.png',
        'climb-a-tree-tb-framed.png',
        'coach-tb-framed.png',
        'ibm-tb-framed.png',
        'u-and-i-tb-framed.png',
        'headstands-tb-framed.png',
        'maga-tb-framed.png',
        'resume-tb-framed.png',
        'monk-tb-framed.png',
        'call-tb-framed.png',
        'askme-tb-framed.png',
        'impertinent-tb-framed.png',
        'ken-tb-framed.png',
        'violence-tb-framed.png',
        'role-model-tb-framed.png',
        'donate-tb-framed.png',
        'baader-tb-framed.png',
        'free-speech-tb-framed.png',
        'elephant-tb-framed.png',
        'dylan-tb-framed.png',
        'tsunami-tb-framed.png',
        'cocaine-tb-framed.png',
        'jesus-tb-framed.png',
        'functioning-tb-framed.png',
        'youtube-tb-framed.png',
        'sugar-baby-tb-framed.png',
        'worst-tb-framed.png',
        'beatles-tb-framed.png',
        'infamous-tb-framed.png',
        'not-fat-tb-framed.png',
        'u2-tb-framed.png',
        'seem-awesome-tb-framed.png',
        'jacket-tb-framed.png',
        'stoplosingwar-tb-framed.png',
        'alone-tb-framed.png',
        'spock-tb-framed.png',
        'validate-tb-framed.png',
        'seduction-tb-framed.png',
        'wine-tb-framed.png',
        'reparations-tb-framed.png',
        'hell-out-tb-framed.png',
        'proficient-tb-framed.png',
        'competition-tb-framed.png',
        'yellow-fever-tb-framed.png',
        'housewife-tb-framed.png',
        'boyfriend-solved-tb-framed.png',
        'butt-nothing-tb-framed.png',
        'cosmologist-tb-framed.png',
        'metoo-tb-framed.png',
        'say-that-tb-framed.png',
        'nice-ass-tb-framed.png',
        'solve-tb-framed.png',
        'argue-all-day-tb-framed.png',
        'sisyphus-tb-framed.png',
        'vacuum-tb-framed.png',
        'chatbot-tb-framed.png',
        'regulated-tb-framed.png',
        'acceptable-tb-framed.png',
        'motivation-tb-framed.png',
        'starbucks-tb-framed.png',
        'parties-tb-framed.png',
        'schoolgirl-tb-framed.png',
        'vc-tb-framed.png',
        'thalmann-tb-framed.png',
        'peace-tb-framed.png',
        'boots-tb-framed.png',
        'fake-corporations-tb-framed.png',
        'my-fortune-cookie-tb-framed.png',
        'who-they-really-are-tb-framed.png',
        'solitude-tb-framed.png',
        'conceptual-tb-framed.png',
        'platonic-tb-framed.png',
        'trust-anybody-tb-framed.png',
        'creative-differences-tb-framed.png',
        'g-ddammit-tb-framed.png',
        'phone-number-tb-framed.png',
        'welding-tb-framed.png',
        'fool-me-tb-framed.png',
        'applicant-tb-framed.png',
        'ruby-tb-framed.png',
        'god-name-tb-framed.png',
        'octopus-tb-framed.png',
        'better-place-tb-framed.png',
        'bear-sightings-tb-framed.png',
        'booty-tb-framed.png',
        'shaved-tb-framed.png',
        'you-suck-tb-framed.png',
        'talking-tb-framed.png',
        'jobs-tb-framed.png',
        'pornograph-tb-framed.png',
        'probably-tb-framed.png',
        'thigh-gap-tb-framed.png',
        'apple-tb-framed.png',
        'sari-tb-framed.png',
        'body-like-that-tb-framed.png',
        'tanktops-tb-framed.png',
        'pessimistic-tb-framed.png',
        'gigawatts-tb-framed.png',
        'cheats-tb-framed.png',
        'room-six-tb-framed.png',
        'barbie-tb-framed.png',
        'omg-tb-framed.png',
        'whens-birthday-tb-framed.png',
        'secure-before-tb-framed.png',
        'stick-tb-framed.png',
        'p-tb-framed.png',
        'beatles2-tb-framed.png',
        'unemployed-tb-framed.png',
        'tugging-tb-framed.png',
        'used-to-them-tb-framed.png',
/*
        'angels-tb-framed.png',
        'fly-tb-framed.png',
        'charlotte-tb-framed.png',
        'beg-tb-framed.png',
        'bedtime-tb-framed.png',
        'argue-tb-framed.png',
        'humbled2-tb-framed.png',
        'person-tb-framed.png',
        'stuck-tb-framed.png',
        'rack-tb-framed.png',
        'witness-tb-framed.png',

        'caption-tb-framed.png',
        'hoes-tb-framed.png',
        'karma-tb-framed.png',
        'firmly-tb-framed.png',
        'handsome-tb-framed.png',
        'reactivate-account-tb-framed.png',

        'confidence-tb-framed.png',
        'typing-practice-tb-framed.png',
        'rr-tb-framed.png',
        'unwilling-tb-framed.png',
        'chatbot2-tb-framed.png',
        'goodtime-tb-framed.png',
        'war-tb-framed.png',

        'penny-tb-framed.png',
        'ukraine-tb-framed.png',
        'hegemonic-tb-framed.png',
        'immigrants-tb-framed.png',
        'restaurant-tb-framed.png',
        'ask-tb-framed.png',
        'local-maximum-tb-framed.png',

        'not-useful-tb-framed.png',
        'broken-tb-framed.png',
        'hamburger-tb-framed.png',
        'eggplant-tacos-tb-framed.png',

        'soeur-tb-framed.png',
        'cult-leader-tb-framed.png',
        'fukkin-hair-tb-framed.png',
        'memory-tb-framed.png',

        'nerdy-tb-framed.png',
        'piracy-tb-framed.png',
        'weed-tb-framed.png',
        'monetize-tb-framed.png',
        'film-tb-framed.png', 
        'dont-talk-tb-framed.png',
        'bathroom-door-tb-framed.png',
        'kierkegaard-tb-framed.png',
        'verify-tb-framed.png',
        
        'anxiety-tb-framed.png',
        'careful-tb-framed.png',
        'dialog-tb-framed.png',
        'diary-tb-framed.png',
        'difficult-tb-framed.png',
        'dirty-rat-tb-framed.png',
        'fantasies-tb-framed.png',
        'fonts-tb-framed.png',
        'gaslighting-tb-framed.png',
        'genetics-tb-framed.png',
        'goldfish-tb-framed.png',
        'guilty-tb-framed.png',
        'home-depot-tb-framed.png',

        'mayaphone-tb-framed.png',
        'passive-tb-framed.png',
        'power-tb-framed.png',
        
        'clock-check-tb-framed.png',

        'international-tb-framed.png',
        'not-crazy-tb-framed.png',
        'rap-tb-framed.png',
        'restroom-tb-framed.png',
        'scotch2-tb-framed.png',
        'tired-tb-framed.png',
        'traffic-tb-framed.png',
*/
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
        currentIndex = Math.floor(Math.random() * 95);
// * comics.length);
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
