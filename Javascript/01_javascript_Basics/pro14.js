let myfav={
    song:"sa re ga ma pa",
    artist:"justin bieber",
    singer:"ariana grande",
    age:38,
    roll:49,
    name:"drake",
    bird:"parrot"

}
const {song,artist,singer,...rest}=myfav;
console.log(song);
console.log(rest);