import React from 'react'
function FormSearch(props) {
 return (
  <input type="text" placeholder="Search by author's name" value={props.search} onChange={props.theChange} />
 )



}
export default FormSearch