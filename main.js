let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")



console.log(song_play)

let songs_list = [
    {
        name : 'Silsila (1981)',
        Image : 'images/Dekha Ek Khwab img.jpg',
        Song : 'music/Dekha Ek Khwab To Song.mp3',
        Singer : 'Kishore Kumar, Lata Mangeshkar'
    },
    {
        name : 'Woh Kaun Thi (1964)',	
        Image : 'images/Lag Ja Gale img.jpg',
        Song : 'music/Lag Ja Gale Song.mp3',
        Singer : 'Lata Mangeshkar'
    },
    {
        name : 'Aradhana',
        Image : 'images/Roop Tera Mastana img.jpg',
        Song : 'music/Roop Tera Mastana Song.mp3',
        Singer : 'Kishore Kumar'
    },
    {
        name : 'Dilli Ka Thug (1958)',
        Image : 'images/Yeh Raaten Yeh Mausam img.jpg',
        Song : 'music/Yeh Raaten Yeh Mausam song.mp3',
        Singer : 'Kishore Kumar, Asha Bhosle'
    }
]

let i=0;
let flag=false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        
        flag=false;
        console.log(flag)
    }
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
    
})




