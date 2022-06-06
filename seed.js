require('dotenv').config();
require('./config/database');

const Category = require('./models/category');



(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Tech', sortOrder: 100},
    {name: 'Clothing', sortOrder: 200},
    {name: 'Sportswear', sortOrder: 300},
    {name: 'Cars', sortOrder: 400},
    {name: 'Services', sortOrder: 500},
    {name: 'miscellaneous', sortOrder: 600},
    
  ]);

  console.log(categories)

  process.exit();

})();