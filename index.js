let ham = document.querySelector(".ham");
var videoList = document.querySelector(".child-container");
var trendVideo = document.querySelector(".trend-video");
var category3 = document.querySelector(".category-3");


let data = [{
    "category1": [{
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
            "name": "video1",
            "views": 10097.168,
            "relase_time": "2019-06-11 23:45"
        },
        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video2",
            "name": "video2",
            "views": 10020.562,
            "relase_time": "2019-06-11 23:45"
        },
        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video3",
            "name": "video3",
            "views": 10080.398,
            "relase_time": "2019-06-11 23:45"
        },
        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video4",
            "name": "video4",
            "views": 10051.258,
            "relase_time": "2019-06-11 23:45"
        }
    ],
    "category2": [{
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
            "name": "video1",
            "views": 10058.586,
            "relase_time": "2019-06-11 23:45"
        },

        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video2",
            "name": "video2",
            "views": 10026.541,
            "relase_time": "2019-06-11 23:45"
        },
        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video3",
            "name": "video3",
            "views": 10007.681,
            "relase_time": "2019-06-11 23:45"
        },
    ],
    "category3": [{
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video1",
            "name": "video1",
            "views": 10023.794,
            "relase_time": "2019-06-11 23:45"
        },
        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video2",
            "name": "video2",
            "views": 10047.552,
            "relase_time": "2019-06-11 23:45"
        },
        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video3",
            "name": "video3",
            "views": 10024.21,
            "relase_time": "2019-06-11 23:45"
        },
        {
            "thumbnail": "https://dummyimage.com/210x120/000/fff&text=video4",
            "name": "video4",
            "views": 10028.457,
            "relase_time": "2019-06-11 23:45"
        }
    ]
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
        let cat2 = val.category2;
        cat2.forEach(video => {
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
            trendVideo.append(div);
        })

        let cat3 = val.category3;
        cat3.forEach(video => {
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
            category3.append(div);
        })
    })
}

creatUi(data);


ham.addEventListener("click", sideBar);