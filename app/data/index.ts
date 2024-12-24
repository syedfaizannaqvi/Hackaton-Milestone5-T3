export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  header?: string;
  category: string;
  description?: string;
  quantity?: number;
}

export const shoes: Product[] = [
    {
      id: "shoes-1",
      name: "All Products",
      price: 2600.00,
      image: "/shoe1.png",
      header: "New",
      category: "Running Top",
      description: "The high-performance running shoe.",
      quantity: 1,
    },
    {
      id: "shoes-2",
      name: "Dynamic Fit",
      price: 3200.00,
      image: "/shoe2.png",
      header: "Trending",
      category: "Sports",
      description: "Built for comfort during intense training.",
      quantity: 1,
    },
    {
      id: "shoes-3",
      name: "Trail Blazer",
      price: 2800.00,
      image: "/shoe3.png",
      header: "Best Seller",
      category: "Outdoor",
      description: "Perfect for tackling rugged terrains.",
      quantity: 1,
    },
    {
      id: "shoes-4",
      name: "Cloud Runner",
      price: 3500.00,
      image: "/shoe4.png",
      header: "New Arrival",
      category: "Running",
      description: "Experience ultimate cushioning and support.",
      quantity: 1,
      },
    {
      id: "shoes-5",
      name: "Urban Sneak",
      price: 2400.00,
      image: "/shoe5.png",
      header: "Limited Edition",
      category: "Casual",
      description: "A perfect blend of style and comfort.",
      quantity: 1,
    },
    {
      id: "shoes-6",
      name: "Velocity Pro",
      price: 3000.00,
      image: "/shoe6.png",
      header: "Premium",
      category: "Sports",
      description: "Designed for maximum speed and agility.",
      quantity: 1,
    },
    {
      id: "shoes-7",
      name: "Aero Flow",
      price: 3100.00,
      image: "/shoe7.png",
      header: "New",
      category: "Running",
      description: "Stay light on your feet with this design.",
      quantity: 1,
    },
    {
      id: "shoes-8",
      name: "Grip Master",
      price: 2700.00,
      image: "/shoe8.png",
      header: "Top Pick",
      category: "Hiking",
      description: "Unmatched traction for every adventure.",
      quantity: 1,
    },
    {
      id: "shoes-9",
      name: "Energy Boost",
      price: 3300.00,
      image: "/shoe9.png",
      header: "Performance",
      category: "Training",
      description: "Engineered for your toughest workouts.",
      quantity: 1,
    },
    {
      id: "shoes-10",
      name: "City Runner",
      price: 2600.00,
      image: "/shoe10.png",
      header: "Classic",
      category: "Running",
      description: "A reliable partner for your daily runs.",
      quantity: 1,
    },
    {
      id: "shoes-11",
      name: "Mountain Trek",
      price: 4000.00,
      image: "/shoe11.png",
      header: "Adventure",
      category: "Hiking",
      description: "Made for conquering the highest peaks.",
      quantity: 1,
    },
    {
      id: "shoes-12",
      name: "Power Lift",
      price: 2900.00,
      image: "/shoe12.png",
      header: "Strong",
      category: "Gym",
      description: "Built for weightlifting stability.",
      quantity: 1,
    },
    {
      id: "shoes-13",
      name: "Freedom Flex",
      price: 2500.00,
      image: "/shoe13.png",
      header: "Flexible",
      category: "Casual",
      description: "Ultimate flexibility for all-day wear.",
      quantity: 1,
    },
    {
      id: "shoes-14",
      name: "Sprint King",
      price: 3500.00,
      image: "/shoe14.png",
      header: "Elite",
      category: "Track",
      description: "Designed for unbeatable track performance.",
      quantity: 1,
    },
    {
      id: "shoes-15",
      name: "Eco Runner",
      price: 3000.00,
      image: "/shoe15.png",
      header: "Eco-Friendly",
      category: "Running",
      description: "Made with sustainable materials.",
      quantity: 1,
    },
    {
      id: "shoes-16",
      name: "Wave Rider",
      price: 2800.00,
      image: "/shoe16.png",
      header: "Innovative",
      category: "Waterproof",
      description: "Perfect for wet and rainy conditions.",
      quantity: 1,
    },
    {
      id: "shoes-17",
      name: "Stride Comfort",
      price: 3200.00,
      image: "/shoe17.png",
      header: "Comfort",
      category: "Walking",
      description: "All-day comfort for long walks.",
      quantity: 1,
    },
    {
      id: "shoes-18",
      name: "Prime Speed",
      price: 3400.00,
      image: "/shoe18.png",
      header: "Top Performance",
      category: "Running",
      description: "Enhanced for record-breaking speed.",
      quantity: 1,
    },
    {
      id: "shoes-19",
      name: "Trail Expert",
      price: 3100.00,
      image: "/shoe19.png",
      header: "Durable",
      category: "Hiking",
      description: "Built tough for challenging trails.",
      quantity: 1,
    },
    {
      id: "shoes-20",
      name: "Cushion Glide",
      price: 2500.00,
      image: "/shoe20.png",
      header: "Supportive",
      category: "Casual",
      description: "Lightweight and comfortable for every day.",
      quantity: 1,
    },
    {
      id: "shoes-21",
      name: "Road Racer",
      price: 3300.00,
      image: "/shoe21.png",
      header: "Speed",
      category: "Running",
      description: "Designed for fast and smooth road runs.",
      quantity: 1,
    },
    {
      id: "shoes-22",
      name: "Explorer Max",
      price: 4200.00,
      image: "/shoe22.png",
      header: "Adventure",
      category: "Outdoor",
      description: "Ultimate durability for extreme adventures.",
      quantity: 1,
    },
 
  

];

