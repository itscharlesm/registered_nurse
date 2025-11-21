const flowers = {
    tulip: {
        icon: '🌷',
        name: 'Tulip of New Beginnings',
        message: "Today marks the beautiful beginning of your nursing career byy! You may start slow but don't give up on what you want. Ana gani sila 'It's a blessing to be tired in pursuit of a challenge of your own choosing'. And remember you have me sa imong fresh start. 💕"
    },
    sunflower: {
        icon: '🌻',
        name: 'Sunflower of Hope',
        message: "You're just like a sunflower because you bring light and warmth to me, and I know you will bring hope to your future patients. You will be the source of comfort in their darkest days. So keep shining, my nurse! ☀️"
    },
    rose: {
        icon: '🌹',
        name: 'Rose of Compassion',
        message: 'Grabe imuhang compassion ug dedication by that makes you extraordinary person. Rose akong ganahan igive saimo kay ganahan ko sa simplicity sa beauty sa rose. It is also to remind na pretty ka naturally. ❤️'
    },
    carnation: {
        icon: '🌺',
        name: 'Carnation of Gratitude',
        message: 'Your patients may not always say it, but your care means everything. Thank you for the countless hours of study, the sacrifices you\'ve made, and the love you\'ll give. You are appreciated beyond measure, dear Nurse! 🙏'
    },
    iris: {
        icon: '🪻',
        name: 'Iris of Courage',
        message: 'You possess the courage to face difficult situations, the wisdom to make critical decisions, and the faith to believe in recovery. Trust your training, trust yourself. You\'ve got this, Nurse! 💪'
    },
    daisy: {
        icon: '🌼',
        name: 'Daisy of Joy',
        message: 'Never lose your sense of wonder and joy! Your smile can brighten a patient\'s day more than any medicine. Keep that cheerful spirit alive—it\'s one of your greatest tools for healing! 😊'
    },
    anemone: {
        icon: '🌸',
        name: 'Anemone of Protection',
        message: 'You are now a guardian of health and life. Like the anemone that protects delicate sea creatures, you will shield your patients with expert care, watchful eyes, and a protective heart. You are their safe haven! 🛡️'
    },
    aster: {
        icon: '🏵️',
        name: 'Aster of Excellence',
        message: 'Asters symbolize patience and elegance—qualities you\'ve demonstrated throughout your journey. You didn\'t just pass an exam; you proved you have what it takes to be an exceptional nurse. We\'re so proud of you! 🌟'
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