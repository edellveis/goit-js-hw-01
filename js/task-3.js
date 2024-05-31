function getElementWidth(content, padding, border) {
    function parsePx(value) {
        return parseFloat(value.match(/[\d.]+/)[0]);
    }

    const contentWidth = parsePx(content);
    const paddingWidth = parsePx(padding);
    const borderWidth = parsePx(border);

    const TotalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2;

    // Консольні логи 
    console.log("Content Width:", contentWidth);
    console.log("Padding Width:", paddingWidth);
    console.log("Border Width:", borderWidth);
    console.log("Total Width:", TotalWidth);

    return TotalWidth;
}