// ========== COUNTDOWN SYSTEM ==========
const countdownOverlay = document.getElementById('countdownOverlay');
const mainContent = document.getElementById('mainContent');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Tanggal target: 28 Februari 2026
const targetDate = new Date('February 28, 2026 00:00:00').getTime();

// Fungsi countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    
    // Jika sudah mencapai atau melewati tanggal target
    if (timeLeft <= 0) {
        // Hide countdown overlay
        countdownOverlay.style.display = 'none';
        
        // Show main content
        mainContent.style.display = 'block';
        
        // Trigger confetti celebration
        setTimeout(() => {
            triggerBirthdayConfetti();
        }, 1000);
        
        // Save unlock state to localStorage
        localStorage.setItem('websiteUnlocked', 'true');
        
        // Stop the countdown
        clearInterval(countdownInterval);
        return;
    }
    
    // Hitung waktu yang tersisa
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update tampilan
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // Add animation to boxes
    if (seconds % 10 === 0) {
        document.querySelectorAll('.countdown-box').forEach(box => {
            box.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                box.style.transform = 'translateY(0)';
            }, 300);
        });
    }
}

// Cek apakah website sudah di-unlock
function checkUnlockStatus() {
    const isUnlocked = localStorage.getItem('websiteUnlocked') === 'true';
    const now = new Date().getTime();
    
    // Jika sudah melewati tanggal target atau sudah di-unlock sebelumnya
    if (now >= targetDate || isUnlocked) {
        countdownOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Trigger confetti jika baru saja unlocked
        if (isUnlocked && now >= targetDate) {
            setTimeout(() => {
                triggerBirthdayConfetti();
            }, 1000);
        }
    } else {
        // Tampilkan countdown
        countdownOverlay.style.display = 'flex';
        mainContent.style.display = 'none';
        
        // Update countdown setiap detik
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
        
        // Simpan interval untuk di-clear nanti
        window.countdownInterval = countdownInterval;
    }
}

// Fungsi confetti spesial untuk ulang tahun
function triggerBirthdayConfetti() {
    // Multiple confetti bursts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#e83e8c', '#ffa8c8', '#ffffff', '#ffd700']
            });
        }, i * 300);
    }
    
    // Heart-shaped confetti
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            shapes: ['heart'],
            colors: ['#e83e8c', '#ffa8c8']
        });
    }, 1000);
    
    // Floating hearts
    createFloatingHearts(20);
}

