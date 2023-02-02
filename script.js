let audio=document.getElementById('audioSound')
audio.volume=0.5
let musicList=["Ressources_Mediaplayer/media/Blue_Skies.ogg","Ressources_Mediaplayer/media/Cartoon_Hoedown.ogg","Ressources_Mediaplayer/media/Earthy_Crust.ogg","Ressources_Mediaplayer/media/Hold_On_a_Minute.ogg","Ressources_Mediaplayer/media/JohnDunbarTheme.ogg","Ressources_Mediaplayer/media/Stay_With_You.ogg","Ressources_Mediaplayer/media/Symphony_No_5_by_Beethoven.ogg","Ressources_Mediaplayer/media/Blue_Skies.ogg"]
let musicListIndex=0
//ARTIST NAME AND MUSIC NAME
let artistName=["Silent Partner","Media Right Production","Jingle Punks","Silent Partner","John Dunbar","Silent Partner","Beethoven","Silent Partner"]
let artistNameIndex=0
let musicName=["Blue Skies","Cartoon Hoedown","Earthy Crust","Hold On A Minute","Philharmonic","Stay With You","Symphony No5","Blue Skies"]
let musicNameIndex=0
let cardImg=["Ressources_Mediaplayer/img/pochettes/340/1.jpg","Ressources_Mediaplayer/img/pochettes/340/2.jpg","Ressources_Mediaplayer/img/pochettes/340/3.jpg","Ressources_Mediaplayer/img/pochettes/340/4.jpg","Ressources_Mediaplayer/img/pochettes/340/5.jpg","Ressources_Mediaplayer/img/pochettes/340/6.jpg","Ressources_Mediaplayer/img/pochettes/340/7.jpg","Ressources_Mediaplayer/img/pochettes/340/1.jpg"]
let cardImgIndex=0

// ARTIST NAME AND MUSIC NAME BY DEFAULT
document.getElementById("btnPlay").style="background-image:url(Ressources_Mediaplayer/img/play2.png); background-repeat:no-repeat; width:60px; background-position:center";
document.getElementById("btnVolumeDown").style="background-image:url(Ressources_Mediaplayer/img/volume-down.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";
document.getElementById("btnVolumeUp").style="background-image:url(Ressources_Mediaplayer/img/volume-up.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";

//-----------------------------------------------------------CONTROLS-------------------------------------------------------------
function btnPrevious() {
  if (musicListIndex==0) {
    musicListIndex=24
  } else {
    musicListIndex=musicListIndex-1
  }
  audio.src=musicList[musicListIndex].preview
  audio.play()
  document.getElementById("artistName").innerHTML=musicList[musicListIndex].artist.name; 
  document.getElementById("musicTitle").innerHTML=musicList[musicListIndex].title;
  document.getElementById("btnPlay").style="background-image:url(Ressources_Mediaplayer/img/pause.png); background-repeat:no-repeat; width:60px; background-position:center";
}

function btnPlay() {
    if (audio.paused) {
        audio.play();
        document.getElementById("btnPlay").style="background-image:url(Ressources_Mediaplayer/img/pause.png); background-repeat:no-repeat; width:60px; background-position:center";
    }
    else {
        audio.pause()
        document.getElementById("btnPlay").style="background-image:url(Ressources_Mediaplayer/img/play2.png); background-repeat:no-repeat; width:60px; background-position:center";
    }
}

function btnNext() {
  if (musicListIndex==24) {
    musicListIndex=0
    
  } else {
    musicListIndex=musicListIndex+1
    
  }
  audio.src=musicList[musicListIndex].preview;
  audio.play()
  document.getElementById("artistName").innerHTML=musicList[musicListIndex].artist.name; 
  document.getElementById("musicTitle").innerHTML=musicList[musicListIndex].title; 
  document.getElementById("btnPlay").style="background-image:url(Ressources_Mediaplayer/img/pause.png); background-repeat:no-repeat; width:60px; background-position:center";
}

