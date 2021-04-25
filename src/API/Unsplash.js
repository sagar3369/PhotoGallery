import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7z2IZyxaUdDc_wVE7w8_KogrW7NIIv-pVrEDL9nPINw'
    }
});