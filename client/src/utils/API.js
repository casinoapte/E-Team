import axios from 'axios'

export default {

    ///////////////////////
    // Posts //
    ///////////////////////

    // Adding Post to DB //

    addPost: function (postObject) {
        return axios.post("/api/post/", postObject)
    },

    // Getting Posts From DB //

    getPost: function () {
        return axios.get("/api/post/")
    },

    ///////////////////////
    // Drafts //
    ///////////////////////

    // Adding Draft to DB // 

    addDraft: function (draftObect) {
        return axios.post("/api/draft/", draftObect)
    },

    ///////////////////////
    // Users //
    ///////////////////////

    // Registering User // 

    RegisterUser: function (data) {
        return axios.post("/auth/register", data)
    },

    // Loging User In //

    loginUser: function (data) {
        return axios.post("/auth/login", data)
    },

    // Checking if User is Logged In //

    postToken: function (data) {
        return axios.post("/auth/tokenIsValid", data)
    },

    getUsers: function (data) {
        return axios.get("/auth/", data)
    },























}
