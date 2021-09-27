function curTime()
{
    let date=new Date();
    document.getElementById("date").innerHTML="Current Date and Time: "+date.getDate()+"/"+Number(date.getMonth()+1)+"/"+date.getFullYear();
    document.getElementById("time").innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

setInterval(curTime,1000);

const navbar=document.querySelector(".my-nav");
const tabs=document.querySelectorAll(".tab");
const contents=document.querySelectorAll(".container");
navbar.onclick=function(ev){
    const id=ev.target.id;
    if(id)
    {
        /*change tab active color*/
        tabs.forEach(btn=>{
            btn.classList.remove("active");
        });
        ev.target.classList.add("active");

        /*change content display to block*/
        contents.forEach(ctn => {
            ctn.classList.remove("active");
        });
        let ele=document.getElementById(id+"-cont");
        ele.classList.add("active");
    }
};

function changeEdu(card)
{
    console.log(card.id);
    let eduPhoto=document.getElementById("edu-photo");
    eduPhoto.setAttribute("src","./images/"+card.id+".jpg");
    let cards=document.querySelectorAll(".card");

    cards.forEach(element => {
        element.classList.remove("edu-active");
    });
    card.classList.add("edu-active");

}
function resNav() {
    var x = document.querySelector(".my-nav");
    if (x.className === "my-nav") {
        x.classList.add("nav-res");
    } else {
        x.className = "my-nav";
    }
}