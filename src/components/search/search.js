import React from "react";

function Search() {
    return (
        <div>
            <div className="container p-3 text-center">
                <div className="row">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Employee's name" aria-label="Employee's name"
                            aria-describedby="button-addon2"></input>
                        <button className="btn btn-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;