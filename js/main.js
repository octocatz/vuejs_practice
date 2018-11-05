(function() {
    'use strinct';

  //two way data binding
  var vm = new Vue({
      el: '#app',
      newItem: '',
      data: {
          name: 'test',
          todos: []
    // todos: []
       },
       watch: {
        // todos: function() {
        //   localStorage.setItem('todos', JSON.stringify(this.todos));
        //   alert('Data saved!');
        // }
        todos: {
          handler: function() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
            // alert('Data saved!');
          },
          deep: true
        }
      },
      mounted: function() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      },
       methods:{
            //   addItem: function(e) {
            //       e.preventDefault();
            //       this.todos.push(this.newItem);
            addItem: function() {
                var item = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(item);
                this.newItem='';
            },
            deleteItem: function(index) {
                if (confirm('are you sure?')){
                this.todos.splice(index, 1);
                }
            },
            purge: function(index) {
                if (!confirm('delete finished?')){
                return;
            }
        //     this.todos = this.todos.filter(function(todo) {
        //         return !todo.isDone;
        //   });
        this.todos = this.remaining;
        }
      },
      computed:{
          remaining:function(){
            //   var items = this.todos.filter(function(todo) {
            //       return !todo.isDone;
            //   });
            //   return items.length;
            return this.todos.filter(function(todo) {
                return !todo.isDone;
            });
          }
      }
  });

})();