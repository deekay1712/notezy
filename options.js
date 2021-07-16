for(var i=1; i<=parseInt(localStorage.getItem("ind")); i++){
    let data = localStorage.getItem(i);
    // const p = document.createElement('p')
    // p.innerText = data;
    // const root = document.getElementById("root");
    // root.appendChild(p);
    document.getElementById("para").innerHTML=document.getElementById("para").innerHTML+ data + "\n\n";

}
if(document.getElementById("root") != null){
    var text = document.getElementById("para").innerHTML;
}
function download(text, filename) {
    var blob = new Blob([text], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}
const btn1 = document.getElementById("d")
btn1.addEventListener("click", function () {
    download(text, "notezy.doc")
}) 

const btn2 = document.getElementById("e")
btn2.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("textArea").value=text;
}) 

const overlayOffBtn = document.getElementById("close")
overlayOffBtn.addEventListener("click", function(){
    document.getElementById("overlay").style.display = "none";
})

const saveBtn = document.getElementById("save")
saveBtn.addEventListener("click", function(){
    
    localStorage.clear();
    localStorage.setItem("ind", "1");
    localStorage.setItem("1", document.getElementById("textArea").value.trim());
    location.reload();
})