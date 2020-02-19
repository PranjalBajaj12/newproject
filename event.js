AFRAME.registerComponent('markerhandler', {
    init: function() {
        const animatedMarker = document.querySelector("#marker1");
        const aEntity = document.querySelector("#model");
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
		console.log("Clicked");
          	document.location.href = "https://goo.gl/maps/gRsth6SHo5AgwMbT7"

            }
        });
	    
}});
