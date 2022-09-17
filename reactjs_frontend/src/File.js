import React from 'react'

function File({file:{id, FileName, Status, Createdby, Assignedto} }) {

  return (
        <tr key={id}>
            <td>{id}</td>
            <td>{FileName}</td>
            <td>{Status}</td>
            <td>{Createdby}</td>
            <td>{Assignedto}</td>
        </tr>
  )
}
export default File