'use strict';
// Lists Controller

class ListsController {
  constructor(){
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }

  init(){
    this.$addTaskForm.hide()
    this.addTaskForm()
    this.deleteListForm()

  }

  addTaskForm(){
    let self = this
    this.$addListForm.on("submit", function(event) {
      event.preventDefault()
      let input = self.$listTitleInput.val()
      let newList = new List(input)
      newList.build()
      $('#add_task').show()
    })
  }



  deleteListForm(){
    var self = this;
    this.$wrapper.on('click', '.destroy-list', function(){ //live event listener
      var listId = parseInt($(this).parents('h2').next('ul').data('id'));
      List.all.splice(listId, 1, null);
      self.$selectListMenu.find('option[value="'+listId+'"]').remove();
      $(this).parents('.list').remove();
    });
  };

}
