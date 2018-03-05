// var getuser = function(id,callback){
// 	var user = {
// 		id :id,
// 		name:"Nasar uddin"
// 	};
// 	setTimeout(()=>{
// 		callback(user);
// 	},2000);
	
// }
// getuser(007, function(userData){
// 	console.log(userData);
// });
var navbar = document.querySelector('.navbar-default');
window.onscroll = function(e){
	if(document.body.scrollTop >719 || document.documentElement.scrollTop > 719){
		navbar.style.backgroundColor = "#f8f8f8";
	}else if(document.body.scrollTop<720 ||document.documentElement.scrollTop < 720){
		navbar.style.backgroundColor = "transparent";
	}
}

var side_bar = $('#side_nav')[0];
$('.cross').click(function(e){
    side_bar.style.width = "0px";
});
$('.navbar-brand').click(function(e){
    side_bar.style.width = "100%";
    side_bar.style.height = "100%";
});

