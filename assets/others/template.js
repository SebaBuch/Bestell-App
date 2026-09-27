function getCategoryTemplate(category, dishesHtml) {
  return `
    <section class="category" aria-labelledby="category-${category.id}">
    <div class="category-header">
      <div class="category-header-inner">
        <img class="category-icon" src="${category.icon}" alt="">
        <h2 id="category-${category.id}" class="category-title">${category.title}</h2>
      </div>
    </div>
    <div class="category-dishes-wrapper">
        <div class="category-dishes">${dishesHtml}</div>
    </div>
    </section>
  `;
}

function getDishTemplate(dish) {
  const amount = getAmountInBasket(dish.id);

  return `
    <article class="dish">
      <img class="dish-image" src="${dish.img}" alt="${dish.name}">
      <div class="dish-content">
        <div class="dish-top">
          <h3 class="dish-name">${dish.name}</h3>
          <span class="dish-price">${formatPrice(dish.price)}</span>
        </div>
        <p class="dish-description">${dish.description}</p>
        <button
          id="dish-button-${dish.id}"
          class="dish-button ${amount > 0 ? 'dish-button--added' : ''}"
          type="button"
          onclick="addToBasket(${dish.id})"
          aria-label="${dish.name} in den Warenkorb legen">
          ${getDishButtonText(amount)}
        </button>
      </div>
    </article>
  `;
}

function getBasketItemTemplate(dish, amount) {
  return `
    <li class="basket-item">
      <p class="basket-item-name">${amount} x ${dish.name}</p>
      <div class="basket-item-row">
        <div class="basket-item-controls">
          <button class="basket-item-button" type="button" onclick="changeAmount(${dish.id}, -1)" aria-label="Menge von ${dish.name} verringern">-</button>
          <button class="basket-item-button" type="button" onclick="changeAmount(${dish.id}, 1)" aria-label="Menge von ${dish.name} erhöhen">+</button>
        </div>
        <span class="basket-item-price">${formatPrice(dish.price * amount)}</span>
      </div>
    </li>
  `;
}

function getEmptyBasketTemplate() {
  return `
    <p class="basket-empty">Dein Warenkorb ist leer. Füge Gerichte aus der Speisekarte hinzu.</p>
  `;
}

function getBasketSummaryTemplate(subtotal, deliveryFee, total) {
  return `
    <div class="basket-row">
      <span>Zwischensumme</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="basket-row">
      <span>Lieferkosten</span>
      <span>${formatPrice(deliveryFee)}</span>
    </div>
    <div class="basket-row basket-row--total">
      <span>Gesamt</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;
}