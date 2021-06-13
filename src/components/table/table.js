import React from "react";

function Table(props) {
    const employee = props.employee;
    return (
        <div>
            <div className="container p-3">
                <table className="table table-success table-striped table-hover border border-3 border-secondary">
                    <thead>
                        <tr>
                            <th className="col">Picture</th>
                            <th className="col">Name</th>
                            <th className="col">Phone Number</th>
                            <th className="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={employee.picture.thumbnail}/>
                            </td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                        </tr>
                        )
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;