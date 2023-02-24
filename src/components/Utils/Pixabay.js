import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const options = {
    q:'',
    page:0,
    key:'6736465-0b79670fedc04dddfca766fb6',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page:12   
}

export const getImages = async (request, page) => {
    options.q = request;
    options.page = page;
    const newImg = await axios.get(BASE_URL, {params:options})
    return newImg.data;
}