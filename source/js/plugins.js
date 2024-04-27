// Basic functions
$('.tab-select-list-discussion').on('click',function(e){
	e.preventDefault();
	$(this).toggleClass('panel-active').closest('.workspace-tabs').toggleClass('show-discussion').closest('html').toggleClass('stop-scroll');
});

$('.actn-close-discussion').on('click',function(e){
	e.preventDefault();
	$(this).closest('.workspace-tabs').removeClass('show-discussion').closest('html').removeClass('stop-scroll');
});

// Page Loaded class
function loadedPage() {
	//console.info("DOM loaded, guv");
	$('html').addClass('page-loaded');
}
if (document.readyState === "loading") { // Loading hasn't finished yet
	document.addEventListener("DOMContentLoaded", loadedPage);
} else { // `DOMContentLoaded` has already fired
	loadedPage();
}



