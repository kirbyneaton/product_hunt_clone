# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all
User.delete_all

demo_user = User.create!(
    username: 'Demo User',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/database-edits/app/assets/images/bear_Demo_User.jpeg'
)

User.create!(
    username: 'Otis',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/database-edits/app/assets/images/bear_Otis.jpeg'
)

User.create!(username: 'Holly', password: '123456')

User.create!(username: 'Cub', password: '123456')

User.create!(username: 'Chunk', password: '123456')

User.create!(username: 'Popeye', password: '123456')

User.create!(username: 'Gummy', password: '123456')

User.create!(username: 'Sam Mineater', password: '123456')

User.create!(username: 'Barry', password: '123456')

User.create!(username: 'Fozzie', password: '123456')

User.create!(username: 'Ted E. Bear', password: '123456')

User.create!(username: 'Corduroy', password: '123456')

User.create!(username: 'Hank the Tank', password: '123456')

User.create!(username: 'Smokey', password: '123456')

User.create!(username: 'Ursa', password: '123456')




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

Comment.create!(
    body: 'This is Comment 3',
    user_id: 3,
    product_id: 2,
    parent_comment_id: nil
)

Comment.create!(
    body: 'This is Comment 4',
    user_id: 3,
    product_id: 3,
    parent_comment_id: nil
)

Comment.create!(
    body: 'This is Comment 5',
    user_id: 3,
    product_id: 4,
    parent_comment_id: nil
)
