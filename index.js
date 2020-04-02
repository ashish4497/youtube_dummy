let ham = document.querySelector(".ham");
var videoList = document.querySelector(".child-container");
var trendVideo = document.querySelector(".trend-video");
var category3 = document.querySelector(".category-3");
var next = document.querySelector(".next");
var search = document.querySelector(".search");

let data = [{
  "category1": [
    {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video1",
      "views": 10097.168,
      "relase_time": "2019-06-11 23:45"
    },
    {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video2",
      "views": 10097.168,
      "relase_time": "2019-06-11 23:45"
    },
    {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video1",
      "views": 10097.168,
      "relase_time": "2019-06-11 23:45"
    },
    {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video5",
      "views": 10097.168,
      "relase_time": "2019-06-11 23:45"
    }],
  "category2": [
    {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video1",
      "views": 10058.586,
      "relase_time": "2019-06-11 23:45"
    }],
  "category3": [
    {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video1",
      "views": 10058.586,
      "relase_time": "2019-06-11 23:45"
    },
    {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video1",
      "views": 10058.586,
      "relase_time": "2019-06-11 23:45"
    }, {
      "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
      "name": "video1",
      "views": 10058.586,
      "relase_time": "2019-06-11 23:45"
    }]
}]
//Hambarger menu function
function sideBar() {
  let x = document.querySelector("#mySidenav");
  let y = document.querySelector(".my-side-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}




//Create UI
function creatUi(data = []) {
  console.log(data, "list of data")
  data.forEach(val => {
    let cat1 = val.category1;
    console.log(cat1, "list of data category1")
    cat1.forEach(video => {
      var div = document.createElement('div');
      let image = document.createElement("img");
      let name = document.createElement("p");
      let time = document.createElement("time");
      let view = document.createElement("span");
      name.setAttribute("class", "name");
      time.setAttribute("class", "time");
      view.setAttribute("class", "view");
      image.setAttribute("src", `${video.thumbnail}`);
      name.textContent = `${video.name}`;
      time.textContent = `${video.relase_time}`;
      view.textContent = `views ${video.views} `;
      div.append(image, name, time, view);
      videoList.append(div);
    })
    // let cat2 = val.category2;
    // cat2.forEach(video => {
    //   var div = document.createElement('div');
    //   let image = document.createElement("img");
    //   let name = document.createElement("p");
    //   let time = document.createElement("time");
    //   let view = document.createElement("span");
    //   name.setAttribute("class", "name");
    //   time.setAttribute("class", "time");
    //   view.setAttribute("class", "view");
    //   image.setAttribute("src", `${video.thumbnail}`);
    //   name.textContent = `${video.name}`;
    //   time.textContent = `${video.relase_time}`;
    //   view.textContent = `views ${video.views} `;
    //   div.append(image, name, time, view);
    //   trendVideo.append(div);
    // })

    // let cat3 = val.category3;
    // cat3.forEach(video => {
    //   var div = document.createElement('div');
    //   let image = document.createElement("img");
    //   let name = document.createElement("p");
    //   let time = document.createElement("time");
    //   let view = document.createElement("span");
    //   name.setAttribute("class", "name");
    //   time.setAttribute("class", "time");
    //   view.setAttribute("class", "view");
    //   image.setAttribute("src", `${video.thumbnail}`);
    //   name.textContent = `${video.name}`;
    //   time.textContent = `${video.relase_time}`;
    //   view.textContent = `views ${video.views} `;
    //   div.append(image, name, time, view);
    //   category3.append(div);
    // })
    // nextData(cat1);
  })
}

//function to show next items
// function nextData(cat1) {
//   console.log(cat1, "datalist")
//   var index = 0;
//   var item = cat1[index]
//   console.log(item, "show the id of items")
//   // creatUi(data[++index]);
//   creatUi(nextData)
// }

//search function 
function searchBooks(e) {

  let val = search.value.toLowerCase();
  console.log(val, "check the ")
  var searchBook = data.filter((video = []) => {

    var videoArray = video.category1;
    console.log(videoArray, "list of array")
    videoArray.forEach((val) => {
      console.log(val.name, "show the val")
      return val.name.toLowerCase().includes(val);
    })
    // creatUi(data);
    // creatUi(videoArray)
  })
  creatUi(searchBook)
}
ham.addEventListener("click", sideBar);
// next.addEventListener("click", nextData);
search.addEventListener("keyup", searchBooks);
creatUi(data);