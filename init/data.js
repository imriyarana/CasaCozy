const sampleListings = [
    {
      title: "Cozy Malibu Coastal Retreat",
      description:
        "Escape to this charming Coastal retreat for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
         filename: "listingimage",
        url:"https://images.unsplash.com/photo-1654652602865-53efa00c3e05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      },

      price: 1500,
      location: "Malibu",
      country: "United States",
      reviews:[],
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:{
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      reviews:[],
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      reviews:[],
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:{
        filename: "listingimage",
        url : "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      reviews:[],
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:{ 
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
      reviews:[],
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      reviews:[],
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image:{
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      reviews:[],
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: { 
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      reviews:[],
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image:{ 
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
     },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
      reviews:[],
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image:{ filename: "listingimage",
        url:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
    },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
      reviews:[],
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",},
      price: 10000,
      location: "Fiji",
      country: "Fiji",
      reviews:[],
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image:{ filename: "listingimage",url:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
      reviews:[],
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {filename: "listingimage", url:"https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
      reviews:[],
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image:{ filename: "listingimage",url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
      reviews:[],
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
      reviews:[],
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image:{filename: "listingimage", url:"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
      reviews:[],
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: { filename: "listingimage",url:"https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
      reviews:[],
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image:{ 
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
      reviews:[],
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image:{
        filename: "listingimage",
       url:"https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
      reviews:[],
    },
    {
      title: "Rustic Montana Ranch Retreat",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image:{
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
      reviews:[],
    },
    {
      title: "Chic Cycladic House in Mykonos",
      description:
        "Chic Cycladic-style house with modern amenities, located close to Mykonos'vibrant nightlife.",
      image: {
        filename: "listingimage",
       url:  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
      reviews:[],
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image:{
        filename: "listingimage",
      url:"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
      reviews:[],
    },
    {
      title: "Sunny Charleston Riverside Getaway",
      description:
        "Classic Lowcountry cottage with a cozy interiors and a peaceful setting near downtown Charleston.",
      image: { filename: "listingimage", url:"https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",},
      price: 1600,
      location: "Charleston",
      country: "United States",
      reviews:[],
    },
    {
      title: "Modern Tokyo Penthouse",
      description:
        "A luxurious penthouse with breathtaking views of the tokyo skyline, perfect for city explorers",
      image: { filename: "listingimage",url:"https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
      reviews:[],
    },
    {
      title: "Charming New Hampshire Countryside Cottage",
      description:
        "Charming cottage nestled in the heart of New Hampshire, perfect for a quiet retreat.",
      image:{ 
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
      reviews:[],
    },
    {
      title: "Luxury Oceanfront Bungalow",
      description:
        "A stunning overwater villa od=ffering direct ocean access and unparalleled tropical views.",
      image:{
        filename: "listingimage",
        url:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
      reviews:[],
    },
    {
      title: "Aspen alpine Getaway",
      description:
        "An alpine escape with breathtaking views and easy access to Aspen's top outdoor activities.",
      image: {
        filename: "listingimage",
     url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
      reviews:[],
    },
    {
      title: "Tropical Paradise Villa",
      description:
        "Secluded beach house with panaromic ocean views and easy access to nature.",
      image: { filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"} , 
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
      reviews:[],
    },
  ];
  
  module.exports = { data: sampleListings };
  