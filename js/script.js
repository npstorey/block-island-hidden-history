// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dream sequence
    initializeDreamSequence();
    
    // Play ambient sound on user interaction
    document.body.addEventListener('click', function() {
        const ambientSound = document.getElementById('ambient-sound');
        if (ambientSound && ambientSound.paused) {
            ambientSound.volume = 0.2;
            ambientSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
        
        // Trigger dreamlike visual effects
        triggerDreamEffect();
    }, { once: true });

    // Random flicker effect on page load
    setTimeout(() => {
        document.body.classList.add('loaded');
        randomFlicker();
        initializeBackwardsSpeech();
    }, 500);

    // Handle portal item clicks
    const portalItems = document.querySelectorAll('.portal-item');
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    if (portalItems && modalContainer) {
        portalItems.forEach(item => {
            item.addEventListener('click', function() {
                const portalId = this.id;
                // Add dream transition effect before opening portal
                dreamTransition(() => openPortal(portalId));
            });
        });
    }

    // Close modal when clicking the X
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            // Add bizarre transition out
            bizarreTransitionOut(() => closeModal());
        });
    }

    // Close modal when clicking outside of content
    if (modalContainer) {
        modalContainer.addEventListener('click', function(e) {
            if (e.target === modalContainer) {
                bizarreTransitionOut(() => closeModal());
            }
        });
    }

    // Random floating message
    const floatingMsg = document.getElementById('floating-msg');
    if (floatingMsg) {
        setInterval(() => {
            updateFloatingMessage(floatingMsg);
        }, 8000);
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalContainer && modalContainer.style.display === 'flex') {
            bizarreTransitionOut(() => closeModal());
        }
    });
    
    // Cursor trail effect
    initializeCursorTrail();
    
    // Initialize mysterious audio patterns
    initializeMysteriousAudio();
    
    // Add cryptic mouse movement listeners
    document.addEventListener('mousemove', handleMysteriousMouseMovement);
    
    // Initialize the reality shift effect
    const realityShiftButton = document.getElementById('reality-shift');
    if (realityShiftButton) {
        realityShiftButton.addEventListener('click', function(e) {
            e.preventDefault();
            initiateRealityShift();
        });
    }
    
    // Initialize secret portals that appear randomly
    initializeSecretPortals();
    
    // Initialize the historical figure that occasionally appears
    initializeHistoricalFigure();
    
    // Initialize the lighthouse beacon easter egg
    initializeLighthouseBeacon();
    
    // Initialize Mohegan Bluffs features if we're on the portal page
    if (document.body.classList.contains('portal-page')) {
        initializeMoheganBluffs();
    }
});

// Dream sequence initialization
function initializeDreamSequence() {
    const dreamSequence = document.getElementById('dream-sequence');
    if (!dreamSequence) return;
    
    const dreamFrames = dreamSequence.querySelectorAll('.dream-frame');
    
    // Set random dream images
    const dreamImages = [
        'palatine-light.jpg', 
        'block-island-1920.jpg', 
        'mohegan-bluffs.jpg', 
        'southeast-lighthouse.jpg', 
        'beach-old.jpg', 
        'bootleggers-map.jpg'
    ];
    
    dreamFrames.forEach(frame => {
        const randomImage = dreamImages[Math.floor(Math.random() * dreamImages.length)];
        frame.style.backgroundImage = `url(images/${randomImage})`;
        
        // Add random animation delays
        frame.style.animationDelay = (Math.random() * 5) + 's';
    });
    
    // Occasionally flash dream images
    setInterval(() => {
        const randomFrame = dreamFrames[Math.floor(Math.random() * dreamFrames.length)];
        randomFrame.classList.add('dream-flash');
        
        setTimeout(() => {
            randomFrame.classList.remove('dream-flash');
        }, 500);
    }, 15000);
}

// Random flicker effect
function randomFlicker() {
    const elements = document.querySelectorAll('h1, .subtitle, .portal-label');
    
    elements.forEach(el => {
        if (Math.random() > 0.7) {
            el.classList.add('flicker');
            setTimeout(() => {
                el.classList.remove('flicker');
            }, 300 + Math.random() * 700);
        }
    });
    
    setTimeout(randomFlicker, 3000 + Math.random() * 5000);
}

