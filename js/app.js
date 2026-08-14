/* ========================================
   TIENDA NICO2 - App Logic
   ======================================== */

// ========================================
// Configuration
// ========================================
const CONFIG = {
    // Cambia este número por tu número de WhatsApp con código de país
    whatsappNumber: '51964005823',
    // Texto base para mensajes
    defaultMessage: 'Hola, me interesa este producto:'
};

// ========================================
// Products Data
// ========================================
const products = [
    // Ropa
    {
        id: 1,
        name: 'Camiseta Básica Negra',
        category: 'ropa',
        price: 299,
        oldPrice: null,
        size: 'S-XL',
        image: 'https://picsum.photos/seed/camiseta-negra/600/800',
        badge: null
    },
    {
        id: 2,
        name: 'Jeans Slim Fit',
        category: 'ropa',
        price: 599,
        oldPrice: null,
        size: '28-36',
        image: 'https://picsum.photos/seed/jeans-slim/600/800',
        badge: 'Nuevo'
    },
    {
        id: 3,
        name: 'Sudadera Oversized',
        category: 'ropa',
        price: 799,
        oldPrice: null,
        size: 'S-XL',
        image: 'https://picsum.photos/seed/sudadera-oversized/600/800',
        badge: null
    },
    {
        id: 4,
        name: 'Camisa Linen Beige',
        category: 'ropa',
        price: 499,
        oldPrice: null,
        size: 'S-XXL',
        image: 'https://picsum.photos/seed/camisa-linen/600/800',
        badge: null
    },
    {
        id: 5,
        name: 'Pantalón Cargo',
        category: 'ropa',
        price: 649,
        oldPrice: null,
        size: '28-34',
        image: 'https://picsum.photos/seed/pantalon-cargo/600/800',
        badge: null
    },
    {
        id: 6,
        name: 'Vestido Midi Floral',
        category: 'ropa',
        price: 899,
        oldPrice: 1199,
        size: 'XS-L',
        image: 'https://picsum.photos/seed/vestido-midi/600/800',
        badge: '-25%'
    },
    
    // Accesorios
    {
        id: 7,
        name: 'Cadena Dorada',
        category: 'accesorios',
        price: 199,
        oldPrice: null,
        size: 'Único',
        image: 'https://picsum.photos/seed/cadena-dorada/600/800',
        badge: null
    },
    {
        id: 8,
        name: 'Gorra Snapback',
        category: 'accesorios',
        price: 249,
        oldPrice: null,
        size: 'Único',
        image: 'https://picsum.photos/seed/gorra-snapback/600/800',
        badge: 'Nuevo'
    },
    {
        id: 9,
        name: 'Reloj Minimalista',
        category: 'accesorios',
        price: 899,
        oldPrice: null,
        size: 'Único',
        image: 'https://picsum.photos/seed/reloj-minimal/600/800',
        badge: null
    },
    {
        id: 10,
        name: 'Lente de Sol Aviador',
        category: 'accesorios',
        price: 449,
        oldPrice: 599,
        size: 'Único',
        image: 'https://picsum.photos/seed/lente-aviador/600/800',
        badge: '-25%'
    },
    {
        id: 11,
        name: 'Bolso Tote',
        category: 'accesorios',
        price: 399,
        oldPrice: null,
        size: 'Único',
        image: 'https://picsum.photos/seed/bolso-tote/600/800',
        badge: null
    },
    {
        id: 12,
        name: 'Cinturón Cuero',
        category: 'accesorios',
        price: 349,
        oldPrice: null,
        size: 'S-L',
        image: 'https://picsum.photos/seed/cinturon-cuero/600/800',
        badge: null
    }
];

// ========================================
// Offers Data
// ========================================
const offers = [
    {
        id: 101,
        name: 'Pack 2 Camisetas',
        description: 'Lleva 2 camisetas básicas y ahorra',
        price: 499,
        oldPrice: 598,
        icon: 'shirt',
        message: 'Hola, me interesa el Pack 2 Camisetas - $499 MXN'
    },
    {
        id: 102,
        name: 'Look Completo',
        description: 'Camisa + Pantalón + Cinturón',
        price: 1299,
        oldPrice: 1497,
        icon: 'package',
        message: 'Hola, me interesa el Look Completo - $1299 MXN'
    },
    {
        id: 103,
        name: 'Pack Accesorios',
        description: 'Cadena + Reloj + Lentes',
        price: 1299,
        oldPrice: 1547,
        icon: 'gem',
        message: 'Hola, me interesa el Pack Accesorios - $1299 MXN'
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

// ========================================
// State
// ========================================
let currentCategory = 'todos';
let searchQuery = '';

// ========================================
// Utility Functions
// ========================================

/**
 * Format price as currency
 */
function formatPrice(price) {
    return `$${price.toLocaleString('es-MX')}`;
}

/**
 * Generate WhatsApp URL
 */
function generateWhatsAppUrl(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Generate product message for WhatsApp
 */
function generateProductMessage(product) {
    return `${CONFIG.defaultMessage} ${product.name} - ${formatPrice(product.price)} MXN`;
}

// ========================================
// Render Functions
// ========================================

/**
 * Create product card HTML
 */
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
        <div class="product-card-inner">
            <div class="product-image">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-details">
                    <span class="product-size">Talla: ${product.size}</span>
                </div>
                <p class="product-price">
                    ${formatPrice(product.price)}
                    ${oldPriceHtml}
                </p>
                <a href="${whatsappUrl}" class="product-whatsapp" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Comprar por WhatsApp
                </a>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Create offer card HTML
 */
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
        <div class="offer-card-inner">
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
        </div>
    `;
    
    return card;
}

/**
 * Filter products based on category and search query
 */
function filterProducts() {
    return products.filter(product => {
        const matchesCategory = currentCategory === 'todos' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

/**
 * Render products grid
 */
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

/**
 * Render offers grid
 */
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

/**
 * Initialize category tabs
 */
function initCategoryTabs() {
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update current category
            currentCategory = tab.dataset.category;
            
            // Re-render products
            renderProducts();
        });
    });
}

/**
 * Initialize search input
 */
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

/**
 * Initialize smooth scroll for anchor links
 */
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
            }
        });
    });
}

/**
 * Initialize scroll reveal animations
 */
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

/**
 * Initialize hover physics for buttons
 * CSS handles all transitions now — this just ensures touch devices get proper :active feedback
 */
function initButtonPhysics() {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    
    document.querySelectorAll('.btn, .product-whatsapp, .offer-whatsapp').forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.transform = 'scale(0.97)';
        }, { passive: true });
        
        btn.addEventListener('touchend', () => {
            btn.style.transform = '';
        }, { passive: true });
    });
}

// ========================================
// Initialize App
// ========================================
function init() {
    // Render initial content
    renderProducts();
    renderOffers();
    
    // Initialize event listeners
    initCategoryTabs();
    initSearch();
    initSmoothScroll();
    initScrollReveal();
    initButtonPhysics();
    
    console.log('TIENDA NICO2 - Catálogo inicializado');
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
