var searchInput = document.getElementById("concert-search")
var conBtn = document.getElementById("concert")
var concertDisplay = document.getElementById("concertDisplay")
// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];
// var btnA = document.querySelector("#OpenA")
// var btnJ = document.querySelector("#OpenJ")
// var btnL = document.querySelector("#OpenL")
// var btnS = document.querySelector("#OpenS")
// var discoBtn = document.querySelector("#disco")
// var discoInput = document.querySelector("#disco-search")
// var issueContainer = document.querySelector("#issues")
//key for discography search
// conBtn.onclick = function() {
//     modal.style.display = "block";
//   }
  
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
  
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20d275890emsh80f93ddd6fe099dp1f29ebjsn35ed4dc50b17',
		'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

function apiSearch(searchTerm) {

fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist?name=${searchTerm}&page=1`, options)

	.then(function(response){
        if(!response.ok){
            console.log("error")
        }else{
            return response.json()
        }
    })

    .then(function(data){
        printData(data)
        console.log(data)
    })
    .catch(function(er){
        console.log(er)
    });
}

function printData(data) {
    
    for (let i = 0; i < data.data.length; i++) {
        const concert = data.data[i];

        // create list item
        // create div
        // create an h3-store the name
        // create 4 unique p tags that store specific data
        // append all five to the div 
        // append the div to the list item
        var listItem = document.createElement("li")
        var concertCard = document.createElement("div")
        listItem.append(concertCard)
        var concertTitle = document.createElement("h3")
        concertTitle.textContent = concert.description
        var start = document.createElement("p")
        // var formatStart = concert.startDate
        // formatStart = 
        start.textContent = concert.startDate
        var end = document.createElement("p")
        end.textContent = concert.endDate
        var loc = document.createElement("p")
        loc.textContent = concert.location.name
        var perf = document.createElement("p")
        perf.textContent = concert.performer[0].name
        concertCard.append(concertTitle, start, end, loc, perf)
        concertDisplay.append(listItem);
    }
}
conBtn.addEventListener("click", param) 
function param(event) {
    event.preventDefault()
    var searchTerm = searchInput.value

    apiSearch(searchTerm)
}
 



// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '60e1f1e588mshbfdd753b6261471p19ccc5jsna4b5c34f4030',
//         'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
//     }
// };
//add key for concert search

//Listener events for genre selection/button selection:

//listener event needs to include modal pop up
    //song provided (other steps may need to be added depending on how user is accessing the music)
    //stop and next
    //changing file
//option to like song (Listener event click box)
//if I like a song (could be if/ else if statements)
//liking song will store info to local storage (set.Item)
//generate liked artist onto browser (?get.Item which will also store in browser for later)

//js for discography search by artist
//Type input into search/input window for upcoming concerts
//"enter or search" button to populate list (Listener event)
//needs to fetch API data  
// discoBtn.addEventListener("click", apiSearch)
// function apiSearch() {
//     var searchTerm = discoInput.value
    //needs to exist within function 
    // fetch(`https://theaudiodb.p.rapidapi.com/discography.php?s=${searchTerm}`, options)
    //     .then(function (response) {
            //edge case meeds work
            // if (!searchTerm.ok) {
            // console.log ("invalid entry or information not available")
//could add with var element- example--responseText.textContent = response.status
            // return response.json()
            //console.log(response.status)(to check for error codes)
    //    }
    //     })
    //     .then(function (data) {
    //         console.log(data)
            //printData(data)
        //    for (let i = 0; i < data.album.length; i++) {
            //1. create element
            //for each item create an element (like h2)
            //var albumTitle = document.createElement ("a");
            // var albumTitle = document.createElement ("h2")
            // var releaseYear = document.createElement ("h3")
            //2. style/content
            // albumTitle.textContent = data.album[i].strAlbum;
            // releaseYear.textContent = data.album[i].releaseYear;
            //albumTitle.setAttribute("href",data.album[i].strAlbum)
            //albumTitle.setAttribute("target","_blank")
                //then set the text content for the newly created element for the current item in the array
                // console.log(data.album[i].strAlbum)
                // console.log(data.album[i].intYearReleased)
                //append that newly created element to the div
                // issueContainer.append(albumTitle)
                // issueContainer.append(releaseYear)
        //    }
        // })
    //    .catch(function (er) {
    //       console.log(er)
    //     });
    // }
//function printData()

//data needs to render to page  (another modal)
//need a way to close out of list of concerts

//TO DO: intial modal with song and (?)thumb art needs a click box
//TO DO: another modal to present discography
//TO DO: input text window for concert search
//TO DO: button to accompany the  input window




//// Jovi's Media Player Work ////
///Player A///
// let now_playingA = document.querySelector(".now-playingA");
// let track_artA = document.querySelector(".track-artA"); ///add to HTML!!
// let track_nameA = document.querySelector(".tracknameA");
// let track_artistA = document.querySelector(".trackartistA");

// let playpause_btnA = document.querySelector(".playpause-trackA");
// let next_btnA = document.querySelector(".next-trackA");
// let prev_btnA = document.querySelector(".prev-trackA");

// let seek_sliderA = document.querySelector(".seek_sliderA");
// let volume_sliderA = document.querySelector(".volume_slider");
// let curr_timeA = document.querySelector(".current-timeA");
// let total_durationA = document.querySelector(".total-durationA");

// //global values
// let track_index = 0;
// let isPlaying = false;
// let updateTimer;

// audio element
// let curr = document.createElement('audio');

//define tracks to be played
// Asiya's playlist
// let track_listA = {
//     name: "Torn",
//     artist: "Natalie Imbruglia",
//     image: "placeholder",
// }


