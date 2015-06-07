// Backbone Model

var Student = Backbone.Model.extend({
	defaults: {
	  first_name: '',
      last_name: '',
      gender: '',
      image: '',
      classroom: '',
      parent1: '',
      parent2: ''
	}
});

// Backbone Collection

var Students = Backbone.Collection.extend({
  initialize: function() {
    console.log('New classroom');
  },
  model: Student,
  url: '/students'

});

// instantiate two Students

var student1 = new Student({
  first_name: "Mickey",
  last_name: "Mouse",
  gender: "male",
  image: " ",
  classroom: "classroom1",
  parent1: "Walt",
  parent2: "Lillian" 
  });

var student2 = new Student({
  first_name: "River",
  last_name: "Song",
  gender: "female",
  image: " ",
  classroom: "classroom1",
  parent1: "Amelia",
  parent2: "Rory"
  });

// instantiate a Collection

var students = new Students();

// Backbone View for one student

var StudentView = Backbone.View.extend({
	tagName: 'tr',
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.template = _.template($('.student-list-template').html());
	},
	events: {
		'click .add-student': 'add',
		'click .edit-student': 'edit',
		'click .update-student': 'update',
		'click .cancel': 'cancel',
		'click .delete-student': 'delete'
	},

	initialize: function(){
		console.log('new StudentView');
		this.render();
	},

	add: function() {
		var data = {
			first_name: $('.first_name-input').val(),
      		last_name: $('.last_name-input').val(),
      		gender: $('.gender-input').val(),
      		classroom: $('.classroom-input').val(),
      		image: $('.image-input').val(),
      		parent1: $('.parent1-input').val(),
      		parent2: $('.parent2-input').val()
		};
		this.collection.create(data, {success: function(){
			$('.first_name-input').val("");
	    	$('.last_name-input').val("");
	    	$('.gender-input').val("");
	    	$('.classroom-input').val("");
	    	$('.image-input').val("");
	    	$('.parent1-input').val("");
	    	$('.parent2-input').val("")
		}});
	},
	edit: function() {
		$('.edit-student').hide();
		$('.delete-student').hide();
		this.$('.update-student').show();
		this.$('.cancel').show();

		var first_name = this.$('.first_name').html();
		var last_name = this.$('.last_name').html();
		var gender = this.$('.gender').html();
		var image = this.$('.image').html();
		var classroom = this.$('.classroom').html();
		var parent1 = this.$('.parent1').html();
		var parent2 = this.$('.parent2').html();

		this.$('.first_name').html('<input type="text" class="form-control first_name-update" value="' + first_name + '">');
		this.$('.last_name').html('<input type="text" class="form-control last_name-update" value="' + last_name + '">');
		this.$('.gender').html('<input type="text" class="form-control gender-update" value="' + gender + '">');
		this.$('.image').html('<input type="text" class="form-control image-update" value="' + image + '">');
		this.$('.classroom').html('<input type="text" class="form-control classroom-update" value="' + classroom + '">');
		this.$('.parent1').html('<input type="text" class="form-control parent1-update" value="' + parent1 + '">');
		this.$('.parent2').html('<input type="text" class="form-control parent2-update" value="' + parent2 + '">');
	},
	update: function() {
		console.log("Update!")
		this.model.set('.first_name', $('.first_name-update').val());
		this.model.set('last_name', $('.last_name-update').val());
		this.model.set('gender', $('.gender-update').val());
		this.model.set('image', $('.image-update').val());
		this.model.set('classroom', $('.classroom-update').val());
		this.model.set('parent1', $('.parent1-update').val());
		this.model.set('parent2', $('.parent2-update').val());
	},
	cancel: function() {
		studentsView.render();
	},
	delete: function() {
		this.model.destroy();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()))
		return this;
	}
});

// Backbone View for all students

var StudentsView = Backbone.View.extend({
	model: students,
	el: $('.students-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		this.model.on('change', function() {
			setTimeout(function() {
				self.render();
			}, 30);
		},this);
		this.model.on('remove', this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(student) {
			self.$el.append((new StudentView({model: student})).render().$el);
		});
		return this;
	}
});

$(document).ready(function(){

	

});