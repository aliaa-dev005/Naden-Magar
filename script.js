document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('main-gallery');
    
    // عدد الصور المطلوب عرضها
    const numberOfImages = 20;

    for (let i = 1; i <= numberOfImages; i++) {
        // إنشاء عنصر الكاريد
        const card = document.createElement('div');
        card.className = 'image-card';

        // إنشاء عنصر الصورة
        const img = document.createElement('img');
        
        // مسار الصورة (يفترض وجود مجلد باسم images والصور داخله 1.webp, 2.webp...)
        img.src = `images/q${i}.webp`;
        img.alt = `Satin Rose Design q${i}`;
        img.loading = "lazy"; // لتحسين سرعة التحميل

        // التعامل مع حالة عدم وجود الصورة (يظهر Placeholder)
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/400/b76e79/ffffff?text=Nadine+Magar';
        };

        card.appendChild(img);
        galleryContainer.appendChild(card);
    }
});