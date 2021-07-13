
function disableAvatarRotation(){
	var avatar = document.getElementById('about-avatar')??null;
	if(avatar){
		avatar.getElementsByTagName('img')[0].classList.remove('rotate');
	}
}


disableAvatarRotation();
