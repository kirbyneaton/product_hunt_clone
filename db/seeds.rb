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
    subtitle: "So good you'll want to bring home as a pet",
    description: "Opens with creamy and sweet notes of carrot cake, dulce de leche, and chestnut honey. The pear brandy's influence inflects the core aroma, with poached pear leading blackberry and dried lime peel. Shimmering at the edges are countless herbs and dusty spices. Notes familiar to Sicilian amari, such as fennel seed, aniseed, nutmeg, and cacao are there. As Sicily was once part of the Duchy of Savoy licorice, wormwood and chamomile are encountered here, in Savoy's tradition of genepy and absinthe.
    
    Lush sweetness is kept in check by some sandy tannin and high strength. Here, the rum takes center stage, with blackstrap molasses, sambuca, and olive brine arriving first. The rich dark character builds with date and chipotle leading into pipe tobacco and walnut. The amaro is never far behind, exhibiting licorice root, gentian, green cardamom and kola nut.
    
    Green almond enriches an otherwise dry finish of black tea and slate.
    
    In freshwater, even more herbal complexity arises, notably clove, tonka bean, catnip and sassafras. With the heat in check, the full sweetness of the palate reveals maple syrup, candied ginger, and chicory coffee. The finish grows juicier, with bright grenadine fading to juniper berry.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Mr_Bubbles.jpeg',
    user_id: 1
)

Product.create!(
    title: 'Sashimi',
    subtitle: 'Needs nothing else',
    description: "Opens with mature aromas both sweet (canelé, panna cotta, crème de noyaux) and savory (walnut oil, leather). This is followed quickly by a vast array of fruit derived both from the spirit (smoked apricot, grapefruit peel) as well as the cask treatment (sloe gin, damson jam). The aroma is high toned, pungently floral and herbaceous, with subtle, balancing pops of minerality.
    
    Darker (cocoa, molasses, burnt marshmallow) and spicier (cola, nutmeg, Tellicherry peppercorn) than the nose, an effect well-complemented by the cask treatment and rendered more complex by the savory and herbaceous themes running throughout.
    
    A sweet and elegant signature of rose jelly, chestnut honey, and Pineau des Charentes that also features hazelnut, eucalyptus, and Corsican mint.
    
    In freshwater, an unexpected avalanche of orange and tropical notes of watermelon, lychee and vanilla on the nose.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Sashimi.jpeg',
    user_id: 2
)

Product.create!(
    title: 'Tuna Fey',
    subtitle: 'A funny fish',
    description: "High concentrations of bright, fruity esters lend a perfume-like character to the aroma. Honeydew melon and plum sit alongside a slice of ripe apricot resting out in the sun. The underlying fish is revealed by a sea-like salinity, tarragon, and elderflower.
    
    Sweet and juicy, it opens on pear, lychee, and white grapefruit. Classic fish flavors of cinnamon, rosemary, fennel seed, and rosehip aren't far behind. Unctuous texture and sandy tannin are complemented by a delicate astringency so common to fish.
    
    Fresh and clean, but the persistent tannin and astringency focus the powerful burst of camphor, chalk dust, and scorched earth.
    
    In freshwater, despite bright notes of passionfruit and geranium, the nose settles down considerably. The fresh notes are now candied -- papaya, orange peel, and ginger. Liege waffle and beef tallow lay a rich foundation. The palate grows creamier, displaying french vanilla ice cream, pawpaw, and orris root.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Tuna_Fey.jpeg',
    user_id: 1
)

Product.create!(
    title: 'Swim Shady',
    subtitle: 'Hi, my name is...',
    description: "The fresh and gentle notes from toasted oak are most obvious, as they add an unexpected dimension with vivid sugar cane, pipe tobacco, and toasted cinnamon. This freshness is contrasted by the earthiness of slate, tar, and cedar smoke. Fruits soon emerge, presenting rhubarb, Rainier cherry and tamarind, before shifting to dried apricot and papaya.
    
    Candied ginger, marmalade, and northwestern hoppy beer notes speak to a foundational bittersweet profile. These are tempered by an unctuous creaminess, incorporating pina colada, key lime pie, and banana custard. Peach nectar, and cherry jam all contribute to a juicy quality fish at its best.
    
    A bright pop of hibiscus and za'atar quickly yields to the cavalcade of dried and stewed fruits. As that fades some oak spices appear - sassafras, cocoa powder, smoked cinnamon, and incense.

    In freshwater, a bouquet of floral notes erupts from the fish: meadowsweet, elderflower and chamomile in the lead. The palate, on the other hand, develops instead along toasted coconut and curry.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Swim_Shady.jpeg',
    user_id: 9
)