// Open content portal
function openPortal(portalId) {
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    
    if (!modalContainer || !modalBody) return;
    
    let content = '';
    
    // Generate content based on portal ID
    switch(portalId) {
        case 'palatine-portal':
            content = generatePalatineContent();
            break;
        case 'pirates-portal':
            content = generatePiratesContent();
            break;
        case 'ghosts-portal':
            content = generateGhostsContent();
            break;
        case 'societies-portal':
            content = generateSocietiesContent();
            break;
        case 'rituals-portal':
            content = generateRitualsContent();
            break;
        case 'taverns-portal':
            content = generateTavernsContent();
            break;
        case 'nature-portal':
            content = generateNatureContent();
            break;
        case 'secret-portal':
            content = generateSecretContent();
            break;
        default:
            content = generateDreamContent();
    }
    
    modalBody.innerHTML = content;
    
    // Add random whisper to the modal
    const modalWhisper = document.getElementById('modal-whisper');
    if (modalWhisper) {
        const whispers = [
            "Can you hear the ocean?",
            "We've been here before",
            "The island knows your name",
            "They're watching from the shadows",
            "Some doors should remain closed",
            "That gum you like is going to come back in style",
            "Through the darkness of future past"
        ];
        
        modalWhisper.textContent = whispers[Math.floor(Math.random() * whispers.length)];
    }
    
    // Show modal with Lynchian effect
    modalContainer.style.display = 'flex';
    
    // Play sound effect
    const whisperSound = document.getElementById('whisper-sound');
    if (whisperSound) {
        whisperSound.currentTime = 0;
        whisperSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
    
    // Dispatch the event to let other components know a modal was opened
    document.dispatchEvent(new CustomEvent('modalOpened'));
}

// Close modal
function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;
    
    modalContainer.classList.remove('fade-in');
    setTimeout(() => {
        modalContainer.style.display = 'none';
    }, 300);
}

// Update floating message with random cryptic text
function updateFloatingMessage(element) {
    const messages = [
        "THE TRUTH IS STRANGER THAN FICTION",
        "SOME DOORS SHOULD REMAIN CLOSED",
        "THE ISLAND REMEMBERS",
        "LISTEN TO THE WAVES",
        "GHOSTS WALK AMONG US",
        "THE FIRE STILL BURNS AT SEA",
        "BEWARE THE PALATINE LIGHT",
        "WHAT WAS BURIED REMAINS",
        "WATCH FOR SIGNS",
        "THE PAST IS NEVER DEAD"
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    
    // Fade out
    element.style.opacity = 0;
    
    // Change text and fade in
    setTimeout(() => {
        element.textContent = randomMsg;
        element.style.opacity = 1;
    }, 500);
}

// Initialize backwards speech
function initializeBackwardsSpeech() {
    const backwardsElements = document.querySelectorAll('.backwards-text');
    if (backwardsElements.length === 0) return;
    
    backwardsElements.forEach(element => {
        const originalText = element.textContent;
        const backwardsText = originalText.split('').reverse().join('');
        
        element.setAttribute('data-original', originalText);
        element.setAttribute('data-backwards', backwardsText);
        
        element.addEventListener('mouseenter', function() {
            this.textContent = this.getAttribute('data-backwards');
            playReversedAudio();
        });
        
        element.addEventListener('mouseleave', function() {
            this.textContent = this.getAttribute('data-original');
        });
    });
}

// Dream transition effect
function dreamTransition(callback) {
    const transitionOverlay = document.createElement('div');
    transitionOverlay.classList.add('dream-transition-overlay');
    document.body.appendChild(transitionOverlay);
    
    // Add zigzag pattern to the overlay
    const zigzag = document.createElement('div');
    zigzag.classList.add('zigzag-pattern');
    transitionOverlay.appendChild(zigzag);
    
    setTimeout(() => {
        transitionOverlay.classList.add('active');
        
        setTimeout(() => {
            if (callback) callback();
            
            setTimeout(() => {
                transitionOverlay.classList.remove('active');
                
                setTimeout(() => {
                    transitionOverlay.remove();
                }, 1000);
            }, 500);
        }, 1000);
    }, 100);
}

// Bizarre transition out
function bizarreTransitionOut(callback) {
    const transitionOverlay = document.createElement('div');
    transitionOverlay.classList.add('bizarre-transition-out');
    document.body.appendChild(transitionOverlay);
    
    // Add static noise to the overlay
    const staticNoise = document.createElement('div');
    staticNoise.classList.add('static-noise');
    transitionOverlay.appendChild(staticNoise);
    
    setTimeout(() => {
        if (callback) callback();
        
        setTimeout(() => {
            transitionOverlay.remove();
        }, 1500);
    }, 800);
}

// Initialize cursor trail
function initializeCursorTrail() {
    const trailContainer = document.createElement('div');
    trailContainer.classList.add('cursor-trail-container');
    document.body.appendChild(trailContainer);
    
    const trailCount = 15;
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.style.animationDelay = (i * 0.05) + 's';
        trailContainer.appendChild(trail);
    }
    
    let trails = document.querySelectorAll('.cursor-trail');
    let trailIndex = 0;
    
    document.addEventListener('mousemove', function(e) {
        const trail = trails[trailIndex];
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        
        trail.classList.remove('active');
        void trail.offsetWidth; // Force reflow
        trail.classList.add('active');
        
        trailIndex = (trailIndex + 1) % trailCount;
    });
}

