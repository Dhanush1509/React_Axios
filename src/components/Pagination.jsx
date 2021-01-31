import React from 'react'

export default function Pagination(props) {
    return (
      <div>
        <button onClick={props.prev}>Previous</button>
        <button onClick={props.next}>Next</button>
      </div>
    );
}
