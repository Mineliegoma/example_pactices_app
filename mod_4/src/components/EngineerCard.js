import React from 'react'
class EngineerCard extends React.Component {
 clickHandler = () => {
  return this.props.clickHandler(this.props.eng)
 }


 render() {
  return (
   <div onClick={this.clickHandler}>
    <h1>{this.props.eng.name}</h1>
    <p>{this.props.eng.years}</p>
    <img src={this.props.eng.img} alt="" />
    <br />
    <span>
     {this.props.eng.text}
    </span>


   </div>

  )
 }
}
export default EngineerCard




