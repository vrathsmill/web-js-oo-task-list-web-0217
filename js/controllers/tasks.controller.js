'use strict';
// Tasks Controller

class TasksController{
  constructor(){
    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
  }

  init(){
    this.addTaskForm()
    this.deleteTaskForm()
  }

  addTaskForm(){
    var self = this;
    this.$addTaskForm.submit(function(event) {
      event.preventDefault();
      var listId = parseInt(self.$selectListMenu.val()),
          taskDescription = self.$taskDescriptionInput.val(),
          taskPriority = self.$taskPriorityInput.val(),
          task = new Task(taskDescription, taskPriority, List.all[listId]);
      task.build();
      self.$taskDescriptionInput.val('');
      self.$taskPriorityInput.val('');
    });
  };

  deleteTaskForm(){
    this.$wrapper.on('click', '.destroy-task', function(){ //live event listener
  var listId = parseInt($(this).parents('ul').data('id')),
      taskId = parseInt($(this).parent('li').data('id')),
      list = List.all[listId];
      list.tasks.splice(taskId, 1, null);
  $(this).parent('li').remove();
  });
  };
  

}