// ========== PHOTO DATA - LOCAL IMAGES ==========
const photoData = [
    {
        img: "/images/foto1.jpg",
        title: "Senyuman Pertama",
        caption: "Senyumanmu adalah alasan mengapa hari-hariku selalu cerah."
    },
    {
        img: "/images/foto2.jpg",
        title: "Mata Indahmu",
        caption: "Di matamu, aku menemukan rumah yang selama ini kucari."
    },
    {
        img: "/images/foto3.jpg",
        title: "Saat Bersama",
        caption: "Setiap detik bersamamu lebih berharga dari seluruh kekayaan dunia."
    },
    {
        img: "/images/foto4.jpg",
        title: "Tawa Ceriamu",
        caption: "Tawamu adalah melodi terindah yang mengisi setiap ruang hatiku."
    },
    {
        img: "/images/foto5.jpg",
        title: "Petualangan Kita",
        caption: "Bersamamu, setiap tempat menjadi kisah yang ingin kubaca berulang kali."
    },
    {
        img: "/images/foto6.jpg",
        title: "Keindahan Sejati",
        caption: "Kamu adalah definisi sempurna dari semua puisi yang belum sempat kutulis."
    },
    {
        img: "/images/foto7.jpg",
        title: "Momen Santai",
        caption: "Diam bersamamu lebih berarti daripada ribuan kata dengan orang lain."
    },
    {
        img: "/images/foto8.jpg",
        title: "Cahaya Hidupku",
        caption: "Ketika dunia terasa gelap, kamu adalah bintang yang selalu menyinariku."
    },
    {
        img: "/images/foto9.jpg",
        title: "Inspirasiku",
        caption: "Kamu membuatku ingin menjadi manusia yang lebih baik setiap harinya."
    },
    {
        img: "/images/foto10.jpg",
        title: "Sahabat Terbaik",
        caption: "Tak hanya kekasih, kamu adalah tempatku berbagi semua cerita hidup."
    },
    {
        img: "/images/foto11.jpg",
        title: "Kekuatan Hatimu",
        caption: "Ketegaranmu mengajariku arti ketangguhan yang sesungguhnya."
    },
    {
        img: "/images/foto12.jpg",
        title: "Senyuman Penuh Arti",
        caption: "Setiap senyumanmu adalah babak baru dalam cerita cinta kita."
    },
    {
        img: "/images/foto13.jpg",
        title: "Dunia Kita",
        caption: "Bersamamu, dunia bukan lagi tempat asing melainkan rumah yang hangat."
    },
    {
        img: "/images/foto14.jpg",
        title: "Harapan dan Impian",
        caption: "Semua mimpiku memiliki satu kesamaan: kamu ada di dalamnya."
    },
    {
        img: "/images/foto15.jpg",
        title: "Cinta Sejati",
        caption: "Cinta kita adalah bukti bahwa takdir memang merancang pertemuan kita."
    },
    {
        img: "/images/foto16.jpg",
        title: "Pelajaran Berharga",
        caption: "Dari kamu, aku belajar bahwa cinta sejati tidak membutuhkan alasan."
    },
    {
        img: "/images/foto17.jpg",
        title: "Sempurna Adanya",
        caption: "Dengan segala kekuranganmu, bagi ku kamu tetap manusia paling sempurna."
    },
    {
        img: "/images/foto18.jpg",
        title: "Kenangan Manis",
        caption: "Setiap kenangan bersamamu adalah harta karun yang kujaga seumur hidup."
    },
    {
        img: "/images/foto19.jpg",
        title: "Masa Depan Cerah",
        caption: "Bersamamu, masa depan terlihat seperti petualangan yang tak ingin kulewatkan."
    },
    {
        img: "/images/foto20.jpg",
        title: "Selamanya",
        caption: "Aku berjanji akan selalu ada, dalam setiap musim hidupmu."
    },
    {
        img: "/images/foto21.jpg",
        title: "Pelukan Hangat",
        caption: "Dalam pelukanmu, aku menemukan ketenangan yang tak tergantikan."
    },
    {
        img: "/images/foto22.jpg",
        title: "Binar Mata",
        caption: "Binar matamu ketika bahagia adalah pemandangan terindah bagiku."
    },
    {
        img: "/images/foto23.jpg",
        title: "Sederhana tapi Berarti",
        caption: "Momen-momen sederhana bersamamu adalah yang paling berharga."
    },
    {
        img: "/images/foto24.jpg",
        title: "Saling Mengerti",
        caption: "Tanpa kata, kita saling mengerti. Itulah keindahan hubungan kita."
    },
    {
        img: "/images/foto25.jpg",
        title: "Cinta yang Tumbuh",
        caption: "Setiap hari, cintaku padamu tumbuh lebih dalam dan lebih kuat."
    },
    {
        img: "/images/foto26.jpg",
        title: "Partner Hidup",
        caption: "Kamu bukan hanya pacar, tapi partner untuk melalui semua lika-liku hidup."
    },
    {
        img: "/images/foto27.jpg",
        title: "Kejujuran dan Kasih",
        caption: "Aku jatuh cinta pada kejujuranmu dan kasih sayang yang tulus."
    },
    {
        img: "/images/foto28.jpg",
        title: "Pelindungku",
        caption: "Di sampingmu, aku merasa terlindungi dari semua badai kehidupan."
    },
    {
        img: "/images/foto29.jpg",
        title: "Sumber Kekuatan",
        caption: "Kamu adalah sumber kekuatan saat aku lemah, cahaya saat aku dalam kegelapan."
    },
    {
        img: "/images/foto30.jpg",
        title: "Tak Terbantahkan",
        caption: "Cintaku padamu adalah kebenaran paling tak terbantahkan dalam hidupku."
    },
    {
        img: "/images/foto31.jpg",
        title: "Harmoni Sempurna",
        caption: "Kita seperti dua nada yang berbeda namun menciptakan harmoni sempurna."
    },
    {
        img: "/images/foto32.jpg",
        title: "Tak Pernah Bosan",
        caption: "Bahkan setelah sekian lama, aku tak pernah bosan memandangimu."
    },
    {
        img: "/images/foto33.jpg",
        title: "Doa yang Terkabul",
        caption: "Kamu adalah jawaban dari semua doa yang tak pernah kuucapkan."
    },
    {
        img: "/images/foto34.jpg",
        title: "Cinta Terakhir",
        caption: "Kamu adalah cinta terakhirku, aku harap bersamamu sampai kapanpun"
    },
    {
        img: "/images/foto35.jpg",
        title: "Abadi dalam Hati",
        caption: "Meski waktu berlalu, cintaku padamu akan tetap abadi dalam hatiku."
    }
];

