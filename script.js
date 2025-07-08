document.addEventListener('DOMContentLoaded', function() {

    // --- DYNAMICALLY LOAD DESIGN IMAGES ---
    const designImages = [
        'another_me_Edit_MORE.png',
        'bablala22.jpg',
        'bablala4jpg.jpg',
        'baddie2.jpg',
        'bali.jpg',
        'epchkas.jpg',
        'MEEEEEEEEEEEEEEEE.jpg',
        'seedhe_MAUTH.2jpg.jpg',
        'suttttaaaaa3.jpg',
        'wolfiee.4jpg.jpg'
    ];

    const designGrid = document.querySelector('#designs .grid-container');
    if (designGrid) {
        designImages.forEach(image => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            
            const img = document.createElement('img');
            img.src = `Images/${image}`;
            img.alt = 'Design Work';
            img.style.width = '100%'; // Ensure image fits the container
            img.style.display = 'block';

            gridItem.appendChild(img);
            designGrid.appendChild(gridItem);
        });
    }

    // --- DYNAMICALLY LOAD VIDEO EDITS ---
    const videoFiles = [
        'arcade_1.mp4',
        'lv_0_20240403131243.mp4',
        'orient_IRON MAN.mp4',
        'SUSU_BOY_FINAL.mp4'
    ];

    const videoContainer = document.querySelector('#videos .video-container');
    if (videoContainer) {
        videoFiles.forEach(videoFile => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';

            const video = document.createElement('video');
            video.src = `Videos/${videoFile}`;
            video.controls = true;
            video.style.width = '100%';
            video.style.display = 'block';

            const playLabel = document.createElement('div');
            playLabel.className = 'play-label';
            playLabel.textContent = 'PLAY!';

            videoItem.appendChild(video);
            videoItem.appendChild(playLabel);
            videoContainer.appendChild(videoItem);
        });
    }

    // --- SMOOTH SCROLLING (Optional, can be added later) ---
    // Example:
    // const navLinks = document.querySelectorAll('nav a');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         document.querySelector(targetId).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

});