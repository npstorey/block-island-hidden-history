// TV Room JS - Interactive functionality for the Raw Dog Archives

document.addEventListener('DOMContentLoaded', function() {
    // Initialize TV room effects
    initializeTVRoom();
    
    // Set up TV interaction
    setupTVInteraction();
    
    // Handle navigation
    setupNavigation();
    
    // Play ambient sound on user interaction
    document.body.addEventListener('click', function() {
        const ambientSound = document.getElementById('ambient-sound');
        if (ambientSound && ambientSound.paused) {
            ambientSound.volume = 0.2;
            ambientSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
    }, { once: true });
    
    // Initialize the historical figure easter egg
    initializeHistoricalFigure();
    
    // Random TV static
    setInterval(randomTVStatic, 15000);
    
    // Random ghost appearance
    setInterval(showRandomGhost, 30000);
    
    // Random signal interference
    setInterval(signalInterference, 25000);
    
    // Initialize TV sets with interactive functionality
    initializeTVSets();
    initializeMoviePosterEasterEgg();
});

// Initialize TV room effects
function initializeTVRoom() {
    const dreamSequence = document.getElementById('dream-sequence');
    if (!dreamSequence) return;
    
    const dreamFrames = dreamSequence.querySelectorAll('.dream-frame');
    
    // Set random Block Island historical images
    const historicalImages = [
        'palatine-light.jpg', 
        'block-island-1920.jpg', 
        'mohegan-bluffs.jpg', 
        'southeast-lighthouse.jpg', 
        'beach-old.jpg', 
        'bootleggers-map.jpg'
    ];
    
    dreamFrames.forEach(frame => {
        const randomImage = historicalImages[Math.floor(Math.random() * historicalImages.length)];
        frame.style.backgroundImage = `url(images/${randomImage})`;
        
        // Add random animation delays
        frame.style.animationDelay = (Math.random() * 5) + 's';
    });
    
    // Occasionally flash historical images
    setInterval(() => {
        const randomFrame = dreamFrames[Math.floor(Math.random() * dreamFrames.length)];
        randomFrame.classList.add('dream-flash');
        
        setTimeout(() => {
            randomFrame.classList.remove('dream-flash');
        }, 500);
    }, 12000);
}

// Set up TV interaction
function setupTVInteraction() {
    const tvSets = document.querySelectorAll('.tv-set');
    
    tvSets.forEach(tv => {
        tv.addEventListener('click', function() {
            // Play TV static sound
            const staticSound = document.getElementById('tv-static');
            if (staticSound) {
                staticSound.currentTime = 0;
                staticSound.volume = 0.3;
                staticSound.play().catch(error => {
                    console.log('Audio playback prevented: ', error);
                });
            }
            
            // Add temporary static effect
            this.querySelector('.tv-static').style.opacity = '0.4';
            
            setTimeout(() => {
                this.querySelector('.tv-static').style.opacity = '0.03';
            }, 1000);
            
            // Show hidden message
            const hiddenMessage = this.querySelector('.hidden-message');
            if (hiddenMessage) {
                hiddenMessage.style.opacity = '1';
                
                setTimeout(() => {
                    hiddenMessage.style.opacity = '0';
                }, 3000);
            }
            
            // Control knob rotation
            const knobs = this.querySelectorAll('.tv-knob');
            knobs.forEach(knob => {
                knob.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                setTimeout(() => {
                    knob.style.transform = '';
                }, 1000);
            });
            
            // 10% chance to trigger an easter egg
            if (Math.random() > 0.9) {
                triggerTVEasterEgg(this);
            }
        });
    });
    
    // TV control buttons functionality
    const adjustVertical = document.getElementById('adjust-vertical');
    const adjustHorizontal = document.getElementById('adjust-horizontal');
    const returnHome = document.getElementById('return-home');
    
    if (adjustVertical) {
        adjustVertical.addEventListener('click', function() {
            // Adjust vertical alignment of all TV screens
            document.querySelectorAll('.tv-content').forEach(content => {
                content.style.transform = `translateY(${(Math.random() * 20) - 10}px)`;
                
                setTimeout(() => {
                    content.style.transform = '';
                }, 3000);
            });
        });
    }
    
    if (adjustHorizontal) {
        adjustHorizontal.addEventListener('click', function() {
            // Adjust horizontal alignment of all TV screens
            document.querySelectorAll('.tv-content').forEach(content => {
                content.style.transform = `translateX(${(Math.random() * 20) - 10}px)`;
                
                setTimeout(() => {
                    content.style.transform = '';
                }, 3000);
            });
        });
    }
    
    if (returnHome) {
        returnHome.addEventListener('click', function() {
            // Return to main page with transition effect
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
}

// Handle navigation
function setupNavigation() {
    const returnMain = document.getElementById('return-main');
    const navSymbol1 = document.getElementById('nav-symbol-1');
    const navSymbol2 = document.getElementById('nav-symbol-2');
    
    if (returnMain) {
        returnMain.addEventListener('click', function() {
            // Return to main page with transition effect
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
    
    if (navSymbol1) {
        navSymbol1.addEventListener('click', function() {
            // Show "Through Time" effect - sepia filter on all TVs
            document.querySelectorAll('.tv-content').forEach(content => {
                content.style.filter = 'sepia(0.8) contrast(1.2)';
                
                setTimeout(() => {
                    content.style.filter = '';
                }, 5000);
            });
        });
    }
    
    if (navSymbol2) {
        navSymbol2.addEventListener('click', function() {
            // Show "Nautical Secrets" effect - blue tint on all TVs
            document.querySelectorAll('.tv-content').forEach(content => {
                content.style.filter = 'hue-rotate(180deg) brightness(0.8) saturate(1.5)';
                
                setTimeout(() => {
                    content.style.filter = '';
                }, 5000);
            });
        });
    }
}

// Initialize historical figure easter egg
function initializeHistoricalFigure() {
    const historicalFigure = document.getElementById('historical-figure');
    if (!historicalFigure) return;
    
    // Occasionally show the historical figure
    setInterval(() => {
        if (Math.random() > 0.8) {
            historicalFigure.classList.add('active');
            
            setTimeout(() => {
                historicalFigure.classList.remove('active');
            }, 5000);
        }
    }, 60000);
    
    // Allow clicking on the figure for an easter egg
    historicalFigure.addEventListener('click', function() {
        // Play whisper sound
        const whisperSound = document.getElementById('whisper-sound');
        if (whisperSound) {
            whisperSound.currentTime = 0;
            whisperSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
        
        // Show cryptic message
        const message = document.createElement('div');
        message.classList.add('figure-message');
        message.innerHTML = 'THE PALATINE LIGHT STILL BURNS ON MOONLESS NIGHTS';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('active');
            
            setTimeout(() => {
                message.classList.remove('active');
                
                setTimeout(() => {
                    message.remove();
                }, 1000);
            }, 4000);
        }, 100);
    });
}

// Random TV static
function randomTVStatic() {
    if (Math.random() > 0.5) {
        const tvs = document.querySelectorAll('.tv-set');
        if (tvs.length === 0) return;
        
        const randomTV = tvs[Math.floor(Math.random() * tvs.length)];
        const staticElement = randomTV.querySelector('.tv-static');
        
        if (staticElement) {
            staticElement.style.opacity = '0.4';
            
            // Play static sound
            const staticSound = document.getElementById('tv-static');
            if (staticSound) {
                staticSound.currentTime = 0;
                staticSound.volume = 0.1;
                staticSound.play().catch(error => {
                    console.log('Audio playback prevented: ', error);
                });
            }
            
            setTimeout(() => {
                staticElement.style.opacity = '0.03';
            }, 1000);
        }
    }
}

// Show random ghost
function showRandomGhost() {
    const silhouettes = document.querySelectorAll('.silhouette');
    if (silhouettes.length === 0) return;
    
    if (Math.random() > 0.7) {
        const randomSilhouette = silhouettes[Math.floor(Math.random() * silhouettes.length)];
        
        randomSilhouette.style.opacity = '0.4';
        randomSilhouette.style.transform = 'scale(1.2)';
        
        // Play whisper sound
        const whisperSound = document.getElementById('whisper-sound');
        if (whisperSound) {
            whisperSound.currentTime = 0;
            whisperSound.volume = 0.1;
            whisperSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
        
        setTimeout(() => {
            randomSilhouette.style.opacity = '0';
            randomSilhouette.style.transform = 'scale(1)';
        }, 2000);
    }
}

// Signal interference
function signalInterference() {
    if (Math.random() > 0.7) {
        // Create signal interference effect
        const interference = document.createElement('div');
        interference.classList.add('electrical-interference');
        
        document.body.appendChild(interference);
        
        // Animate in
        setTimeout(() => {
            interference.classList.add('active');
            
            // Play reality break sound
            const realityBreakSound = document.getElementById('reality-break-sound');
            if (realityBreakSound) {
                realityBreakSound.currentTime = 0;
                realityBreakSound.volume = 0.2;
                realityBreakSound.play().catch(error => {
                    console.log('Audio playback prevented: ', error);
                });
            }
            
            // Show a random Block Island message
            const blockIslandMessages = [
                'THE PALATINE SHIP BURNS AGAIN',
                'MANISSES WHISPERS ITS SECRETS',
                'THE MOHEGAN BLUFFS REMEMBER',
                'BOOTLEGGERS STILL HIDE THEIR TREASURE',
                'THE LIGHTHOUSE KEEPS WATCH'
            ];
            
            const randomMessage = blockIslandMessages[Math.floor(Math.random() * blockIslandMessages.length)];
            
            const messageElement = document.getElementById('floating-msg');
            if (messageElement) {
                const originalText = messageElement.textContent;
                messageElement.textContent = randomMessage;
                
                setTimeout(() => {
                    messageElement.textContent = originalText;
                }, 3000);
            }
            
            // Animate out
            setTimeout(() => {
                interference.classList.remove('active');
                
                setTimeout(() => {
                    interference.remove();
                }, 1000);
            }, 2000);
        }, 100);
    }
}

// TV Easter Egg
function triggerTVEasterEgg(tvSet) {
    // Determine which TV triggered the easter egg
    const tvId = tvSet.id;
    let message = '';
    
    switch(tvId) {
        case 'tv-set-1':
            message = 'THE BEACH REMEMBERS EVERY FOOTPRINT';
            break;
        case 'tv-set-2':
            message = 'THE PALATINE LIGHT GUIDES LOST SOULS';
            break;
        case 'tv-set-3':
            message = 'SOME CUSTOMERS FROM THE PAST NEVER LEFT';
            break;
        default:
            message = 'THE ISLAND KEEPS ITS SECRETS';
    }
    
    // Create message overlay
    const overlay = document.createElement('div');
    overlay.classList.add('tv-easter-egg-message');
    overlay.textContent = message;
    
    document.body.appendChild(overlay);
    
    // Play sound effect
    const realityBreakSound = document.getElementById('reality-break-sound');
    if (realityBreakSound) {
        realityBreakSound.currentTime = 0;
        realityBreakSound.volume = 0.3;
        realityBreakSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
    
    // Animate in
    setTimeout(() => {
        overlay.classList.add('active');
        
        // Disturb all TV screens briefly
        document.querySelectorAll('.tv-content').forEach(content => {
            content.style.filter = 'hue-rotate(180deg) saturate(1.5) contrast(1.5)';
            
            setTimeout(() => {
                content.style.filter = '';
            }, 2000);
        });
        
        // Animate out
        setTimeout(() => {
            overlay.classList.remove('active');
            
            setTimeout(() => {
                overlay.remove();
            }, 1000);
        }, 4000);
    }, 100);
}

// Initialize TV sets with interactive functionality
function initializeTVSets() {
    const tvSets = document.querySelectorAll('.tv-set');
    
    tvSets.forEach(tvSet => {
        const tvScreen = tvSet.querySelector('.tv-screen');
        const tvStatic = tvSet.querySelector('.tv-static');
        const hiddenMessage = tvSet.querySelector('.hidden-message');
        
        // Add click event to each TV
        tvSet.addEventListener('click', function() {
            // Show static effect when clicked
            tvStatic.classList.add('active');
            
            // Play TV static sound
            const staticSound = document.getElementById('tv-static');
            if (staticSound) {
                staticSound.currentTime = 0;
                staticSound.volume = 0.3;
                staticSound.play().catch(error => {
                    console.log('Audio playback prevented: ', error);
                });
            }
            
            // Show hidden message
            if (hiddenMessage) {
                hiddenMessage.classList.add('active');
                
                // Hide message after a while
                setTimeout(() => {
                    hiddenMessage.classList.remove('active');
                }, 4000);
            }
            
            // Hide static after a delay
            setTimeout(() => {
                tvStatic.classList.remove('active');
                
                // Randomly choose to change channel occasionally
                if (Math.random() > 0.7) {
                    changeChannel(tvScreen);
                }
            }, 2000);
        });
        
        // Occasionally show static on TVs automatically
        setInterval(() => {
            if (Math.random() > 0.8) {
                // Add static effect
                tvStatic.classList.add('active');
                
                setTimeout(() => {
                    tvStatic.classList.remove('active');
                }, 1000);
            }
        }, 10000);
    });
    
    // Initialize the TV controls
    const verticalAdjust = document.getElementById('adjust-vertical');
    const horizontalAdjust = document.getElementById('adjust-horizontal');
    const returnHome = document.getElementById('return-home');
    
    if (verticalAdjust) {
        verticalAdjust.addEventListener('click', adjustVertical);
    }
    
    if (horizontalAdjust) {
        horizontalAdjust.addEventListener('click', adjustHorizontal);
    }
    
    if (returnHome) {
        returnHome.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
}

// Adjust vertical tracking on TVs
function adjustVertical() {
    const tvScreens = document.querySelectorAll('.tv-screen');
    
    tvScreens.forEach(screen => {
        screen.classList.add('vertical-adjust');
        
        setTimeout(() => {
            screen.classList.remove('vertical-adjust');
        }, 3000);
    });
    
    // Play adjustment sound
    const staticSound = document.getElementById('tv-static');
    if (staticSound) {
        staticSound.currentTime = 0;
        staticSound.volume = 0.2;
        staticSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
}

// Adjust horizontal tracking on TVs
function adjustHorizontal() {
    const tvScreens = document.querySelectorAll('.tv-screen');
    
    tvScreens.forEach(screen => {
        screen.classList.add('horizontal-adjust');
        
        setTimeout(() => {
            screen.classList.remove('horizontal-adjust');
        }, 3000);
    });
    
    // Play adjustment sound
    const staticSound = document.getElementById('tv-static');
    if (staticSound) {
        staticSound.currentTime = 0;
        staticSound.volume = 0.2;
        staticSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
}

// Change the channel to a random easter egg image
function changeChannel(tvScreen) {
    if (!tvScreen) return;
    
    // Store the original content
    const originalContent = tvScreen.innerHTML;
    
    // Random chance to show an easter egg image
    const easterEggImages = [
        'images/easter_eggs/IMG_0379.png',
        'images/easter_eggs/IMG_3215.png',
        'images/easter_eggs/IMG_4923.png',
        'images/easter_eggs/IMG_5747.png'
    ];
    
    const randomImage = easterEggImages[Math.floor(Math.random() * easterEggImages.length)];
    
    // Replace with easter egg image
    tvScreen.innerHTML = `<img src="${randomImage}" class="tv-content easter-egg-content" alt="Easter Egg">`;
    
    // Show a message about the change
    const message = document.createElement('div');
    message.classList.add('tv-easter-egg-message');
    message.textContent = "SIGNAL INTERFERENCE DETECTED";
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('active');
        
        // Play whisper sound
        const whisperSound = document.getElementById('whisper-sound');
        if (whisperSound) {
            whisperSound.currentTime = 0;
            whisperSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
        
        setTimeout(() => {
            message.classList.remove('active');
            
            setTimeout(() => {
                message.remove();
            }, 1000);
        }, 3000);
    }, 100);
    
    // After a delay, revert back to original content
    setTimeout(() => {
        // Add static transition
        const tvSet = tvScreen.closest('.tv-set');
        const tvStatic = tvSet.querySelector('.tv-static');
        
        if (tvStatic) {
            tvStatic.classList.add('active');
            
            setTimeout(() => {
                // Revert to original content
                tvScreen.innerHTML = originalContent;
                
                setTimeout(() => {
                    tvStatic.classList.remove('active');
                }, 1000);
            }, 1000);
        }
    }, 7000);
}

// Initialize movie poster easter egg
function initializeMoviePosterEasterEgg() {
    const moviePosterTrigger = document.getElementById('movie-poster-trigger');
    if (!moviePosterTrigger) return;
    
    // Position the trigger in a corner
    moviePosterTrigger.style.position = 'fixed';
    moviePosterTrigger.style.bottom = '20px';
    moviePosterTrigger.style.right = '20px';
    moviePosterTrigger.style.width = '30px';
    moviePosterTrigger.style.height = '30px';
    moviePosterTrigger.style.cursor = 'pointer';
    moviePosterTrigger.style.opacity = '0.01';
    moviePosterTrigger.style.zIndex = '1000';
    
    // Make it occasionally visible
    setInterval(() => {
        if (Math.random() > 0.9) {
            moviePosterTrigger.style.opacity = '0.5';
            
            setTimeout(() => {
                moviePosterTrigger.style.opacity = '0.01';
            }, 500);
        }
    }, 15000);
    
    // Add click event to show movie poster
    moviePosterTrigger.addEventListener('click', showMoviePosters);
}

// Show movie posters easter egg
function showMoviePosters() {
    // Create poster gallery overlay
    const posterGallery = document.createElement('div');
    posterGallery.classList.add('poster-gallery');
    
    // Add movie posters
    const posters = [
        'images/easter_eggs/IMG_0379.png',
        'images/easter_eggs/IMG_3215.png',
        'images/easter_eggs/IMG_4923.png',
        'images/easter_eggs/IMG_5747.png'
    ];
    
    // Create gallery HTML
    posterGallery.innerHTML = `
        <div class="gallery-content">
            <h2 class="gallery-title glitch-text">BLOCK ISLAND CINEMA</h2>
            <div class="gallery-subtitle backwards-text">LOST FILM FESTIVAL - 1977</div>
            <div class="posters-container">
                ${posters.map(poster => `
                    <div class="movie-poster">
                        <img src="${poster}" alt="Movie Poster">
                    </div>
                `).join('')}
            </div>
            <div class="gallery-close">×</div>
            <div class="gallery-note">These posters were found in the basement of the Empire Theatre. The festival was cancelled after strange incidents on opening night.</div>
        </div>
    `;
    
    document.body.appendChild(posterGallery);
    
    // Show with effect
    setTimeout(() => {
        posterGallery.classList.add('active');
        
        // Play eerie sound
        const realityBreakSound = document.getElementById('reality-break-sound');
        if (realityBreakSound) {
            realityBreakSound.currentTime = 0;
            realityBreakSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
        
        // Add click handler to close button
        const closeButton = posterGallery.querySelector('.gallery-close');
        closeButton.addEventListener('click', function() {
            posterGallery.classList.remove('active');
            
            setTimeout(() => {
                posterGallery.remove();
            }, 500);
        });
        
        // Add random flickering to posters
        const moviePosters = posterGallery.querySelectorAll('.movie-poster');
        moviePosters.forEach(poster => {
            setInterval(() => {
                if (Math.random() > 0.7) {
                    poster.classList.add('flicker');
                    
                    setTimeout(() => {
                        poster.classList.remove('flicker');
                    }, 200);
                }
            }, 3000);
        });
    }, 100);
} 