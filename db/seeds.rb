# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all
User.delete_all

demo_user = User.create!(username: 'Demo User', password: '123456')

User.create!(username: 'Otis', password: '123456')


Product.create!(
    title: 'One Fish',
    description: 'This one has a little car.',
    user_id: 1
)

Product.create!(
    title: 'Two Fish',
    description: 'This one has a little star.',
    user_id: 1
)

Product.create!(
    title: 'Red Fish',
    description: 'Some are red.',
    user_id: 2
)

Product.create!(
    title: 'Blue Fish',
    description: 'Some are blue.',
    user_id: 2
)

Product.create!(
    title: 'Five Fish',
    description: 'Fish 5 desc.',
    user_id: 2
)

Product.create!(
    title: 'Six Fish',
    description: 'Fish 6 desc.',
    user_id: 2
)


Comment.create!(
    body: 'This is Comment 1',
    user_id: 2,
    parent_comment_id: null
)

Comment.create!(
    body: 'This is Comment 2',
    user_id: 3,
    parent_comment_id: 1
)

