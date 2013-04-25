"use strict";

var router = new Backbone.Router({
  routes: {
    "task/*taskname": "task",  // #search/kiwis
    "*path": "default"
  }
});
router.on('route:task', function(page){
  tasks.load(page);
});
router.on('route:default', function(){
});
Backbone.history.start();

var MenuTaskView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(model){
    this.model = model;
    var view = this;
    model.on('change:current change:status', function(){
      view.$el.attr('class', '');
      view.$el.addClass(this.get('status'));
      if(this.get('current')){
        view.$el.addClass('current');
      }
    });
  },
  template: _.template($('#menuTasksView').html()),
  render: function(){
    this.$el.html(this.template({
      task: this.model
    }));

    return this.el;
  }
});

var TasksView = Backbone.View.extend({
  initialize: function(tasks){
    this.tasks = tasks;
  },
  render: function(){
    var that = this;
    _(tasks.getGrouped()).each(function(group, groupName){
      that.$el.append("<h3>" + groupName + "</h3>");
      var ul = $('<ul>');
      _(group).each(function(task){
        var menuTaskView = new MenuTaskView(task);
        ul.append(menuTaskView.render());
      });
      that.$el.append(ul);
    });
    $('#menu').append(this.el);
  }
});
var tasksView = new TasksView(tasks.tasks);
tasksView.render();
