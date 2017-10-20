export const Chirps: Array<IChirp> = [
    {
        img: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/03/darth-vader-1-cover-header.jpg",
        user: "Darth Vader",
        username: "the_vader",
        id: 1,
        message: "Hey did anyone see what happen to Alderan, pretty sweet if you ask me!"
    },
    {
        img: "http://api.theweek.com/sites/default/files/styles/tw_image_9_4/public/PrincessLeia_hero_12_18.jpg?itok=zwHY_ejr&resize=1260x560",
        user: "Princess Leia",
        username: "leia123",
        id: 2,
        message: "How could you be so rude!? Millions of people vaporized instantly and you are bragging about it on CHIRPER!!??"
    },
    {
        img: "https://lumiere-a.akamaihd.net/v1/images/chewbacca_featured_582e3846.jpeg?region=0%2C56%2C1536%2C768&width=480",
        user: "Chewbacca",
        username: "chewwwwwwwy",
        id: 3,
        message: "WWWUUUUUUAHAHAHAHAHAHAH AHAHAHAHAHAAAAAAAAAAAAAAA"
    },
    {
        img: "https://static.gamespot.com/uploads/original/1557/15576725/3070984-38da1a00-864a-0133-9815-0a6c20e5e327.jpg",
        user: "Han Solo",
        username: "mr.solo",
        id: 4,
        message: "Chewwy you have no place in this conversation, dont' worry @leia123, we will kill that asshole for you baby ;)"
    },
    {
        img: "https://vignette.wikia.nocookie.net/darth/images/a/ab/BillyDee.jpg/revision/latest?cb=20080201203945",
        user: "Lando Calrissian",
        username: "lando_blambo",
        id: 5,
        message: "Hey yall can come to cloud city, I promise it isn't a trap or anything guys."
    },
    {
        img: "http://static.snopes.com/app/uploads/2007/08/star-wars-c-3po-sixth-scale-feature-21711-865x452.jpg",
        user: "C-3PO",
        username: "i-c-u-3-po",
        id: 6,
        message: "I do believe there is a civalized solution to this, oh my."
    },
    {
        img: "https://i.ytimg.com/vi/JLmOteqmDYc/maxresdefault.jpg",
        user: "R2D2",
        username: "2d2r",
        id: 7,
        message: "Beep dwoop beep, beeep dwooop beeep"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
        user: "Luke Skywalke",
        username: "who_is_my_dad",
        id: 7,
        message: "Hey guys, don't forget about me!"
    }
]

export interface IChirp {
    img: string;
    user: string;
    username: string;
    id: number;
    message: string;
}