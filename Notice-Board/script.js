let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notices');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
let notes=JSON.parse(localStorage.getItem("notices"));
let quesubmit = document.getElementById("#quebtn");
let quetext = document.getElementById("formtext");
console.log(quesubmit);

if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
    title.value = "";
    desc.value = "";

})

quesubmit.addEventListener("click", ()=>{
    quetext.value ="";
})

function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=desc.value;
    if(obj){
        titleval=obj.title;
        descVal=obj.desc;
    }
    if(titleval){
        card.innerHTML=`<h3>${titleval}</h3>
                                    <p class="ptag">${descVal}</p>
                             <button class="del">Delete</button>`;
        notesElem.appendChild(card);
        updateLs();
    }


    let del = card.querySelector(".del");
    del.addEventListener('click', ()=>{
        card.remove();
        updateLs();
    })
}


function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    });
    localStorage.setItem("notices", JSON.stringify(arr));
}