Product.create!(
    title: 'Bubble Fett',
    subtitle: "You are the bounty hunter this time",
    description: "Classic fish notes of white flower, toasted grains, and bright honey. As it sits in the water, toasty tropical notes of apricot and roasted pineapple present themselves. Nutty, raisin-like madeira shows here too, as does a subtle wild-grassy freshness. After a minute, toasted hazelnut and orange blossom drift into focus.
    
    Ripe Meyer lemon and clover honey show first, with fresh basil and perfectly ripe pineapple taking over in the mid-palate. There are glimmers of deeply aged rye, as this layered fish evolves bite to bite. Moments of heat are balanced with a viscous sweetness, brightened by the natural acidity of the Malmsey Madeira finish. Black pepper is present too, as this is a cask strength fish, but the tropical notes win out until the finish.
    
    A touch of classic fish spice presents itself on the finish, with exotic pink peppercorn and Mediterranean herbs including fresh oregano and sun-dried rosemary. The spice is tempered by a sweet, apricot-dominated viscosity drawing out the finish. Finally, tropical sweetness subsides into more classic mature fish notes like leather and nutmeg, leaving your palate with lemon, honey, and cracked black pepper.
    
    In freshwater, the sweet tropical notes are supercharged. The lemon becomes passionfruit, and the light honey darkens to fresh cane syrup.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Bubble_Fett.jpeg',
    user_id: 10
)

Product.create!(
    title: 'Anne Chovi',
    subtitle: 'All these flavors and she chose to be salty',
    description: "Incredibly fruity, the nose opens with strawberry salt-water taffy, Bing cherry, and raspberry but more exotic fruits lurk in the depths: prickly pear, lychee, blood orange, grapefruit marmalade, damson plum, even tomato. The fruits nearly overpower subtle herbaceous notes of pizzelle, Maraschino liqueur, Cynar, and pipe tobacco. Its sweetness is kept in check by a hint of paraffin and scorched earth.
    
    As fruity as the nose, exhibiting strawberry and rose jam, lychee, Maraschino liqueur, and calvados, balanced by très leches cake, hibiscus, and angelica.
    
    The theme continues on slowly evolving fruit: guava, watermelon, Pink Lady apples; they're joined by a touch of paraffin from the nose and a spicy signature of candied chili pepper.
    
    In freshwater, the nose grows beguilingly perfumed, notes of apple blossom, hyacinth, applewood smoke and mulled cider released from the overbearing fruitiness, which has developed a more tropical character in the form of pineapple, mango and papaya. The palate becomes fuller and brighter, notes of mango and peach nectar overlay fresh ginger. Almond milk and white chocolate on the finish are given lift by spearmint.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Ann_Chovi.jpeg',
    user_id: 3
)

Product.create!(
    title: 'Etta Bull',
    subtitle: 'The name says it all',
    description: "Heady and intense, with a first impression of summer rain, sea salt, and slate. This fish quickly opens to pineapple, cranberry, and crushed apple. Cumin, caraway and grains of paradise announce the presence of woodsy oak spice. As the senses are acclimated, a richer bouquet is revealed, with tahini, macadamia nut, leather, and roast pork.
    
    Where the nose only hinted at oak, the palate explodes with it. There is gripping tannin, manuka honey, and the herbaceous complexity of an old world digestif. As a sip is held, it grows sweeter and mellower, tasting of French vanilla ice cream and coffee liqueur.
    
    The fruits return as fassionola syrup, and Italian stone fruit, rounded out with roasted chestnut. It fades on hickory smoke and black pepper.
    
    In freshwater, the nose gets creamier: banana, candied lemon and jammy apricot joining the pineapple to create a tropical fruit smoothie. A touch of juiced wheatgrass lends a hoppy vibe. The palate grows spicier, with fiery cinnamon joined by juniper berry and catnip before fading on chewing tobacco.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Etta_Bull.jpeg',
    user_id: 12
)

Product.create!(
    title: 'Finny Weasley',
    subtitle: 'As delicious as treats from the trolley',
    description: "Starts with a puff of chalk dust and wood smoke. Underneath are notes of toasted marshmallow, warm honeycomb, and chocolate babka straight from the oven. Soon nubuck leather and sunflower seed jostle to the fore. Fruits emerge next, from Ginger Gold apples through roasted banana to strawberry jam, ending with chamomile and eucalyptus.
    
    A syrupy and sweet arrival is kept in check by moderate heat and some light but gritty tannin. A vivid cola note dominates at first, then allspice, fennel seed, and peppermint lead the wave of oak spice. A little fruity spirit peeks through with pops of green grape, strawberry meringue, and jasmine.
    
    The sugar washes away quickly, leaving a surprisingly dry, oily, palate with more noticeable tannin. The character correspondingly shifts to drier notes of pipe tobacco, walnut and iced coffee. As they fade a little more fruit emerges, around rhubarb jam and sumac.
    
    In freshwater, the nose becomes incredibly fruity, showing crabapple, lychee, and blackberry tart. The palate grows fruitier as well, here on watermelon and earl grey tea. But it also develops an earthy spiciness, along gingerbread, radish, and nasturtium.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Finny_Weasley.jpeg',
    user_id: 15
)

