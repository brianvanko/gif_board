import {assign, contains} from 'underscore';
import alt from '../alt';
import ItemActions from '../actions/ItemActions';

class ItemStore {
  constructor() {
    this.bindActions(ItemActions);
    this.name = '';
    this.category = '';
    this.description = '';
    this.thumb = '';
  }

  onGetItemSuccess(data) {
    assign(this, data);
  }

  onGetItemFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(ItemStore);