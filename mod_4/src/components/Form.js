import React from 'react'
class Form extends React.Component {

 state = {
  name: "",
  years: "",
  img: "",
  text: ""
 }
 // 
 changeHandler = (e) => {
  console.log('changing')

  this.setState({ [e.target.name]: e.target.value })

 }


 submitHandler = (e) => {
  e.preventDefault()
  console.log('submitting')
  this.props.mySubmit(this.state)
 }

 render() {
  console.log(this.state)
  return (
   <form className="my-form" onSubmit={this.submitHandler}>
    <input type="text" name="name" value={this.state.name} placeholder="Enter Engineer's name" onChange={this.changeHandler} />
    <input type="text" name="years" value={this.state.years} placeholder="Enter Engineer's years of living" onChange={this.changeHandler} />
    <input type="text" name="img" value={this.state.img} placeholder="Enter Engineer's image url" onChange={this.changeHandler} />
    <input type="text" name="text" value={this.state.text} placeholder="Tell us about that Engineer" onChange={this.changeHandler} />
    <input type="submit" />
   </form>
  )

 }

}
export default Form