// Hadiah Kecil - tetap 5 foto pertama
const myPhotos = [
    { img: "/images/foto1.jpg" },
    { img: "/images/foto2.jpg" },
    { img: "/images/foto3.jpg" },
    { img: "/images/foto4.jpg" },
    { img: "/images/foto5.jpg" }
];

// Cake Data
const cakesData = {
    chocolate: {
        title: "Kue Coklat 🍫",
        icon: '<i class="fas fa-cookie-bite"></i>',
        colorClass: "cake-chocolate",
        message: "Seperti kue coklat yang kaya dan dalam rasanya, begitu pula cintaku padamu. Setiap lapisan coklat yang meleleh di lidah mewakili setiap kenangan manis yang kita buat bersama. Coklat mungkin pahit di awal, tapi berakhir manis - seperti perjalanan kita yang penuh tantangan namun selalu berakhir dengan kebahagiaan.",
        quote: "Cintaku padamu seperti coklat terbaik - semakin lama, semakin dalam, dan semakin tak terlupakan."
    },
    strawberry: {
        title: "Kue Stroberi 🍓",
        icon: '<i class="fas fa-heart"></i>',
        colorClass: "cake-strawberry",
        message: "Stroberi merah merepresentasikan hati yang berdetak kencang setiap kali memikirkanmu. Manisnya stroberi seperti senyumanmu yang bisa menghangatkan hari terdingin sekalipun. Setiap potongan stroberi pada kue ini adalah setiap momen bahagia yang kamu berikan padaku.",
        quote: "Seperti stroberi yang sempurna, kamu adalah buah hati dalam hidupku yang membuat segalanya terasa manis."
    },
    matcha: {
        title: "Kue Matcha 🍵",
        icon: '<i class="fas fa-leaf"></i>',
        colorClass: "cake-matcha",
        message: "Matcha yang menenangkan seperti ketenangan yang kamu bawa dalam hidupku. Rasa uniknya yang tidak bisa diduplikasi mewakili keunikan hubungan kita. Seperti matcha yang perlu diseduh dengan hati-hati, cinta kita juga tumbuh dengan perlahan namun pasti, menghasilkan rasa yang sempurna.",
        quote: "Cintaku padamu seperti matcha - murni, menenangkan, dan semakin berarti setiap saat."
    },
    vanilla: {
        title: "Kue Vanilla 🌸",
        icon: '<i class="fas fa-ice-cream"></i>',
        colorClass: "cake-vanilla",
        message: "Vanilla sering dianggap sederhana, tapi justru itulah keindahannya. Seperti cinta kita yang sederhana namun bermakna dalam. Aroma vanilla yang harum mewakili kehangatan yang selalu kamu sebarkan. Dalam kesederhanaannya, vanilla adalah rasa yang paling dicintai - seperti kamu dalam hidupku.",
        quote: "Cinta sederhana kita seperti vanilla - klasik, abadi, dan selalu menjadi favorit hati."
    }
};

