function searchFood() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const productGrid = document.getElementById("productGrid");

  if (!input.trim()) {
    productGrid.innerHTML = "<p>Please enter a food item to search.</p>";
    return;
  }

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    productGrid.innerHTML = "<p>No matching items found.</p>";
    return;
  }

  productGrid.innerHTML = "";

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.id = `item-${item.title.replace(/\s+/g, "-").toLowerCase()}`;

    card.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <p>⭐ ${item.rating} &nbsp; | 🕒 ${item.eta}</p>
        <p><strong>${item.price}</strong> <span>${item.offer}</span></p>
      `;

    productGrid.appendChild(card);
  });

  //Scroll to first item if available
  const firstItemId = `item-${filtered[0].title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const firstItem = document.getElementById(firstItemId);
  if (firstItem) {
    firstItem.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
