# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Student.destroy_all
Classroom.destroy_all

Student.create! ({first_name: "Mickey", last_name: "Mouse", gender: "male", image: "http://content.fathead.com/products/74/74-74567.jpg", classroom: "Classroom1", parent1: "Walt", parent2: "Lillian" })
student2 = Student.create ({first_name: "River", last_name: "Song", gender: "female", image: "http://static02.mediaite.com/themarysue/uploads/2015/05/River_Song.jpg", classroom: "Classroom1", parent1: "Amelia", parent2: "Rory" })
student3 = Student.create ({first_name: "Wesley", last_name: "Crusher", gender: "male", image: "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/3a/Wesley_Crusher,_late_2364.jpg/revision/latest?cb=20120802011245&path-prefix=en", classroom: "Classroom1", parent1: "Beverly", parent2: "" })

classroom1 = Classroom.create ({name: "Classroom1", teacher: "Ms. Frizzle"})