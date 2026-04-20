function loadFamily(container) {
    const audio = new Audio('family/family_song.mp3');
    audio.play();

    const familyLines = [
        "Happy Birthday!",
        "You are the heart of this family.",
        "Wishing you a year of joy.",
        "We love you so much.",
        "To many more memories...",
        "Stay blessed always.",
        "You make us proud.",
        "Cheers to another year!",
        "To the best sibling/child ever.",
        "May your dreams come true.",
        "You bring sunshine to our lives.",
        "Hope your day is special.",
        "To a lifetime of happiness.",
        "You are a gift to us.",
        "Keep smiling always.",
        "You deserve the world.",
        "To the kindest soul we know.",
        "Happy Birthday from all of us!",
        "Growing older, but better.",
        "Love you to the moon and back.",
    ];

    container.innerHTML = `
        <div id="family-display">
            <img src="family/photos/p1.jpg" id="family-photo" class="photo-frame">
            <h2 id="family-caption">${familyLines[0]}</h2>
        </div>
    `;

    const photoElement = document.getElementById('family-photo');
    const captionElement = document.getElementById('family-caption');

    const interval = setInterval(() => {
        if (!document.getElementById('family-display')) { 
            clearInterval(interval); 
            return; 
        }
        
        // Pick a random photo (1 to 20)
        const randomPhotoNum = Math.floor(Math.random() * 20) + 1;
        // Pick a random line index (0 to 20)
        const randomLineIndex = Math.floor(Math.random() * familyLines.length);

        // Update elements
        photoElement.src = `family/photos/p${randomPhotoNum}.jpg`;
        captionElement.innerText = familyLines[randomLineIndex];
        
    }, 4000);

    startConfetti();
}

function startConfetti() {
    for(let i=0; i<30; i++) {
        let c = document.createElement('div');
        c.className = 'confetti-piece';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = '-10px';
        c.style.backgroundColor = ['#ff4757', '#2ed573', '#1e90ff'][Math.floor(Math.random()*3)];
        document.body.appendChild(c);
    }
}