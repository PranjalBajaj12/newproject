AFRAME.registerComponent('markerhandler', {
    init: function() {
        const animatedMarker = document.querySelector("#marker1");
        const aEntity = document.querySelector("#timer");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                var scale = 'hello';
                aEntity.setAttribute('value', scale);
            }
        });
}});
