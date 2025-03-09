// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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

    // Random flicker effect on page load
    setTimeout(() => {
        document.body.classList.add('loaded');
        randomFlicker();
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
                openPortal(portalId);
            });
        });
    }

    // Close modal when clicking the X
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            closeModal();
        });
    }

    // Close modal when clicking outside of content
    if (modalContainer) {
        modalContainer.addEventListener('click', function(e) {
            if (e.target === modalContainer) {
                closeModal();
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
            closeModal();
        }
    });
});

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
        default:
            content = '<h2>MYSTERIOUS PORTAL</h2><p>This gateway seems to lead nowhere...</p>';
    }
    
    modalBody.innerHTML = content;
    modalContainer.style.display = 'flex';
    
    // Add fade-in effect
    setTimeout(() => {
        modalContainer.classList.add('fade-in');
    }, 10);
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