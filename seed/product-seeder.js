var Product = require('../models/Product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //for non waring promise 
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
      imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
      title: 'Gothic Video Game11111',
      description: 'Awesome Game!!!111111',
      price: 10
    }),
    new Product({
      imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
      title: 'Gothic Video Game2222',
      description: 'Awesome Game!!!222222',
      price: 20
    }),
    new Product({
      imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
      title: 'Gothic Video Game3333',
      description: 'Awesome Game!!!33333333',
      price: 30
    }),
];
var done = 0;
for (var i=0; i <products.length;i++) {
  products[i].save(function(err,result){
    done++;
    if (done === products.length){
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
