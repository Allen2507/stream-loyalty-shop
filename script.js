const products = [
    { title: "Moye Moye", cost: 100, img: "./img/zoning out cat meme (convert.io).jpg", command: "!redeem moyemoye" },
    { title: "Chippi Chippi", cost: 500, img: "./img/chipichipi-chipi-chipi.gif", command: "!redeem chipi" },
    { title: "Spongebob Fail", cost: 10, img: "./img/spongebob-fail-look.jpg", command: "!redeem spongebob" },
    { title: "Chin Tapak Dum Dum", cost: 25, img: "./img/cheen-tapak-cheen-tapak-dam-dam.gif", command: "!redeem chintapak" },
    { title: "English or Spanish", cost: 1000, img: "./img/OIP (1).jpg", command: "!redeem englishorspanish" },
];

const categories = {
    epic: document.getElementById("epic-container"),
    rare: document.getElementById("rare-container"),
    common: document.getElementById("common-container")
};

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Cost: ${product.cost} points</p>
        <button class="redeem-btn" onclick="copyCommand('${product.command}')">⧉ Copy command</button>
    `;

    // Categorizing based on cost
    if (product.cost <= 100) {
        categories.common.appendChild(productDiv);
    } else if (product.cost > 100 && product.cost <= 500) {
        categories.rare.appendChild(productDiv);
    } else {
        categories.epic.appendChild(productDiv);
    }
});

function copyCommand(command) {
    navigator.clipboard.writeText(command);
    alert(`Command copied: ${command}`);
}
