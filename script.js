// ===== DATOS DE LA APLICACIÓN =====

// Datos de los planetas
const planets = [
    {
        id: 1,
        name: "Mercurio",
        image: "https://pbs.twimg.com/media/G610W0yXQAA1mpy?format=png&name=small",
        description: "El planeta más cercano al Sol y el más pequeño del sistema solar. Su superficie está llena de cráteres debido a los impactos de asteroides y cometas.",
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "4.879 km",
            "Distancia al Sol": "57,9 millones de km",
            "Temperatura": "-173°C a 427°C",
            "Periodo orbital": "88 días terrestres",
            "Gravedad": "3,7 m/s²",
            "Lunas": "0"
        }
    },
    {
        id: 2,
        name: "Venus",
        image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "El segundo planeta del sistema solar y el más caliente debido a su densa atmósfera que crea un efecto invernadero extremo.",
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "12.104 km",
            "Distancia al Sol": "108,2 millones de km",
            "Temperatura": "462°C",
            "Periodo orbital": "225 días terrestres",
            "Gravedad": "8,87 m/s²",
            "Lunas": "0"
        }
    },
    {
        id: 3,
        name: "Tierra",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Nuestro hogar, el único planeta conocido que alberga vida. Tiene una atmósfera rica en oxígeno y abundante agua líquida.",
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "12.742 km",
            "Distancia al Sol": "149,6 millones de km",
            "Temperatura": "-88°C a 58°C",
            "Periodo orbital": "365,25 días",
            "Gravedad": "9,8 m/s²",
            "Lunas": "1"
        }
    },
    {
        id: 4,
        name: "Marte",
        image: "https://pbs.twimg.com/media/G6xdi9CXEAEOUpc?format=png&name=small",
        description: "Conocido como el planeta rojo, es el objetivo principal de la exploración espacial. Tiene casquetes polares y evidencia de agua en el pasado.",
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "6.779 km",
            "Distancia al Sol": "227,9 millones de km",
            "Temperatura": "-87°C a -5°C",
            "Periodo orbital": "687 días terrestres",
            "Gravedad": "3,71 m/s²",
            "Lunas": "2"
        }
    },
    {
        id: 5,
        name: "Júpiter",
        image: "https://pbs.twimg.com/media/G61z21lWQAAARY8?format=png&name=360x360",
        description: "El planeta más grande del sistema solar, un gigante gaseoso con una gran mancha roja que es una tormenta masiva.",
        facts: {
            "Tipo": "Gigante gaseoso",
            "Diámetro": "139.820 km",
            "Distancia al Sol": "778,5 millones de km",
            "Temperatura": "-108°C",
            "Periodo orbital": "4,333 dias terrestres",
            "Gravedad": "24,79 m/s²",
            "Lunas": "79"
        }
    },
    {
        id: 6,
        name: "Saturno",
        image: "https://pbs.twimg.com/media/G61y4QuW8AACUAm?format=png&name=360x360",
        description: "Famoso por sus espectaculares anillos, es el segundo planeta más grande del sistema solar. Sus anillos están compuestos principalmente de hielo y roca.",
        facts: {
            "Tipo": "Gigante gaseoso",
            "Diámetro": "116.460 km",
            "Distancia al Sol": "1.429 millones de km",
            "Temperatura": "-138°C",
            "Periodo orbital": "10,759 dias terrestres",
            "Gravedad": "10,44 m/s²",
            "Lunas": "82"
        }
    },
    {
        id: 7,
        name: "Urano",
        image: "https://pbs.twimg.com/media/G61zevuXoAA74wg?format=png&name=small",
        description: "Un gigante de hielo que gira de lado, con anillos tenues y muchas lunas. Su color azul verdoso se debe al metano en su atmósfera.",
        facts: {
            "Tipo": "Gigante de hielo",
            "Diámetro": "50.724 km",
            "Distancia al Sol": "2.871 millones de km",
            "Temperatura": "-195°C",
            "Periodo orbital": "30,687 dias terrestres",
            "Gravedad": "8,87 m/s²",
            "Lunas": "27"
        }
    },
    {
        id: 8,
        name: "Neptuno",
        image: "",
        description: "El planeta más lejano del sistema solar, conocido por sus fuertes vientos y tormentas. Es el único planeta encontrado mediante predicción matemática.",
        facts: {
            "Tipo": "Gigante de hielo",
            "Diámetro": "49.244 km",
            "Distancia al Sol": "4.495 millones de km",
            "Temperatura": "-201°C",
            "Periodo orbital": "60,190 dias terrestres",
            "Gravedad": "11,15 m/s²",
            "Lunas": "14"
        }
    }
];

