import React from 'react';
import {Link} from 'react-router';
import ItemStore from '../stores/ItemStore';
import ItemActions from '../actions/ItemActions';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = ItemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ItemStore.listen(this.onChange);
    ItemActions.getItem(this.props.params.id);  
  }

  componentWillUnmount() {
    ItemStore.unlisten(this.onChange);
    $(document.body).removeClass();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      ItemActions.getItem(this.props.params.id);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <div className='thumbnail_full fadeInUp animated'>
        	<a href={this.state.link} target='_blank'>
            <img src={this.state.thumb} />
          </a>
          <div className='caption text-center'> 
            <span><h2>{this.state.name}</h2></span>
              <span><strong>Category: </strong>{this.state.category}</span>
              <div>{this.state.description}</div>
            <div>Share: {"<iframe src="+ this.state.thumb + " frameBorder='0' allowFullScreen></iframe>"}</div>
        </div>
      </div>
    </div>
    );
  }
}

Item.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Item;
