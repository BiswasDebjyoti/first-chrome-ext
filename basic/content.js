console.log("Extension activate");

let paragraphs = document.getElementsByTagName('p');

for(ele of paragraphs){
	ele.innerHTML = "Something";

}
