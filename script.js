document.addEventListener('DOMContentLoaded', function() {
    const lights = document.querySelectorAll('.light');
    let currentLight = 0;
    
    function changeLight() {
        // Remove active class from all lights
        lights.forEach(light => light.classList.remove('active'));
        
        // Add active class to current light
        lights[currentLight].classList.add('active');
        
        // Move to next light
        currentLight = (currentLight + 1) % lights.length;
        
        // Set different timings for each light
        let delay;
        switch(currentLight) {
            case 0: // Red
                delay = 4000; // 4 seconds
                break;
            case 1: // Yellow
                delay = 2000; // 2 seconds
                break;
            case 2: // Green
                delay = 4000; // 4 seconds
                break;
        }
        
        // Schedule next light change
        setTimeout(changeLight, delay);
    }
    
    // Start the traffic light sequence
    changeLight();
});