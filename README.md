# 🎨 Pinturería Porzio - Catálogo Web con Asistente Virtual IA

Un catálogo web interactivo, dinámico y adaptivo (responsive) diseñado para **Pinturería Porzio**, enfocado en facilitar la visualización de productos y agilizar los pedidos de los clientes mediante una integración directa con WhatsApp. Cuenta con la integración de un **Asistente Virtual con Inteligencia Artificial** desarrollado en **Voiceflow**.

## 🚀 Características del Proyecto

*   **Filtro Dinámico:** Clasificación instantánea de productos por categorías (Látex, Sintéticos, Revestimientos, Impermeabilizantes) sin recargar la página.
*   **Selector de Opciones:** Permite a los usuarios elegir la presentación (litros/kilos), colores disponibles y cantidad requerida para cada artículo.
*   **Conversión Directa a WhatsApp:** Botón de consulta automatizado que extrae los datos seleccionados por el cliente y genera un mensaje preformateado listo para enviar al vendedor.
*   **Interfaz Moderna:** Diseño limpio basado en tarjetas de producto con badges de categoría e iconografía integrada mediante FontAwesome.
*   **Asistente de IA Integrado** Acceso 24/7 incorporado mediante un botón flotante interactivo en la esquina inferior derecha, siempre accesible sin interrumpir la navegación.

## 🛠️ Tecnologías Utilizadas

*   **HTML5:** Estructura semántica del catálogo y formularios de selección.
*   **CSS3:** Estilos personalizados, diseño adaptable y estados visuales interactivos (`style.css`).
*   **JavaScript (Vanilla):** Lógica para el sistema de filtrado de categorías y manipulación del DOM para el armado del mensaje de WhatsApp.
*   **FontAwesome v6.5.2:** Iconos para botones y elementos visuales de la interfaz.
*   **Chatbot:** [Voiceflow Widget API](https://voiceflow.com)
*   **Despliegue:** GitHub Pages / Vercel)

## 🤖 Sobre el Asistente de IA (Voiceflow)
El chatbot integrado en la esquina inferior derecha de la página está entrenado para:
* 💡 **Asesoramiento de productos:** Recomendar el tipo de pintura ideal según la superficie (interior, exterior, madera, metal).
* 📊 **Cálculo de rendimiento:** Ayudar al cliente a calcular cuántos litros de pintura necesita según los metros cuadrados.

## 🔌 Detalles de la Integración
El chatbot se integró utilizando el **Voiceflow Web Chat Widget**. El script principal se encuentra embebido en el archivo principal (`index.html`) justo antes del cierre de la etiqueta `</body>`.

## 📁 Estructura del Repositorio

```text
├── images/
├── index.html
├── style.css
└── README.md
```

## 📄 Licencia

Este proyecto es de uso privado y comercial para **Pinturería Porzio**. Todos los derechos reservados sobre los logos y marcas registradas de los productos expuestos.
