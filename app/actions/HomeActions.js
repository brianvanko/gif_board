import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getAllItemsSuccess',
      'getAllItemsFail',
      'deleteItemSuccess',
      'deleteItemFail'
    );
  }

  getAllItems() {
    $.ajax({ url: '/api/items' })
      .done(data => {
        this.actions.getAllItemsSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getAllItemsFail(jqXhr.responseJSON.message);
      });
  }

  deleteItem(item_id) {
    $.ajax({type: 'DELETE',
     url: '/api/items/' + item_id
   })
      .done(data => {
        this.actions.deleteItemSuccess(data, item_id);
      })
      .fail(jqXhr => {
        this.actions.deleteItemFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);