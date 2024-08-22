/**
 * The product should have properties: EAN (string), name (string), description (string), stock (number), and price (number).
 */
const brands = [
    "DeWalt", "Makita", "Bosch", "Milwaukee", "Ryobi", 
    "Hilti", "Hitachi", "Black & Decker", "Craftsman", 
    "Stanley", "Sony", "Samsung", "LG", "Philips", "Panasonic",
    "Dyson", "KitchenAid", "Whirlpool", "Ninja", "Weber"
];

const categories = [
    { name: "Screwdriver", category: "Tools" },
    { name: "Hammer", category: "Tools" },
    { name: "Drill", category: "Tools" },
    { name: "Saw", category: "Tools" },
    { name: "Wrench", category: "Tools" },
    { name: "Tape measure", category: "Tools" },
    { name: "Pliers", category: "Tools" },
    { name: "Chisel", category: "Tools" },
    { name: "Level", category: "Tools" },
    { name: "Angle grinder", category: "Tools" },
    { name: "Television", category: "Electronics" },
    { name: "Headphones", category: "Electronics" },
    { name: "Smartphone", category: "Electronics" },
    { name: "Laptop", category: "Electronics" },
    { name: "Tablet", category: "Electronics" },
    { name: "Refrigerator", category: "Appliances" },
    { name: "Microwave", category: "Appliances" },
    { name: "Blender", category: "Appliances" },
    { name: "Vacuum", category: "Appliances" },
    { name: "Grill", category: "Outdoor Equipment" }
];

const postFixes = ["", "Pro", "Air", "Max", "Mini", "Lite", "Ultra", "Super", "Turbo", "Extreme"];

const generateDescription = (name, category) => {
    switch (category) {
        case "Tools":
            return `The ${name} is an essential tool for any project, ideal for ${name.toLowerCase()}ing tasks with precision and efficiency.`;
        case "Electronics":
            return `The ${name} offers cutting-edge technology for all your entertainment and communication needs, providing exceptional performance in every use.`;
        case "Appliances":
            return `The ${name} is designed to make your daily tasks easier and more efficient, delivering reliable and high-quality results every time.`;
        case "Outdoor Equipment":
            return `The ${name} is perfect for your outdoor adventures, built to withstand the elements and deliver top-notch performance.`;
        default:
            return `The ${name} is a high-quality product that meets your needs with great efficiency.`;
    }
}

const generateEAN = () => {
    return Math.floor(Math.random() * 1000000000000).toString();
}

const generateStock = () => {
    return Math.floor(Math.random() * 50);
}

const generatePrice = () => {
    return Math.floor(Math.random() * 5000) + 100; // Adjusted for broader price range
}

const generateProductData = () => {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const product = categories[Math.floor(Math.random() * categories.length)];
    const postFix = postFixes[Math.floor(Math.random() * postFixes.length)];
    const fullName = `${brand} - ${product.name} ${postFix}`;
    const description = generateDescription(fullName, product.category);
    const EAN = generateEAN();
    const stock = generateStock();
    const price = generatePrice();
    return { EAN, name: fullName, description, stock, price };
}

const generateProducts = (amount = 5) => {
    const products = [];
    for (let i = 0; i < amount; i++) {
        products.push(generateProductData());
    }
    return products;
}

export { generateProductData, generateProducts };
