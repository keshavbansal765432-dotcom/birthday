/**
 * Logic for the Lyrics Version
 * Song: Moti Chain (Parody)
 * Assets: 2 Photos (l1.jpg, l2.jpg)
 */
function loadBrothersLyrics(container) {
    const audio = new Audio('brothers_lyrics/lyrics_bgm.mp3');
    audio.play();

    const customLyrics = [
        "Moti chain, moti gaand...",
        "Billo saade agge, tussi ho jao shaant!",
        "Gal vich chain, piche bhaari ae samaan,",
        "Saada bhai vakhra, saadi vakhri ae shaan!",
        "Chest teri bhaari, lage jiven gori chitti dhoodh,",
        "Ass teri bhari, poori karda ae mood!",
        "Moti chain, moti gaand...",
        "Birthday tera veere, poora karaange maand!",
        "Chest teri naram, jiven hove makhkhan,",
        "Ass teri hilaave, jadon chale tu dhakkan!"
    ];

    container.innerHTML = `
        <div id="lyrics-display-wrapper">
            <div class="photo-container">
                <img src="brothers_lyrics/photos/l1.jpg" id="lyric-photo" class="photo-frame">
            </div>
            <div id="lyrics-container">
                <h1 id="active-lyric" class="lyric-text">${customLyrics[0]}</h1>
            </div>
        </div>
    `;

    // Ensure the styling matches the vibe
    if (!document.getElementById('lyric-style')) {
        const style = document.createElement('style');
        style.id = 'lyric-style';
        style.innerHTML = `
            .lyric-text {
                font-size: 2.2rem;
                font-weight: 900;
                color: #ff007f; 
                text-shadow: 0 0 10px #fff, 0 0 20px #ff007f;
                margin-top: 30px;
                text-transform: uppercase;
            }
            .photo-frame {
                width: 320px;
                height: 320px;
                object-fit: cover;
                border: 6px solid #ff007f !important;
                box-shadow: 0 0 30px #ff007f !important;
                transition: transform 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }

    let lyricIndex = 0;
    let photoIndex = 1; // Start with 1, will toggle between 1 and 2
    
    const lyricElement = document.getElementById('active-lyric');
    const photoElement = document.getElementById('lyric-photo');

    const interval = setInterval(() => {
        if (!document.getElementById('lyrics-display-wrapper')) {
            clearInterval(interval);
            return;
        }

        // Cycle through lyrics
        lyricIndex++;
        if (lyricIndex >= customLyrics.length) lyricIndex = 0;

        // Toggle between the 2 photos (1 and 2)
        photoIndex = (photoIndex === 1) ? 2 : 1;

        // Visual Updates
        photoElement.style.transform = "scale(0.95)";
        setTimeout(() => {
            photoElement.src = `brothers_lyrics/photos/l${photoIndex}.jpg`;
            photoElement.style.transform = "scale(1)";
            lyricElement.innerText = customLyrics[lyricIndex];
        }, 200);
        
        // Text-to-Speech
        const speech = new SpeechSynthesisUtterance(customLyrics[lyricIndex]);
        speech.lang = 'hi-IN'; 
        speech.pitch = 0.8; 
        speech.rate = 1.0; 
        window.speechSynthesis.speak(speech);

    }, 4500);
}