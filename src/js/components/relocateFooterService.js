
function relocateFooterService(){
	relocateFooterService_main();
}

function relocateFooterService_main(){
	let body = document.getElementById('body') ?? null;
	let footer = document.getElementById('footer') ?? null;
	if(body && footer){
		body.appendChild(footer);
	}
}
