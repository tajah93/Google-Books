import React from "react";

function Body({ children }) {
    return (
        <div className="card">
  <div className="card-body">
    {children}
  </div>
</div>
    );
}

export default Body;