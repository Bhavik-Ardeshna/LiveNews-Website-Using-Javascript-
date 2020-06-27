console.log("News Live Update");

let apikey = '16836f35a5e846ccaab03b346a9cfc0b';
let accordion = document.getElementById('accordion');

let xhr = new XMLHttpRequest();
xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`,true);
xhr.onload = function () {
  if(this.status === 200){
    let newTxt = JSON.parse(this.response);
    let articles = newTxt.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach((element, index) => {
      let news = `
                  <div class="card">
                    <div class="card-header" id="heading${index}">
                      <h5 class="mb-0">
                      <h4><em> <span class="badge badge-pill badge-warning">Breaking New : ${index+1}</span></em></h3>
                        <button class="btn btn-light" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                             <b>${element.title}</b>
                        </button>
                      </h5>
                    </div>
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
                      <div class="card-body">
                             <h5><span class="badge badge-secondary"><em>By :</em> ${element.author}</span></h5>
                            ${element.description}<br>
                            ${element.content} <a href="${element.url}" target="_blank" ><em><u>Read more here</u><em> </a>
                            <br>
                            <img class="card-img-top" src="${element.urlToImage}">
                      </div>
                    </div>
                  </div>`;
      newsHtml += news;
    });
    accordion.innerHTML = newsHtml;
  }
  else {
       console.log("Some error occured")
   }
};
xhr.send();
