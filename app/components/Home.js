import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getAllItems();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(item) {
    HomeActions.deleteItem(item._id);
  }

  render() {
    var itemNodes = this.state.items.map((item, index) => {
      return (
        <div key={item._id} className={'col-xs-6 col-sm-4'}>
          <div className='thumbnail fadeInUp animated'>
          	<Link to={'/items/' + item._id}>
            	<img src={item.thumb}/>
            </Link>
            <div className='caption text-center'> 
                <span><h4><Link to={'/items/' + item._id}><strong>{item.name}</strong></Link></h4></span>
                <span><strong>Category:</strong>{item.category}</span>
                <div>{item.description}</div>
            </div>
            <button type='button' onClick={this.handleClick.bind(this, item)} className='btn btn-remove'>X</button>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        {itemNodes}
      </div>
    );
  }
}

export default Home;