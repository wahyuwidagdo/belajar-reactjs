import React from 'react';
import Child from './Child';

class Mine extends React.Component{
	construtor(){
		this.state = {texts: []}
	}

	render(){
		this.setState({texts: ['Belajar ReactJS', 'Sungguh Menyenangkan', 'Asik Sekali']})

		let texts = this.state.texts.map(function(text){
			return(
				  <Child text = {text} />
				)
		})

		return (
		 <div>
		 <div id="mine">
		   Halo Edo, selamat belajar React js
		 </div>

		 <div>
		   React js is cool
		 </div>
		 {texts}
		 </div>
		);
	}
}

export default Mine;