import axios from "axios"
//This creates a custom Axios instance with a default baseURL.
// Now, you don't have to repeat the full TMDb API base URL every time you make a request.

const instance = axios.create({baseURL:"https://api.themoviedb.org/3"});
export default instance