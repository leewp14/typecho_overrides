
function disableAvatarRotationService(){
	disableAvatarRotationService_main();
}

function disableAvatarRotationService_main(){
	var avatar = document.getElementById('about-avatar') ?? null;
	if(avatar){
		avatar.getElementsByTagName('img')[0].classList.remove('rotate');
	}
}
