const locations = {
    forest: {
        riddle: "I speak without a mouth and hear without ears. What am I?",
        answer: "echo",
        nft: { name: "Forest", image: "forest.jpg.png" }
    },
    cave: {
        riddle: "What has to be broken before you can use it?",
        answer: "egg",
        nft: { name: "Crystal cave", image: "cave.jpg.jpg" }
    },
    ship: {
        riddle: "I have cities, but no houses. Mountains, but no trees. What am I?",
        answer: "map",
        nft: { name: "Ancient road", image: "nft-map.png.jpg" }
    }
};

let collectedNFTs = [];

function goToLocation(loc) {
    const location = locations[loc];
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <h2>${location.nft.name}</h2>
        <p>🧩 ${location.riddle}</p>
        <input type="text" id="answer-input" placeholder="Type your answer">
        <button onclick="checkAnswer('${loc}')">Submit Answer</button>
        <div class="feedback" id="feedback"></div>
    `;
}

function checkAnswer(loc) {
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    const correctAnswer = locations[loc].answer;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        if (!collectedNFTs.includes(loc)) {
            collectedNFTs.push(loc);
            updateCollection();
        }
        feedback.innerHTML = `<p style="color:green;">✅ Correct! You earned "${locations[loc].nft.name}"</p>`;
    } else {
        feedback.innerHTML = `<p style="color:red;">❌ Incorrect. Try again!</p>`;
    }
}

function updateCollection() {
    const collectionList = document.getElementById("collection-list");
    collectionList.innerHTML = '';

    collectedNFTs.forEach(loc => {
        const nft = locations[loc].nft;
        const nftDiv = document.createElement('div');
        nftDiv.classList.add('nft');
        nftDiv.innerHTML = `
            <img src="${nft.image}" alt="${nft.name}">
            <p>${nft.name}</p>
        `;
        collectionList.appendChild(nftDiv);
    });
}
