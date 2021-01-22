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
    }



}