// ========== MUSIC SYSTEM ==========
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const musicModal = document.getElementById('musicModal');
const closeMusicModal = document.getElementById('closeMusicModal');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const currentTrack = document.getElementById('currentTrack');
const currentArtist = document.getElementById('currentArtist');

let isPlaying = false;
let isFirstPlay = true;

// Initialize music
function initializeMusic() {
    // Load the song
    backgroundMusic.src = "./media/lany.mp3";
    backgroundMusic.volume = volumeSlider.value;
    
    // Set up event listeners
    musicToggleBtn.addEventListener('click', toggleMusicModal);
    closeMusicModal.addEventListener('click', closeMusicModalFunc);
    playPauseBtn.addEventListener('click', togglePlayPause);
    volumeSlider.addEventListener('input', updateVolume);
    
    // Update play/pause button
    backgroundMusic.addEventListener('play', function() {
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        musicToggleBtn.innerHTML = '<i class="fas fa-music"></i>';
    });
    
    backgroundMusic.addEventListener('pause', function() {
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        musicToggleBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
}

function toggleMusicModal() {
    musicModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto play when opening modal
    if (!isPlaying && isFirstPlay) {
        isFirstPlay = false;
        setTimeout(() => {
            togglePlayPause();
        }, 300);
    }
}

function closeMusicModalFunc() {
    musicModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function togglePlayPause() {
    if (isPlaying) {
        backgroundMusic.pause();
    } else {
        // Try to play the music
        const playPromise = backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented:", error);
                // Show user they need to interact
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            });
        }
    }
}

function updateVolume() {
    backgroundMusic.volume = volumeSlider.value;
}

// ========== PASSWORD SYSTEM ==========
const passwordModal = document.getElementById('passwordModal');
const secretMenuBtn = document.getElementById('secretMenuBtn');
const closePasswordModal = document.getElementById('closePasswordModal');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const passwordError = document.getElementById('passwordError');
const passwordSuccess = document.getElementById('passwordSuccess');
const secretMessage = document.getElementById('secretMessage');

const correctPassword = "9-12-2025"; // DD-MM-YYYY
let passwordAttempts = 0;
const maxAttempts = 5;

// Open password modal
secretMenuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close sidebar if open
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Open password modal
    passwordModal.classList.add('active');
    passwordInput.focus();
    
    // Reset form
    passwordInput.value = '';
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'none';
    secretMessage.classList.remove('active');
    passwordInput.style.borderColor = 'var(--pink-color)';
    
    // Reset attempts counter
    passwordAttempts = 0;
    passwordError.textContent = '';
});

// Close password modal
closePasswordModal.addEventListener('click', function() {
    closePasswordModalFunc();
});

// Submit password with button
submitPassword.addEventListener('click', checkPassword);

// Submit password with Enter key
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Clear error when typing
passwordInput.addEventListener('input', function() {
    this.style.borderColor = 'var(--pink-color)';
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'none';
});

// Close modal function
function closePasswordModalFunc() {
    passwordModal.classList.remove('active');
    passwordInput.value = '';
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'none';
    secretMessage.classList.remove('active');
    passwordInput.style.borderColor = 'var(--pink-color)';
    passwordAttempts = 0;
}

