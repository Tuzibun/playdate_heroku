class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :image
      t.string :classroom
      t.string :parent1
      t.string :parent2

      t.timestamps null: false
    end
  end
end
