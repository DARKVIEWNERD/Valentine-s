const images = [
    { src: 'photos/IMG_2024-05-13-11-14-15-566.jpg', caption: 'First Date 💕' },
    { src: 'photos/IMG_20240513_095500_703.jpg', caption: 'Morning Smile ☀️' },
    { src: 'photos/IMG_20240517_112357_405.jpg', caption: 'Laughing Together 😄' },
    { src: 'photos/IMG_20240517_112402_681.jpg', caption: 'Sweet Moments 🍬' },
    { src: 'photos/IMG_20240520_162446_784.jpg', caption: 'Adventure Time 🌟' },
    { src: 'photos/IMG_20240603_110839_154.jpg', caption: 'Perfect Day 🌈' },
    { src: 'photos/IMG_20240603_120646_0.jpg', caption: 'Your Beautiful Eyes 👀' },
    { src: 'photos/IMG_20240603_132518_867.jpg', caption: 'Forever Yours 💍' },
    { src: 'photos/IMG_20250113_144759_333.jpg', caption: 'Cherished Moments 💖' },
    { src: 'photos/IMG_20250113_144652_531.jpg', caption: 'Together Forever 💞' },
    { src: 'photos/IMG_20240829_152231_591.jpg', caption: 'Unforgettable Day 🌟' },
    { src: 'photos/IMG_20240829_152229_534.jpg', caption: 'Love and Laughter 😂' },
    { src: 'photos/IMG_20240829_152222_559.jpg', caption: 'Sweet Embrace 🤗' },
    { src: 'photos/IMG_20240829_152221_080.jpg', caption: 'Heartfelt Moments 💓' },
    { src: 'photos/IMG_20240829_152216_123.jpg', caption: 'Joyful Times 😊' },
    { src: 'photos/IMG_20240710_160239_539.jpg', caption: 'Beautiful Memories 📸' },
    { src: 'photos/IMG_20240710_160202_002.jpg', caption: 'Smiling Together 😁' },
    { src: 'photos/IMG_20240701_181836_879.jpg', caption: 'Lovely Day 🌹' },
    { src: 'photos/IMG_20240613_143336_690.jpg', caption: 'Happy Moments 😍' },
    { src: 'photos/IMG_20240603_132518_867.jpg', caption: 'Forever Yours 💍' },
    { src: 'photos/IMG_20240521_134827_798.jpg', caption: 'Special Day 🎉' },
   
];

const rainContainer = document.querySelector('.rain');
const createRain = () => {
    const span = document.createElement('span');
    span.textContent = "Happy Valentine's Day";
    span.style.left = `${Math.random() * 100}vw`;
    span.style.animationDuration = `${Math.random() * 2 + 3}s`;
    rainContainer.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);
};

setInterval(createRain, 300);

let lastImageTime = 0;
const imageInterval = 250;
let rotation = -5;

const createPolaroidElement = (src, x, y, caption) => {
    const polaroid = document.createElement('div');
    polaroid.classList.add('polaroid');
    
    // Random rotation and position offset
    const angle = rotation = (rotation + 10) % 15 - 7;
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;

    polaroid.style.left = `${x + offsetX}px`;
    polaroid.style.top = `${y + offsetY}px`;
    polaroid.style.transform = `rotate(${angle}deg)`;

    const img = new Image();
    img.src = src;
    img.onload = () => {
        polaroid.innerHTML = `
            ${img.outerHTML}
            <span>${caption}</span>
        `;
    };

    document.body.appendChild(polaroid);
    
    // Animation
    polaroid.style.animation = 'popUp 0.5s ease forwards, fadeOut 0.5s ease 3.5s forwards';

    setTimeout(() => {
        polaroid.remove();
    }, 4000);

    // Create floating heart
    if(Math.random() > 0.8) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💖';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
};

document.addEventListener('mousemove', (e) => {
    if (Date.now() - lastImageTime > imageInterval) {
        const { src, caption } = images[Math.floor(Math.random() * images.length)];
        createPolaroidElement(src, e.pageX, e.pageY, caption);
        lastImageTime = Date.now();
    }
});

// Add initial hearts animation
setInterval(() => {
    if(Math.random() > 0.7) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💖';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${window.innerHeight + 50}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}, 1000);

