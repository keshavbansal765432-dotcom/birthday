/**
 * Logic for the Fun/Troll Version
 */
async function loadBrothersFun(container) {
    // Initialize Audios
    const sweetMusic = new Audio('brothers_fun/sweet_bgm.mp3');
    const trollMusic = new Audio('brothers_fun/troll_bgm.mp3');
    
    sweetMusic.loop = true;
    sweetMusic.play();

    // Step 1: The Amount Prompt
    const amount = prompt("Bhai, enter a treat amount (600 - 1000):");

    if (amount === null) {
        sweetMusic.pause();
        showMain();
        return;
    }

    const numAmount = parseInt(amount);

    // Step 2: Validate Amount
    if (numAmount >= 600 && numAmount <= 1000) {
        
        // Step 3: The Bank Balance Check
        const hasMoney = confirm(`Honest check: Do you have ₹${numAmount} in your account right now?`);

        if (hasMoney) {
            // Path A: He has money
            container.innerHTML = `
                <div class="fun-content">
                    <h2 style="color: #2ed573;">Party is ON! Pay up bro.</h2>
                    <img src="brothers_fun/paytm_qr.jpg" class="photo-frame" style="width: 250px; border-color: #00baf2;">
                    <p>Scan and send ₹${numAmount} to confirm.</p>
                </div>
            `;
        } else {
            // Path B: THE PUNCHLINE
            sweetMusic.pause(); // Cut the sweet music immediately
            trollMusic.play();  // Start the "sexy" sax

            container.innerHTML = `
                <div class="fun-content" style="animation: fadeIn 1s;">
                    <h1 style="color: #ff4757; font-size: 3.5rem;">NO MONEY? NO PROBLEM.</h1>
                    <h3 style="margin-top: 10px;">I accept alternative forms of payment...</h3>
                    
                    <div style="background: #ff007f; color: white; padding: 25px; border-radius: 20px; display: inline-block; margin-top: 30px; box-shadow: 0 0 20px #ff007f;">
                        <h1 style="font-size: 2.8rem; margin: 0;">PAY BY OFFERING YOUR ASS 🍑</h1>
                    </div>
                    
                    <p style="margin-top: 20px; font-weight: bold; font-style: italic;">"Limited Time Birthday Offer"</p>
                </div>
            `;
        }
    } else {
        alert("Enter a value between 600 and 1000, don't be smart.");
        sweetMusic.pause();
        loadBrothersFun(container); // Restart
    }
}