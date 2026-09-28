let basket = [];
let basketOpen = false;

function init() {
    renderMenu();
    renderBasket();
}

function renderMenu() {
    const menuRef = document.getElementById('menu');
    let html = '';

    for (let i = 0; i < categories.length; i++) {
        html += getCategoryTemplate(categories[i], getDishesHtml(categories[i].id));
    }

    menuRef.innerHTML = html;
}

function getDishesHtml(categoryId) {
    let html = '';

    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].categoryId === categoryId) {
            html += getDishTemplate(dishes[i]);
        }
    }

    return html;
}

function renderBasket() {
    updateBasketBadge();

    if (basket.length === 0) {
        renderEmptyBasket();
    } else {
        renderFilledBasket();
    }
}

function renderEmptyBasket() {
    const itemsRef = document.getElementById('basket-items');
    const summaryRef = document.getElementById('basket-summary');

    itemsRef.innerHTML = getEmptyBasketTemplate();
    summaryRef.innerHTML = '';
    updateOrderButton(true, 'Jetzt bestellen');
}

function renderFilledBasket() {
    const itemsRef = document.getElementById('basket-items');
    const summaryRef = document.getElementById('basket-summary');
    const subtotal = getSubtotal();
    const total = subtotal + DELIVERY_FEE;

    itemsRef.innerHTML = `<ul class="basket-items">${getBasketItemsHtml()}</ul>`;
    summaryRef.innerHTML = getBasketSummaryTemplate(subtotal, DELIVERY_FEE, total);
    updateOrderButton(false, `Jetzt bestellen (${formatPrice(total)})`);
}

function getBasketItemsHtml() {
    let html = '';

    for (let i = 0; i < basket.length; i++) {
        const dish = getDishById(basket[i].dishId);
        html += getBasketItemTemplate(dish, basket[i].amount);
    }

    return html;
}

function updateOrderButton(isDisabled, text) {
    const orderButtonRef = document.getElementById('order-button');

    orderButtonRef.disabled = isDisabled;
    orderButtonRef.textContent = text;
}

function updateDishButton(dishId) {
    const buttonRef = document.getElementById(`dish-button-${dishId}`);
    const amount = getAmountInBasket(dishId);

    buttonRef.textContent = getDishButtonText(amount);
    buttonRef.classList.toggle('dish-button--added', amount > 0);
}

function addToBasket(dishId) {
    const index = getBasketIndex(dishId);

    if (index === -1) {
        basket.push({ dishId: dishId, amount: 1 });
    } else {
        basket[index].amount++;
    }

    updateDishButton(dishId);
    renderBasket();
}

function setBasketOpen(isOpen) {
    basketOpen = isOpen;
    document.querySelector('.basket').classList.toggle('basket--open', isOpen);
}

function toggleBasket() {
    setBasketOpen(!basketOpen);
}

function closeBasket() {
    setBasketOpen(false);
}

function openOrderModal() {
    document.getElementById('order-modal').hidden = false;
}

function closeOrderModal() {
    document.getElementById('order-modal').hidden = true;
}

function changeAmount(dishId, change) {
    const index = getBasketIndex(dishId);
    if (index === -1) return;

    basket[index].amount += change;

    if (basket[index].amount <= 0) {
        basket.splice(index, 1);
    }

    updateDishButton(dishId);
    renderBasket();
}

function placeOrder() {
    if (basket.length === 0) return;

    basket = [];

    for (let i = 0; i < dishes.length; i++) {
        updateDishButton(dishes[i].id);
    }

    renderBasket();
    setBasketOpen(false);
    openOrderModal();
}

function getDishById(dishId) {
    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].id === dishId) return dishes[i];
    }
}

function getBasketIndex(dishId) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].dishId === dishId) return i;
    }
    return -1;
}

function getAmountInBasket(dishId) {
    const index = getBasketIndex(dishId);
    return index === -1 ? 0 : basket[index].amount;
}

function updateBasketBadge() {
    const badgeRef = document.getElementById('basket-badge');
    const navButtonRef = document.getElementById('basket-nav-button');
    const count = getBasketItemCount();

    badgeRef.textContent = count;
    badgeRef.hidden = count === 0;
    navButtonRef.setAttribute('aria-label', count === 0 ? 'Warenkorb öffnen' : `Warenkorb öffnen, Anzahl: ${count}`);
}

function getBasketItemCount() {
    let count = 0;

    for (let i = 0; i < basket.length; i++) {
        count += basket[i].amount;
    }

    return count;
}

function getSubtotal() {
    let subtotal = 0;

    for (let i = 0; i < basket.length; i++) {
        const dish = getDishById(basket[i].dishId);
        subtotal += dish.price * basket[i].amount;
    }

    return subtotal;
}

function getDishButtonText(amount) {
    return amount > 0 ? `Hinzugefügt ${amount}` : 'In den Warenkorb';
}

function formatPrice(value) {
    return value.toFixed(2).replace('.', ',') + '€';
}