const app = new Vue({
    el : "#root",
    data: {
        product:"socks",
        description:"fluffy and warm socks",
        pageTitle:"socks shop",
        externalLink:"https://www.vuemastery.com/",
        image:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        // inventory:['mickey mouse', 'minnie mouse', 'pooh bear', 'piglet']
        inventory:[
            {'name':'mickey mouse','material':'cotton','stock':15,'onSale':true},
            {'name':'minnie mouse', 'material':'cotton','stock':10, 'onSale':false},
            {'name':'pooh bear', 'material':'wool', 'stock':5, 'onSale':false},
            {'name':'piglet', 'material':'wool', 'stock': 0, 'onSale':true}
        ]
    },
});

// app.product = "shoes"