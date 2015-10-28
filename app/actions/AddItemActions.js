import alt from '../alt';

class AddItemActions {
  constructor() {
    this.generateActions(
      'addItemSuccess',
      'addItemFail',
      'updateName',
      'updateThumb',
      'updateCategory',
      'updateDescription',
      'invalidName',
      'invalidThumb',
      'InvalidCategory',
      'InvalidDescription'
    );
  }

  addItem(name, thumb, category, description) {
    $.ajax({
      type: 'POST',
      url: '/api/items',
      data: { name, thumb, category, description }
    })
      .done((data) => {
        this.actions.addItemSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addItemFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddItemActions);