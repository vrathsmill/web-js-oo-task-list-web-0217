'use strict';
// Task Model
class Task {

  constructor(description, priority, list) {
    this.description = description
    this.priority = priority
    this.list = list
    this.id = list.tasks.length
    list.tasks.push(this)

  }

  liEl() {
    return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
  }

  build(){
    $("#list-"+this.list.id).append(this.liEl())
  }
}
