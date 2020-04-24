import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    techs: [],
    newTech: ''
  };

  //executa assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs) {
      this.setState( { techs: JSON.parse(techs)})
    }
  }
  // executado sempre que houver alteracoes nas props ou estado
  componentDidUpdate(_, prevState) {
    //this.props OU this.state 
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // executado quando o documento deixa de existir
  componentWillMount() {

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Tecnologias</h1>
        <ul>
          {this.state.techs.map(tech =>
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          )}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech} />
        <button type="">Enviar</button>
      </form>
    )
  }
}

export default TechList;