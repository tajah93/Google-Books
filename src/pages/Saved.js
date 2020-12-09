import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
    state= {
        Save: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ Save: res.data }))
            .catch(err => console.log(err))
    }

    Delete=  function id() {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Body 
                
                
                />
            </div>
        )
    }
}