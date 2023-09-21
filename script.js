const colorChanging=()=>{
    setInterval(function(){
        setTimeout(function(){
            document.getElementById("point-A").style.backgroundColor='green';
        document.getElementById("point-B").style.backgroundColor='blue';
        document.getElementById("point-C").style.backgroundColor='red';
        document.getElementById("point-D").style.backgroundColor='yellow';
        },500)
        setTimeout(function(){
            document.getElementById("point-A").style.backgroundColor='blue';
        document.getElementById("point-B").style.backgroundColor='yellow';
        document.getElementById("point-C").style.backgroundColor='green';
        document.getElementById("point-D").style.backgroundColor='red';
        },1000)
        setTimeout(function(){
            document.getElementById("point-A").style.backgroundColor='yellow';
        document.getElementById("point-B").style.backgroundColor='red';
        document.getElementById("point-C").style.backgroundColor='blue';
        document.getElementById("point-D").style.backgroundColor='green';
        },1500)
        setTimeout(function(){
            document.getElementById("point-A").style.backgroundColor='red';
        document.getElementById("point-B").style.backgroundColor='green';
        document.getElementById("point-C").style.backgroundColor='yellow';
        document.getElementById("point-D").style.backgroundColor='blue';
        },2500)
    },3500)
}
colorChanging();
const dotting= setInterval(function(){
    setTimeout(function(){
        document.getElementById("dot").innerHTML="."
    },1000);
    setTimeout(function(){
        document.getElementById("dot").innerHTML=".."
    },2000);
    setTimeout(function(){
        document.getElementById("dot").innerHTML="..."
    },3000)
},3000)

// Code that already made
{/* <div class="note-1">
                    <div class="top-header">
                        <i class="fa-solid fa-floppy-disk"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <textarea></textarea>
 </div>  */}

// Main Js
const addbtn= document.querySelector("#addbtn");
const main=document.querySelector("#main");

const saveNote= () => {
    const notes= document.querySelectorAll(".note-1 textarea");
    const data=[];
    notes.forEach((notee)=>{
            data.push(notee.value)
        }
    )
    // console.log(data)
    localStorage.setItem("notes",JSON.stringify(data))    
}


addbtn.addEventListener(
    "click",
    function(){
        addNote();
    }
)
    

const addNote =(text = "") => {
    // Creating Note 
    const note=document.createElement("div");
    note.classList.add("note-1")
    note.innerHTML=`
    <div class="top-header">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
    </div>
     <textarea>${text}</textarea>        
    `;

        //  Deleting note 
        note.querySelector(".trash").addEventListener(
            "click",
            function(){
                note.remove();
                saveNote();
            }
        )

        // Saving function 
        note.querySelector(".save").addEventListener(
            "click",
            function(){
                saveNote();
            }
        )
        main.appendChild(note);
        // saveNote();
    }


    (
        function(){
            const localStorageNotes=JSON.parse(localStorage.getItem('notes'))
            if(localStorageNotes.length === 0 || localStorageNotes.length=== null){
                addNote()
            }
            else{
                // console.log(localStorageNotes)
                        localStorageNotes.forEach((localStorageNotes)=>{
                            addNote(localStorageNotes);
                    }
                        )
                }
                }
    )()
    