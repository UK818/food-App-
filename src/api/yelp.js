import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer yecU3UYLeEeP2gVd3ljgdW9byYppFZwXsOQpGQ-JeZlca0pI0h0I5m2P0Nwfr_TbOaWxejvIlCpqJo9oQD7F0bu4dbJOtZzmOnnzNlpdrqPUuhjQBEjysvlW6Y-OYHYx'
    }
});