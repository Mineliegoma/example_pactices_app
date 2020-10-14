import React from 'react'
import EngineerCard from '../components/EngineerCard'
const MostFamous = (props) => {

 function renderEngineers() {

  return props.engineers.map(obj => <EngineerCard key={obj.id} eng={obj} clickHandler={props.removeFamous} />)
 }

 return (
  <div>
   <h1>Most Famous</h1>
   {renderEngineers()}
  </div>

 )

}
export default MostFamous