// Initialize mysterious audio patterns
function initializeMysteriousAudio() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create mysterious tones based on user movement
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.995) {
            createMysteriousTone(audioContext, e);
        }
    });
}

// Create mysterious tone
function createMysteriousTone(audioContext, event) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Map screen position to frequency
    const xFrequency = (event.clientX / window.innerWidth) * 200 + 150;
    const yFrequency = (event.clientY / window.innerHeight) * 200 + 150;
    
    oscillator.type = ['sine', 'triangle', 'square'][Math.floor(Math.random() * 3)];
    oscillator.frequency.value = Math.random() > 0.5 ? xFrequency : yFrequency;
    
    gainNode.gain.value = 0;
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    
    // Fade in
    gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
    // Fade out
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
    
    // Stop after 2 seconds
    setTimeout(() => {
        oscillator.stop();
    }, 2000);
}

// Handle mysterious mouse movement
function handleMysteriousMouseMovement(e) {
    // Occasionally distort the page when the user moves to certain "hot spots"
    const hotSpotRadius = 50;
    const hotSpots = [
        { x: 100, y: 100 },
        { x: window.innerWidth - 100, y: 100 },
        { x: 100, y: window.innerHeight - 100 },
        { x: window.innerWidth - 100, y: window.innerHeight - 100 },
        { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    ];
    
    // Check if mouse is near a hot spot
    for (const spot of hotSpots) {
        const distance = Math.sqrt(Math.pow(e.clientX - spot.x, 2) + Math.pow(e.clientY - spot.y, 2));
        
        if (distance < hotSpotRadius) {
            triggerDreamEffect();
            break;
        }
    }
}

// Trigger dream-like visual effect
function triggerDreamEffect() {
    const body = document.body;
    
    // Add dream effect class
    body.classList.add('dream-effect');
    
    // Play cryptic sound
    const whisperSound = document.getElementById('whisper-sound');
    if (whisperSound) {
        whisperSound.currentTime = 0;
        whisperSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
    
    // Show random whisper
    const whispers = document.querySelectorAll('.whisper');
    if (whispers.length > 0) {
        const randomWhisper = whispers[Math.floor(Math.random() * whispers.length)];
        randomWhisper.classList.add('active');
        
        setTimeout(() => {
            randomWhisper.classList.remove('active');
        }, 3000);
    }
    
    // Remove dream effect after a short time
    setTimeout(() => {
        body.classList.remove('dream-effect');
    }, 1000);
}

// Reality shift to enter the main experience
function initiateRealityShift() {
    const body = document.body;
    
    // Add intense dream transition
    body.classList.add('reality-shift');
    
    // Play transition sound
    const realityBreakSound = document.getElementById('reality-break-sound');
    if (realityBreakSound) {
        realityBreakSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
    
    // Show cryptic messages during transition
    const crypticMessages = [
        "THE PALATINE SHIP BURNS AGAIN",
        "THROUGH THE MISTS OF TIME",
        "THE SPIRITS OF MANISSES",
        "WHERE ARE THE MOHEGAN BLUFFS?",
        "IT IS HAPPENING AGAIN"
    ];
    
    const crypticOverlay = document.createElement('div');
    crypticOverlay.classList.add('cryptic-overlay');
    document.body.appendChild(crypticOverlay);
    
    let messageIndex = 0;
    
    const showCrypticMessage = () => {
        if (messageIndex >= crypticMessages.length) {
            crypticOverlay.remove();
            window.location.href = 'portal.html';
            return;
        }
        
        crypticOverlay.textContent = crypticMessages[messageIndex];
        crypticOverlay.classList.add('active');
        
        setTimeout(() => {
            crypticOverlay.classList.remove('active');
            
            setTimeout(() => {
                messageIndex++;
                showCrypticMessage();
            }, 500);
        }, 1500);
    };
    
    showCrypticMessage();
}

// Initialize secret portals that appear randomly
function initializeSecretPortals() {
    setInterval(() => {
        if (Math.random() > 0.9) {
            createSecretPortal();
        }
    }, 30000);
}

// Create a secret portal that appears briefly
function createSecretPortal() {
    const portal = document.createElement('div');
    portal.classList.add('secret-portal-overlay');
    
    // Add portal symbol
    const symbol = document.createElement('div');
    symbol.classList.add('portal-symbol');
    symbol.innerHTML = '⊗';
    portal.appendChild(symbol);
    
    // Add portal message
    const message = document.createElement('div');
    message.classList.add('portal-message');
    message.textContent = 'CLICK TO ENTER MOHEGAN BLUFFS';
    portal.appendChild(message);
    
    // Position randomly on screen
    portal.style.left = (Math.random() * 70 + 15) + '%';
    portal.style.top = (Math.random() * 70 + 15) + '%';
    
    document.body.appendChild(portal);
    
    // Fade in
    setTimeout(() => {
        portal.classList.add('active');
    }, 100);
    
    // Add click event
    portal.addEventListener('click', function() {
        // Trigger intense transition
        const body = document.body;
        body.classList.add('bluffs-transition');
        
        // Play eerie sound
        const whisperSound = document.getElementById('whisper-sound');
        if (whisperSound) {
            whisperSound.currentTime = 0;
            whisperSound.play().catch(error => {
                console.log('Audio playback prevented: ', error);
            });
        }
        
        setTimeout(() => {
            body.classList.remove('bluffs-transition');
            
            // Show a hidden piece of content
            showHiddenContent();
        }, 2000);
    });
    
    // Disappear after a while if not clicked
    setTimeout(() => {
        portal.classList.remove('active');
        
        setTimeout(() => {
            portal.remove();
        }, 1000);
    }, 10000);
}

// Show hidden content that's only accessible through secret portals
function showHiddenContent() {
    const hiddenContent = document.createElement('div');
    hiddenContent.classList.add('hidden-content');
    
    const contentInner = document.createElement('div');
    contentInner.classList.add('hidden-content-inner');
    
    const closeButton = document.createElement('div');
    closeButton.classList.add('hidden-content-close');
    closeButton.textContent = '×';
    
    const title = document.createElement('h2');
    title.textContent = 'THE HIDDEN TRUTHS OF BLOCK ISLAND';
    title.classList.add('glitch-text');
    
    const content = document.createElement('div');
    content.classList.add('hidden-content-text');
    content.innerHTML = `
        <p class="backwards-text">The island speaks in reversed whispers</p>
        <p>There are places on this island where time moves differently.</p>
        <p>In <span class="glitch-text">1929</span>, three fishermen reported seeing the same woman walking across the water.</p>
        <p>The lighthouses communicate with each other in code.</p>
        <p class="redacted">CLASSIFIED INFORMATION</p>
        <p>Some visitors never truly leave.</p>
    `;
    
    contentInner.appendChild(closeButton);
    contentInner.appendChild(title);
    contentInner.appendChild(content);
    hiddenContent.appendChild(contentInner);
    
    document.body.appendChild(hiddenContent);
    
    setTimeout(() => {
        hiddenContent.classList.add('active');
    }, 100);
    
    closeButton.addEventListener('click', function() {
        hiddenContent.classList.remove('active');
        
        setTimeout(() => {
            hiddenContent.remove();
        }, 1000);
    });
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
        message.innerHTML = 'THE MANISSEANS STILL WALK THESE SHORES';
        
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

// Initialize the lighthouse beacon easter egg
function initializeLighthouseBeacon() {
    // Add event listener for lighthouse interactions
    document.addEventListener('modalOpened', function() {
        const modalEasterEgg = document.querySelector('.modal-easter-egg');
        if (!modalEasterEgg) return;
        
        modalEasterEgg.addEventListener('click', triggerLighthouseBeacon);
    });
}

// Trigger the lighthouse beacon effect
function triggerLighthouseBeacon() {
    // Play lighthouse sound
    const whisperSound = document.getElementById('whisper-sound');
    if (whisperSound) {
        whisperSound.currentTime = 0;
        whisperSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
    
    // Show the lighthouse message
    const lighthouseMessage = document.createElement('div');
    lighthouseMessage.classList.add('lighthouse-message');
    lighthouseMessage.textContent = 'THE PALATINE LIGHT STILL BURNS ON MOONLESS NIGHTS';
    
    document.body.appendChild(lighthouseMessage);
    
    setTimeout(() => {
        lighthouseMessage.classList.add('active');
        
        setTimeout(() => {
            lighthouseMessage.classList.remove('active');
            
            setTimeout(() => {
                lighthouseMessage.remove();
            }, 1000);
        }, 3000);
    }, 100);
    
    // Flash some lighthouse imagery
    showLighthouseSilhouettes();
}

// Show lighthouse silhouettes
function showLighthouseSilhouettes() {
    const lighthouseContainer = document.createElement('div');
    lighthouseContainer.classList.add('lighthouse-container');
    
    for (let i = 0; i < 5; i++) {
        const lighthouse = document.createElement('div');
        lighthouse.classList.add('lighthouse-silhouette');
        lighthouse.style.left = `${Math.random() * 90 + 5}%`;
        lighthouse.style.top = `${Math.random() * 90 + 5}%`;
        lighthouse.style.animationDelay = `${Math.random() * 2}s`;
        
        lighthouseContainer.appendChild(lighthouse);
    }
    
    document.body.appendChild(lighthouseContainer);
    
    // Play lighthouse sound
    const whisperSound = document.getElementById('whisper-sound');
    if (whisperSound) {
        whisperSound.currentTime = 0;
        whisperSound.play().catch(error => {
            console.log('Audio playback prevented: ', error);
        });
    }
    
    setTimeout(() => {
        lighthouseContainer.remove();
    }, 10000);
}

// Content generators for each portal
function generatePalatineContent() {
    return `
        <h2>THE PALATINE LIGHT</h2>
        <p>The most famous of Block Island's supernatural legends is the story of <span class="highlight-text">the Palatine Light</span>, an enduring ghost ship that still appears on stormy winter nights.</p>
        
        <p>In the winter of 1738-39, a British colonial passenger ship called the <span class="highlight-text">Princess Augusta</span> (remembered in legend as "the Palatine") ran aground near Block Island after a brutal Atlantic crossing. The vessel carried German immigrants from the Palatinate region seeking a new life.</p>
        
        <p>What happened next has been debated for centuries. The darker legend claims that <span class="highlight-text">islanders lured the ship ashore with false lights</span>, then murdered the passengers and crew, plundered the cargo, and set the ship ablaze to cover up the crime.</p>
        
        <p>According to this grisly tale, as the burning ghost ship drifted out to sea, a woman trapped aboard screamed curses at the islanders – and those screams still echo on stormy winter nights.</p>
        
        <p>The supposed victims of the Palatine were even said to lie in a <span class="highlight-text">mass grave on the island</span>, whose soil is haunted by their restless souls.</p>
        
        <p>Islanders themselves came to speak of the "Palatine light": an eerie, flickering glow sometimes seen on the horizon off Block Island, believed to be the burning spirit of the lost ship. Even into the 20th century, people have reported on dark winter nights a pale flame out at sea, drifting and then vanishing – always around late December, near the anniversary of the wreck.</p>
        
        <p>The phantom Palatine still "appears in the distance – a pale fire burning along the horizon" during the coldest nights. Visitors can even seek out a site on Old Town Road where the "Palatine Graves" purportedly lie.</p>
    `;
}

function generatePiratesContent() {
    return `
        <h2>PIRATES & BOOTLEGGERS</h2>
        <p>Cut off by water, Block Island often found itself at the mercy of whoever ruled the waves. In the late 1600s and early 1700s – the so-called Golden Age of Piracy – the island's remoteness attracted privateers, pirates, and other ne'er-do-wells.</p>
        
        <p>In 1699, no fewer than <span class="highlight-text">three famous pirates</span> dropped anchor at Block Island, including the infamous <span class="highlight-text">Captain William Kidd</span>.</p>
        
        <p>Kidd's visit, shortly before his arrest, left an indelible mark on Block Island folklore. According to accounts, in June 1699 Captain Kidd rendezvoused on the island with his wife and children – a poignant family reunion on the eve of his downfall.</p>
        
        <p>But Kidd's motives weren't purely sentimental. He was on a "treasure-dispersing spree," stashing loot in various hiding places as he sailed north to face impending charges. Having already buried a cache of gold and jewels on Gardiner's Island, NY, Kidd is <span class="highlight-text">also said to have hidden treasure on Block Island</span> during this stopover.</p>
        
        <p>To this day, rumor has it that some of Kidd's ill-gotten riches remain concealed in Block Island's hills or caves. A high-tech treasure hunt in 1955 combed the island with metal detectors, but <span class="highlight-text">nothing was found</span> – if Kidd did bury booty here, "he certainly hid it well".</p>
        
        <p>Generations later in another era of outlaw trade – Prohibition – Block Island became known as a <span class="highlight-text">"Gangster's Paradise" for rum-runners</span>. In the 1920s, the island's location and its skilled seafarers made it ideal for smuggling liquor.</p>
        
        <p>Nearly every able fisherman on Block Island had a secret second job as a <span class="highlight-text">bootlegger</span>, working for New York syndicates to ferry whisky and rum to the mainland. Hidden coves and barns served as <span class="highlight-text">liquor cache sites</span>, and covert meetings took place in island farmhouse kitchens and the back rooms of inns.</p>
    `;
}

function generateGhostsContent() {
    return `
        <h2>RESTLESS SPIRITS</h2>
        <p>Block Island's ghost stories aren't limited to the Palatine. In fact, nearly every historic building seems to have a spectral tenant or two. To this day, <span class="highlight-text">nightly ghost tours</span> lead curious visitors around Old Harbor, stopping at "cursed" locales and weaving tales of apparitions and unexplained happenings.</p>
        
        <p>Among these spooky sagas, one of the most chilling – and whimsical – is the tale of <span class="highlight-text">"Mad Maggie"</span>, the resident ghost of Block Island's <span class="highlight-text">Southeast Lighthouse</span>.</p>
        
        <p>According to local legend, in the early 1900s a lighthouse keeper stationed there had a wife named Maggie who grew desperately unhappy with the lonely, windswept life at the lighthouse. One fateful night, after a fierce argument on the tower stairs, the keeper <span class="highlight-text">pushed Maggie in a fit of rage</span>, sending her tumbling down the spiral steps to her death.</p>
        
        <p>Officially, no record of such a murder exists – no newspaper ever reported it, and no keeper was ever dismissed for killing his wife. But that hasn't stopped Block Islanders from believing Maggie's anguished spirit lingered.</p>
        
        <p>It's said that <span class="highlight-text">Maggie especially torments men</span> – perhaps out of eternal fury toward her husband. Male lighthouse keepers and guests have told of being <span class="highlight-text">locked in rooms, their beds shaking, pots and pans clanging with no one in the kitchen, even knives flung off tables by an invisible force</span>.</p>
        
        <p>Up in the island's <span class="highlight-text">North Lighthouse</span>, there are ghostly tales as well. The isolated 1867 granite lighthouse at Sandy Point is said to be haunted by the spirits of shipwreck victims who once sought refuge at its door.</p>
        
        <p>Some islanders recount the story of a phantom ship's captain, frozen to death in the blizzard of 1907, who still knocks on the North Light's window during winter storms – seeking help that never came in time.</p>
        
        <p>In town, the grand Victorian hotels and inns have their share of specters. The historic <span class="highlight-text">National Hotel</span> allegedly hosts the ghost of a young hotel guest who died in an accident long ago – staff have heard laughter and seen a little girl in old-fashioned dress playing in the halls, only to vanish at a second glance.</p>
    `;
}

function generateSocietiesContent() {
    return `
        <h2>SECRET SOCIETIES</h2>
        <p>Block Island's isolation did not prevent its residents from partaking in the secret fraternal movements that swept 19th-century America. In fact, the island hosted its very own <span class="highlight-text">secret society chapter</span> – the <span class="highlight-text">Independent Order of Odd Fellows</span> – which became a storied part of local culture.</p>
        
        <p>In 1879, an <span class="highlight-text">Odd Fellows Hall</span> was built on Water Street in Old Harbor. By day, that building served as a general store or gallery, but upstairs, behind closed doors, the Odd Fellows Lodge #26 (aptly named <span class="highlight-text">"Neptune Lodge"</span>) held its mysterious meetings.</p>
        
        <p>Generations of Block Island men participated in the Odd Fellows' rituals, which, though benign (the group was devoted to charity and brotherhood), were shrouded in enough secrecy – with passwords, symbols of three linked rings, and initiation ceremonies – to fuel gossip.</p>
        
        <p>The very idea of a "secret society" on a tiny island sparks the imagination: one can picture fishermen and shopkeepers slipping away from their daily toil, donning ceremonial aprons and conducting arcane rites by lamplight in a lodge above the old general store.</p>
        
        <p>Not to be outdone, the Freemasons also established a toehold on Block Island. In 1875, local Masons formed <span class="highlight-text">Atlantic Lodge No. 31</span> of Free & Accepted Masons.</p>
        
        <p>Perhaps the most peculiar "secret society" in Block Island's story, however, are those informal, often tongue-in-cheek groups that only a tight-knit community could produce. Ask an islander and you might hear about the <span class="highlight-text">"Order of the Green Flash"</span> – a fictional fraternity of dawn fishermen who claim membership whenever they spot the elusive green flash at sunset.</p>
        
        <p>Or the <span class="highlight-text">"Blue Moon Sisterhood,"</span> a semi-mythical circle of women said to gather on rare blue-moon nights for midnight picnics at a sacred spot on the bluffs (accounts vary on what they <em>do</em> there – some say they recite poetry or cast protective spells for the island).</p>
    `;
}

function generateRitualsContent() {
    return `
        <h2>STRANGE RITUALS</h2>
        <p>Life on Block Island has always marched to its own rhythm, yielding traditions that range from the charming to the outright peculiar. Cut off from mainland fads, islanders historically made their own fun, and many of those homegrown customs persist or have been revived today as beloved quirks of community life.</p>
        
        <p>Every year, Block Islanders celebrate <span class="highlight-text">unique seasonal rituals</span> that might baffle an outsider but delight the locals. For example, on <span class="highlight-text">New Year's Day</span>, dozens of residents and intrepid visitors gather at Fred Benson Town Beach to take the <span class="highlight-text">"Polar Plunge"</span> – a bracing dive into the frigid Atlantic to welcome the new year.</p>
        
        <p>In early February comes a truly Block Island original: the <span class="highlight-text">"Unofficial Island Census."</span> Each Groundhog Day (Feb. 2), year-rounders head not to the town hall, but to the <span class="highlight-text">Old Island Pub</span> on Corn Neck Road. There, in a tongue-in-cheek roll call, locals literally <span class="highlight-text">count themselves</span> to see who endured the winter.</p>
        
        <p>Springtime brings the kickoff of an enchanting island-wide treasure hunt: the <span class="highlight-text">Glass Float Project</span>. Since 2012, local artist Eben Horton has been hand-blowing hundreds of gorgeous glass orbs ("floats"), each dated and stamped, and <span class="highlight-text">hiding them around the island's beaches and trails</span> for anyone to find and keep.</p>
        
        <p>When the holiday season comes, Block Island has a <span class="highlight-text">Christmas custom</span> all its own: the <span class="highlight-text">Lobster Pot Tree</span>. In early December, islanders stack dozens of old wire lobster traps in the shape of a Christmas tree and decorate it with garlands, buoys, and lights.</p>
        
        <p>Perhaps the most visible quirky tradition is the ever-changing <span class="highlight-text">Painted Rock</span>. Along the main road north of town, there's a medium-sized boulder that has become the community's canvas. Generations of islanders have painted and repainted this rock to mark events, send greetings, or just unleash creativity.</p>
        
        <p><span class="highlight-text">Layer upon layer of paint</span> has accumulated – the rock is said to "grow larger" each year from all the coats of paint. Unlike stodgy public art that never changes, Painted Rock is dynamic folk art. There's an unspoken rule on Block Island: anyone is free to paint the rock, as long as they do something interesting.</p>
    `;
}

function generateTavernsContent() {
    return `
        <h2>TAVERNS & TALES</h2>
        <p>No history of Block Island would be complete without a tour of its iconic establishments – the pubs, hotels, and eateries that have become institutions in their own right. These places are more than businesses; they are stages upon which island lore has played out, refuges for storytelling, and often characters in the Block Island saga with their own tales of survival and revelry.</p>
        
        <p>Take <span class="highlight-text">Ballard's Inn</span>, for example. Today it's known as a lively beach resort steps from the ferry dock – "the island's most historically significant hotel" brags one guidebook – and indeed Ballard's has lived many lives.</p>
        
        <p>The great Hurricane of 1938 slammed Block Island and <span class="highlight-text">swept Ballard's dance hall into the harbor</span>, ripped the second floor off the main building, and left the whole structure teetering. Many thought it was the end for Ballard's, but a skilled carpenter named Henry Rose miraculously repaired and rebuilt it in the following year.</p>
        
        <p>In 1954, another tempest (Hurricane Carol) tore the rebuilt dance hall off <em>again</em> and tossed it into the salt pond, yet once more the Ballard family hauled it back and restored it. It seemed nothing short of an apocalypse could kill Ballard's – until June 19, 1986, when a catastrophic <span class="highlight-text">fire burned Ballard's Inn to the ground</span>.</p>
        
        <p>For a different flavor of Block Island nightlife, there is the legendary (and now bygone) <span class="highlight-text">Albion Pub</span>. The Albion was the unapologetic dive bar of Block Island lore – a salty, boisterous establishment that operated mid-20th century into the early 2000s.</p>
        
        <p>It was <span class="highlight-text">"famous for shenanigans"</span> – to quote an island podcast reminiscing about its heyday. Ask any Block Islander over 40, and you'll hear some story that begins "One night at the Albion…".</p>
        
        <p>One oft-told yarn recounts how a local patron once rode a horse through the Albion's doors on a dare, sending barstools flying – an epic prank that got him temporarily banned (and permanently famous on the island).</p>
        
        <p>Not all famed establishments were raucous. Some, like <span class="highlight-text">The Oar</span>, represent the more relaxed, familial side of Block Island hospitality. <span class="highlight-text">The Oar Restaurant</span> sits on the edge of New Harbor overlooking the Great Salt Pond.</p>
        
        <p>The Oar's claim to fame (besides its killer clam chowder and mudslides) is its decor: <span class="highlight-text">hundreds of wooden oars</span> hanging from the ceiling and walls, each painted or inscribed by the sailors, vacationers, or wedding parties that donated them.</p>
    `;
}

function generateNatureContent() {
    return `
        <h2>NATURE'S MYSTERIES</h2>
        <p>Block Island's landscape – sculpted by glaciers and battered by ocean winds – has always been central to its mystique. Beyond its obvious beauty, the island's geography comes with its own odd stories and curious phenomena that locals have often speculated about.</p>
        
        <p>One of the first peculiarities newcomers notice is how Block Island's <span class="highlight-text">freshwater ponds</span> sit nearly adjacent to saltwater ocean. The largest, <span class="highlight-text">Great Salt Pond</span>, was actually a tidal marsh fully opened to the sea until humans intervened; conversely, <span class="highlight-text">Fresh Pond</span> and others are landlocked and rumored in lore to be bottomless.</p>
        
        <p>On foggy days, some islanders claim Fresh Pond has a will-o'-the-wisp, a mysterious light that bobs over the water (perhaps caused by gas from decaying vegetation, but in folklore always attributed to spirits).</p>
        
        <p>Then there is the <span class="highlight-text">"Moving Island"</span> phenomenon. Locals like to say that Block Island is slowly drifting or shrinking – a tongue-in-cheek reference to the serious erosion that eats away at its cliffs. The island loses a little shoreline each year to the hungry Atlantic.</p>
        
        <p>The dramatic example was at Mohegan Bluffs: by the early 1990s, the Southeast Lighthouse stood a mere 55 feet from the cliff edge, when originally it was built over 300 feet away. The realization that the island could literally crumble under one of its most important structures led to a monumental effort in 1993 to <span class="highlight-text">move the entire 2,000-ton lighthouse</span> inland by about 245 feet.</p>
        
        <p>Block Island's surrounding seas also present curiosities. Fishermen off the south shore have occasionally reported a <span class="highlight-text">strange roar</span> coming from beneath the waves on calm days. One theory ties this to shifting sands on the <span class="highlight-text">"Block Island Bar,"</span> a notorious shoal extending from the southwest that has wrecked many ships.</p>
        
        <p>The island's very air seems to have quirks. Block Island is known for its clear air and stunning vistas. But old-timers insist that sometimes the island plays visual tricks. There is a documented mirage phenomenon called <span class="highlight-text">"Fata Morgana"</span> where distant objects (like the mainland shore or ships) appear stretched and elevated, creating illusions of cities in the sky or ships floating above water.</p>
        
        <p>Even Block Island's <span class="highlight-text">flora and fauna</span> have an offbeat chapter. Notoriously, the island for a long time had <em>no</em> deer (and no squirrels, skunks, or raccoons either – the surrounding water kept land critters away). Instead, Block Island's signature animal was the humble cow.</p>
    `;
}

// Initialize Mohegan Bluffs specific elements
function initializeMoheganBluffs() {
    // Initialize the ethereal whispers
    initializeWhispers();
    
    // Add random flicker to specific elements
    const flickerElements = document.querySelectorAll('.flicker-text');
    flickerElements.forEach(el => {
        setInterval(() => {
            el.classList.add('flicker');
            setTimeout(() => el.classList.remove('flicker'), 200);
        }, Math.random() * 5000 + 2000);
    });
    
    // Add random movement to shadows
    initializeShadowMovement();
    
    // Random special effects based on time spent
    let timeOnPageSeconds = 0;
    setInterval(() => {
        timeOnPageSeconds++;
        
        // Every 45-60 seconds, trigger a random effect
        if (timeOnPageSeconds % (Math.floor(Math.random() * 15) + 45) === 0) {
            triggerRandomMoheganEffect();
        }
    }, 1000);
}

// Trigger a random Mohegan Bluffs effect
function triggerRandomMoheganEffect() {
    const effects = ['reverseWorld', 'showLighthouse', 'palatineFlames', 'mohegansEntrance', 'showBootleggers'];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    
    switch(effect) {
        case 'reverseWorld':
            document.body.classList.add('reverse-world');
            setTimeout(() => document.body.classList.remove('reverse-world'), 5000);
            break;
        case 'showLighthouse':
            showLighthouseSilhouettes();
            break;
        case 'palatineFlames':
            showPalatineFlames();
            break;
        case 'mohegansEntrance':
            showMoheganBluffsEntrance();
            break;
        case 'showBootleggers':
            showBootleggers();
            break;
    }
}

// Generate special secret content
function generateSecretContent() {
    return `
        <h2 class="glitch-text">THE MOHEGAN BLUFFS</h2>
        <div class="content-section">
            <p class="dark-shadow">Welcome to the <span class="backwards-text">Mohegan Bluffs</span>. This place exists beyond the physical realm of Block Island.</p>
            <p class="dark-shadow">Here, time moves differently, and the rules of reality are... <span class="redacted">altered</span>.</p>
            <div class="bluffs-symbol">⚠</div>
            <blockquote class="dream-quote">"The island whispers to those who listen. The bluffs remember the blood of the Manisseans." - <span class="whisper-text">Island Folklore</span></blockquote>
            <p class="dark-shadow">Those who enter may find themselves <span class="flicker">trapped</span> between worlds, wandering a coastline that never ends.</p>
            <p class="dark-shadow backwards-text">The island's oldest secrets lie here</p>
        </div>
    `;
}

// Generate dream content for invalid/default portals
function generateDreamContent() {
    return `
        <h2 class="glitch-text">DREAM SEQUENCE</h2>
        <div class="content-section">
            <p class="dark-shadow">You've entered a <span class="backwards-text">dream state</span>. In dreams, messages from the island come through more clearly.</p>
            <p class="dark-shadow">The boundaries between past and present, <span class="redacted">reality and fiction</span>, become blurred.</p>
            <blockquote class="dream-quote">"We live inside a dream." - <span class="whisper-text">Phillip Jeffries</span></blockquote>
        </div>
    `;
}

// Initialize quiz on page load
window.addEventListener('load', function() {
    const quizButton = document.getElementById('start-quiz');
    if (quizButton) {
        quizButton.addEventListener('click', startQuiz);
    }
}); 