# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all
User.delete_all
Comment.delete_all

demo_user = User.create!(
    username: 'Demo User',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Demo_User.jpeg'
)

User.create!(
    username: 'Otis',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Otis.jpeg'
)

User.create!(
    username: 'Holly',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Holly.jpg'
)

User.create!(
    username: 'Cub',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Cub.jpg'
)

User.create!(
    username: 'Chunk',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Chunk.jpg'
)

User.create!(
    username: 'Popeye',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Popeye.jpg'
)

User.create!(
    username: 'Gummy',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Gummy.jpg'
)

User.create!(
    username: 'Sam Mineater',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Sam_Mineater.jpg'
)

User.create!(
    username: 'Barry',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Barry.jpg'
)

User.create!(
    username: 'Fozzie',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Fozzie.jpg'
)

User.create!(
    username: 'Ted E. Bear',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Ted_E_Bear.jpg'
)

User.create!(
    username: 'Corduroy',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Corduroy.jpg'
)

User.create!(
    username: 'Hank The Tank',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Hank.jpg'
)

User.create!(
    username: 'Smokey',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Smokey.jpg'
)

User.create!(
    username: 'Ursa',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Ursa.jpg'
)




Product.create!(
    title: 'Anne Chovi',
    subtitle: 'All these flavors and she chose to be salty',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Ann_Chovi.jpeg',
    user_id: 3
)

Product.create!(
    title: 'Bubble Fett',
    subtitle: 'This one has a little star.',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Eu non diam phasellus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Sed velit dignissim sodales ut eu sem. Eu feugiat pretium nibh ipsum consequat. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Id leo in vitae turpis.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Bubble_Fett.jpeg',
    user_id: 1
)

Product.create!(
    title: 'Etta Bull',
    subtitle: 'Some are red.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Ann_Chovi.jpeg',
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Etta_Bull.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Finny Weasley',
    subtitle: 'Some are blue.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Finny_Weasley.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Left Shark',
    subtitle: 'Fish 5 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Left_Shark.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Mr. Bubbles',
    subtitle: 'Fish 6 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Mr_Bubbles.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Sashimi',
    subtitle: 'Fish 7 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Sashimi.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Shark Wahlberg',
    subtitle: 'Fish 8 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Shark_Wahlberg.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Sockeye Tumi',
    subtitle: 'Fish 9 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Sockeye.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Swim Shady',
    subtitle: 'Fish 10 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Swim_Shady.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Tuna Fey',
    subtitle: 'Fish 11 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Tuna_Fey.jpeg',
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
