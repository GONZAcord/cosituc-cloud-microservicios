# Proyecto COSITUC Microservicios - Cloud Computing

## Integrantes
* Alejandro Zavala, Rodrigo Josue
* Cortez Herrera, Sebastian Rodrigo
* Cisneros Nieto, Sabrina Andrea
* Cordova Alvarez, Gonzalo Sebastian
* Ccoyo Huaman, Jhojan Edwin

¿De qué trata? 
Es una plataforma web y móvil para comprar el Boleto Turístico del Cusco (BTC/COSITUC) y reservar tours a sitios arqueológicos en un solo lugar.

¿Cuál es el problema? 
La venta actual de boletos y tours es manual, desorganizada y presencial. Esto causa largas filas, colapso de puntos de venta y falta de control del aforo en tiempo real.

¿Cómo lo solucionamos? 
Digitalizando todo el proceso mediante una arquitectura en la nube con microservicios, rápida y accesible desde cualquier celular.

¿Qué microservicios usamos? 
usuarios: Registra y gestiona perfiles (turistas, agencias y administradores)
boletos: Administra el catálogo de boletos, precios, aforo y sitios arqueológicos incluidos
reservas: Procesa la compra/reserva final, verificando automáticamente que el usuario y el boleto existan antes de emitir el ticket. 
