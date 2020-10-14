import React from 'react'
import EngineerCard from '../components/EngineerCard'
import FormSearch from '../components/FormSearch'


class EngineerList extends React.Component {
 state = {
  search: "",
 }

 renderEngineers = () => {
  return this.props.engineers.filter(obj => obj.name.toLowerCase().includes(this.state.search.toLowerCase())).map(obj => <EngineerCard key={obj.id} eng={obj} clickHandler={this.props.clickHandler} />)
 }
 mySearch = (e) => {
  this.setState({ search: e.target.value })

 }


 render() {

  return (
   <div >

    <h1 className="list-eng">List of Engineers</h1>
    <FormSearch search={this.state.search} theChange={this.mySearch} />
    {this.renderEngineers()}

   </div>

  )




 }


}
export default EngineerList