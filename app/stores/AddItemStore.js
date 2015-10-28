import alt from '../alt';
import AddItemActions from '../actions/AddItemActions';

class AddItemStore {
  constructor() {
    this.bindActions(AddItemActions);
    this.name = '';
    this.thumb = '';
    this.category = '';
    this.description = '';

    this.nameValidationState = '';
    this.thumbValidationState = '';
    this.categoryValidationState = '';
    this.categoryDescription = '';
  }

  onAddItemSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = 'Successfully updated';
    this.name = '';
    this.thumb = '';
    this.category = '';
    this.description = '';
  }

  onAddItemFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a name.';
  }

  onUpdateThumb(event) {
    this.thumb = event.target.value;
    this.thumbValidationState = '';
    this.helpBlock = '';
  }

  onInvalidThumb() {
    this.thumbValidationState = 'has-error';
    this.helpBlock = 'Please enter a valid image url.';
  }

  onUpdateCategory(event) {
    this.category = event.target.value;
    this.categoryValidationState = '';
    this.helpBlock = '';
  }

  onInvalidCategory() {
    this.categoryValidationState = 'has-error';
    this.helpBlock = 'Please enter a category.';
  }

  onUpdateDescription(event) {
    this.description = event.target.value;
    this.descriptionValidationState = '';
    this.helpBlock = '';
  }

  onInvalidDescription() {
    this.descriptionValidationState = 'has-error';
    this.helpBlock = 'Please enter a description.';
  }

}

export default alt.createStore(AddItemStore);