export const mens: Product[] = [
  {
    id: "mens-1",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man1.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,
  },
  {
    id: "mens-2",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man2.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,
      },
  {
    id: "mens-3",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man3.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,
  },
  {
    id: "mens-4",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man4.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,
  },
  {
    id: "mens-5",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man5.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,
  },
  {
    id: "mens-6",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 3214.00,
    image: "/man6.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,
  },
  {
    id: "mens-7",
    name: "Nike Dri-FIT ADV Pro Ultra",
    price: 2800.00,
    image: "/man7.png",
    category: "Running Top",
    description: "Built for ultimate breathability and comfort.",
    quantity: 1,
  },
];

export const womens: Product[] = [
  {
    id: "womens-1",
    name: "Nike Dri-FIT ADV Run Division",
    price: 2600.00,
    image: "/woman1.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,
  },
  {
    id: "womens-2",
    name: "Nike Bliss Victory",
    price: 2800.00,
    image: "/woman2.png",
    category: "Training Wear",
    description: "Flexible and lightweight for high-intensity workouts.",
    quantity: 1,
  },
  {
    id: "womens-3",
    name: "Nike Epic Luxe",
    price: 3000.00,
    image: "/woman3.png",
    category: "Performance Wear",
    description: "Comfortable and durable for long runs.",
    quantity: 1,
  },
  {
    id: "womens-4",
    name: "Nike Pro Dri-FIT",
    price: 2700.00,
    image: "/woman4.png",
    category: "Training Top",
    description: "Sweat-wicking and breathable for active lifestyles.",
    quantity: 1,
  },
  {
    id: "womens-5",
    name: "Nike Therma-FIT Element",
    price: 3200.00,
    image: "/woman5.png",
    category: "Winter Wear",
    description: "Stay warm and dry during cold-weather training.",
    quantity: 1,
  },
  {
    id: "womens-6",
    name: "Nike AeroSwift Speed",
    price: 3400.00,
    image: "/woman6.png",
    category: "Running Top",
    description: "Engineered for ultimate speed and mobility.",
    quantity: 1,
    },
  {
    id: "womens-7",
    name: "Nike Flex Motion",
    price: 2500.00,
    image: "/woman7.png",
    category: "Casual Wear",
    description: "Perfect blend of style and comfort for everyday wear.",
    quantity: 1,
  },
  {
    id: "womens-8",
    name: "Nike Element Crew",
    price: 2900.00,
    image: "/woman8.png",
    category: "Performance Wear",
    description: "Designed for endurance and maximum comfort.",
    quantity: 1,
  },
];

