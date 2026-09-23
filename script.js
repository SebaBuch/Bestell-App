let basket = [];

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
    const itemsRef = document.getElementById('basket-items');
    const summaryRef = document.getElementById('basket-summary');
    const orderButtonRef = document.getElementById('order-button');

    if (basket.length === 0) {
        itemsRef.innerHTML = getEmptyBasketTemplate();
        summaryRef.innerHTML = '';
        orderButtonRef.disabled = true;
        orderButtonRef.textContent = 'Jetzt bestellen';
        return;
    }

    let itemsHtml = '';
    for (let i = 0; i < basket.length; i++) {
        const dish = getDishById(basket[i].dishId);
        itemsHtml += getBasketItemTemplate(dish, basket[i].amount);
    }

    const subtotal = getSubtotal();
    const total = subtotal + DELIVERY_FEE;

    itemsRef.innerHTML = `<ul class="basket-items">${itemsHtml}</ul>`;
    summaryRef.innerHTML = getBasketSummaryTemplate(subtotal, DELIVERY_FEE, total);
    orderButtonRef.disabled = false;
    orderButtonRef.textContent = `Jetzt bestellen (${formatPrice(total)})`;
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

    setOrderMessage('');
    updateDishButton(dishId);
    renderBasket();
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
    setOrderMessage('Vielen Dank für deine Bestellung! (Testbestellung)');
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

function setOrderMessage(text) {
    document.getElementById('order-message').textContent = text;
}