function roundNumber(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

//------------------------------------------------------------VOLUME---------------------------------------------------------------
function btnVolumeDown() {
 if (audio.volume>=0.1) {
  audio.volume=audio.volume-0.1
 }
 
 if (roundNumber(audio.volume,1)==0){
  document.getElementById("btnVolumeDown").style="background-image:url(Ressources_Mediaplayer/img/volume-mute.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";
 } else {
  document.getElementById("btnVolumeDown").style="background-image:url(Ressources_Mediaplayer/img/volume-down.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";
 }
 document.getElementById('btnVolumeSlice').value=audio.volume;
}

function btnVolumeSlice() {
  audio.volume=document.getElementById('btnVolumeSlice').value;
  if (roundNumber(audio.volume,1)==0){
    document.getElementById("btnVolumeDown").style="background-image:url(Ressources_Mediaplayer/img/volume-mute.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";
   } else {
    document.getElementById("btnVolumeDown").style="background-image:url(Ressources_Mediaplayer/img/volume-down.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";
   }
}

function btnVolumeUp() {
  if (audio.volume<=0.9) {
    audio.volume=audio.volume+0.1
   }

   if (roundNumber(audio.volume,1)==0){
    document.getElementById("btnVolumeDown").style="background-image:url(Ressources_Mediaplayer/img/volume-mute.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";
   } else {
    document.getElementById("btnVolumeDown").style="background-image:url(Ressources_Mediaplayer/img/volume-down.png); background-repeat:no-repeat; width:70px; height:40px; background-position:center";
   }
   document.getElementById('btnVolumeSlice').value=audio.volume;
}

//----------------------------------------------------------SLIDE BAR TIMER----------------------------------------------------------------------
function getDuration() {
  audio.currentTime=0
  let second = audio.duration
  let minute = Math.floor(second/60)
  let secondRest = Math.ceil(second%60)
  minute = minute < 10 ? "0" + minute : minute
  secondRest = secondRest < 10 ? "0" + secondRest : secondRest
  document.getElementById('btnMusicTime').setAttribute("max",audio.duration);
  document.getElementById('musicTime').innerHTML="/ "+minute+" : "+secondRest;
}

function progressionMusic() {
  let second = audio.currentTime
  let minute = Math.floor(second/60)
  let secondRest = Math.ceil(second%60)
  minute = minute < 10 ? "0" + minute : minute
  secondRest = secondRest < 10 ? "0" + secondRest : secondRest
  document.getElementById('btnMusicTime').value=audio.currentTime;
  document.getElementById('musicCurrentTime').innerHTML=minute+" : "+secondRest;
}

function btnMusicTime() {
  audio.currentTime=document.getElementById('btnMusicTime').value;
}

// ---------If the progress bar is used, pause when click and replay when release-----------------
function myDownFunction() {
  audio.pause();
}

function myUpFunction() {
  audio.play();
}

//-----------------------IF MUSIC IS FINISHED, GO TO THE NEXT ONE----------------------------------------
audio.onended = function() {
    musicListIndex=musicListIndex+1
    audio.src=musicList[musicListIndex].preview
    audio.play()
    document.getElementById("artistName").innerHTML=musicList[musicListIndex].artist.name; 
    document.getElementById("musicTitle").innerHTML=musicList[musicListIndex].title;
}

//-----------------------------------------SEARCHBAR-------------------------------------------------
function mySearchFunction() {
  let input = document.getElementById('searchBar').value
  input = input.toLowerCase()
  let searchM = document.getElementsByClassName('searchM')
  let find = false;
  for (i=0; i < searchM.length; i++) {
    if (!searchM[i].innerHTML.toLowerCase().includes(input)) {
      searchM[i].style.display="none"
    } else {
      searchM[i].style.display="initial"
      find = true;
    }
  }
  if (find==false) {
    document.getElementById('falseResult').innerHTML="Aucun Résultat"
  } else {
    document.getElementById('falseResult').innerHTML=""
  }
}

//------------------------------------CARD HOVER--------------------------------------------------------
function myOverFunction(index){
  document.getElementsByClassName('hoverDiv')[index].style="background-color:lightblue";
}
function myOutFunction(index){
  document.getElementsByClassName('hoverDiv')[index].style="background-color:initial";
}

//-----------------------------------------------------CARD-----------------------------------------------
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=coone')
.then(function(response) {
  return response.json();
})
.then(function(json) {

musicList=json.data;
// ARTIST NAME AND MUSIC NAME BY DEFAULT
document.getElementById("artistName").innerHTML=musicList[0].artist.name;
document.getElementById("musicTitle").innerHTML=musicList[0].title; 
audio.src=musicList[0].preview;

let i=0;
for (i=0; i < json.data.length; i++) {
    let div1=document.createElement('div');
    let div2=document.createElement('div');
    let img=document.createElement('img');
    let div3=document.createElement('div');
    let h5=document.createElement('h5');
    let p=document.createElement('p');

    let title=document.createTextNode(json.data[i].title);
    let artist=document.createTextNode(json.data[i].artist.name);

    h5.appendChild(title);
    p.appendChild(artist);

    div1.setAttribute("class","col-lg-3 col-md-4 col-sm-6 col-sm-12 searchM");
    div1.setAttribute("style","cursor:pointer");
    div1.setAttribute("onmouseover","myOverFunction("+i+")");
    div1.setAttribute("onmouseout","myOutFunction("+i+")");
    div1.setAttribute("onclick","music("+i+")");

    div2.setAttribute("class","card p-0 text-center");

    img.setAttribute("src",json.data[i].artist.picture_medium);
    img.setAttribute("class","card-img-top");

    div3.setAttribute("class","card-body hoverDiv");

    h5.setAttribute("class","card-title");
    p.setAttribute("class","card-text");

    div1.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(div3);
    div3.appendChild(h5);
    div3.appendChild(p);

    document.getElementById('cardDiv').appendChild(div1);
}

});

function music(indexM) {
  musicListIndex=indexM
  audio.src=musicList[indexM].preview
  audio.play();
  document.getElementById("artistName").innerHTML=musicList[indexM].artist.name; 
  document.getElementById("musicTitle").innerHTML=musicList[indexM].title;
  document.getElementById("btnPlay").style="background-image:url(Ressources_Mediaplayer/img/pause.png); background-repeat:no-repeat; width:60px; background-position:center";
}
