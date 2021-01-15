
import './App.css';
import React, {Component} from 'react';
import Article from "./Component/Article";

class App extends Component{

  state={

    nom: 'Sneakers',
    prix: '100$',

  }

  

  render(){

  

		return(

			  <div className="ElementParent">

          <Article nom='Chemise' prix='29$'/>
          <hr/>
          <Article nom='Pentalon' prix='35$' />
          <hr/>
          <Article nom={this.state.nom} prix={this.state.prix} />
			   
			  </div>
    )
    
	}


	
}

export default App;