// Datos de productos
const products = [
    {
        id: 1,
        name: "Telescopio Astronómico Profesional",
        image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Telescopio reflector de 150mm para observación planetaria y de espacio profundo.",
        price: "$459.99",
        category: "telescopes"
    },
    {
        id: 2,
        name: "Mapa Estelar Iluminado 3D",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Mapa del cielo nocturno con constelaciones iluminadas en 3 dimensiones.",
        price: "$79.99",
        category: "decor"
    },
    {
        id: 3,
        name: "Modelo del Sistema Solar a Escala",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Kit educativo con planetas móviles y base con motor para rotación automática.",
        price: "$129.99",
        category: "decor"
    },
    {
        id: 4,
        name: "Guía Completa del Cosmos",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Libro de astronomía con imágenes espectaculares y explicaciones detalladas.",
        price: "$34.99",
        category: "books"
    },
    {
        id: 5,
        name: "Poster de la Vía Láctea Premium",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Impresión de alta calidad de nuestra galaxia en tamaño 60x90cm.",
        price: "$24.99",
        category: "decor"
    },
    {
        id: 6,
        name: "Reloj Solar de Jardín",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Reloj de jardín que funciona con la luz solar, diseño astronómico.",
        price: "$49.99",
        category: "decor"
    },
    {
        id: 7,
        name: "Camiseta Constelaciones",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Camiseta de algodón con diseño de constelaciones del hemisferio norte.",
        price: "$29.99",
        category: "clothing"
    },
    {
        id: 8,
        name: "Telescopio para Principiantes",
        image: "https://images.unsplash.com/photo-1517984522086-2c1f6481691c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Telescopio refractor de 70mm ideal para iniciarse en la astronomía.",
        price: "$199.99",
        category: "telescopes"
    }
];

