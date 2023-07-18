// let contents = document.querySelectorAll(".content");
// let arr = [];
fetch("data.json")
.then((result) => {
    let myData = result.json();
    return myData;
}).then(e=>{
    addEvent(e);
})
function addEvent(data) {
    let options = document.querySelectorAll(".name .down ul li");
    options.forEach((e)=>{
        e.addEventListener("click",()=>{
            options.forEach((k)=>{
                k.classList.remove("active")
            })
            e.classList.add("active")
            data.forEach((j,i)=>{
                let places = document.querySelectorAll(".hrs");
                places[i].innerHTML = j.timeframes[`${e.textContent.toLowerCase()}`].current + "hrs";
                let previous = document.querySelectorAll(".hrs + p");
                if (e.textContent == "Daily") {
                    previous[i].innerHTML = "Last day - " + j.timeframes[`${e.textContent.toLowerCase()}`].previous + "hrs";
                } else if (e.textContent == "Weekly") {
                    previous[i].innerHTML = "Last week - " + j.timeframes[`${e.textContent.toLowerCase()}`].previous + "hrs";
                }else{
                    previous[i].innerHTML = "Last month - " + j.timeframes[`${e.textContent.toLowerCase()}`].previous + "hrs";
                }
            })
        })
    })
}