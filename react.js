
'use strict';

const e = React.createElement;

class ReactLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, loading: false };
  }

  handleClick() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false, liked: true });
      window.open('https://github.com/KORNANDY666');
    },2000);
  }


  render() {
    if (this.state.loading) {
      return e('div', { style: { 
      fontSize: '40px', 
      fontWeight: 'bold',
      border: '5px solid black', 
      padding: '20px', 
      textAlign: 'center',
      borderRadius: '10px'} }, 'Laddar projekten......');
    }


    return e(
      'button',
      { onClick: () => this.handleClick(), style: { fontSize: '30px',fontWeight: 'bold' } },
      'MINA GITHUB PROJEKT'
    );
  }
}



const domContainer = document.querySelector('#react');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ReactLink));

