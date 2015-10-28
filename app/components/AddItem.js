import React from 'react';
import AddItemStore from '../stores/AddItemStore';
import AddItemActions from '../actions/AddItemActions';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddItemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddItemStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddItemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var thumb = this.state.thumb.trim();
    var category = this.state.category.trim();
    var description = this.state.description.trim();

    if (!name) {
      AddItemActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (!thumb) {
      AddItemActions.onInvalidThumb();
      this.refs.thumbField.getDOMNode().focus();
    }

    if (!category) {
      AddItemActions.onInvalidCategory();
      this.refs.updateCategory.getDOMNode().focus();
    }

    if (!description) {
      AddItemActions.onInvalidDescription();
      this.refs.updateDescription.getDOMNode().focus();
    }

    if (name && thumb && category && description) {
     AddItemActions.addItem(name, thumb, category, description);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Item</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>GIF Title</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddItemActions.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.thumbValidationState}>
                    <label className='control-label'>GIF Path</label>
                    <input type='text' className='form-control' ref='thumbField' value={this.state.thumb}
                           onChange={AddItemActions.updateThumb} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.categoryValidationState}>
                    <label className='control-label'>Tag</label>
                    <input type='text' className='form-control' ref='categoryField' value={this.state.category}
                           onChange={AddItemActions.updateCategory} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.descriptionValidationState}>
                    <label className='control-label'>Description</label>
                    <textarea type='textarea' row='3' className='form-control' ref='categoryField' value={this.state.description}
                           onChange={AddItemActions.updateDescription} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;