import React from 'react'
import { Render } from 'react-dom'

class ShowOneBlog extends React.Component{
  constructor(){
    super();

    this.state = {
      blog: {
        title: "How to make a cookie",
        text: "Tiramisu cake cheesecake wafer candy. Jelly-o lollipop jelly beans icing topping muffin macaroon oat cake chocolate cake. Sweet roll danish macaroon candy soufflé gummi bears. Dessert chocolate bar cookie. Marshmallow bonbon halvah cotton candy liquorice jelly-o jelly. Soufflé icing sweet roll donut. Marshmallow sweet roll oat cake pudding marzipan jelly. Icing jelly beans pastry macaroon croissant. Marzipan powder wafer sesame snaps topping cake chocolate bar cotton candy cheesecake. Chocolate lemon drops gingerbread biscuit danish tiramisu. Jujubes marzipan candy canes cake croissant. Sweet roll liquorice jelly-o candy halvah candy canes cupcake sweet roll. Wafer icing apple pie apple pie oat cake sweet roll fruitcake."
      }
    }
  }
  render() {
    return ( 
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.blog.title}</h3>
          </div>
          <div className="panel-body">
            {this.state.blog.text}
          </div>
        </div>
      );
  }
}

export default ShowOneBlog