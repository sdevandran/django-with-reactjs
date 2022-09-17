import React from 'react'
import File from './File'
import Table from 'react-bootstrap/Table';


function Files({files}) {

  return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>File ID</th>
              <th>FileName</th>
              <th>Status</th>
              <th>Createdby</th>
              <th>Assignedto</th>
            </tr>
          </thead>
          <tbody>
            { files.map(file => <File key={file.id} file={file} />) }
          </tbody>
        </Table>
  )
}

export default Files