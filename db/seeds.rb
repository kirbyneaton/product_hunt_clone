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
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Cub.jpeg'
)

User.create!(
    username: 'Chunk',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Chunk.jpeg'
)

User.create!(
    username: 'Popeye',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Popeye.jpeg'
)

User.create!(
    username: 'Gummy',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Gummy.jpeg'
)

User.create!(
    username: 'Sam Mineater',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Sam_Mineater.jpeg'
)

User.create!(
    username: 'Barry',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Barry.jpeg'
)

User.create!(
    username: 'Fozzie',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Fozzie.jpeg'
)

User.create!(
    username: 'Ted E. Bear',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Ted_E_Bear.jpeg'
)

User.create!(
    username: 'Corduroy',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Corduroy.jpeg'
)

User.create!(
    username: 'Hank The Tank',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Hank.jpeg'
)

User.create!(
    username: 'Smokey',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Smokey.jpeg'
)

User.create!(
    username: 'Ursa',
    password: '123456',
    profile_img: 'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/bear_Ursa.jpg'
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
    title: 'Tuna Fey',
    subtitle: 'Fish 11 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Tuna_Fey.jpeg',
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
    title: 'Bubble Fett',
    subtitle: 'This one has a little star.',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Eu non diam phasellus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Sed velit dignissim sodales ut eu sem. Eu feugiat pretium nibh ipsum consequat. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Id leo in vitae turpis.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Bubble_Fett.jpeg',
    user_id: 1
)

Product.create!(
    title: 'Anne Chovi',
    subtitle: 'All these flavors and she chose to be salty',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Ann_Chovi.jpeg',
    user_id: 3
)

Product.create!(
    title: 'Etta Bull',
    subtitle: 'Some are red.',
    description: "Really, really, really, really, really, really, long test description",
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
    title: 'Sockeye Tumi',
    subtitle: 'Fish 9 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Sockeye.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Shark Wahlberg',
    subtitle: 'Fish 8 desc.',
    description: "Really, really, really, really, really, really, long test description",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Shark_Wahlberg.jpeg',
    user_id: 2
)



Comment.create!(
    body: 'Almost want to have as a pet!',
    user_id: 1,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: 'A bit jumpy',
    user_id: 2,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: 'Very delicious...would recommend',
    user_id: 3,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: "He's quick, but I was quicker ;). Yum",
    user_id: 4,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: 'First',
    user_id: 13,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: "Would eat again, although get there early",
    user_id: 5,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: "my fav!!!!",
    user_id: 6,
    product_id: 1,
    parent_comment_id: nil
)

Comment.create!(
    body: "Pretty good. Needs soy sauce",
    user_id: 7,
    product_id: 2,
    parent_comment_id: nil
)

Comment.create!(
    body: 'first',
    user_id: 13,
    product_id: 2,
    parent_comment_id: nil
)

Comment.create!(
    body: "Amazing!! Partner got me for my birthday..so sweet :)",
    user_id: 8,
    product_id: 2,
    parent_comment_id: nil
)

Comment.create!(
    body: "Got lost trying to find oh well",
    user_id: 9,
    product_id: 2,
    parent_comment_id: nil
)

Comment.create!(
    body: "What do you call a freezing bear? A brrrrrrr",
    user_id: 11,
    product_id: 2,
    parent_comment_id: nil
)

Comment.create!(
    body: "Tastes a little fishy",
    user_id: 5,
    product_id: 3,
    parent_comment_id: nil
)

Comment.create!(
    body: "So fetch.",
    user_id: 3,
    product_id: 3,
    parent_comment_id: nil
)

Comment.create!(
    body: 'first',
    user_id: 13,
    product_id: 3,
    parent_comment_id: nil
)

Comment.create!(
    body: "Anybody tried marlin?",
    user_id: 9,
    product_id: 3,
    parent_comment_id: nil
)

Comment.create!(
    body: "Did not stand up. We're gonna have a problem here.",
    user_id: 15,
    product_id: 4,
    parent_comment_id: nil
)

Comment.create!(
    body: "I mean, what more is there to say? Lengendary. So good.",
    user_id: 14,
    product_id: 4,
    parent_comment_id: nil
)

Comment.create!(
    body: "Tastes like mom's spaghetti!",
    user_id: 10,
    product_id: 4,
    parent_comment_id: nil
)

Comment.create!(
    body: "Not as good as the original",
    user_id: 11,
    product_id: 5,
    parent_comment_id: nil
)

Comment.create!(
    body: 'first',
    user_id: 13,
    product_id: 5,
    parent_comment_id: nil
)

Comment.create!(
    body: 'Would eat over Jar Jar lol',
    user_id: 6,
    product_id: 5,
    parent_comment_id: nil
)

Comment.create!(
    body: 'Very trendy spot to eat. Friends and I all loved it.',
    user_id: 2,
    product_id: 5,
    parent_comment_id: nil
)

Comment.create!(
    body: "Pretty good. Doesn't need soy sauce",
    user_id: 7,
    product_id: 6,
    parent_comment_id: nil
)

Comment.create!(
    body: "I'm such a big fan of this",
    user_id: 4,
    product_id: 7,
    parent_comment_id: nil
)

Comment.create!(
    body: "I caught her with my BEAR HANDS",
    user_id: 11,
    product_id: 7,
    parent_comment_id: nil
)

Comment.create!(
    body: 'first',
    user_id: 13,
    product_id: 7,
    parent_comment_id: nil
)

Comment.create!(
    body: 'Do pandas know if their movies are in color or black & white?',
    user_id: 13,
    product_id: 8,
    parent_comment_id: nil
)

Comment.create!(
    body: 'Leaps out of the water like magic!',
    user_id: 2,
    product_id: 8,
    parent_comment_id: nil
)

Comment.create!(
    body: "The best",
    user_id: 14,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "Fantastic. Big fan",
    user_id: 15,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "Koalas aren't bears",
    user_id: 6,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "They don't meet the koalifications",
    user_id: 11,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "koality hang tho :)",
    user_id: 7,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "this is unbearable, let's press paws",
    user_id: 12,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "this is panda-monium!",
    user_id: 8,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "^ diskoalified",
    user_id: 3,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "Ah I've been bamboo-zled",
    user_id: 8,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: 'First',
    user_id: 13,
    product_id: 9,
    parent_comment_id: nil
)

Comment.create!(
    body: "yum yum yum yum",
    user_id: 10,
    product_id: 10,
    parent_comment_id: nil
)

Comment.create!(
    body: "this one's a stretch...",
    user_id: 5,
    product_id: 10,
    parent_comment_id: nil
)

Comment.create!(
    body: "I heard he used to be called Sharky Shark",
    user_id: 9,
    product_id: 11,
    parent_comment_id: nil
)

