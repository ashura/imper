define('loader', ['../web.fs.mobile/src/webfs'], function (wfs) {
	
	if (!bowser.webkit) {
		var body = document.body;
		body.style.backgroundColor = 'black';
		body.style.overflow = 'hidden';
		var mask = document.getElementById('mask');
		mask.className = '';
		mask.style.height =  document.documentElement.clientHeight + 'px';
	} else {
		$('#appContainer').removeClass('dp-none');
	    
	    // $(window).on('resize', function () {
	    // 	$('#appContainer').height(document.height);
	    // })
	    Core.startAll();
	    setTimeout(function () {
	    	window.altbox.start();
	    }, 10);
	    // $('#appContainer').height(document.height);
	}
});