// Check password function
function checkPassword() {
    const enteredPassword = passwordInput.value.trim();
    
    if (!enteredPassword) {
        passwordError.textContent = 'Password tidak boleh kosong!';
        passwordError.style.display = 'block';
        passwordInput.style.borderColor = '#ff6b6b';
        passwordInput.classList.add('shake');
        setTimeout(() => passwordInput.classList.remove('shake'), 500);
        return;
    }
    
    passwordAttempts++;
    
    if (enteredPassword === correctPassword) {
        // Correct Pass
        passwordError.style.display = 'none';
        passwordSuccess.textContent = '✓ Password benar! Membuka pesan rahasia...';
        passwordSuccess.style.display = 'block';
        passwordInput.style.borderColor = '#4CAF50';
        
        // Show secret message after delay
        setTimeout(() => {
            secretMessage.classList.add('active');
            secretMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Trigger confetti
            triggerConfetti();
            
            // Show success message
            passwordSuccess.textContent = '✓ Pesan rahasia berhasil dibuka!';
        }, 800);
        
        // Reset Attempts
        passwordAttempts = 0;
        
    } else {
        // Wrong Pass
        const remainingAttempts = maxAttempts - passwordAttempts;
        
        if (remainingAttempts > 0) {
            passwordError.textContent = `Password salah! (Percobaan ${passwordAttempts}/${maxAttempts})`;
            passwordError.style.display = 'block';
            passwordSuccess.style.display = 'none';
            passwordInput.style.borderColor = '#ff6b6b';
            
            // Shake effect
            passwordInput.classList.add('shake');
            setTimeout(() => passwordInput.classList.remove('shake'), 500);
            
            // Clear input
            passwordInput.value = '';
            passwordInput.focus();
            
        } else {
            // Max Attempts
            passwordError.textContent = `Terlalu banyak percobaan salah.`;
            passwordError.style.display = 'block';
            passwordInput.disabled = true;
            submitPassword.disabled = true;
            
            // Close modal after delay
            setTimeout(() => {
                closePasswordModalFunc();
                passwordInput.disabled = false;
                submitPassword.disabled = false;
                passwordAttempts = 0;
            }, 2000);
        }
    }
}

// Close password modal when clicking outside
passwordModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closePasswordModalFunc();
    }
});

// Close password modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && passwordModal.classList.contains('active')) {
        closePasswordModalFunc();
    }
});

// ========== SIDEBAR FUNCTIONALITY ==========
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuLinks = document.querySelectorAll('.menu-link');
const sidebarContents = document.querySelectorAll('.sidebar-content');

// Toggle sidebar
menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Switch between sidebar contents
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.id !== 'secretMenuBtn') {
            e.preventDefault();
            
            // Get target content ID
            const targetId = this.getAttribute('data-target');
            
            // Remove active class from all links and contents
            menuLinks.forEach(l => l.classList.remove('active'));
            sidebarContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show target content
            document.getElementById(targetId).classList.add('active');
        }
    });
});

// Close sidebar when pressing ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== CAKE MODAL FUNCTIONALITY ==========
const cakeModal = document.getElementById('cakeModal');
const closeCakeModal = document.getElementById('closeCakeModal');
const cakeModalIcon = document.getElementById('cakeModalIcon');
const cakeModalTitle = document.getElementById('cakeModalTitle');
const cakeModalMessage = document.getElementById('cakeModalMessage');
const cakeModalQuote = document.getElementById('cakeModalQuote');

// Add click events to cake items
document.querySelectorAll('.cake-item').forEach(item => {
    item.addEventListener('click', function() {
        const cakeType = this.getAttribute('data-cake');
        const cake = cakesData[cakeType];
        
        // Set modal content
        cakeModalIcon.innerHTML = cake.icon;
        cakeModalIcon.className = `cake-modal-icon ${cake.colorClass}`;
        cakeModalTitle.textContent = cake.title;
        cakeModalMessage.textContent = cake.message;
        cakeModalQuote.textContent = cake.quote;
        
        // Show modal
        cakeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Trigger confetti
        setTimeout(() => {
            createSimpleConfetti();
        }, 300);
    });
});

