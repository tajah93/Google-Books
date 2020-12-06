import React, { Component } from "react";
import API from "../utils/API";
import Form from "../components/Form/Form";
import SearchBody from "../components/SearchBody/SearchBody"

class Search extends Component {
    state = {
        searching: "",
        books: []
    };

    handleInputChange= function event() {
        this.setState({ searching: event.target.value })
    }

    lookBook= function event() {
        event.preventDefault(); 
        API.searchBook(this.state.searching)
        .then(res => {
            if (res.data.items === "error") {
                throw new Error(res.data.items)
            }
            else {
                let res = res.data.items
                res= res.map(result => {
                    result = {
                    key: result.id,
                    id: result.id,
                    title: result.volumeInfo.title,
                    author: result.volumeInfo.authors,
                    description: result.volumeInfo.description,
                    image: result.volumeInfo.imageLinks.thumbnail,
                    link: result.volumeInfo.infoLink
                }
                return result;
            })
            this.setState({ books: res, error: "" }) 
        }
        })
            .catch(err => this.setState({ error: err.items }));

    }
    handleFormSubmit= function event() {
        event.preventDefault();
        this.lookBook(this.state.searching)
    };

    render() {
        return (
            <div>
             <Form 
             handleInputChange = {this.handleInputChange}
             handleFormSubmit = {this.handleFormSubmit}
             />
             <SearchBody 
             books= {this.state.books}
             />
             </div>
        )
    }

   
}

export default Search; 