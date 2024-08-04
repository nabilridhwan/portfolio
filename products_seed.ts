// if youre wondering why this is here. it is 8 jul 2024, 5am and i am finding images for my products and i need a script to help me do it

import gis from "async-g-i-s";
// const gis = require('async-g-i-s');

export const products = [
    {
        category_id: 1,
        currency: 'SGD',
        name: 'Radiant Glow Serum',
        description: 'A revitalizing serum that boosts skin radiance.',
        price: 45.9,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://brownglow.ca/cdn/shop/files/RadiantGlow_50a52e6c-7c15-41de-a188-d7884449f6a9_2000x2000.jpg?v=1701100072',
            },
        },
    },
    {
        category_id: 1,
        currency: 'SGD',
        name: 'Luminous Foundation',
        description: 'A foundation that provides a luminous and flawless finish.',
        price: 32.5,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://www.armanibeauty.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-gac-master-catalog/default/dwb756c0aa/products/AP10101/2024-visuals/GA_Luminous_Silk_Foundation_4.5_L425720_3360372075547_RVB.jpg',
            },
        },
    },
    {
        category_id: 2,
        currency: 'SGD',
        name: 'Ocean Breeze Perfume',
        description: 'A fresh and invigorating fragrance for everyday wear.',
        price: 75.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://azhaperfumes.com/wp-content/uploads/2022/08/Ocean-Breeze_1.jpg',
            },
        },
    },
    {
        category_id: 2,
        currency: 'SGD',
        name: 'Mystic Rose Eau de Parfum',
        description: 'A romantic and enchanting fragrance with rose undertones.',
        price: 85.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://thegrovewp.com/cdn/shop/files/mystic-rose-eau-de-parfum-floricaspongellethe-grove-458013.jpg',
            },
        },
    },
    {
        category_id: 3,
        currency: 'SGD',
        name: 'Modern Sofa',
        description: 'A stylish and comfortable sofa for your living room.',
        price: 650.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://t4.ftcdn.net/jpg/05/42/96/89/360_F_542968913_UvXxERTGauNJKvZIzwiY8tX7OjQJp3jF.jpg',
            },
        },
    },
    {
        category_id: 3,
        currency: 'SGD',
        name: 'Elegant Dining Table',
        description: 'A sleek dining table perfect for family meals.',
        price: 1200.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://www.nfoutlet.com/media/cache/sylius_shop_product_original/8a/36/01151832ccabd47c4675746ed1e1.jpeg',
            },
        },
    },
    {
        category_id: 4,
        currency: 'SGD',
        name: 'Organic Almonds',
        description: 'Healthy and nutritious organic almonds.',
        price: 15.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-XMc1mJsWUxVM7KrG1566FLdHXLsn-wqwQ&s',
            },
        },
    },
    {
        category_id: 4,
        currency: 'SGD',
        name: 'Fresh Avocados',
        description: 'Creamy and delicious fresh avocados.',
        price: 10.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://img.freepik.com/premium-photo/two-halves-fresh-avocado-isolated-white-space-design-element-product-label-catalog-print_106885-2316.jpg',
            },
        },
    },
    {
        category_id: 5,
        currency: 'SGD',
        name: 'Bluetooth Headphones',
        description: 'Wireless Bluetooth headphones with noise cancellation.',
        price: 120.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCC3lKEkm96l5UJRRnsgPF2mWlkF1gbVrNQ&s',
            },
        },
    },
    {
        category_id: 5,
        currency: 'SGD',
        name: 'Smart TV',
        description: 'A 55-inch 4K Smart TV with HDR.',
        price: 800.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://t3.ftcdn.net/jpg/00/69/94/62/360_F_69946220_DrwzypPQScV9V3inAflMYYnou8NmTwzX.jpg',
            },
        },
    },
    {
        category_id: 6,
        currency: 'SGD',
        name: 'Air Fryer',
        description: 'A versatile air fryer for healthy cooking.',
        price: 150.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://t4.ftcdn.net/jpg/04/25/94/69/360_F_425946966_eoAnhbXqPUeejglGFevKmNfUFRJYVVEz.jpg',
            },
        },
    },
    {
        category_id: 6,
        currency: 'SGD',
        name: 'Washing Machine',
        description: 'A high-efficiency front-load washing machine.',
        price: 600.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://thumbs.dreamstime.com/b/washing-machine-isolated-white-vertical-format-41323678.jpg',
            },
        },
    },
    {
        category_id: 7,
        currency: 'SGD',
        name: 'Soundbar',
        description: 'A high-quality soundbar with surround sound.',
        price: 250.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url:
                    'https://image-us.samsung.com/SamsungUS/home/television-home-theater/home-theater/soundbars/05032023/HW-Q900C_002_Set-R-Perspective_Titan-Black_1600x1200.jpg?$product-details-jpg$',
            },
        },
    },
    {
        category_id: 7,
        currency: 'SGD',
        name: 'Gaming Console',
        description: 'A next-gen gaming console for immersive gameplay.',
        price: 500.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/gaming-console.jpg',
            },
        },
    },
    {
        category_id: 8,
        currency: 'SGD',
        name: 'Decorative Vase',
        description: 'A beautiful decorative vase for your home.',
        price: 60.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/decorative-vase.jpg',
            },
        },
    },
    {
        category_id: 8,
        currency: 'SGD',
        name: 'Wall Art',
        description: 'A stunning piece of wall art to enhance your space.',
        price: 120.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/wall-art.jpg',
            },
        },
    },
    {
        category_id: 9,
        currency: 'SGD',
        name: 'Chef Knife',
        description: 'A professional chef knife for precise cutting.',
        price: 80.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/chef-knife.jpg',
            },
        },
    },
    {
        category_id: 9,
        currency: 'SGD',
        name: 'Non-Stick Frying Pan',
        description: 'A high-quality non-stick frying pan for easy cooking.',
        price: 50.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/non-stick-frying-pan.jpg',
            },
        },
    },
    {
        category_id: 10,
        currency: 'SGD',
        name: 'Gaming Laptop',
        description: 'A powerful gaming laptop with high-end graphics.',
        price: 1500.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/gaming-laptop.jpg',
            },
        },
    },
    {
        category_id: 10,
        currency: 'SGD',
        name: 'Ultrabook',
        description: 'A sleek and lightweight ultrabook for productivity.',
        price: 1300.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/ultrabook.jpg',
            },
        },
    },
    {
        category_id: 11,
        currency: 'SGD',
        name: 'Linen Casual Shirt',
        description: 'A comfortable linen shirt for casual wear.',
        price: 40.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/linen-casual-shirt.jpg',
            },
        },
    },
    {
        category_id: 11,
        currency: 'SGD',
        name: 'Formal Dress Shirt',
        description: 'A crisp and elegant formal dress shirt.',
        price: 60.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/formal-dress-shirt.jpg',
            },
        },
    },

    {
        category_id: 12,
        currency: 'SGD',
        name: 'Leather Dress Shoes',
        description: 'Classic leather dress shoes for formal occasions.',
        price: 120.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/leather-dress-shoes.jpg',
            },
        },
    },
    {
        category_id: 12,
        currency: 'SGD',
        name: 'Casual Sneakers',
        description: 'Comfortable and stylish sneakers for everyday wear.',
        price: 80.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/casual-sneakers.jpg',
            },
        },
    },
    {
        category_id: 13,
        currency: 'SGD',
        name: 'Chronograph Watch',
        description: 'A sophisticated chronograph watch with a leather strap.',
        price: 200.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/chronograph-watch.jpg',
            },
        },
    },
    {
        category_id: 13,
        currency: 'SGD',
        name: 'Digital Sports Watch',
        description: 'A rugged digital sports watch with multiple functions.',
        price: 100.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/digital-sports-watch.jpg',
            },
        },
    },
    {
        category_id: 14,
        currency: 'SGD',
        name: 'Wireless Charger',
        description: 'A fast wireless charger for your mobile devices.',
        price: 30.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/wireless-charger.jpg',
            },
        },
    },
    {
        category_id: 14,
        currency: 'SGD',
        name: 'Bluetooth Earbuds',
        description: 'Compact Bluetooth earbuds with excellent sound quality.',
        price: 50.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/bluetooth-earbuds.jpg',
            },
        },
    },
    {
        category_id: 15,
        currency: 'SGD',
        name: 'Motorcycle Helmet',
        description: 'A durable and stylish motorcycle helmet for safety.',
        price: 150.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/motorcycle-helmet.jpg',
            },
        },
    },
    {
        category_id: 15,
        currency: 'SGD',
        name: 'Motorcycle Gloves',
        description: 'Protective motorcycle gloves for a comfortable ride.',
        price: 60.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/motorcycle-gloves.jpg',
            },
        },
    },
    {
        category_id: 16,
        currency: 'SGD',
        name: 'Hydrating Face Cream',
        description: 'A nourishing face cream for deep hydration.',
        price: 35.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/hydrating-face-cream.jpg',
            },
        },
    },
    {
        category_id: 16,
        currency: 'SGD',
        name: 'Exfoliating Scrub',
        description: 'A gentle exfoliating scrub for radiant skin.',
        price: 25.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/exfoliating-scrub.jpg',
            },
        },
    },
    {
        category_id: 17,
        currency: 'SGD',
        name: 'Smartphone Pro',
        description: 'A high-performance smartphone with a stunning display.',
        price: 1000.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/smartphone-pro.jpg',
            },
        },
    },
    {
        category_id: 17,
        currency: 'SGD',
        name: 'Budget Smartphone',
        description: 'An affordable smartphone with essential features.',
        price: 300.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/budget-smartphone.jpg',
            },
        },
    },
    {
        category_id: 18,
        currency: 'SGD',
        name: 'Fitness Tracker',
        description: 'A fitness tracker to monitor your workouts and health.',
        price: 100.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/fitness-tracker.jpg',
            },
        },
    },
    {
        category_id: 18,
        currency: 'SGD',
        name: 'Yoga Mat',
        description: 'A durable and comfortable yoga mat for your practice.',
        price: 40.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/yoga-mat.jpg',
            },
        },
    },
    {
        category_id: 19,
        currency: 'SGD',
        name: 'Polarized Sunglasses',
        description: 'Stylish polarized sunglasses for UV protection.',
        price: 60.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/polarized-sunglasses.jpg',
            },
        },
    },
    {
        category_id: 19,
        currency: 'SGD',
        name: 'Aviator Sunglasses',
        description: 'Classic aviator sunglasses with a sleek design.',
        price: 80.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/aviator-sunglasses.jpg',
            },
        },
    },
    {
        category_id: 20,
        currency: 'SGD',
        name: '10-Inch Tablet',
        description: 'A powerful 10-inch tablet for work and entertainment.',
        price: 300.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/10-inch-tablet.jpg',
            },
        },
    },
    {
        category_id: 20,
        currency: 'SGD',
        name: '8-Inch Tablet',
        description: 'A compact 8-inch tablet for on-the-go use.',
        price: 200.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/8-inch-tablet.jpg',
            },
        },
    },
    {
        category_id: 21,
        currency: 'SGD',
        name: 'Silk Blouse',
        description: 'An elegant silk blouse for formal occasions.',
        price: 70.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/silk-blouse.jpg',
            },
        },
    },
    {
        category_id: 21,
        currency: 'SGD',
        name: 'Cotton T-Shirt',
        description: 'A comfortable cotton t-shirt for everyday wear.',
        price: 25.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/cotton-tshirt.jpg',
            },
        },
    },
    {
        category_id: 22,
        currency: 'SGD',
        name: 'Electric Scooter',
        description: 'A fast and efficient electric scooter for commuting.',
        price: 700.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/electric-scooter.jpg',
            },
        },
    },
    {
        category_id: 22,
        currency: 'SGD',
        name: 'Mountain Bike',
        description: 'A durable mountain bike for off-road adventures.',
        price: 500.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/mountain-bike.jpg',
            },
        },
    },
    {
        category_id: 23,
        currency: 'SGD',
        name: 'Cordless Drill',
        description: 'A powerful cordless drill for home improvement projects.',
        price: 80.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/cordless-drill.jpg',
            },
        },
    },
    {
        category_id: 23,
        currency: 'SGD',
        name: 'Tool Set',
        description: 'A comprehensive tool set for all your DIY needs.',
        price: 120.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/tool-set.jpg',
            },
        },
    },
    {
        category_id: 24,
        currency: 'SGD',
        name: 'Leather Handbag',
        description: 'A stylish leather handbag for everyday use.',
        price: 200.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/leather-handbag.jpg',
            },
        },
    },
    {
        category_id: 24,
        currency: 'SGD',
        name: 'Tote Bag',
        description: 'A spacious tote bag for all your essentials.',
        price: 80.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/tote-bag.jpg',
            },
        },
    },
    {
        category_id: 25,
        currency: 'SGD',
        name: 'Cocktail Dress',
        description: 'A stunning cocktail dress for special occasions.',
        price: 150.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/cocktail-dress.jpg',
            },
        },
    },
    {
        category_id: 25,
        currency: 'SGD',
        name: 'Summer Dress',
        description: 'A light and airy summer dress for warm days.',
        price: 60.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/summer-dress.jpg',
            },
        },
    },
    {
        category_id: 26,
        currency: 'SGD',
        name: 'Gold Necklace',
        description: 'An elegant gold necklace with a pendant.',
        price: 300.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/gold-necklace.jpg',
            },
        },
    },
    {
        category_id: 26,
        currency: 'SGD',
        name: 'Diamond Earrings',
        description: 'Stunning diamond earrings for a touch of luxury.',
        price: 500.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/diamond-earrings.jpg',
            },
        },
    },
    {
        category_id: 27,
        currency: 'SGD',
        name: 'High Heels',
        description: 'Elegant high heels for a night out.',
        price: 90.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/high-heels.jpg',
            },
        },
    },
    {
        category_id: 27,
        currency: 'SGD',
        name: 'Ballet Flats',
        description: 'Comfortable ballet flats for everyday wear.',
        price: 60.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/ballet-flats.jpg',
            },
        },
    },
    {
        category_id: 28,
        currency: 'SGD',
        name: 'Luxury Watch',
        description: 'A luxury watch with a diamond-studded bezel.',
        price: 1000.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/luxury-watch.jpg',
            },
        },
    },
    {
        category_id: 28,
        currency: 'SGD',
        name: 'Casual Watch',
        description: 'A stylish casual watch for everyday wear.',
        price: 150.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/casual-watch.jpg',
            },
        },
    },

    {
        category_id: 1,
        currency: 'SGD',
        name: 'Organic Lip Balm',
        description: 'A nourishing lip balm made with organic ingredients.',
        price: 15.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/organic-lip-balm.jpg',
            },
        },
    },
    {
        category_id: 2,
        currency: 'SGD',
        name: 'Luxury Perfume',
        description: 'An exquisite fragrance with floral and woody notes.',
        price: 250.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/luxury-perfume.jpg',
            },
        },
    },
    {
        category_id: 3,
        currency: 'SGD',
        name: 'Modern Sofa',
        description: 'A comfortable and stylish modern sofa for your living room.',
        price: 1200.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/modern-sofa.jpg',
            },
        },
    },
    {
        category_id: 4,
        currency: 'SGD',
        name: 'Organic Quinoa',
        description: 'A pack of organic quinoa, perfect for healthy meals.',
        price: 20.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/organic-quinoa.jpg',
            },
        },
    },
    {
        category_id: 5,
        currency: 'SGD',
        name: 'Noise-Cancelling Headphones',
        description:
            'High-quality noise-cancelling headphones for immersive sound.',
        price: 350.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/noise-cancelling-headphones.jpg',
            },
        },
    },
    {
        category_id: 6,
        currency: 'SGD',
        name: 'Air Purifier',
        description: 'An efficient air purifier for a cleaner indoor environment.',
        price: 150.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/air-purifier.jpg',
            },
        },
    },
    {
        category_id: 7,
        currency: 'SGD',
        name: '4K Smart TV',
        description: 'A 4K smart TV with vibrant colors and advanced features.',
        price: 800.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/4k-smart-tv.jpg',
            },
        },
    },
    {
        category_id: 8,
        currency: 'SGD',
        name: 'Wall Art Decor',
        description: 'Beautiful wall art to enhance your home decor.',
        price: 100.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/wall-art-decor.jpg',
            },
        },
    },
    {
        category_id: 9,
        currency: 'SGD',
        name: 'Stainless Steel Knife Set',
        description: 'A premium set of stainless steel knives for your kitchen.',
        price: 120.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/stainless-steel-knife-set.jpg',
            },
        },
    },
    {
        category_id: 10,
        currency: 'SGD',
        name: 'Gaming Laptop',
        description: 'A high-performance gaming laptop with powerful graphics.',
        price: 1500.0,
        stock: 100,
        ProductImage: {
            create: {
                image_url: 'https://example.com/images/gaming-laptop.jpg',
            },
        },
    },
];

gis('lol')
    .then((res: any) => {
        console.log(res)
    })
