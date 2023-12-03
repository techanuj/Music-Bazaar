let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Raabta",
     path: "Music Folder/-DDR- Agent Vinod - 09 - Raabta.mp3",
     img: "Music Img/rabata.jpg",
     singer: "1"
   },
   {
     name: "Soch Na Sake",
     path: "Music Folder/01 - Airlift - Soch Na Sake (Version 1) -DJMaza.Info-.mp3",
     img: "Music Img/Soch Na Sake.jpg",
     singer: "2"
   },
   {
     name: "Bas Ek Baar",
     path: "Music Folder/01 - Bas Ek Baar - Fever -DJMaza.Link-.mp3",
     img: "Music Img/Bas Ek Baar.jpg",
     singer: "3"
   },
   {
    name: "Dilwale - Gerua",
    path: "Music Folder/01 - Dilwale - Gerua -DJMaza.Info-.mp3",
    img: "Music Img/Dilwale - Gerua.jpg",
    singer: "4"
   },
   {
    name: "Hamari Adhuri Kahani",
    path: "Music Folder/01 - HAK - Hamari Adhuri Kahani -DJMaza.Info-.mp3",
    img: "Music Img/Hamari Adhuri Kahani.jpg",
    singer: "5"
   },
   {
    name: "Aaj Dil Shayarana",
    path: "Music Folder/01 - Holiday - Aaj Dil Shayarana -MP3khan.Net-.mp3",
    img: "Music Img/shayrana-holiday-akshaykumar-sonakshi-1_cover.jpg",
    singer: "6"
   },
   {
    name: "Ishqedarriyaan - Judaa",
    path: "Music Folder/01 - Ishqedarriyaan - Judaa  DJMaza.Info .mp3",
    img: "Music Img/judaa-arijit-singh.jpg",
    singer: "7"
   },
   {
    name: "Kabhi Jo Baadal Barse",
    path: "Music Folder/01 - Jackpot - Kabhi Jo Baadal Barse.mp3",
    img: "Music Img/Kabhi Jo Baadal Barse.jpg",
    singer: "8"
   },
   {
    name: "Khamoshiyan - Khamoshiyan",
    path: "Music Folder/01 - Khamoshiyan - Khamoshiyan  DJMaza.Info .mp3",
    img: "Music Img/Khamoshiyan - Khamoshiyan.webp",
    singer: "9"
   },
   {
    name: "Kuch Parbat Hilaayein",
    path: "Music Folder/01 - Kuch Parbat Hilaayein  DJMaza.Life .mp3",
    img: "Music Img/Kuch Parbat Hilaayein.jpg",
    singer: "10"
   },
   {
    name: "Lo Maan Liya - Raaz Reboot",
    path: "Music Folder/01 - Lo Maan Liya - Raaz Reboot -DJMaza.Cool-.mp3",
    img: "Music Img/Lo Maan Liya - Raaz Reboot.jpg",
    singer: "11"
   },
   {
    name: "Mohenjo ",
    path: "Music Folder/01 - Mohenjo Mohenjo - Mohenjo Mohenjo  DJMaza.Desi .mp3",
    img: "Music Img/Mohenjo Mohenjo.jpg",
    singer: "12"
   },
   {
    name: "MTV Unplugged - Arjit Singh - Dua",
    path: "Music Folder/01 - MTV Unplugged - Arjit Singh - Dua -DJMaza-.mp3",
    img: "Music Img/MTV Unplugged - Arjit Singh - Dua.jpg",
    singer: "13"
   },
   {
    name: "Salamat - Sarbjit",
    path: "Music Folder/01 - Salamat - Sarbjit -DJMaza.Link-.mp3",
    img: "Music Img/maxresdefault.jpg",
    singer: "14"
   },


];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }