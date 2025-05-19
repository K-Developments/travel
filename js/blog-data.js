const blogData = [
    {
        id: 1,
        title: "Top 10 Must-Visit Beaches in Sri Lanka",
        excerpt: "Discover the most stunning beaches in Sri Lanka, from popular surf spots to hidden gems perfect for relaxation.",
        category: "destinations",
        date: "June 15, 2025",
        image: "./assets/blog/beaches.jpg",
        readTime: "5 min read",
        tags: ["beaches", "coastal", "relaxation", "travel"],
        content: `
            <p>Sri Lanka, the pearl of the Indian Ocean, is renowned for its breathtaking coastline stretching over 1,300 kilometers. From golden sandy shores to secluded coves, the island offers beach experiences for every type of traveler.</p>
            
            <h2>1. Unawatuna Beach</h2>
            <p>Located near Galle, Unawatuna is one of Sri Lanka's most famous beaches. Its crescent-shaped bay with calm waters makes it perfect for swimming and snorkeling. Don't miss the nearby Japanese Peace Pagoda for stunning sunset views.</p>
            
            <h2>2. Mirissa Beach</h2>
            <p>This laid-back beach is the prime spot for whale watching from November to April. The palm-fringed shore is dotted with cozy beach bars and excellent seafood restaurants.</p>
            
            <h2>3. Bentota Beach</h2>
            <p>Known for its water sports and luxury resorts, Bentota offers the perfect mix of adventure and relaxation. Try your hand at jet skiing or simply unwind at one of the beachfront spas.</p>
            
            <h2>4. Arugam Bay</h2>
            <p>A surfer's paradise with some of the best waves in Asia. The laid-back vibe and beachfront hostels make this a favorite among backpackers.</p>
            
            <h2>Beach Safety Tips</h2>
            <ul>
                <li>Always check for warning flags and local advice about currents</li>
                <li>Apply reef-safe sunscreen to protect marine life</li>
                <li>Respect local customs - some beaches may require modest attire</li>
                <li>Be mindful of wildlife, especially sea turtles during nesting season</li>
            </ul>
            
            <p>Whether you're looking for adventure, relaxation, or cultural experiences, Sri Lanka's beaches offer something for everyone. Plan your coastal itinerary carefully to make the most of your beach vacation.</p>
        `,
        relatedPosts: [2, 4, 8]
    },
    {
        id: 2,
        title: "Essential Packing List for Sri Lanka Travel",
        excerpt: "Don't forget these essential items when packing for your Sri Lankan adventure to ensure a comfortable trip.",
        category: "travel-tips",
        date: "May 28, 2025",
        image: "./assets/blog/essential-packing.jpg",
        readTime: "4 min read",
        tags: ["packing", "essentials", "travel-tips", "preparation"],
        content: `
            <p>Packing for Sri Lanka requires consideration of the tropical climate, cultural norms, and the variety of activities you might engage in. Here's our comprehensive packing list:</p>
            
            <h2>Clothing Essentials</h2>
            <ul>
                <li>Lightweight, breathable clothing (cotton/linen recommended)</li>
                <li>Modest attire for temple visits (shoulders and knees covered)</li>
                <li>Swimwear (consider a cover-up for walking to/from beaches)</li>
                <li>Comfortable walking shoes/sandals</li>
                <li>Rain jacket or compact umbrella (especially if traveling during monsoon season)</li>
            </ul>
            
            <h2>Health & Safety</h2>
            <ul>
                <li>High SPF sunscreen (reef-safe recommended)</li>
                <li>Insect repellent (DEET-based for maximum protection)</li>
                <li>Basic first aid kit including diarrhea medication</li>
                <li>Hand sanitizer and wet wipes</li>
                <li>Any prescription medications with copies of prescriptions</li>
            </ul>
            
            <h2>Tech & Accessories</h2>
            <ul>
                <li>Universal power adapter (Sri Lanka uses Type D and G plugs)</li>
                <li>Portable power bank</li>
                <li>Waterproof phone case or dry bag</li>
                <li>Lightweight daypack for excursions</li>
            </ul>
            
            <p>Remember to pack light as you'll likely be moving between destinations. Laundry services are affordable and widely available throughout the country.</p>
        `,
        relatedPosts: [1, 3, 6]
    },
    {
        id: 3,
        title: "Exploring Sri Lanka's Ancient Cities",
        excerpt: "A journey through Sri Lanka's cultural triangle, featuring the ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya.",
        category: "culture",
        date: "May 10, 2025",
        image: "./assets/blog/ancientcity.jpg",
        readTime: "7 min read",
        tags: ["history", "culture", "unesco", "archaeology"],
        content: `
            <p>Sri Lanka's Cultural Triangle is home to some of the most impressive ancient cities in Asia, showcasing the island's rich history and architectural achievements.</p>
            
            <h2>Anuradhapura</h2>
            <p>This sacred city was the first ancient capital of Sri Lanka (4th century BCE to 11th century CE) and remains an important pilgrimage site. Must-see highlights include:</p>
            <ul>
                <li>Sacred Bodhi Tree - grown from a cutting of the original tree under which Buddha attained enlightenment</li>
                <li>Ruwanwelisaya - an impressive white stupa dating back to 140 BCE</li>
                <li>Jetavanaramaya - once the third tallest structure in the ancient world</li>
            </ul>
            
            <h2>Polonnaruwa</h2>
            <p>The second ancient capital (11th-13th century CE) features better-preserved ruins including:</p>
            <ul>
                <li>The Quadrangle - a compact area packed with remarkable structures</li>
                <li>Gal Vihara - four magnificent Buddha statues carved from a single granite rock</li>
                <li>Lankatilaka - an enormous brick structure with a towering Buddha image</li>
            </ul>
            
            <h2>Sigiriya</h2>
            <p>The spectacular "Lion Rock" fortress rises 200 meters above the surrounding plain. Highlights include:</p>
            <ul>
                <li>The Mirror Wall with ancient graffiti</li>
                <li>Frescoes of the "Sigiriya Maidens"</li>
                <li>The lion's paw gateway to the summit</li>
            </ul>
            
            <p>When visiting these sites, remember to dress modestly, remove shoes when required, and hire a knowledgeable guide to fully appreciate their historical significance.</p>
        `,
        relatedPosts: [5, 7, 8]
    },
    {
        id: 4,
        title: "Best Wildlife Safaris in Sri Lanka",
        excerpt: "Guide to the best national parks for spotting elephants, leopards, and other wildlife in their natural habitat.",
        category: "adventure",
        date: "April 22, 2025",
        image: "./assets/blog/safari.jpg",
        readTime: "6 min read",
        tags: ["wildlife", "safari", "nature", "animals"],
        content: `
            <p>Sri Lanka boasts an incredible diversity of wildlife, with numerous national parks offering excellent safari experiences. Here are the top parks to visit:</p>
            
            <h2>Yala National Park</h2>
            <p>Best for: Leopard sightings<br>
            Yala has one of the highest leopard densities in the world. The park also hosts elephants, sloth bears, crocodiles, and hundreds of bird species. Visit during the dry season (May-August) for optimal wildlife viewing.</p>
            
            <h2>Udawalawe National Park</h2>
            <p>Best for: Elephant encounters<br>
            This park is famous for its large herds of elephants that can often be seen bathing in the reservoir. The Udawalawe Elephant Transit Home nearby is a great place to see orphaned calves being rehabilitated.</p>
            
            <h2>Wilpattu National Park</h2>
            <p>Best for: Off-the-beaten-path experience<br>
            Sri Lanka's largest national park features natural lakes (villus) and is less crowded than Yala. Excellent for spotting leopards, bears, and a variety of deer species.</p>
            
            <h2>Minneriya National Park</h2>
            <p>Best for: The Elephant Gathering<br>
            From July to October, hundreds of elephants congregate around the Minneriya tank in what's considered one of Asia's greatest wildlife spectacles.</p>
            
            <h2>Safari Tips</h2>
            <ul>
                <li>Book safaris early morning or late afternoon when animals are most active</li>
                <li>Hire an experienced guide - their knowledge makes a huge difference</li>
                <li>Bring binoculars and a good camera with zoom lens</li>
                <li>Wear neutral-colored clothing to blend in</li>
                <li>Maintain silence and don't disturb the animals</li>
            </ul>
        `,
        relatedPosts: [1, 3, 7]
    },
    {
        id: 5,
        title: "Sri Lankan Cuisine: A Food Lover's Guide",
        excerpt: "Discover the flavors of Sri Lanka with this guide to must-try dishes and where to find them.",
        category: "culture",
        date: "April 15, 2025",
        image: "./assets/blog/food.jpg",
        readTime: "5 min read",
        tags: ["food", "cuisine", "spices", "local"],
        content: `
            <p>Sri Lankan cuisine is a vibrant fusion of flavors, influenced by its tropical location, colonial history, and diverse cultural heritage. Here are the essential dishes to try:</p>
            
            <h2>Signature Dishes</h2>
            <ul>
                <li><strong>Rice and Curry</strong> - The national dish featuring rice served with 3-5 different curries (meat, fish, or vegetable)</li>
                <li><strong>Hoppers (Appa)</strong> - Bowl-shaped pancakes made from fermented rice flour, often with an egg cooked in the center</li>
                <li><strong>Kottu Roti</strong> - Chopped roti stir-fried with vegetables, egg, and meat - the sound of it being made is unmistakable!</li>
                <li><strong>Lamprais</strong> - A Dutch-influenced dish of rice, meat, and sambol baked in a banana leaf</li>
                <li><strong>String Hoppers</strong> - Steamed rice noodles served with curry for breakfast</li>
            </ul>
            
            <h2>Must-Try Street Foods</h2>
            <ul>
                <li><strong>Egg Roti</strong> - Flatbread stuffed with spiced egg mixture</li>
                <li><strong>Vadai</strong> - Savory fried lentil doughnuts</li>
                <li><strong>Kiri Bath</strong> - Coconut milk rice cakes, often served with spicy sambol</li>
                <li><strong>Wood Apple Juice</strong> - A unique local fruit drink</li>
            </ul>
            
            <h2>Regional Specialties</h2>
            <ul>
                <li><strong>Jaffna Crab Curry</strong> - Famous for its rich, spicy flavor</li>
                <li><strong>Ambul Thiyal</strong> - Sour fish curry from the south</li>
                <li><strong>Kukul Mas Curry</strong> - Flavorful chicken curry with roasted spices</li>
            </ul>
            
            <p>Don't miss visiting a local market to see the incredible variety of fresh produce, spices, and seafood. For authentic experiences, try home-cooked meals at local guesthouses or cooking classes.</p>
        `,
        relatedPosts: [3, 6, 8]
    },
    {
        id: 6,
        title: "Sustainable Travel in Sri Lanka",
        excerpt: "How to explore Sri Lanka responsibly while supporting local communities and minimizing your environmental impact.",
        category: "travel-tips",
        date: "March 30, 2025",
        image: "./assets/blog/sustainable.jpg",
        readTime: "8 min read",
        tags: ["eco-tourism", "sustainability", "responsible", "community"],
        content: `
            <p>Sri Lanka's natural beauty and cultural heritage are precious resources that need protection. Here's how to travel sustainably:</p>
            
            <h2>Eco-Friendly Accommodation</h2>
            <p>Choose hotels and guesthouses with genuine sustainability practices:</p>
            <ul>
                <li>Look for properties using solar power and rainwater harvesting</li>
                <li>Support places that employ and train local staff</li>
                <li>Opt for smaller, locally-owned establishments over international chains</li>
                <li>Check if they have proper waste management systems</li>
            </ul>
            
            <h2>Responsible Wildlife Tourism</h2>
            <ul>
                <li>Avoid elephant rides - choose observation-only experiences</li>
                <li>Keep a respectful distance from all wildlife</li>
                <li>Never feed wild animals</li>
                <li>Choose ethical turtle hatcheries that release all hatchlings</li>
            </ul>
            
            <h2>Supporting Local Communities</h2>
            <ul>
                <li>Buy souvenirs directly from artisans at cooperatives</li>
                <li>Eat at local restaurants rather than international chains</li>
                <li>Use local guides for tours and activities</li>
                <li>Visit community-based tourism projects</li>
            </ul>
            
            <h2>Reducing Environmental Impact</h2>
            <ul>
                <li>Carry a reusable water bottle (many hotels offer filtered water refills)</li>
                <li>Say no to single-use plastics</li>
                <li>Use reef-safe sunscreen when swimming</li>
                <li>Stick to marked trails when hiking</li>
                <li>Consider carbon offsetting for your flights</li>
            </ul>
            
            <p>Remember that sustainable travel often leads to more authentic and meaningful experiences while helping preserve Sri Lanka for future generations.</p>
        `,
        relatedPosts: [2, 4, 7]
    },
    {
        id: 7,
        title: "Trekking in Sri Lanka's Hill Country",
        excerpt: "Explore the breathtaking trails through tea plantations, waterfalls, and misty mountains.",
        category: "adventure",
        date: "March 18, 2025",
        image: "./assets/blog/trekking.jpg",
        readTime: "6 min read",
        tags: ["hiking", "mountains", "tea", "nature"],
        content: `
            <p>Sri Lanka's hill country offers some of the island's most spectacular trekking opportunities, from gentle walks through tea estates to challenging mountain climbs.</p>
            
            <h2>Best Treks in the Hill Country</h2>
            <ul>
                <li><strong>Adam's Peak (Sri Pada)</strong> - The sacred mountain climbed by pilgrims to see the sunrise (5-7 hours round trip)</li>
                <li><strong>Horton Plains to World's End</strong> - A 9km loop through cloud forest ending at a dramatic 880m cliff (3-4 hours)</li>
                <li><strong>Knuckles Mountain Range</strong> - Challenging multi-day treks through pristine wilderness</li>
                <li><strong>Ella Rock</strong> - A rewarding 10km round trip with panoramic views (3-4 hours)</li>
                <li><strong>Little Adam's Peak</strong> - An easier alternative to its namesake with beautiful views (1-2 hours)</li>
            </ul>
            
            <h2>Tea Country Walks</h2>
            <p>The hills around Nuwara Eliya, Haputale, and Ella offer countless walking opportunities through tea plantations. Many estates welcome visitors and some offer guided walks explaining the tea-making process.</p>
            
            <h2>Trekking Tips</h2>
            <ul>
                <li>Start early to avoid afternoon rain and clouds</li>
                <li>Wear sturdy shoes as trails can be slippery</li>
                <li>Carry sufficient water and snacks</li>
                <li>Dress in layers - temperatures vary significantly</li>
                <li>Hire a local guide for more challenging routes</li>
                <li>Respect the environment - take all trash with you</li>
            </ul>
            
            <p>Whether you're looking for a gentle stroll or a challenging hike, Sri Lanka's hill country offers trails to suit all abilities, with breathtaking scenery at every turn.</p>
        `,
        relatedPosts: [3, 4, 6]
    },
    {
        id: 8,
        title: "Sri Lanka's Best Sunset Spots",
        excerpt: "Witness spectacular sunsets at these picturesque locations across the island.",
        category: "destinations",
        date: "February 28, 2025",
        image: "./assets/blog/sunset.jpg",
        readTime: "4 min read",
        tags: ["sunset", "photography", "views", "scenic"],
        content: `
            <p>Sri Lanka's tropical sunsets are legendary, painting the sky in vibrant hues of orange, pink, and purple. Here are the best places to enjoy them:</p>
            
            <h2>Coastal Sunset Spots</h2>
            <ul>
                <li><strong>Unawatuna Beach</strong> - Watch the sun dip below the horizon from the golden sands</li>
                <li><strong>Galle Fort Ramparts</strong> - Historic setting with panoramic ocean views</li>
                <li><strong>Trincomalee</strong> - Spectacular sunsets over the natural harbor</li>
                <li><strong>Dutch Bay in Batticaloa</strong> - Peaceful setting with fishing boats silhouetted against the sunset</li>
            </ul>
            
            <h2>Hill Country Sunset Views</h2>
            <ul>
                <li><strong>Lipton's Seat</strong> - Where tea magnate Thomas Lipton surveyed his empire</li>
                <li><strong>Ella Rock</strong> - For sunset views over the hills</li>
                <li><strong>Pidurangala Rock</strong> - Alternative to Sigiriya with sunset views over the lion rock</li>
            </ul>
            
            <h2>Urban Sunset Locations</h2>
            <ul>
                <li><strong>Gangaramaya Temple Jetty (Colombo)</strong> - Sunset over Beira Lake</li>
                <li><strong>Mount Lavinia Hotel Terrace</strong> - Classic colonial setting</li>
                <li><strong>Negombo Beach</strong> - Convenient for those near the airport</li>
            </ul>
            
            <h2>Sunset Photography Tips</h2>
            <ul>
                <li>Arrive at least 30 minutes before sunset</li>
                <li>Use a tripod for long exposures</li>
                <li>Experiment with silhouettes</li>
                <li>Include foreground interest (boats, palms, rocks)</li>
                <li>Stay a while after sunset for the afterglow</li>
            </ul>
            
            <p>Wherever you are in Sri Lanka, make time to enjoy at least one spectacular sunset during your visit - it's sure to be a highlight of your trip.</p>
        `,
        relatedPosts: [1, 3, 5]
    }
];