export const allProducts = [
  {
    id: "shoes-1",
    name: "All Products",
    price: 2600.00,
    image: "/shoe1.png",
    header: "New",
    category: "Running Top",
    description: "The high-performance running shoe.",
    quantity: 1,  
  },
  {
    id: "mens-1",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man1.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "womens-7",
    name: "Nike Flex Motion",
    price: 2500.00,
    image: "/woman7.png",
    category: "Casual Wear",
    description: "Perfect blend of style and comfort for everyday wear.",
  },
  {
    id: "womens-8",
    name: "Nike Element Crew",
    price: 2900.00,
    image: "/woman8.png",
    category: "Performance Wear",
    description: "Designed for endurance and maximum comfort.",
  },
  {
    id: "mens-2",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man2.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "womens-1",
    name: "Nike Dri-FIT ADV Run Division",
    price: 2600.00,
    image: "/woman1.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "shoes-4",
    name: "Cloud Runner",
    price: 3500.00,
    image: "/shoe4.png",
    header: "New Arrival",
    category: "Running",
    description: "Experience ultimate cushioning and support.",
  },
  {
    id: "womens-2",
    name: "Nike Bliss Victory",
    price: 2800.00,
    image: "/woman2.png",
    category: "Training Wear",
    description: "Flexible and lightweight for high-intensity workouts.",
  },
  {
    id: "shoes-2",
    name: "Dynamic Fit",
    price: 3200.00,
    image: "/shoe2.png",
    header: "Trending",
    category: "Sports",
    description: "Built for comfort during intense training.",
  },
  {
    id: "womens-7",
    name: "Nike Flex Motion",
    price: 2500.00,
    image: "/woman7.png",
    category: "Casual Wear",
    description: "Perfect blend of style and comfort for everyday wear.",
  },
  {
    id: "shoes-3",
    name: "Trail Blazer",
    price: 2800.00,
    image: "/shoe3.png",
    header: "Best Seller",
    category: "Outdoor",
    description: "Perfect for tackling rugged terrains.",
  },
 
  {
    id: "shoes-5",
    name: "Urban Sneak",
    price: 2400.00,
    image: "/shoe5.png",
    header: "Limited Edition",
    category: "Casual",
    description: "A perfect blend of style and comfort.",
  },
  {
    id: "shoes-6",
    name: "Velocity Pro",
    price: 3000.00,
    image: "/shoe6.png",
    header: "Premium",
    category: "Sports",
    description: "Designed for maximum speed and agility.",
  },
  {
    id: "shoes-7",
    name: "Aero Flow",
    price: 3100.00,
    image: "/shoe7.png",
    header: "New",
    category: "Running",
    description: "Stay light on your feet with this design.",
  },
  {
    id: "mens-5",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man5.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "mens-6",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 3214.00,
    image: "/man6.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "shoes-8",
    name: "Grip Master",
    price: 2700.00,
    image: "/shoe8.png",
    header: "Top Pick",
    category: "Hiking",
    description: "Unmatched traction for every adventure.",
  },
  {
    id: "shoes-9",
    name: "Energy Boost",
    price: 3300.00,
    image: "/shoe9.png",
    header: "Performance",
    category: "Training",
    description: "Engineered for your toughest workouts.",
  },
  {
    id: "shoes-10",
    name: "City Runner",
    price: 2600.00,
    image: "/shoe10.png",
    header: "Classic",
    category: "Running",
    description: "A reliable partner for your daily runs.",
  },
  {
    id: "shoes-11",
    name: "Mountain Trek",
    price: 4000.00,
    image: "/shoe11.png",
    header: "Adventure",
    category: "Hiking",
    description: "Made for conquering the highest peaks.",
  },
  {
    id: "shoes-12",
    name: "Power Lift",
    price: 2900.00,
    image: "/shoe12.png",
    header: "Strong",
    category: "Gym",
    description: "Built for weightlifting stability.",
  },
  {
    id: "shoes-13",
    name: "Freedom Flex",
    price: 2500.00,
    image: "/shoe13.png",
    header: "Flexible",
    category: "Casual",
    description: "Ultimate flexibility for all-day wear.",
  },
  {
    id: "mens-3",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man3.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "mens-4",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man4.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "mens-5",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 2600.00,
    image: "/man5.png",
    category: "Running Top",
    description: "The high-performance running shoe.",
  },
  {
    id: "shoes-14",
    name: "Sprint King",
    price: 3500.00,
    image: "/shoe14.png",
    header: "Elite",
    category: "Track",
    description: "Designed for unbeatable track performance.",
  },
  {
    id: "shoes-15",
    name: "Eco Runner",
    price: 3000.00,
    image: "/shoe15.png",
    header: "Eco-Friendly",
    category: "Running",
    description: "Made with sustainable materials.",
  },
  {
    id: "shoes-16",
    name: "Wave Rider",
    price: 2800.00,
    image: "/shoe16.png",
    header: "Innovative",
    category: "Waterproof",
    description: "Perfect for wet and rainy conditions.",
  },
  {
    id: "shoes-17",
    name: "Stride Comfort",
    price: 3200.00,
    image: "/shoe17.png",
    header: "Comfort",
    category: "Walking",
    description: "All-day comfort for long walks.",
  },
  {
    id: "shoes-18",
    name: "Prime Speed",
    price: 3400.00,
    image: "/shoe18.png",
    header: "Top Performance",
    category: "Running",
    description: "Enhanced for record-breaking speed.",
  },
  {
    id: "shoes-19",
    name: "Trail Expert",
    price: 3100.00,
    image: "/shoe19.png",
    header: "Durable",
    category: "Hiking",
    description: "Built tough for challenging trails.",
  },
  {
    id: "shoes-20",
    name: "Cushion Glide",
    price: 2500.00,
    image: "/shoe20.png",
    header: "Supportive",
    category: "Casual",
    description: "Lightweight and comfortable for every day.",
  },
  {
    id: "womens-5",
    name: "Nike Therma-FIT Element",
    price: 3200.00,
    image: "/woman5.png",
    category: "Winter Wear",
    description: "Stay warm and dry during cold-weather training.",
  },
  {
    id: "womens-6",
    name: "Nike AeroSwift Speed",
    price: 3400.00,
    image: "/woman6.png",
    category: "Running Top",
    description: "Engineered for ultimate speed and mobility.",
  },
  {
    id: "kids-1",
    name: "Road Racer",
    price: 3300.00,
    image: "/kid1.png",
    header: "Speed",
    category: "Running",
    description: "Designed for fast and smooth road runs.",
  },
  {
    id: "shoes-21",
    name: "Road Racer",
    price: 3300.00,
    image: "/shoe21.png",
    header: "Speed",
    category: "Running",
    description: "Designed for fast and smooth road runs.",
  },
  {
    id: "shoes-22",
    name: "Explorer Max",
    price: 4200.00,
    image: "/shoe22.png",
    header: "Adventure",
    category: "Outdoor",
    description: "Ultimate durability for extreme adventures.",
  },

 


];
  
  
  