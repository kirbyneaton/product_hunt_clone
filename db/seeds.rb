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

User.create!(username: 'Holly', password: '123456')


Product.create!(
    title: 'One Fish',
    subtitle: 'This one has a little car.',
    description: "Really, really, really, really, really, really, long test description",
    user_id: 1
)

Product.create!(
    title: 'Two Fish',
    subtitle: 'This one has a little star.',
    description: "Really, really, really, really, really, really, long test description",
    user_id: 1
)

Product.create!(
    title: 'Red Fish',
    subtitle: 'Some are red.',
    description: "Really, really, really, really, really, really, long test description",
    user_id: 2
)

Product.create!(
    title: 'Blue Fish',
    subtitle: 'Some are blue.',
    description: "Really, really, really, really, really, really, long test description",
    user_id: 2
)

Product.create!(
    title: 'Five Fish',
    subtitle: 'Fish 5 desc.',
    description: "Really, really, really, really, really, really, long test description",
    user_id: 2
)

Product.create!(
    title: 'Six Fish',
    subtitle: 'Fish 6 desc.',
    description: "Really, really, really, really, really, really, long test description",
    user_id: 2
)


Comment.create!(
    body: 'This is Comment 1',
    user_id: 1,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: 'This is Comment 2',
    user_id: 2,
    product_id: 1,
    parent_comment_id: 1
)

