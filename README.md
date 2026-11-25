# BestellApp – BurgerHouse

A food ordering app for the fictional restaurant *BurgerHouse*. Browse the menu with burgers, pizzas and salads, add dishes to the basket and place an order.

**Try it here:** [BestellApp](https://bestell-app.sebastian-buchholz.de/)

## Features

- Menu rendered from a data file, grouped into the categories burger, pizza and salad
- Add dishes to the basket, the button shows how many are already in it
- Change the amount of each dish in the basket or remove it
- Subtotal, delivery fee and total price are calculated automatically
- Order confirmation after placing the order, the basket is emptied
- Mobile view with a bottom navigation and a basket that opens as an overlay
- Badge on the basket icon with the number of items
- Responsive layout for mobile, tablet and desktop

## Technologies

- HTML5
- CSS3 (Flexbox, media queries)
- JavaScript

## Project structure

```
├── index.html
├── style.css
├── script.js              # Menu, basket and order logic
└── assets/
    ├── javascript/
    │   ├── db.js          # Categories, dishes and delivery fee
    │   └── template.js    # HTML templates
    ├── fonts/             # Palanquin (hosted locally)
    ├── icon/              # Logos and category icons
    └── img/               # Dish images
```

## Run locally

1. Clone the repository
2. Open `index.html` in your browser, or use a local server like the *Live Server* extension in VS Code

## Author

Sebastian Buchholz
