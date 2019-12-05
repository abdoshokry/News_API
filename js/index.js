var links = document.getElementsByClassName("nav-link");
var cityGet = document.getElementsByClassName("city");

var news;
var category = "general";
var cont = "us";
getNews();

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
        category = e.target.innerHTML;
        getNews();

    })
}
for (var i = 0; i < cityGet.length; i++) {
    cityGet[i].addEventListener("click", function(e) {
        if (e.target.innerHTML == "United State") {
            cont = "us";
            getNews();
        }
        if (e.target.innerHTML == "Egypt") {
            cont = "eg";
            getNews();
        }
        if (e.target.innerHTML == "Canada") {
            cont = "ca";
            getNews();
        }
        if (e.target.innerHTML == "Italy") {
            cont = "it";
            getNews();
        }
        if (e.target.innerHTML == "Germany") {
            cont = "de";
            getNews();
        }



    })
}


function getNews() {

    var url = `https://newsapi.org/v2/top-headlines?country=` + cont + `&category=` + category + `&apiKey=bc236de4b6b54aab9a4141b49e192172`;
    var req; // IE5 , IE6 

    if (window.XMLHttpRequest) // modern browsers 
    {
        req = new XMLHttpRequest();
    } else // IE5 ,IE6
    {
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }

    req.open("GET", url);
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            news = JSON.parse(req.response);
            news = news.articles;
            disPlayNews();


        }

    }
    req.send();
}

function disPlayNews() {


    var temp = "";
    for (var i = 0; i < news.length; i++) {
        temp += ` <div class="col-md-4">
        <div>
   <img src="` + news[i].urlToImage + `" class="img-fluid">

   <h4>` + news[i].title + `</h4>
   <p class="text-muted">` + news[i].description + `  <a style="color: #fff" target=_blank href="` + news[i].url + `" ><button class="btn btn-secondary"> more  </button></a> </p>
  

   
   </div>
 </div>`
    }
    document.getElementById("demo").innerHTML = temp;
}