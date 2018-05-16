// Code The Spaceship Component Here

export default class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h1> Hello, this is {props.name} </h1>
        The speed is {props.speed}
        Has rockets? {props.hasRockets}
        What colors? {props.colors}
      </div>
    )
  }
}
