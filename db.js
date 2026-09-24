const DELIVERY_FEE = 4.99;

const categories = [
    { id: 'burger', title: 'Burger & Sandwiches', icon: './assets/icon/burger.png' },
    { id: 'pizza', title: 'Pizza (30cm)', icon: './assets/icon/pizza.png' },
    { id: 'salad', title: 'Salat', icon: './assets/icon/salad.png' }
];

const dishes = [

    {
        id: 0,
        categoryId: 'burger',
        name: 'Veggie mushroom black burger',
        description: 'Gemischter Salat, Tomaten, Edamame, Pilze',
        price: 16.9,
        img: 'assets/img/veggie mushroom black burger.png'
    },

    {
        id: 1,
        categoryId: 'burger',
        name: 'All meat burger',
        description: 'Rind, Speck, Gewürzgurke, Räucherkäse, Ketchup, BBQ-Sauce',
        price: 15.9,
        img: 'assets/img/all meat burger.png'
    },

    {
        id: 2,
        categoryId: 'burger',
        name: 'Beef red burger',
        description: 'Rind, Käse, Tomaten, Salat, Zwiebeln',
        price: 14.9,
        img: 'assets/img/beef red burger.png'
    },

    {
        id: 3,
        categoryId: 'burger',
        name: 'Big chicken burger',
        description: 'Hähnchen, Käse, Tomaten, Salat, Zwiebeln, Paprika',
        price: 15.9,
        img: 'assets/img/big chicken burger.png'
    },

    {
        id: 4,
        categoryId: 'pizza',
        name: 'Pizza Margherita',
        description: 'Tomatensauce, Mozzarella',
        price: 11.9,
        img: 'assets/img/margherita pizza.png'
    },

    {
        id: 5,
        categoryId: 'pizza',
        name: 'Pizza Chorizo',
        description: 'Tomatenscheiben, Mozzarella, Chorizo',
        price: 13.9,
        img: 'assets/img/chorizo pizza.png'
    },

    {
        id: 6,
        categoryId: 'pizza',
        name: 'Funghi',
        description: 'Rote Zwiebeln, Oliven, Champignons, Mozzarella',
        price: 12.9,
        img: 'assets/img/funghi pizza.png'
    },

    {
        id: 7,
        categoryId: 'pizza',
        name: 'Quattro formaggi with chicken',
        description: 'Hähnchen, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano',
        price: 15.9,
        img: 'assets/img/quattro formaggi with chicken pizza.png'
    },

    {
        id: 8,
        categoryId: 'salad',
        name: 'Warm beef argula salad',
        description: 'Rind, Rucola, Feldsalat, griechischer Feta, Kirschtomaten, getrocknete Tomaten, Balsamico-Dressing',
        price: 16.9,
        img: 'assets/img/warm beef argula salad.png'
    },

    {
        id: 9,
        categoryId: 'salad',
        name: 'Mini green salad',
        description: 'Grüner Salat, Gurke, Karotten, Petersilie, Radieschen',
        price: 7.9,
        img: 'assets/img/mini green salad.png'
    },

    {
        id: 10,
        categoryId: 'salad',
        name: 'Green salad with sea food',
        description: 'Gemischter Salat, Kirschtomaten, rote Zwiebeln, Miesmuscheln, Tintenfischringe, Garnelen, Dijon-Senf-Zitronen-Dressing mit Dill',
        price: 16.9,
        img: 'assets/img/green salad with sea food.png'
    },

    {
        id: 11,
        categoryId: 'salad',
        name: 'Veggie mushroom black burger',
        description: 'Grüner Salat, Kirschtomaten, Gurke, Babyspinat, Edamame, Radieschen, Brunnenkresse, Tofu, Erdnüsse',
        price: 14.9,
        img: 'assets/img/veggie mushroom black burger.png'
    }
];