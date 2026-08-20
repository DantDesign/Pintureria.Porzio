document.addEventListener('DOMContentLoaded', () => {
    // ---- LÓGICA DE FILTRADO ----
    const filterButtons = document.querySelectorAll('.btn-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const selectedCategory = button.getAttribute('data-category');
            
            productCards.forEach(card => {
                const productCategory = card.getAttribute('data-category');
                if (selectedCategory === 'todos' || selectedCategory === productCategory) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ---- LÓGICA DE ENVÍO PRE-FORMATEADO A WHATSAPP ----
    const actionButtons = document.querySelectorAll('.btn-add');
    const NÚMERO_WHATSAPP = "5491159379723";
    
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Evita cualquier comportamiento extraño del navegador
            e.preventDefault(); 
            
            // Usamos currentTarget para asegurarnos de agarrar el botón contenedor
            const productCard = e.currentTarget.closest('.product-card');
            
            if (!productCard) {
                console.error("No se encontró el contenedor .product-card");
                return;
            }

	// Extraer datos estáticos
const title = productCard.querySelector('.product-title').innerText;
const price = productCard.querySelector('.product-price').innerText;

	// Extraer datos elegidos por el cliente
const size = productCard.querySelector('.select-size').value;
const selectedColor = productCard.querySelector('.select-color').value;
const quantity = productCard.querySelector('.input-qty').value;
            
            // Validación rápida de cantidad mínima
            if (quantity < 1) {
                alert("Por favor, ingresá una cantidad válida (mínimo 1).");
                return;
            }
            
            // Construir el mensaje comercial detallado
            const textoMensaje = `Hola Pinturería Porzio! 👋 Me interesa realizar un pedido:\n\n🎨 *Producto:* ${title}\n📦 *Presentación:* ${size}\n🌈 *Color elegido:* ${selectedColor}\n🔢 *Cantidad:* ${quantity} unidad(es)\n💰 *Precio unitario:* ${price}\n\n¿Me confirmarían disponibilidad y formas de pago? ¡Muchas gracias!`;
            
            const textoCodificado = encodeURIComponent(textoMensaje);

            // Usamos wa.me que es un enlace más corto y moderno para evitar bloqueos
            const urlWhatsApp = `https://wa.me/${NÚMERO_WHATSAPP}?text=${textoCodificado}`;
            
            // Intentar abrir en pestaña nueva, si falla por bloqueador, abre en la misma
            const nuevaVentana = window.open(urlWhatsApp, '_blank');
            if (!nuevaVentana || nuevaVentana.closed || typeof nuevaVentana.closed == 'undefined') {
                window.location.href = urlWhatsApp;
            }
        });
    });
});
