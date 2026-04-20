function loadBrothersOG(container) {
    const audio = new Audio('brothers_og/brothers_song.mp3');
    audio.play();

    const broLines = [
        "Yo Bro! Happy Birthday!",
        "To the partner in crime.",
        "Another year of being a legend.",
        "Keep grinding, keep shining.",
        "To the nights we won't remember.",
        "With the brothers who won't forget.",
        "Stay wild, stay humble.",
        "No one has a back like yours.",
        "HBD to my favorite idiot.",
        "Keep being the GOAT.",
        "Real ones stay forever.",
        "Let's party like there's no tomorrow!"
    ];

    container.innerHTML = `
        <div id="bro-og-display">
            <img src="brothers_og/photos/b1.jpg" id="bro-photo" class="photo-frame" style="border-color: #1e90ff;">
            <h2 id="bro-caption" style="color:#1e90ff">${broLines[0]}</h2>
        </div>
    `;

    const photoElement = document.getElementById('bro-photo');
    const captionElement = document.getElementById('bro-caption');

    const interval = setInterval(() => {
        if (!document.getElementById('bro-og-display')) { 
            clearInterval(interval); 
            return; 
        }

        // Pick a random photo (1 to 12)
        const randomPhotoNum = Math.floor(Math.random() * 12) + 1;
        // Pick a random line index (0 to 11)
        const randomLineIndex = Math.floor(Math.random() * broLines.length);

        photoElement.src = `brothers_og/photos/b${randomPhotoNum}.jpg`;
        captionElement.innerText = broLines[randomLineIndex];
        
    }, 4000);
}