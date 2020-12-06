
import axios from "axios";

const Url = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    searchBook: (query) => axios.get(Url + query),
    
    getBooks: function () {
        return axios.get("/api/books");
    },

    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
}
}