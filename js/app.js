/* ========================================
   REINA GLOWUP - App Logic
   ======================================== */

// ========================================
// Configuration
// ========================================
const CONFIG = {
    whatsappNumber: '51964005823',
    defaultMessage: 'Hola, me interesa este producto:'
};

// ========================================
// Products Data
// ========================================
const products = [
    // Ropa
    {
        id: 1,
        name: 'Vestido Floral Midi',
        category: 'ropa',
        price: 189,
        oldPrice: 249,
        size: 'S-XL',
        image: 'https://images.unsplash.com/photo-1612847760086-f481d7b93de2?w=600',
        badge: '-24%',
        rating: 4.8,
        reviews: 128
    },
    {
        id: 2,
        name: 'Blusa Seda Beige',
        category: 'ropa',
        price: 89,
        oldPrice: null,
        size: 'XS-L',
        image: 'https://images.unsplash.com/photo-1609533947329-f3e148473d45?w=600',
        badge: 'Nuevo',
        rating: 4.9,
        reviews: 96
    },
    {
        id: 3,
        name: 'Pantalón Wide Leg',
        category: 'ropa',
        price: 129,
        oldPrice: null,
        size: '28-36',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600',
        badge: null,
        rating: 4.7,
        reviews: 84
    },
    {
        id: 4,
        name: 'Top Cropped Negro',
        category: 'ropa',
        price: 59,
        oldPrice: 79,
        size: 'S-M',
        image: 'https://images.unsplash.com/photo-1609533960426-1e79f14e787f?w=600',
        badge: '-25%',
        rating: 4.6,
        reviews: 76
    },
    {
        id: 5,
        name: 'Falda Plisada Rosa',
        category: 'ropa',
        price: 99,
        oldPrice: null,
        size: 'XS-L',
        image: 'https://images.unsplash.com/photo-1614098097306-c67b8020c04e?w=600',
        badge: null,
        rating: 4.8,
        reviews: 64
    },
    {
        id: 6,
        name: 'Camisa Oversized Linen',
        category: 'ropa',
        price: 119,
        oldPrice: null,
        size: 'S-XXL',
        image: 'https://images.unsplash.com/photo-1528812969535-4bcefc071532?w=600',
        badge: null,
        rating: 4.7,
        reviews: 52
    },
    
    // Accesorios
    {
        id: 7,
        name: 'Collar Perlas Minimalista',
        category: 'accesorios',
        price: 49,
        oldPrice: null,
        size: 'Único',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600',
        badge: 'Nuevo',
        rating: 4.9,
        reviews: 142
    },
    {
        id: 8,
        name: 'Aretes Dorados Circulares',
        category: 'accesorios',
        price: 35,
        oldPrice: null,
        size: 'Único',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600',
        badge: null,
        rating: 4.8,
        reviews: 98
    },
    {
        id: 9,
        name: 'Bolso Tote Cuero',
        category: 'accesorios',
        price: 159,
        oldPrice: 199,
        size: 'Único',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600',
        badge: '-20%',
        rating: 4.7,
        reviews: 76
    },
    {
        id: 10,
        name: 'Reloj Rosa Gold',
        category: 'accesorios',
        price: 89,
        oldPrice: null,
        size: 'Único',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600',
        badge: null,
        rating: 4.9,
        reviews: 112
    },
    {
        id: 11,
        name: 'Gafas de Sol Cat Eye',
        category: 'accesorios',
        price: 69,
        oldPrice: null,
        size: 'Único',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600',
        badge: null,
        rating: 4.6,
        reviews: 54
    },
    {
        id: 12,
        name: 'Cinta para Pelo Satin',
        category: 'accesorios',
        price: 19,
        oldPrice: null,
        size: 'Único',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600',
        badge: null,
        rating: 4.8,
        reviews: 88
    },
    
    // Ofertas
    {
        id: 13,
        name: 'Pack Verano Completo',
        category: 'ofertas',
        price: 249,
        oldPrice: 399,
        size: 'S-L',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600',
        badge: '-38%',
        rating: 4.9,
        reviews: 45
    },
    {
        id: 14,
        name: 'Kit Accesorios Dorados',
        category: 'ofertas',
        price: 79,
        oldPrice: 120,
        size: 'Único',
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600',
        badge: '-34%',
        rating: 4.8,
        reviews: 67
    },
    {
        id: 15,
        name: 'Look Casual Mujer',
        category: 'ofertas',
        price: 179,
        oldPrice: 250,
        size: 'XS-L',
        image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600',
        badge: '-28%',
        rating: 4.7,
        reviews: 38
    }
];

