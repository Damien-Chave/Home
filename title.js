window.onload = function() {
	var headTitle = document.getElementsByTagName("title")[0];
	var header = document.getElementsByTagName("header")[0];
	var h1 = header.getElementsByTagName("h1")[0];
	var para = header.getElementsByTagName("p")[0];
	var github = header.getElementsByTagName("ul")[0];
	
	console.log(github);
	headTitle.innerHTML = "Damien Chave Coding Pages";
  	h1.innerHTML = "Welcome to Damien Chave Coding Pages";
	//delete para;
	delete github;
};
