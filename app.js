
catogories(ctg="in", newsType = "country", ctgName="india", )

// let source = "technology"
function catogories(ctg, newsType, ctgName){
    let source = ctg;
    let sourceType = newsType;
    let newsName = ctgName;
    let apiKey = "<YOUR API KEY>";  // From "NEWS API" WEBSITE link: https://newsapi.org

// Grab the news container
let newsContainer = document.getElementById('newsContainer');

let newsfrom = document.getElementById('newsfrom');
newsfrom.innerText = newsName;

let dateContent = document.getElementById('dateContent');
var today = new Date();
var date ='Date : '+ today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
dateContent.innerText = date

// Create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?${sourceType}=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function (e) {
    e.preventDefault()
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";
        articles.forEach(function (element, index) {

            let news = `<div class="card m-2 " style="width: 18rem;">
                            <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title ">${element["title"]}</h5>
                                <p class="card-text text-secondary">${element["description"]}</p>
                                <a href="${element["url"]}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>`;
            newsHtml += news;

        });

        newsContainer.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

}



