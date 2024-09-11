import axios from 'axios';

// Heroku'daki Strapi API URL'si
const API_URL = 'https://stylesage-1ee0b4549a17.herokuapp.com/api';

// Ürünleri çekmek için API çağrısı
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products?populate=*`);
        return response.data.data.map((product) => ({
            id: product.id,
            name: product.attributes.name,
            price: product.attributes.price,
            category: product.attributes.category,
            imageUrl: `https://stylesage-1ee0b4549a17.herokuapp.com${product.attributes.image?.data[0]?.attributes?.url || ''}`,
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Banner'ları çekmek için API çağrısı
export const fetchBanners = async () => {
    try {
        const response = await axios.get(`${API_URL}/banners?populate=*`);
        return response.data.data.map((banner) => ({
            id: banner.id,
            title: banner.attributes.Title,
            imageUrl: `https://stylesage-1ee0b4549a17.herokuapp.com${banner.attributes.Image?.data[0]?.attributes?.url || ''}`,
        }));
    } catch (error) {
        console.error('Error fetching banners:', error);
        throw error;
    }
};
