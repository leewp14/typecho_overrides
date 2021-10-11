
function uptimeService(){
	document.addEventListener('DOMContentLoaded', uptimeService_main);
	//uptimeService_main();
}

function uptimeService_main(){

	// author: LOGI
	// source: https://logi.im/blog/simple-way-to-add-live-time-for-a-website.html

	const birthTime = '2021/7/7 12:14:00';
	const template = (A, B, C, D) => `本站已勉强生存 ${A}天 ${B}时 ${C}分 ${D}秒, 准备随时翻车`;
	
	/* 锚点开始 */
	const container = footer.querySelector('.container');
	const p = document.createElement('p');
	container.insertBefore(p, container.firstElementChild);
	/* 锚点结束*/
	
	const msoad = 24 * 60 * 60 * 1000;
	const warp = n => n > 9 ? n : '0' + n;
	const toInt = n => warp(Math.floor(n));
	setInterval(() => {
		const lived = new Date() - new Date(birthTime);
		const days = lived / msoad;
		const intDays = toInt(days);
		const hours = (days - intDays) * 24;
		const intHours = toInt(hours);
		const minutes = (hours - intHours) * 60;
		const intMinutes = toInt(minutes);
		const seconds = (minutes - intMinutes) * 60;
		const intSeconds = toInt(seconds);
		p.innerHTML = template(intDays, intHours, intMinutes, intSeconds);
	}, 1000);
}
