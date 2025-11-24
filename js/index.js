const flowers = {
    tulip: {
        icon: '🌷',
        name: 'Tulip of New Beginnings',
        message: 'Today marks the beautiful beginning of your nursing career byy! You may start slow but don\'t give up on what you want. Ana gani sila \'It\'s a blessing to be tired in pursuit of a challenge of your own choosing\'. And remember you have me sa imong fresh start. 💕'
    },
    sunflower: {
        icon: '🌻',
        name: 'Sunflower of Hope',
        message: "You're just like a sunflower because you bring light and warmth to me, and I know you will bring hope to your future patients. You will be the source of comfort in their darkest days. So keep shining, my nurse! ☀️"
    },
    rose: {
        icon: '🌹',
        name: 'Rose of Compassion',
        message: 'Grabe imuhang compassion ug dedication byyy that makes you an extraordinary person. Rose akong ganahan igive saimo kay ganahan ko sa simplicity sa beauty sa rose. It is also to remind you na you are naturally pretty. ❤️'
    },
    carnation: {
        icon: '🌺',
        name: 'Carnation of Gratitude',
        message: 'Di man sa feeler ha pero I know ga care ka saako kay ma feel nako. Thankful kaayo ko ana by. Sa pasimpleng ingat ka, sa pasimpleng pag ask kamusta ka, lami jd kaayo na sa feeling and I know sa sunod daghan mag thank you saimo. Excited nako sunduon ka saimo workplace and madungog how amazing my nurse iah is. 🙏'
    },
    iris: {
        icon: '🪻',
        name: 'Iris of Courage',
        message: 'Bilib kaayo ko saimo by kay naa kay courage to face difficult situations, ga admire jd ko saimong courage na kanang dili ka mag salig sauban sa pag face ug problems. I know strong ka but remind lng taka na you have me. It\'s okay to depend sometimes. You\'ve got this, Future Nurse! 💪'
    },
    daisy: {
        icon: '🌼',
        name: 'Daisy of Joy',
        message: 'Corny man kayo paminawon, pero you make my days lighter, and I hope I can bring that same happiness into yours. Ganahan kaayo ko makita imuhang smile and kabalo ko kanang smile nimo maka brighten nag day sa mga patient nimo! So I hope kanang smile nimo is tinuod, ayaw ifake if ma sad ka. Okay ra ma sad, basta you have me ha 😊'
    },
    anemone: {
        icon: '🌸',
        name: 'Anemone of Protection',
        message: 'Kabalo baka na ang anemone kay they protect delicate sea creatures? Same saimo, puhon kabalo ko na ampingan nimo ang mga patients nimo kay kabalo ko soft jd ka by. Basking pag kusog ka mamalikas (based saimo) pero I know kabalo jd ka mupalangga. And blessed sad ko sa imuhang care. 🛡️'
    },
    aster: {
        icon: '🏵️',
        name: 'Aster of Excellence',
        message: 'Ang aster baya daw nagpasabot ug patience ug elegance, just like sa imong gipakita sa imong journey. Wala lng ka nipasar sa exam byyy kundi, you proved that you have what it takes to be an exceptional nurse. Again, Congratulations byyyy! Late naman ko ni abot saimo pero just know PROUD KAAYO KO SAIMO! 🌟'
    }
};

// Create floating nursing/medical elements
function createParticles() {
    const container = document.getElementById('particles');
    const particles = ['💊', '💉', '🩺', '❤️', '⚕️', '🏥', '💝', '✨'];
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

function showGarden() {
    const introCard = document.getElementById('introCard');
    introCard.classList.add('hidden');

    // Play background music
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play().catch(error => {
        console.log('Audio autoplay prevented:', error);
    });

    setTimeout(() => {
        introCard.style.display = 'none';
        document.getElementById('flowerGarden').classList.add('active');
    }, 500);
}

function showModal(flowerType) {
    const flower = flowers[flowerType];
    document.getElementById('modalFlower').textContent = flower.icon;
    document.getElementById('modalTitle').textContent = flower.name;
    document.getElementById('modalMessage').textContent = flower.message;
    document.getElementById('modal').classList.add('active');
    createHearts();
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function createHearts() {
    const modal = document.querySelector('.modal-content');
    const hearts = ['💝', '💕', '💖', '💗', '💓', '💞'];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = (20 + Math.random() * 60) + '%';
            heart.style.top = '80%';
            modal.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 150);
    }
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Initialize
createParticles();