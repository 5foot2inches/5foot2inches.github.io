// Select the element to observe
const target = document.querySelector('.knowbetter');

// Create an intersection observer
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // If the element is in view, add the animation class
        if(entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); // Adjust the threshold value as needed

// Start observing the target element
observer.observe(target);