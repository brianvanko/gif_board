import alt from '../alt';
import {filter} from 'underscore';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.items = [];
  }

  onGetAllItemsSuccess(data) {
    this.items = data;
  }

  onGetAllItemsFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onDeleteItemSuccess(data) {
    var newData = filter(this.items, function(tmpItem){ return  tmpItem._id != data[1]});
    this.items = newData;
  }

  onDeleteItemFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);