// Datos para el mapa espacial
const spaceObjects = [
    {
        id: "sun",
        name: "Sol",
        type: "star",
        size: 60,
        color: "#FFD700",
        position: { x: 50, y: 50 },
        facts: {
            "Tipo": "Estrella (G2V)",
            "Diámetro": "1.391.000 km",
            "Temperatura superficial": "5.500°C",
            "Edad": "4.600 millones de años",
            "Composición": "73% Hidrógeno, 25% Helio"
        },
        description: "El Sol es una estrella de tipo G2V ubicada en el centro de nuestro sistema solar. Es una esfera casi perfecta de plasma caliente, calentada hasta la incandescencia por reacciones de fusión nuclear en su núcleo."
    },
    {
        id: "mercury",
        name: "Mercurio",
        type: "planet",
        size: 10,
        color: "#8C8C8C",
        position: { x: 20, y: 50 },
        orbitRadius: 30,
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "4.879 km",
            "Distancia al Sol": "57,9 millones de km",
            "Temperatura": "-173°C a 427°C",
            "Periodo orbital": "88 días terrestres"
        },
        description: "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. Su superficie está llena de cráteres debido a los impactos de asteroides y cometas."
    },
    {
        id: "venus",
        name: "Venus",
        type: "planet",
        size: 15,
        color: "#E6B87E",
        position: { x: 25, y: 50 },
        orbitRadius: 40,
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "12.104 km",
            "Distancia al Sol": "108,2 millones de km",
            "Temperatura": "462°C",
            "Periodo orbital": "225 días terrestres"
        },
        description: "Venus es el segundo planeta del sistema solar y el más caliente debido a su densa atmósfera que crea un efecto invernadero extremo."
    },
    {
        id: "earth",
        name: "Tierra",
        type: "planet",
        size: 16,
        color: "#6B93D6",
        position: { x: 30, y: 50 },
        orbitRadius: 50,
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "12.742 km",
            "Distancia al Sol": "149,6 millones de km",
            "Temperatura": "-88°C a 58°C",
            "Periodo orbital": "365,25 días"
        },
        description: "Nuestro hogar, el único planeta conocido que alberga vida. Tiene una atmósfera rica en oxígeno y abundante agua líquida."
    },
    {
        id: "mars",
        name: "Marte",
        type: "planet",
        size: 14,
        color: "#CD5C5C",
        position: { x: 35, y: 50 },
        orbitRadius: 60,
        facts: {
            "Tipo": "Planeta rocoso",
            "Diámetro": "6.779 km",
            "Distancia al Sol": "227,9 millones de km",
            "Temperatura": "-87°C a -5°C",
            "Periodo orbital": "687 días terrestres"
        },
        description: "Conocido como el planeta rojo, es el objetivo principal de la exploración espacial. Tiene casquetes polares y evidencia de agua en el pasado."
    },
    {
        id: "jupiter",
        name: "Júpiter",
        type: "planet",
        size: 35,
        color: "#D8CA9D",
        position: { x: 45, y: 50 },
        orbitRadius: 80,
        facts: {
            "Tipo": "Gigante gaseoso",
            "Diámetro": "139.820 km",
            "Distancia al Sol": "778,5 millones de km",
            "Temperatura": "-108°C",
            "Periodo orbital": "11,9 años terrestres"
        },
        description: "El planeta más grande del sistema solar, un gigante gaseoso con una gran mancha roja que es una tormenta masiva."
    },
    {
        id: "saturn",
        name: "Saturno",
        type: "planet",
        size: 30,
        color: "#F0D290",
        position: { x: 55, y: 50 },
        orbitRadius: 100,
        facts: {
            "Tipo": "Gigante gaseoso",
            "Diámetro": "116.460 km",
            "Distancia al Sol": "1.429 millones de km",
            "Temperatura": "-138°C",
            "Periodo orbital": "29,5 años terrestres"
        },
        description: "Famoso por sus espectaculares anillos, es el segundo planeta más grande del sistema solar. Sus anillos están compuestos principalmente de hielo y roca."
    },
    {
        id: "uranus",
        name: "Urano",
        type: "planet",
        size: 20,
        color: "#AFEEEE",
        position: { x: 65, y: 50 },
        orbitRadius: 120,
        facts: {
            "Tipo": "Gigante de hielo",
            "Diámetro": "50.724 km",
            "Distancia al Sol": "2.871 millones de km",
            "Temperatura": "-195°C",
            "Periodo orbital": "84 años terrestres"
        },
        description: "Un gigante de hielo que gira de lado, con anillos tenues y muchas lunas. Su color azul verdoso se debe al metano en su atmósfera."
    },
    {
        id: "neptune",
        name: "Neptuno",
        type: "planet",
        size: 19,
        color: "#5D8AA8",
        position: { x: 75, y: 50 },
        orbitRadius: 140,
        facts: {
            "Tipo": "Gigante de hielo",
            "Diámetro": "49.244 km",
            "Distancia al Sol": "4.495 millones de km",
            "Temperatura": "-201°C",
            "Periodo orbital": "165 años terrestres"
        },
        description: "El planeta más lejano del sistema solar, conocido por sus fuertes vientos y tormentas. Es el único planeta encontrado mediante predicción matemática."
    },
    {
        id: "moon",
        name: "Luna",
        type: "moon",
        size: 5,
        color: "#D3D3D3",
        position: { x: 32, y: 45 },
        facts: {
            "Tipo": "Satélite natural",
            "Diámetro": "3.474 km",
            "Distancia a la Tierra": "384.400 km",
            "Temperatura": "-173°C a 127°C",
            "Periodo orbital": "27,3 días"
        },
        description: "La Luna es el único satélite natural de la Tierra y el quinto satélite más grande del Sistema Solar. Su influencia gravitatoria produce las mareas oceánicas."
    },
    {
        id: "iss",
        name: "Estación Espacial",
        type: "satellite",
        size: 4,
        color: "#FFFFFF",
        position: { x: 31, y: 55 },
        facts: {
            "Tipo": "Estación espacial",
            "Velocidad orbital": "7,66 km/s",
            "Altitud": "~400 km",
            "Tripulación": "Hasta 6 personas",
            "Países participantes": "15 naciones"
        },
        description: "La Estación Espacial Internacional es una estación espacial modular ubicada en la órbita terrestre baja. Sirve como laboratorio de investigación en microgravedad."
    }
];

