async function GetNewJokes() {
    // 1. Target the elements
    const setupEl = document.getElementById("setup");
    const punchlineEl = document.getElementById("punchline");

    // 2. Clear old joke & hide punchline while loading
    punchlineEl.style.display = "none";
    setupEl.innerText = "Finding a funny one...";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const data = await response.json();

        // 3. Update Text
        setupEl.innerText = data.setup;
        punchlineEl.innerText = data.punchline;

        // 4. THE FIX: Make the punchline visible!
        punchlineEl.style.display = "block";

    } catch (error) {
        setupEl.innerText = "Error fetching joke. Try again!";
    }
}