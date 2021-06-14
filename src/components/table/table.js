import React from 'react';

function Table(props) {
  return (
    <div className='container p-3'>
      <table className='table table-success table-striped table-hover border border-3 border-secondary'>
        <thead>
          <tr>
            <th className='col'>Picture</th>
            <th className='col'>Name</th>
            <th className='col'>Phone Number</th>
            <th className='col'>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(({ employee }) => {
            return (
              <tr>
              {/* <tr key={employee.login.uuid}> */}
                <td>Why
                  {/* <img src={employee.picture.thumbnail} /> */}
                </td>
                <td>wont
                  {/* {employee.name.first} {employee.name.last}*/}
                </td>
                <td>this
                  {/* {employee.phone} */}
                  </td>
                <td>work?
                  {/* {employee.email} */}
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
