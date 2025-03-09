// Photo album interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    initializePhotoAlbum();
    
    // Random flickering effect for old photos
    addPhotoEffects();
    
    // Add floating message functionality
    initializeFloatingMessages();
    
    // Easter egg hidden photos
    initializeEasterEggs();
});

// Initialize the photo album interactive functionality
function initializePhotoAlbum() {
    const photoItems = document.querySelectorAll('.photo-item');
    const photoModal = document.getElementById('photo-modal');
    const enlargedPhoto = document.getElementById('enlarged-photo');
    const photoStory = document.getElementById('photo-story');
    const modalClose = document.querySelector('.photo-modal .modal-close');
    
    if (!photoItems || !photoModal || !enlargedPhoto || !photoStory || !modalClose) return;
    
    // Add click handler to each photo
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the photo details
            const img = this.querySelector('img');
            const story = this.getAttribute('data-story');
            
            // Set the modal content
            enlargedPhoto.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            photoStory.textContent = story;
            
            // Show the modal with eerie effect
            applyEerieEffect(() => {
                photoModal.style.display = 'flex';
                
                // Play whisper sound
                const photoWhisper = document.getElementById('photo-whisper');
                if (photoWhisper) {
                    photoWhisper.currentTime = 0;
                    photoWhisper.play().catch(error => {
                        console.log('Audio playback prevented: ', error);
                    });
                }
                
                // Reveal the story with a typing effect
                let storyText = story;
                photoStory.textContent = '';
                let charIndex = 0;
                
                const typingInterval = setInterval(() => {
                    if (charIndex < storyText.length) {
                        photoStory.textContent += storyText.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 50);
                
                // Randomly show subliminal images
                if (Math.random() > 0.7) {
                    setTimeout(showSubliminalImage, 2000);
                }
            });
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', function() {
        closePhotoModal();
    });
    
    // Close modal when clicking outside content
    photoModal.addEventListener('click', function(e) {
        if (e.target === photoModal) {
            closePhotoModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && photoModal.style.display === 'flex') {
            closePhotoModal();
        }
    });
}

// Apply eerie effect before showing photo
function applyEerieEffect(callback) {
    // Create overlay for transition effect
    const eerieOverlay = document.createElement('div');
    eerieOverlay.classList.add('eerie-overlay');
    document.body.appendChild(eerieOverlay);
    
    // Animate in
    setTimeout(() => {
        eerieOverlay.classList.add('active');
        
        // Execute callback after effect
        setTimeout(() => {
            if (callback) callback();
            
            // Remove overlay
            eerieOverlay.classList.remove('active');
            setTimeout(() => {
                eerieOverlay.remove();
            }, 500);
        }, 800);
    }, 100);
}

// Close the photo modal with effects
function closePhotoModal() {
    const photoModal = document.getElementById('photo-modal');
    if (!photoModal) return;
    
    // Apply exit effect
    applyEerieEffect(() => {
        photoModal.style.display = 'none';
    });
}

// Add vintage photo effects
function addPhotoEffects() {
    const photos = document.querySelectorAll('.photo-item img');
    
    photos.forEach(photo => {
        // Random sepia/contrast for vintage feel
        const sepiaValue = 50 + Math.floor(Math.random() * 30);
        const contrastValue = 90 + Math.floor(Math.random() * 20);
        const brightnessValue = 90 + Math.floor(Math.random() * 20);
        
        photo.style.filter = `sepia(${sepiaValue}%) contrast(${contrastValue}%) brightness(${brightnessValue}%)`;
        
        // Occasionally flicker photos
        if (Math.random() > 0.7) {
            setInterval(() => {
                if (Math.random() > 0.8) {
                    photo.classList.add('photo-flicker');
                    setTimeout(() => {
                        photo.classList.remove('photo-flicker');
                    }, 200);
                }
            }, 5000);
        }
    });
}

// Initialize floating cryptic messages
function initializeFloatingMessages() {
    const crypticMessages = [
        "SOME MEMORIES SHOULD STAY BURIED",
        "THE CAMERA CAPTURES MORE THAN YOU SEE",
        "THEY'RE STILL WAITING FOR YOU TO RETURN",
        "THESE FACES ARE WATCHING YOU NOW",
        "THE ISLAND REMEMBERS WHAT YOU FORGOT"
    ];
    
    const floatingMsg = document.getElementById('floating-msg');
    if (!floatingMsg) return;
    
    // Update message periodically
    setInterval(() => {
        const randomMessage = crypticMessages[Math.floor(Math.random() * crypticMessages.length)];
        
        // Fade out current message
        floatingMsg.style.opacity = 0;
        
        // Change and fade in new message
        setTimeout(() => {
            floatingMsg.textContent = randomMessage;
            floatingMsg.style.opacity = 1;
        }, 500);
    }, 15000);
}

