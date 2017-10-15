console.log("here https://pics.me.me/fight-me-u-lil-bitch-14045684.png");

var toggled = true;

$("img").on("click", function(){


if (toggled) {
	$(this).attr("src","https://pics.me.me/fight-me-u-lil-bitch-14045684.png");
	toggled = false;
} else {
	$(this).attr("src","http://janessajaye.com/wp-content/uploads/2017/05/Unicorn-13.png");
	toggled = true;	
}

});