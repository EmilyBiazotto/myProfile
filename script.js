document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorButton');

    button.addEventListener('click', function() {
        const red = Math.floor(Math.random() * 256); // Valor entre 0-255 para vermelho
        const green = Math.floor(Math.random() * 256); // Valor entre 0-255 para verde
        const blue = Math.floor(Math.random() * 256); // Valor entre 0-255 para azul

        const randomColor = `rgb(${red}, ${green}, ${blue})`;

        document.body.style.backgroundColor = randomColor;
    });
});