// Close cake modal
closeCakeModal.addEventListener('click', function() {
    cakeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close cake modal when clicking outside
cakeModal.addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== THEME MODAL FUNCTIONALITY ==========
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeModal = document.getElementById('themeModal');
const closeThemeModal = document.getElementById('closeThemeModal');
const selectThemeBtns = document.querySelectorAll('.select-theme-btn');

// Open theme modal
themeToggleBtn.addEventListener('click', function() {
    themeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close theme modal
closeThemeModal.addEventListener('click', function() {
    themeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close theme modal when clicking outside
themeModal.addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Function to set theme with background
function setThemeWithBackground(theme, backgroundUrl) {
    // Remove all theme classes
    document.body.classList.remove('dark-theme', 'light-theme', 'pink-theme', 'photo-background');
    
    // Add selected theme class
    document.body.classList.add(theme + '-theme');
    
    // Add photo-background class
    document.body.classList.add('photo-background');
    
    // Set background image
    document.body.style.backgroundImage = `url('${backgroundUrl}')`;
    
    // Save preferences to localStorage
    localStorage.setItem('selectedTheme', theme);
    localStorage.setItem('selectedBackground', backgroundUrl);
    localStorage.setItem('photoBackground', 'true');
    
    // Close modal
    themeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Trigger confetti
    setTimeout(() => {
        createSimpleConfetti();
    }, 300);
}

// Add event listeners to theme selection buttons
selectThemeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        const backgroundUrl = this.getAttribute('data-bg');
        
        setThemeWithBackground(theme, backgroundUrl);
    });
});

// ========== GIFT PHOTO MODAL ==========
const giftPhotoModal = document.getElementById('giftPhotoModal');
const giftModalImage = document.getElementById('giftModalImage');
const closeGiftModal = document.getElementById('closeGiftModal');

// Add click events to gift photos
document.querySelectorAll('.gift-photo-item').forEach(item => {
    item.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const photo = myPhotos[index];
        
        giftModalImage.src = photo.img;
        
        giftPhotoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close gift photo modal
closeGiftModal.addEventListener('click', function() {
    giftPhotoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close gift modal when clicking outside
giftPhotoModal.addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== CONFETTI EFFECTS ==========
function triggerConfetti() {
    // Main confetti burst
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#e83e8c', '#ffa8c8', '#ffffff', '#ffd700']
    });
    
    // Left side confetti
    confetti({
        particleCount: 80,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.6 },
        colors: ['#e83e8c', '#ffa8c8', '#ffffff']
    });
    
    // Right side confetti
    confetti({
        particleCount: 80,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.6 },
        colors: ['#e83e8c', '#ffa8c8', '#ffffff']
    });
    
    // Additional burst after delay
    setTimeout(() => {
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
        });
    }, 500);
    
    // Create floating hearts
    createFloatingHearts(15);
}

function createFloatingHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.opacity = '0.8';
            heart.style.transform = 'translateY(0)';
            heart.style.transition = 'transform 3s linear, opacity 3s';
            
            document.body.appendChild(heart);
            
            // Animate heart floating up
            setTimeout(() => {
                heart.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
                heart.style.opacity = '0';
            }, 10);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3100);
        }, i * 200);
    }
}