// ========================================
// Offers Data
// ========================================
const offers = [
    {
        id: 101,
        name: 'Pack 2 Blusas',
        description: 'Lleva 2 blusas de tu elección y ahorra',
        price: 149,
        oldPrice: 178,
        icon: 'shirt',
        message: 'Hola, me interesa el Pack 2 Blusas - S/149'
    },
    {
        id: 102,
        name: 'Look Completo',
        description: 'Vestido + Accesorios + Bolso',
        price: 299,
        oldPrice: 407,
        icon: 'package',
        message: 'Hola, me interesa el Look Completo - S/299'
    },
    {
        id: 103,
        name: 'Kit Accesorios',
        description: 'Collar + Aretes + Reloj',
        price: 149,
        oldPrice: 173,
        icon: 'gem',
        message: 'Hola, me interesa el Kit Accesorios - S/149'
    }
];

// ========================================
// DOM Elements
// ========================================
const productsGrid = document.getElementById('productsGrid');
const offersGrid = document.getElementById('offersGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const categoryTabs = document.querySelectorAll('.tab');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');

// ========================================
// State
// ========================================
let currentCategory = 'todos';
let searchQuery = '';

// ========================================
// Utility Functions
// ========================================
function formatPrice(price) {
    return `S/${price}`;
}

function generateWhatsAppUrl(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

function generateProductMessage(product) {
    return `${CONFIG.defaultMessage} ${product.name} - ${formatPrice(product.price)}`;
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    
    return stars;
}

// ========================================
// Render Functions
// ========================================
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    const badgeHtml = product.badge 
        ? `<span class="product-badge">${product.badge}</span>` 
        : '';
    
    const oldPriceHtml = product.oldPrice 
        ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` 
        : '';
    
    const whatsappUrl = generateWhatsAppUrl(generateProductMessage(product));
    
    card.innerHTML = `
        <div class="product-image">
            ${badgeHtml}
            <button class="product-wishlist" aria-label="Agregar a favoritos">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            </button>
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${renderStars(product.rating)}
                <span>(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="product-price-current">${formatPrice(product.price)}</span>
                ${oldPriceHtml}
            </div>
            <a href="${whatsappUrl}" class="product-whatsapp" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Comprar por WhatsApp
            </a>
        </div>
    `;
    
    return card;
}

function createOfferCard(offer) {
    const card = document.createElement('div');
    card.className = 'offer-card';
    
    const iconSvgs = {
        shirt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/>
        </svg>`,
        package: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
        </svg>`,
        gem: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 3h12l4 6-10 13L2 9z"/>
            <path d="M2 9h20M12 22L8 9l4-6 4 6-4 13z"/>
        </svg>`
    };
    
    card.innerHTML = `
        <div class="offer-image">
            ${iconSvgs[offer.icon] || iconSvgs.package}
        </div>
        <h3 class="offer-name">${offer.name}</h3>
        <p class="offer-description">${offer.description}</p>
        <p class="offer-price">
            ${formatPrice(offer.price)}
            <span class="offer-price-old">${formatPrice(offer.oldPrice)}</span>
        </p>
        <a href="${generateWhatsAppUrl(offer.message)}" class="offer-whatsapp" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Comprar
        </a>
    `;
    
    return card;
}

function filterProducts() {
    return products.filter(product => {
        const matchesCategory = currentCategory === 'todos' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

function renderProducts() {
    const filteredProducts = filterProducts();
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        noResults.style.display = 'block';
        productsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        productsGrid.style.display = 'grid';
        
        filteredProducts.forEach(product => {
            const card = createProductCard(product);
            productsGrid.appendChild(card);
        });
    }
}

function renderOffers() {
    offersGrid.innerHTML = '';
    
    offers.forEach(offer => {
        const card = createOfferCard(offer);
        offersGrid.appendChild(card);
    });
}

// ========================================
// Event Listeners
// ========================================
function initCategoryTabs() {
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderProducts();
        });
    });
}

function initSearch() {
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = e.target.value;
            renderProducts();
        }, 300);
    });
}

function initSearchOverlay() {
    if (searchToggle && searchOverlay && searchClose) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInput.focus();
        });
        
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchQuery = '';
            renderProducts();
        });
        
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

function initCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            
            categoryTabs.forEach(t => t.classList.remove('active'));
            const targetTab = document.querySelector(`.tab[data-category="${category}"]`);
            if (targetTab) targetTab.classList.add('active');
            
            currentCategory = category;
            renderProducts();
            
            document.getElementById('productos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ========================================
// Initialize App
// ========================================
function init() {
    renderProducts();
    renderOffers();
    
    initCategoryTabs();
    initSearch();
    initSearchOverlay();
    initSmoothScroll();
    initMobileMenu();
    initScrollReveal();
    initCategoryCards();
    
    console.log('Reina Glowup - Catálogo inicializado');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
