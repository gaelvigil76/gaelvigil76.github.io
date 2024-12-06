function expandAbout() {
    const aboutText = document.getElementById('about-text');
    aboutText.textContent += " Su pasión por la cocina comenzó a temprana edad y desde entonces ha dedicado su vida a perfeccionar su arte. Gael también cree en la cocina sostenible y en el uso de ingredientes frescos y locales siempre que sea posible.";
}

// Función para mostrar detalles de un plato
function showDishDetails(dishName) {
    const details = {
        "Risotto de Trufa": "Un plato clásico italiano con arroz Arborio, parmesano y trufa negra recién rallada.",
        "Atún Sellado": "Atún fresco sellado con una costra de sésamo y acompañado de alioli de wasabi.",
        "Volcán de Chocolate": "Un postre caliente con un centro de chocolate derretido irresistible."
    };

    alert(`Plato: ${dishName}\nDescripción: ${details[dishName]}`);
}