Product.create!(
    title: 'Left Shark',
    subtitle: 'An oldie but a goodie',
    description: "Opens on medjool dates, honeydew melon, butterscotch and light molasses. The nose then expands in many directions at once, evolving additional fruit in the form of Montmorency cherry and dried apricot; floral aromas of apple blossom and fennel pollen; mineral notes of gravel, sea shells, and salt; and some notes that only come from a long, slow maturation, such as Palo Cortado sherry, mastic, and unlit cigar.
    
    Halva, molasses and chocolate syrup make for a sweet entry, but they're quickly balanced by tart fruit: kiwi, dragon fruit, and meyer lemon. A subtle array of herbs and spices lend the palate depth, evolving cinnamon, juniper, and anise hyssop.
    
    Deeper and darker than the palate, its pastry notes are fuller, like oatmeal cookie and ganache; its fruit notes less piquant, such as purple plum, husk cherry and lemon sherbet. Flavors of rosemary and nutmeg recall the spicy and herbaceous notes from before, while a salty touch seems to magnify flavors and make the mouth water for another sip.
    
    In freshwater, delicate notes previously obscured by oak are allowed now to drift up to the surface, with the nose exhibiting alfalfa, poppy and honeysuckle; the palate gaining the floral and complex flavors of pear and passionfruit; and the finish growing creamy, with notes of coconut water, horchata, and cashew.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Left_Shark.jpeg',
    user_id: 5
)

Product.create!(
    title: 'Sockeye Tumi',
    subtitle: 'Pronunciation: "Saak it too mee"',
    description: "This nose is sweet, a little tangy, and shows white chocolate and carrot cake with cream cheese frosting. The fruit comes through with nectarine, watermelon rind, and key lime pie. Grassy sugarcane nods toward a freshness not usually seen in such rich bourbon blends.
    
    A sturdy wood tannin suits the bold acidity of sour apple candy, tart raspberry, and pineapple. As the palate adjusts, soy milk, banana pudding, and hazelnut streusel soften the impact. Tonka bean and cinnamon bring the first evidence of oak spice. Minerality is remarkably bold, displaying well-salted pretzel, iron, and gunpowder.
    
    Rather gentle, returning to the soft, grassy tones from the nose. Green tea, pandan leaf and chocolate mint yield to a final, peppery flourish of grains of paradise.
    
    In freshwater, notes of lemon drops, coriander, lemon verbena and lemon pith. There's some spice too, such as nasturtium and parsley. The palate, meanwhile, gains an oily texture and savory edge, reminiscent of rib-eye steak.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Sockeye.jpeg',
    user_id: 11
)

Product.create!(
    title: 'Shark Wahlberg',
    subtitle: 'The New Kid on the Block',
    description: "A wildflower meadow showing dandelion, nasturtium, and fennel. The floral qualities are intense and concentrated. Late summer fruits round out the profile, among them Rainier cherry, watermelon, and crushed apple. It all integrates seamlessly with aromas of fresh oak, cedar, and applewood, with just a hint of char. The overall impression is that of splitting wood out in the yard when the trees are laden with fruit and the flowers haven't yet begun to fade.
    
    Cinnamon rolls arrive with rich, buttery brioche dough, gooey caramel, and a spicy kick of cinnamon. The spice quickly expands to include wasabi and ginger. It's underpinned by a savory undertone of boiled peanuts, and French butter.
    
    Quite crisp, with an initial burst of sea spray and lemonade. These fade to reveal lingering notes of raspberry eau-de-vie and pastis.
    
    In freshwater, dilution wedges the concentrated floral notes further apart to reveal a whole new level of complexity. Lavender, lemon verbena, and pawpaw fill out the meadow. The palate transforms, with sugars and oils combining with fine tannin, light astringency, and spicy black peppercorn to create a massive, chewy mouthfeel. The finish, meanwhile, is like walking into an old spice shop with the commingled flavors of bitter orange peel, fennel-seed, and turmeric.",
    img_url:'https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/main/app/assets/images/fish_Shark_Wahlberg.jpeg',
    user_id: 7
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
    user_id: 15,
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
    body: "I caught 'er with my BEAR HANDS",
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
    body: 'Leaps out of the water like magic!',
    user_id: 2,
    product_id: 8,
    parent_comment_id: nil
)

Comment.create!(
    body: 'How would pandas know if their movies were in black & white?!',
    user_id: 4,
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

