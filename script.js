const container=document.getElementById("issuesContainer")
const spinner=document.getElementById("spinner")


async function loadIssues(type="all", btn){

const buttons=document.querySelectorAll(".tab-btn")

buttons.forEach(b=>{
b.classList.remove("active")
})

if(btn){
btn.classList.add("active")
}

spinner.classList.remove("hidden")

let url="https://phi-lab-server.vercel.app/api/v1/lab/issues"

const res=await fetch(url)
const data=await res.json()

spinner.classList.add("hidden")

let issues=data.data

if(type==="open"){
issues=issues.filter(issue=>issue.status==="open")
}

if(type==="closed"){
issues=issues.filter(issue=>issue.status==="closed")
}

displayIssues(issues)

}

function displayIssues(issues){

container.innerHTML=""

issues.forEach(issue=>{

const div=document.createElement("div")

div.className=`card ${issue.status}`

div.innerHTML=`

<h3>${issue.title}</h3>
<p>${issue.description}</p>

<p>Status: ${issue.status}</p>
<p>Author: ${issue.author}</p>
<p>Priority: ${issue.priority}</p>
<p>Label: ${issue.label}</p>

`

div.onclick=()=>showModal(issue)

container.appendChild(div)

})

}


function showModal(issue){

document.getElementById("modal").classList.remove("hidden")

document.getElementById("modalTitle").innerText=issue.title
document.getElementById("modalDesc").innerText=issue.description
document.getElementById("modalAuthor").innerText="Author: "+issue.author
document.getElementById("modalStatus").innerText="Status: "+issue.status
document.getElementById("modalPriority").innerText="Priority: "+issue.priority

}

function closeModal(){
document.getElementById("modal").classList.add("hidden")
}


async function searchIssue(){

const text=document.getElementById("searchInput").value

const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`

const res=await fetch(url)
const data=await res.json()

displayIssues(data.data)

}


loadIssues()