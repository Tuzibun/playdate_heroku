json.array!(@students) do |student|
  json.extract! student, :id, :first_name, :last_name, :gender, :image, :classroom, :parent1, :parent2
  json.url student_url(student, format: :json)
end