// ===== FUNCIONALIDADES =====

// Cargar planetas en la página
function loadPlanets() {
    const planetsContainer = document.getElementById('planets-container');
    
    planets.forEach(planet => {
        const planetCard = document.createElement('div');
        planetCard.className = 'planet-card';
        planetCard.innerHTML = `
            <div class="planet-img" style="background-image: url('${planet.image}')"></div>
            <div class="planet-info">
                <h3>${planet.name}</h3>
                <p>${planet.description}</p>
                <button class="btn view-planet-btn" data-id="${planet.id}">Explorar</button>
                <div class="planet-stats">
                    <div class="stat">
                        <div class="stat-value">${planet.facts["Tipo"].split(" ")[0]}</div>
                        <div class="stat-label">Tipo</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${planet.facts["Lunas"]}</div>
                        <div class="stat-label">Lunas</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${planet.facts["Periodo orbital"].split(" ")[0]}</div>
                        <div class="stat-label">Días</div>
                    </div>
                </div>
            </div>
        `;
        planetsContainer.appendChild(planetCard);
    });
    
    // Añadir event listeners a los botones
    document.querySelectorAll('.view-planet-btn').forEach(button => {
        button.addEventListener('click', function() {
            const planetId = parseInt(this.getAttribute('data-id'));
            openPlanetModal(planetId);
        });
    });
}

