import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 4N76eo11acDBf75poKnWwcBTNCbBQ2Z3HSFj9l7YD5w'
    }
});