function createSimpleConfetti() {
    const colors = ['#e83e8c', '#ffa8c8', '#ffffff', '#ffd700'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-particle';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        
        document.body.appendChild(confetti);
        
        // Animate confetti falling
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        // Remove confetti after animation
        animation.onfinish = () => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        };
    }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // First, check unlock status
    checkUnlockStatus();
    
    // Initialize music (only if website is unlocked)
    if (mainContent.style.display === 'block') {
        initializeMusic();
        
        // Confetti button
        document.getElementById('triggerConfetti').addEventListener('click', triggerConfetti);
        
        // Load saved theme preference
        const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
        const savedBackground = localStorage.getItem('selectedBackground') || '/images/background.jpg';
        const photoBackground = localStorage.getItem('photoBackground') === 'true';
        
        if (photoBackground) {
            // Set saved theme with background
            document.body.classList.add(savedTheme + '-theme', 'photo-background');
            document.body.style.backgroundImage = `url('${savedBackground}')`;
        }
        
        // Generate photo gallery
        const gallery = document.getElementById('photoGallery');
        
        photoData.forEach((photo, index) => {
            const photoCard = document.createElement('div');
            photoCard.className = 'photo-card';
            photoCard.setAttribute('data-index', index);
            
            photoCard.innerHTML = `
                <img src="${photo.img}" alt="${photo.title}" onerror="this.src='/images/foto${(index % 5) + 1}.jpg'">
                <div class="photo-caption">
                    <h3>${photo.title}</h3>
                    <p>${photo.caption}</p>
                </div>
            `;
            
            gallery.appendChild(photoCard);
            
            // Add click event to show modal
            photoCard.addEventListener('click', function() {
                const modal = document.getElementById('photoModal');
                const modalImage = document.getElementById('modalImage');
                const modalCaption = document.getElementById('modalCaption');
                
                modalImage.src = photo.img;
                modalImage.alt = photo.title;
                modalCaption.innerHTML = `<h3>${photo.title}</h3><p>${photo.caption}</p>`;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Trigger confetti when opening a photo
                if (index % 5 === 0) {
                    setTimeout(() => {
                        createSimpleConfetti();
                    }, 300);
                }
            });
        });
        
        // Close modal functionality
        document.getElementById('closeModal').addEventListener('click', function() {
            const modal = document.getElementById('photoModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside the image
        document.getElementById('photoModal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close cake modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && cakeModal.classList.contains('active')) {
                cakeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close theme modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && themeModal.classList.contains('active')) {
                themeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close music modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && musicModal.classList.contains('active')) {
                closeMusicModalFunc();
            }
        });
        
        // Close gift modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && giftPhotoModal.classList.contains('active')) {
                giftPhotoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Trigger confetti when scrolling to gallery
        let galleryConfettiTriggered = false;
        window.addEventListener('scroll', function() {
            const gallerySection = document.querySelector('.gallery-section');
            const galleryPosition = gallerySection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;
            
            if (galleryPosition < screenPosition && !galleryConfettiTriggered) {
                galleryConfettiTriggered = true;
                setTimeout(() => {
                    createSimpleConfetti();
                }, 500);
            }
        });
        
        // Add surprise message when opening sidebar for the first time
        let sidebarOpened = false;
        menuToggle.addEventListener('click', function() {
            if (!sidebarOpened) {
                sidebarOpened = true;
                setTimeout(() => {
                    createSimpleConfetti();
                }, 300);
            }
        });
        
        // Add confetti when viewing gift photos
        document.querySelectorAll('.gift-photo-item').forEach((item, index) => {
            item.addEventListener('click', function() {
                if (index === 4) {
                    setTimeout(() => {
                        triggerConfetti();
                    }, 500);
                }
            });
        });
        
        // Fallback image handler jika foto tidak ditemukan
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                console.log(`Image failed to load: ${this.src}`);
                // Fallback ke foto pertama jika ada error
                if (this.src.includes('/images/')) {
                    this.src = '/images/foto1.jpg';
                }
            });
        });
        
        // Music error handling
        backgroundMusic.addEventListener('error', function(e) {
            console.log("Music error:", e);
            currentTrack.textContent = "Error loading music";
            currentArtist.textContent = "Check ./media/lany.mp3 file";
        });
        
        // Music loading handler
        backgroundMusic.addEventListener('canplay', function() {
            console.log("Music is ready to play");
            currentTrack.textContent = "Anything 4u - LANY";
            currentArtist.textContent = "Ready to play!";
        });
        
        // Auto close music modal when clicking outside
        musicModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeMusicModalFunc();
            }
        });
        
        // Auto-play music on website unlock
        setTimeout(() => {
            if (mainContent.style.display === 'block' && !isPlaying && isFirstPlay) {
                isFirstPlay = false;
                togglePlayPause();
            }
        }, 2000);
    }
});
