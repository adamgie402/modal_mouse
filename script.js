window.onload = function(){
    console.log("onload...");
    this.addEventListener('mousemove', mouseMonitor);

}

function mouseMonitor(e) {
    console.log("f mousemonitor...");
    // console.log(e);

    const screenWidth = window.innerWidth;
    const xMouse = e.clientX;
    const yMouse = e.clientY;

    console.log(xMouse, yMouse);

    let modal = document.getElementById('modal');

    if ( e.clientY < 150 && e.clientX > (screenWidth - 150)) { showModal(); }
}

function hideModal() {
    modal.classList.add('hidden');
}

function showModal() {
    modal.classList.remove('hidden');
    
    // to show modal only once - uncomment line below
    // removeEventListener('mousemove', mouseMonitor);
}