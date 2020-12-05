import React from "react";

function Form() {
    return (

        <form>
            <h3>Book Search</h3>
            <label>
                Book 
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" className="button"/>
        </form>

    );
}

export default Form;