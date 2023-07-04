const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Necklaces' },
    { name: 'Bracelets' },
    { name: 'Earrings' },
    { name: 'Metal statues' },
    { name: 'Other' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Necklace',
      description: 'Necklaces.',
      image: 'https://www.etsy.com/listing/554633453/helm-chain-choker-chainmail-choker?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_a-jewelry-necklaces-chokers&utm_custom1=_k_Cj0KCQjwho-lBhC_ARIsAMpgMoelk91RsLNYgUfyooUtWEpxndn-LK791FRV7yUUTQ4tS4OvH9M9DScaAhT-EALw_wcB_k_&utm_content=go_12559942216_122200348009_506995371353_aud-459688892115:pla-338380856521_c__554633453_583388028&utm_custom2=12559942216&gclid=Cj0KCQjwho-lBhC_ARIsAMpgMoelk91RsLNYgUfyooUtWEpxndn-LK791FRV7yUUTQ4tS4OvH9M9DScaAhT-EALw_wcB',
      category: categories[0]._id,
      price: 2.99,
      quantity: 5,
      priceRange: {
        min: 0,
        max: 10
      }
    },
    {
      name: 'Bracelets',
      description: 'Necklaces',
      image: 'https://pkleinjewelrydesign.com/product/byzantine-chain-mail-bracelet-kit/',
      category: categories[1]._id,
      price: 2.99,
      quantity: 5,
      priceRange: {
        min: 0,
        max: 10
      }
    },
    {
      name: 'Earrings',
      category: categories[2]._id,
      description: 'Earrings',
      image: 'https://www.etsy.com/listing/719326254/orbit-loop-earrings-chainmaille-earrings',
      price: 2.99,
      quantity: 5,
      priceRange: {
        min: 0,
        max: 10
      }
    },
    {
      name: 'Metal Statues',
      category: categories[3]._id,
      description: 'Metal Statues',
      image: 'https://www.canva.com/templates/EAFHiC1V4LY-yellow-modern-coming-soon-instagram-post/',
      price: 2.99,
      quantity: 5,
      priceRange: {
        min: 0,
        max: 10
      }
    },
    {
      name: 'Other',
      category: categories[4]._id,
      description: 'others',
      image: 'https://www.etsy.com/listing/1464314044/chainmail-3-pcs-set-womens-clothing?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=womens+chainmail&ref=sr_gallery-1-25&frs=1&organic_search_click=1',
      price: 14.99,
      quantity: 100
    }
  ]);
  

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'misspam@gmail.com',
    password: 'password',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Pam',
    lastName: 'Holt',
    email: 'misspam@gmail.com',
    password: 'password'
  });

  console.log('users seeded');

  process.exit();
});
