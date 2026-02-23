const menuItems = [

    // 🌴 Kerala Specialties (Top of Menu)
    {
        id: 1,
        name: "Traditional Filter Kaapi",
        price: 65,
        category: "coffee",
        description: "South Indian filter coffee brewed strong and frothy with chicory-blended beans.",
        image: "https://i.pinimg.com/736x/31/c5/e7/31c5e7c9097f3a3e3527eb488f7d9439.jpg"
    },
    {
        id: 2,
        name: "Kattan Chaya",
        price: 45,
        category: "coffee",
        description: "Classic Kerala black tea, bold and refreshing — a true roadside chai experience.",
        image: "https://i.pinimg.com/736x/aa/22/0d/aa220d97f7143ab98b80b0705eeb4679.jpg"
    },
    {
        id: 3,
        name: "Spiced Chukku Kaapi",
        price: 75,
        category: "coffee",
        description: "Traditional herbal coffee with dry ginger, pepper, and palm jaggery.",
        image: "https://i.pinimg.com/736x/82/50/2c/82502cf1335b9305403083e64d1c9c84.jpg"
    },
    {
        id: 4,
        name: "Elaneer (Tender Coconut) Shake",
        price: 145,
        category: "breakfast",
        description: "Chilled tender coconut blended with milk and ice cream for a creamy tropical sip.",
        image: "https://i.pinimg.com/736x/1b/11/47/1b11470b7d87f5d06cf8d9c7d5b0c1db.jpg"
    },
    {
        id: 5,
        name: "Kerala Banana Pancakes",
        price: 225,
        category: "breakfast",
        description: "Fluffy pancakes made with ripe Nendran banana and jaggery, served warm.",
        image: "https://i.pinimg.com/736x/64/c2/4a/64c24aaf879b8d6c59cd6a67b769c17b.jpg"
    },
    {
        id: 6,
        name: "Malabar Chicken Sandwich",
        price: 265,
        category: "breakfast",
        description: "Spiced Malabar-style chicken filling layered in toasted bread with fresh greens.",
        image: "https://i.pinimg.com/736x/fc/18/4e/fc184e35f221e82f0c58d4eaf7d83c1b.jpg"
    },
    {
        id: 7,
        name: "Veg Cutlet & Chutney",
        price: 95,
        category: "breakfast",
        description: "Kerala tea-shop favorite — crispy vegetable cutlets served with mint chutney.",
        image: "https://i.pinimg.com/736x/29/34/af/2934afc3c8a68302bd04917a7f16525d.jpg"
    },
    {
        id: 8,
        name: "Unniyappam Bites",
        price: 110,
        category: "pastries",
        description: "Soft fried rice-banana dumplings with jaggery and coconut, a sweet Kerala classic.",
        image: "https://i.pinimg.com/736x/46/a3/e6/46a3e673975853919479cee6a3a58d74.jpg"
    },
    {
        id: 9,
        name: "Tender Coconut Cheesecake",
        price: 185,
        category: "pastries",
        description: "Creamy cheesecake infused with fresh elaneer and coconut — Kerala tropical dessert.",
        image: "https://i.pinimg.com/736x/8d/71/f4/8d71f4a7bfecb3903492d949dc64a9f7.jpg"
    },
    {
        id: 10,
        name: "Jaggery Banana Muffin",
        price: 95,
        category: "pastries",
        description: "Moist muffin made with ripe Kerala banana and unrefined jaggery sweetness.",
        image: "https://i.pinimg.com/736x/ba/dc/af/badcaf1d5c7c2ef8d5853747f929b8a3.jpg"
    },

    // ➕ More Kerala Café Items
    {
        id: 11,
        name: "Pazham Pori",
        price: 85,
        category: "pastries",
        description: "Golden-fried ripe Kerala banana fritters — crispy outside, soft inside.",
        image: "https://i.pinimg.com/1200x/e3/9e/89/e39e899e4ef4218654d2332626a581ca.jpg"
    },
    {
        id: 12,
        name: "Achappam Crisps",
        price: 75,
        category: "pastries",
        description: "Traditional rose cookies from Kerala, light, crunchy, and subtly sweet.",
        image: "https://i.pinimg.com/1200x/bb/14/0c/bb140c69a407270e7d39d99f1a4acda7.jpg"
    },
    {
        id: 13,
        name: "Kerala Egg Puffs",
        price: 95,
        category: "breakfast",
        description: "Flaky bakery puff pastry stuffed with spiced egg masala filling.",
        image: "https://i.pinimg.com/1200x/b6/a9/d4/b6a9d48510444b350c24bc9625da55d3.jpg"
    },
    {
        id: 14,
        name: "Cardamom Milk Tea",
        price: 55,
        category: "coffee",
        description: "Kerala-style milk tea infused with fragrant cardamom pods.",
        image: "https://i.pinimg.com/736x/83/e7/ef/83e7efb0b9fe566cb842a7cff58afdf4.jpg"
    },
    {
        id: 15,
        name: "Nannari Sharbat",
        price: 85,
        category: "breakfast",
        description: "Cooling herbal sarbath drink with nannari root syrup and lime.",
        image: "https://i.pinimg.com/736x/25/f3/12/25f31286d181cc89ed777dcf7564112c.jpg"
    },

    // ☕ Original Café Menu (after Kerala)
    {
        id: 16,
        name: "Metropolitan Macchiato",
        price: 175,
        category: "coffee",
        description: "Our signature espresso with vanilla bean syrup, steamed milk, and house-made caramel drizzle.",
        image: "https://i.pinimg.com/1200x/70/31/bd/7031bde15d4606b3766161584b2e318c.jpg"
    },
    {
        id: 17,
        name: "Chaya Cold Brew",
        price: 165,
        category: "coffee",
        description: "Slow-steeped for 24 hours. Smooth, bold, and served over crystal ice.",
        image: "https://i.pinimg.com/736x/19/4f/03/194f03f56977b376d287bf0b28c4625f.jpg"
    },
    {
        id: 18,
        name: "Artisan Avocado Toast",
        price: 245,
        category: "breakfast",
        description: "Rustic sourdough piled high with smashed avocado, radish, chili flakes, and microgreens.",
        image: "https://i.pinimg.com/1200x/1f/10/a7/1f10a70a6e6169d0c8abb8a66821e445.jpg"
    },
    {
        id: 19,
        name: "Golden Croissant",
        price: 95,
        category: "pastries",
        description: "Baked fresh daily. Flaky, buttery layers that melt in your mouth.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 20,
        name: "Velvet Cappuccino",
        price: 155,
        category: "coffee",
        description: "Rich espresso topped with a cloud of micro-foam and a dusting of cocoa.",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 21,
        name: "Berry Bliss Muffin",
        price: 95,
        category: "pastries",
        description: "Farm-fresh blueberries folded into a tender buttermilk crumb.",
        image: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 22,
        name: "Sunday Stack Pancakes",
        price: 265,
        category: "breakfast",
        description: "Three fluffy pancakes served with whipped butter and organic maple syrup.",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 23,
        name: "Matcha Latte",
        price: 185,
        category: "coffee",
        description: "Premium ceremonial grade matcha whisked with steamed oat milk.",
        image: "https://i.pinimg.com/736x/bb/6d/f3/bb6df347ddb4cca5427f3bf2db6f242d.jpg"
    },
    {
        id: 24,
        name: "Citrus Sunrise Juice",
        price: 135,
        category: "breakfast",
        description: "Freshly pressed orange, grapefruit, and a hint of lime served over ice.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 25,
        name: "Iced Caramel Latte",
        price: 175,
        category: "coffee",
        description: "Espresso poured over ice with silky milk and caramel drizzle.",
        image: "https://i.pinimg.com/736x/97/6f/e7/976fe7d600238d377e398a77cd45bd51.jpg"
    },
    {
        id: 26,
        name: "Classic Hot Chocolate",
        price: 145,
        category: "coffee",
        description: "Velvety steamed milk blended with rich dark chocolate and topped with foam.",
        image: "https://i.pinimg.com/736x/97/b9/14/97b9142edf9f082623d428810ead55d9.jpg"
    },
    {
        id: 27,
        name: "Berry Breeze Cooler",
        price: 155,
        category: "breakfast",
        description: "Chilled blend of mixed berries, mint, and sparkling water for a light, cold sip.",
        image: "https://i.pinimg.com/1200x/4a/2c/46/4a2c465f5cd6c28cd7ba01404057511f.jpg"
    },
    {
        id: 28,
        name: "Spiced Chai Latte",
        price: 165,
        category: "coffee",
        description: "Aromatic black tea with warm spices, steamed milk, and a dusting of cinnamon.",
        image: "https://i.pinimg.com/736x/82/37/57/82375702cb51fc8a92a066158ed3976b.jpg"
    },
    {
        id: 29,
        name: "Classic Black Coffee",
        price: 95,
        category: "coffee",
        description: "Freshly brewed premium coffee served bold and pure.",
        image: "https://i.pinimg.com/1200x/6a/e4/82/6ae482a0690b8ca89fd3acd554a36d66.jpg"
    },
    {
        id: 30,
        name: "English Breakfast Tea",
        price: 85,
        category: "coffee",
        description: "A comforting cup of robust black tea, perfectly steeped and served hot.",
        image: "https://i.pinimg.com/736x/32/b3/93/32b39363b72b8720708bf5786956fb38.jpg"
    },
    {
        id: 31,
        name: "Gourmet Garden Sandwich",
        price: 225,
        category: "breakfast",
        description: "Toasted artisan bread layered with grilled vegetables, pesto, fresh greens, and cheese.",
        image: "https://i.pinimg.com/1200x/10/b8/a1/10b8a182eb770eca8077f908dfdc77ae.jpg"
    },
    {
        id: 32,
        name: "Signature Crème Castle Cake",
        price: 175,
        category: "pastries",
        description: "Our house specialty sponge layered with silky crème, finished with elegant frosting.",
        image: "https://i.pinimg.com/736x/25/c6/20/25c620e93456b923a6ad4e6de1ddfafb.jpg"
    },
    // {
    //     id: 33,
    //     name: "Blueberry Baked Cheesecake",
    //     price: 195,
    //     category: "pastries",
    //     description: "Rich baked cheesecake topped with luscious blueberry compote.",
    //     image: "https://i.pinimg.com/736x/96/bc/87/96bc8704a6afe56375c910dbafef3280.jpg"
    // }

];

export default menuItems;