// Show subliminal image briefly
function showSubliminalImage() {
    const subliminalContainer = document.createElement('div');
    subliminalContainer.classList.add('subliminal-container');
    
    // Choose random easter egg image
    const easterEggImages = [
        'images/easter_eggs/IMG_0379.png',
        'images/easter_eggs/IMG_3215.png',
        'images/easter_eggs/IMG_4923.png',
        'images/easter_eggs/IMG_5747.png'
    ];
    
    const randomImage = easterEggImages[Math.floor(Math.random() * easterEggImages.length)];
    
    // Create subliminal image
    const subliminalImg = document.createElement('img');
    subliminalImg.src = randomImage;
    subliminalImg.classList.add('subliminal-flash');
    
    subliminalContainer.appendChild(subliminalImg);
    document.body.appendChild(subliminalContainer);
    
    // Flash image briefly
    setTimeout(() => {
        subliminalContainer.classList.add('active');
        
        setTimeout(() => {
            subliminalContainer.classList.remove('active');
            
            setTimeout(() => {
                subliminalContainer.remove();
            }, 200);
        }, 200);
    }, 100);
    
    // Play eerie sound
    const realityBreakSound = document.getElementById('reality-break-sound');
    if (realityBreakSound) {
        realityBreakSound.volume = 0.2;
        realityBreakSound.currentTime = 0;
        realityBreakSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
}

// Initialize random easter eggs throughout the page
function initializeEasterEggs() {
    // Add hidden easter egg trigger in random spots
    for (let i = 0; i < 3; i++) {
        const easterEggTrigger = document.createElement('div');
        easterEggTrigger.classList.add('easter-egg-trigger');
        
        // Position randomly on the page
        easterEggTrigger.style.left = (Math.random() * 90 + 5) + '%';
        easterEggTrigger.style.top = (Math.random() * 80 + 10) + '%';
        
        document.body.appendChild(easterEggTrigger);
        
        // Add click event to show hidden content
        easterEggTrigger.addEventListener('click', function() {
            showHiddenEasterEgg(i);
        });
    }
    
    // Occasionally briefly reveal the location of an easter egg
    setInterval(() => {
        if (Math.random() > 0.9) {
            const triggers = document.querySelectorAll('.easter-egg-trigger');
            if (triggers.length > 0) {
                const randomTrigger = triggers[Math.floor(Math.random() * triggers.length)];
                
                randomTrigger.classList.add('reveal');
                setTimeout(() => {
                    randomTrigger.classList.remove('reveal');
                }, 300);
            }
        }
    }, 30000);
}

// Show hidden easter egg content
function showHiddenEasterEgg(index) {
    // Create easter egg modal
    const easterEggModal = document.createElement('div');
    easterEggModal.classList.add('easter-egg-modal');
    
    // Random easter egg content
    const easterEggContent = [
        {
            title: "THE LOST TICKET",
            image: "images/easter_eggs/IMG_7297.png",
            description: "This movie ticket was found in an abandoned house on Corn Neck Road. The movie never played on Block Island, and the theater doesn't exist."
        },
        {
            title: "MIDNIGHT SCREENING",
            image: "images/easter_eggs/IMG_8401.png",
            description: "This poster advertised a special midnight screening at the Empire Theatre in 1978. Those who attended reported strange dreams for weeks afterward."
        },
        {
            title: "THE INVITATION",
            image: "images/easter_eggs/IMG_0379.png",
            description: "This invitation was found washed up on Crescent Beach in 1985. The address leads to an empty plot of land where no building has ever stood."
        }
    ];
    
    const content = easterEggContent[index % easterEggContent.length];
    
    easterEggModal.innerHTML = `
        <div class="easter-egg-content">
            <h3 class="easter-egg-title">${content.title}</h3>
            <img src="${content.image}" alt="Easter Egg" class="easter-egg-image">
            <p class="easter-egg-description">${content.description}</p>
            <div class="easter-egg-close">×</div>
        </div>
    `;
    
    document.body.appendChild(easterEggModal);
    
    // Show with effect
    setTimeout(() => {
        easterEggModal.classList.add('active');
        
        // Play eerie sound
        const realityBreakSound = document.getElementById('reality-break-sound');
        if (realityBreakSound) {
            realityBreakSound.volume = 0.3;
            realityBreakSound.currentTime = 0;
            realityBreakSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
    }, 100);
    
    // Add close handler
    const closeButton = easterEggModal.querySelector('.easter-egg-close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            easterEggModal.classList.remove('active');
            
            setTimeout(() => {
                easterEggModal.remove();
            }, 500);
        });
    }
} 