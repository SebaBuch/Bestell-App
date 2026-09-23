const DELIVERY_FEE = 4.99;

const categories = [
    { id: 'burger', title: 'Burger & Sandwiches', icon: './assets/icon/burger.svg' },
    { id: 'pizza', title: 'Pizza (30cm)', icon: './assets/icon/pizza.svg' },
    { id: 'salad', title: 'Salat', icon: './assets/icon/salad.svg' }
];

const dishes = [

    {
        id: 0,
        categoryId: 'burger',
        name: 'Veggie Pilz Black Burger',
        description: 'Gemischter Salat, Tomaten, Edamame, Pilze',
        price: 16.9,
        img: './assets/img/dishes/veggie-mushroom-black-burger.jpg'
    },

    {
        id: 1,
        categoryId: 'burger',
        name: 'All Meat Burger',
        description: 'Rind, Speck, Gewürzgurke, Räucherkäse, Ketchup, BBQ-Sauce',
        price: 15.9,
        img: './assets/img/dishes/all-meat-burger.jpg'
    },

    {
        id: 2,
        categoryId: 'burger',
        name: 'Beef Red Burger',
        description: 'Rind, Käse, Tomaten, Salat, Zwiebeln',
        price: 14.9,
        img: './assets/img/dishes/beef-red-burger.jpg'
    },

    {
        id: 3,
        categoryId: 'burger',
        name: 'Big Chicken Burger',
        description: 'Hähnchen, Käse, Tomaten, Salat, Zwiebeln, Paprika',
        price: 15.9,
        img: './assets/img/dishes/big-chicken-burger.jpg'
    },

    {
        id: 4,
        categoryId: 'pizza',
        name: 'Pizza Margherita',
        description: 'Tomatensauce, Mozzarella',
        price: 11.9,
        img: './assets/img/dishes/pizza-margherita.jpg'
    },

    {
        id: 5,
        categoryId: 'pizza',
        name: 'Pizza Chorizo',
        description: 'Tomatenscheiben, Mozzarella, Chorizo',
        price: 13.9,
        img: './assets/img/dishes/pizza-chorizo.jpg'
    },

    {
        id: 6,
        categoryId: 'pizza',
        name: 'Funghi',
        description: 'Rote Zwiebeln, Oliven, Champignons, Mozzarella',
        price: 12.9,
        img: './assets/img/dishes/pizza-funghi.jpg'
    },

    {
        id: 7,
        categoryId: 'pizza',
        name: 'Quattro Formaggi mit Hähnchen',
        description: 'Hähnchen, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano',
        price: 15.9,
        img: './assets/img/dishes/pizza-quattro-formaggi.jpg'
    },

    {
        id: 8,
        categoryId: 'salad',
        name: 'Warmer Rindfleisch-Rucola-Salat',
        description: 'Rind, Rucola, Feldsalat, griechischer Feta, Kirschtomaten, getrocknete Tomaten, Balsamico-Dressing',
        price: 16.9,
        img: './assets/img/dishes/beef-arugula-salad.jpg'
    },

    {
        id: 9,
        categoryId: 'salad',
        name: 'Mini grüner Salat',
        description: 'Grüner Salat, Gurke, Karotten, Petersilie, Radieschen',
        price: 7.9,
        img: './assets/img/dishes/mini-green-salad.jpg'
    },

    {
        id: 10,
        categoryId: 'salad',
        name: 'Grüner Salat mit Meeresfrüchten',
        description: 'Gemischter Salat, Kirschtomaten, rote Zwiebeln, Miesmuscheln, Tintenfischringe, Garnelen, Dijon-Senf-Zitronen-Dressing mit Dill',
        price: 16.9,
        img: './assets/img/dishes/seafood-salad.jpg'
    },

    {
        id: 11,
        categoryId: 'salad',
        name: 'Veganer grüner Salat mit Tofu',
        description: 'Grüner Salat, Kirschtomaten, Gurke, Babyspinat, Edamame, Radieschen, Brunnenkresse, Tofu, Erdnüsse',
        price: 14.9,
        img: './assets/img/dishes/vegan-tofu-salad.jpg'
    }
];
