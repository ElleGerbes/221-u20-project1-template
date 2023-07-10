document.getElementById('portal_button').addEventListener('click', (event) => {
    goToLocation('http://my.marist.edu');
})

let feedItem1 = {
    Title: 'Summer High School Classes', 
    Body: 'Students from high schools across the state come to learn at Marist.',
    linkUrl: 'https://www.newburghschools.org/',
    imageUrl: '/images/hancock.jpeg'
}

let feedItem2 = {
    Title: 'Incoming News From The Marist Circle', 
    Body: 'Keep up to date with current news from around campus.',
    linkUrl: 'https://www.maristcircle.com/',
    imageUrl: '/images/news_pic.jpg'
}

let feedItem3 = {
    Title: 'Dining Hall Improved', 
    Body: 'New food in the Marist Dining Hall. Something for everyone!',
    linkUrl: 'https://www.marist.edu/',
    imageUrl: '/images/fox.jpeg'
}

var currentStories = [feedItem1, feedItem2, feedItem3]

window.addEventListener("load", () => {
    for(var i=0; i < currentStories.length; i++){
        displayFeed(currentStories[i]);
    }});

function displayFeed(currentStories){
    let feed =  document.getElementById('newsfeed');
    feed.innerHTML += "<span><img class='myImage' src ='"+ currentStories.imageUrl +"'>" +"</span>";
    feed.innerHTML += "<span><h2><a href='" + currentStories.linkUrl + "'> " + currentStories.Title + "</a></h2></span>";
    feed.innerHTML += "<p>" + currentStories.Body + "</p>";
    feed.innerHTML += "<hr />"
}