// Cargar productos en la página
function loadProducts(category = 'all') {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">
                    <div class="price">${product.price}</div>
                    <button class="btn add-to-cart-btn" data-id="${product.id}">Añadir</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
    
    // Añadir event listeners a los botones de añadir al carrito
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Crear mapa espacial
function createSpaceMap() {
    const spaceObjectsContainer = document.getElementById('space-objects');
    const mapInfo = document.getElementById('map-info');
    
    // Crear órbitas para los planetas
    spaceObjects.forEach(obj => {
        if (obj.orbitRadius) {
            const orbit = document.createElement('div');
            orbit.className = 'orbit';
            orbit.style.width = `${obj.orbitRadius * 2}%`;
            orbit.style.height = `${obj.orbitRadius * 2}%`;
            orbit.style.left = `${50 - obj.orbitRadius}%`;
            orbit.style.top = `${50 - obj.orbitRadius}%`;
            spaceObjectsContainer.appendChild(orbit);
            
            // Añadir etiqueta de órbita
            if (obj.type === 'planet') {
                const orbitLabel = document.createElement('div');
                orbitLabel.className = 'orbit-label';
                orbitLabel.textContent = obj.name;
                orbitLabel.style.left = `${50 + obj.orbitRadius}%`;
                orbitLabel.style.top = '50%';
                spaceObjectsContainer.appendChild(orbitLabel);
            }
        }
    });
    
    // Crear objetos espaciales
    spaceObjects.forEach(obj => {
        const spaceObject = document.createElement('div');
        spaceObject.className = 'space-object';
        spaceObject.id = `obj-${obj.id}`;
        spaceObject.setAttribute('data-name', obj.name);
        spaceObject.style.width = `${obj.size}px`;
        spaceObject.style.height = `${obj.size}px`;
        spaceObject.style.backgroundColor = obj.color;
        spaceObject.style.left = `${obj.position.x}%`;
        spaceObject.style.top = `${obj.position.y}%`;
        spaceObject.style.transform = 'translate(-50%, -50%)';
        
        // Añadir icono según el tipo
        let icon = '';
        switch(obj.type) {
            case 'star':
                icon = '<i class="fas fa-sun"></i>';
                break;
            case 'planet':
                icon = '<i class="fas fa-globe"></i>';
                break;
            case 'moon':
                icon = '<i class="fas fa-moon"></i>';
                break;
            case 'satellite':
                icon = '<i class="fas fa-satellite"></i>';
                break;
            default:
                icon = '<i class="fas fa-circle"></i>';
        }
        
        spaceObject.innerHTML = icon;
        spaceObjectsContainer.appendChild(spaceObject);
        
        // Añadir event listener para mostrar información
        spaceObject.addEventListener('click', function() {
            showObjectInfo(obj);
        });
    });
}

// Mostrar información del objeto en el mapa
function showObjectInfo(obj) {
    const mapInfo = document.getElementById('map-info');
    const objectDetails = mapInfo.querySelector('.object-details') || document.createElement('div');
    
    // Crear HTML de los datos
    let factsHTML = '';
    for (const [key, value] of Object.entries(obj.facts)) {
        factsHTML += `
            <div class="object-fact">
                <div class="fact-title">${key}</div>
                <div class="fact-value">${value}</div>
            </div>
        `;
    }
    
    objectDetails.className = 'object-details active';
    objectDetails.innerHTML = `
        <h3>${obj.name}</h3>
        <p>${obj.description}</p>
        <div class="object-facts">
            ${factsHTML}
        </div>
    `;
    
    // Si no existe, añadirlo al contenedor
    if (!mapInfo.querySelector('.object-details')) {
        mapInfo.appendChild(objectDetails);
    }
    
    // Resaltar el objeto seleccionado
    document.querySelectorAll('.space-object').forEach(el => {
        el.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    });
    document.getElementById(`obj-${obj.id}`).style.boxShadow = `0 0 15px ${obj.color}`;
}

// Abrir modal con información del planeta
function openPlanetModal(planetId) {
    const planet = planets.find(p => p.id === planetId);
    const modal = document.getElementById('planet-modal');
    const modalContent = document.getElementById('modal-planet-content');
    
    if (planet) {
        let factsHTML = '';
        for (const [key, value] of Object.entries(planet.facts)) {
            factsHTML += `
                <div class="fact">
                    <div class="fact-title">${key}</div>
                    <div>${value}</div>
                </div>
            `;
        }
        
        modalContent.innerHTML = `
            <div class="modal-planet-header">
                <div class="modal-planet-img" style="background-image: url('${planet.image}')"></div>
                <div class="modal-planet-details">
                    <h2>${planet.name}</h2>
                    <p>${planet.description}</p>
                </div>
            </div>
            <div class="planet-facts">
                ${factsHTML}
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('planet-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Añadir producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // En una aplicación real, aquí se añadiría el producto al carrito
        // Por ahora, solo mostraremos una alerta
        alert(`¡${product.name} añadido al carrito!`);
        
        // Aquí podríamos actualizar un contador de carrito en la interfaz
        updateCartCounter();
    }
}

// Actualizar contador del carrito (simulación)
function updateCartCounter() {
    // En una aplicación real, esto contaría los productos en el carrito
    // Por ahora, solo mostraremos un mensaje en la consola
    console.log("Carrito actualizado");
}

// Filtrar productos por categoría
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener la categoría
            const category = this.getAttribute('data-category');
            
            // Cargar productos de esa categoría
            loadProducts(category);
        });
    });
}

// Crear elementos flotantes para el fondo
function createFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    const count = 15;
    
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // Tamaño aleatorio entre 10px y 70px
        const size = Math.floor(Math.random() * 60) + 10;
        
        // Posición aleatoria
        const top = Math.floor(Math.random() * 100);
        const left = Math.floor(Math.random() * 100);
        
        // Duración de animación aleatoria
        const duration = Math.floor(Math.random() * 20) + 10;
        
        // Retraso aleatorio
        const delay = Math.floor(Math.random() * 20);
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
        
        floatingContainer.appendChild(element);
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Cargar planetas y productos
    loadPlanets();
    loadProducts();
    
    // Crear mapa espacial
    createSpaceMap();
    
    // Configurar filtros de categoría
    setupCategoryFilters();
    
    // Event listeners para cerrar modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('planet-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });
    
    // Menú hamburguesa para móviles
    document.querySelector('.hamburger').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
    
    // Crear elementos flotantes dinámicamente
    createFloatingElements();
});
