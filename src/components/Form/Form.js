import React from "react";

const Form= function props() {
    return (

        <form>
            <h3>Book Search</h3>
            <label>
                Book 
            <input type="text" name="name" value={props.search} onChange={props.handleInputChange}/>
            </label>
            <input type="submit" value="Search" className="button" onClick={props.handleFormSubmit}/>
        </form>

    );
}

export default Form;