
import { Product, Category, NewCategory } from './types';
import { MobileIcon, LaptopIcon, ElectronicsIcon, PropertyIcon, VehicleIcon, FurnitureIcon } from './components/icons';

export const TRENDING_ADS: Product[] = [
    { id: 1, name: 'Luxury Apartment in Lekki Phase 1', description: 'Serviced & Furnished, 24/7 Power', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Property', sellerName: 'Realty Kings' },
    { id: 2, name: 'Toyota Camry 2020 (Tokunbo)', description: 'Accident-free, low mileage', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Vehicles', sellerName: 'AutoConnect' },
    { id: 3, name: 'Get Your Business Online', description: 'Professional Web Design Services', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Services', sellerName: 'Webify Inc' },
    { id: 4, name: 'Luxury Apartment in Ikoyi', description: 'Serviced & Furnished, 24/7 Power', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Property', sellerName: 'Realty Kings' },
];

export const RECOMMENDED_FOR_YOU: Product[] = [
    { id: 5, name: 'Playstation 5 Console', price: 350000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Electronics', sellerName: 'Game Central' },
    { id: 6, name: 'Anker Soundcore P20i', price: 15500, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Electronics', sellerName: 'Anker Official' },
    { id: 7, name: 'HP Elitebook 840 G5', price: 280000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Laptops', sellerName: 'Laptop Village' },
    { id: 8, name: 'Oraimo Power Bank 20000mAh', price: 18000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Electronics', sellerName: 'Oraimo Store' },
    { id: 9, name: 'Samsung Galaxy S22 Ultra', price: 450000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Mobile Phones', sellerName: 'TechHaven NG' },
];

export const RECENTLY_VIEWED: Product[] = [
    { id: 10, name: 'Iphone 13 Pro Max (UK Used)', price: 520000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Mobile Phones', sellerName: 'FoneConnect' },
    { id: 11, name: 'Dell Latitude 7490 Laptop', price: 235000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Laptops', sellerName: 'Laptop Village' },
];

export const DISCOUNT_ITEMS: Product[] = [
    { id: 12, name: 'Leather Sofa Set (3-Seater)', price: 144000, originalPrice: 180000, discount: '-20%', timeLeft: '12:34:56', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Furniture', sellerName: 'HomeDecor' },
    { id: 13, name: '2-Bedroom Flat for Rent', price: 1020000, originalPrice: 1200000, discount: '-15%', timeLeft: '08:15:30', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Property', sellerName: 'Realty Kings' },
    { id: 14, name: 'Samsung Galaxy S22 Ultra', price: 405000, originalPrice: 450000, discount: '-10%', timeLeft: '23:59:02', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Mobile Phones', sellerName: 'TechHaven NG' },
    { id: 15, name: 'HP Elitebook 840 G5', price: 210000, originalPrice: 280000, discount: '-25%', timeLeft: '01:45:10', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Laptops', sellerName: 'Laptop Village' },
    { id: 16, name: 'Oraimo Power Bank 20000mAh', price: 12600, originalPrice: 18000, discount: '-30%', timeLeft: '05:05:05', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y', category: 'Electronics', sellerName: 'Oraimo Store' },
];

const singleImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoT4CwNa75NyQFfs99pZ0rWVfxk_K2eVx-aragW_n-UoqmRUceWsMFhsB6ZjHvvtZRKOUIdxN2DkNsR4-YqqFBslRl92Q9IkknvzPHrllUzt2qge3wxf9KAGAcPKsHl-vhc49crZ6Czj6hcsEUgdWlNh57jHYwivRVenhC-mH779wcoMB-6L6IKtwYMxI63GCf9S8B8B_ZmPEGxAEg9vf9QCBS67PVbRGHICjQsvmG6ERWX3iqTo6jhgSBhEJytut899Cslpm07Y';

export const EXPLORE_PRODUCTS: Product[] = [
    { id: 17, name: '2-Bedroom Flat for Rent', price: 1200000, imageUrl: singleImageUrl, category: 'Property', sellerName: 'Realty Kings'},
    { id: 18, name: 'Samsung Galaxy S22 Ultra', price: 450000, imageUrl: singleImageUrl, category: 'Mobile Phones', sellerName: 'TechHaven NG'},
    { id: 19, name: 'Leather Sofa Set (3-Seater)', price: 180000, imageUrl: singleImageUrl, category: 'Furniture', sellerName: 'HomeDecor'},
    { id: 20, name: 'HP Elitebook 840 G5', price: 280000, imageUrl: singleImageUrl, category: 'Laptops', sellerName: 'Laptop Village'},
    { id: 21, name: 'Oraimo Power Bank 20000mAh', price: 18000, imageUrl: singleImageUrl, category: 'Electronics', sellerName: 'Oraimo Store'},
    { id: 22, name: 'Samsung Galaxy S22 Ultra', price: 450000, imageUrl: singleImageUrl, category: 'Mobile Phones', sellerName: 'TechHaven NG'},
    { id: 23, name: 'Playstation 5 Console', price: 350000, imageUrl: singleImageUrl, category: 'Electronics', sellerName: 'Game Central'},
    { id: 24, name: 'Anker Soundcore P20i', price: 15500, imageUrl: singleImageUrl, category: 'Electronics', sellerName: 'Anker Official'},
];

export const NEW_CATEGORIES: NewCategory[] = [
    { name: 'Mobile Phones', icon: 'smartphone', color: 'blue' },
    { name: 'Laptops', icon: 'laptop_mac', color: 'green' },
    { name: 'Electronics', icon: 'tv', color: 'purple' },
    { name: 'Property', icon: 'villa', color: 'orange' },
    { name: 'Vehicles', icon: 'directions_car', color: 'red' },
    { name: 'Furniture', icon: 'chair', color: 'yellow' },
];

export const CATEGORIES: Category[] = [
    { name: 'Mobile Phones', icon: MobileIcon },
    { name: 'Laptops', icon: LaptopIcon },
    { name: 'Electronics', icon: ElectronicsIcon },
    { name: 'Property', icon: PropertyIcon },
    { name: 'Vehicles', icon: VehicleIcon },
    { name: 'Furniture', icon: FurnitureIcon },
];

export const RELATED_ITEMS: Product[] = [
    { id: 25, name: 'Slightly Used iPhone 15 Pro', price: 780000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9FZzOGaZgNy6AQ6um7vg40jR0INssB_6jI8LEAFNKKxsWCQWgKGSkIG9HzC2Rha40hPWPR3srOXbj5wJlV2RzC7pRe-FM9pTfVuQlHOFnr7xfrCpvaMR_1Ge2l-tgjfZeAPRqpLZUIebkS3wr0WuL72TWU7Aw3VM5OuNS1c8-D3jwHbDvLp7ovv7pqzu0gMFBp_efU-oPRbQtG4S-R7AA6Ku_SaQcJcDAILRUOmjhEEWzqm3Dyy0yTFYYdTG3E8XZ224kCLZAafw', category: 'Mobile Phones', sellerName: 'GadgetZone'},
    { id: 26, name: 'Brand New iPhone 16', price: 750000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAhNqW4VLyHc-InFoG6c7WTecPTgogdq4v0FfDIka4t6eM1s_EcRt_O9yfzbSi-JEeXmkWewwGHrzu1jGGYKgHeAFOEe9t_3oTFdWJDWfMFX-jQY89WF-Cn95Eqhzim2aYLBIkZMoaG0D5l9hIx9BEvWyDFiqlTGhJB2daWz88xodHtauUekr9nWCExyBXQnayCa-xLAgqP0FW3w529fyBqL18dg0GgVYGYGDuixng2qZoUs_AyWUUClKQh3AXBeGFAocIHvcTHOA', category: 'Mobile Phones', sellerName: 'AppleDeals Ikeja'},
    { id: 27, name: 'UK Used iPhone 14 Pro Max', price: 650000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN_eLKqVPi1HLtTFLLKMdS-budkNhTM8n9lv-aBOl5t2UahF0EM68LXHLvOeFVS0yljPInyT2QtlHO4AAvmQRUW_Vy9HS9jVmLjK4mMSHJwlKhN6cb_8665qddyP7IIpcTVRXIRKaHc1Q2tdlNC4o_zsbcJQPXH2bR_ywStm4DDgW5w0gKKCUuRpVlwo7Zh4IJFsim8mv6eacme6Roec-pveP9DO8WcSR-rMAz56In-uzve4CiSnHN0EqHa0feTlqeCpq9vfBvxac', category: 'Mobile Phones', sellerName: 'FoneConnect'},
    { id: 28, name: 'New iPhone 16 Pro (Blue)', price: 825000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5FMzraIibW4S21BSuFJUMqXz7xTV-NrjI3T3kbnqWRn-s6IJpxbRDTt17JdgkTHVg0hmXkE-v6klc1KGp28Zn6DBTO7Y12C8f37DZE_Th_p7pAqN3YKy3bHkuDjel-U5aQ5B2CqC2P2Vj9dVJUn3aMY5eBAz-MYG62UnBOWiQjdNpb1a0nJElKiIJifAxT8MhNWlaV_z8Vm1YOEbtNeGqquCssWYDjxDvy7Zb62AfJg4h5UOlv9I2iPBf9AJBfNB5_Jlq-EyQkk8', category: 'Mobile Phones', sellerName: 'TechHaven NG'},
    { id: 29, name: 'Used iPhone 15 128GB', price: 699000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5FMzraIibW4S21BSuFJUMqXz7xTV-NrjI3T3kbnqWRn-s6IJpxbRDTt17JdgkTHVg0hmXkE-v6klc1KGp28Zn6DBTO7Y12C8f37DZE_Th_p7pAqN3YKy3bHkuDjel-U5aQ5B2CqC2P2Vj9dVJUn3aMY5eBAz-MYG62UnBOWiQjdNpb1a0nJElKiIJifAxT8MhNWlaV_z8Vm1YOEbtNeGqquCssWYDjxDvy7Zb62AfJg4h5UOlv9I2iPBf9AJBfNB5_Jlq-EyQkk8', category: 'Mobile Phones', sellerName: 'EmmyPhones'},
];