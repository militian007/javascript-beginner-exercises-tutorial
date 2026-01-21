function sing() {
    let entireSong = ""; // Aquí guardaremos toda la letra

    for (let i = 99; i > 0; i--) {
        let line1 = "";
        let line2 = "";

        if (i > 1) {
            line1 = i + " bottles of beer on the wall, " + i + " bottles of beer.\n";
            let next = (i - 1 === 1) ? "1 bottle" : (i - 1) + " bottles";
            line2 = "Take one down and pass it around, " + next + " of beer on the wall.\n";
        } else {
            line1 = "1 bottle of beer on the wall, 1 bottle of beer.\n";
            line2 = "Take one down and pass it around, no more bottles of beer on the wall.\n";
        }

        // Imprimimos en el orden que pide el test
        console.log(line1.trim());
        console.log(line2.trim());

        // Acumulamos en la variable para el return
        entireSong += line1 + line2;
    }

    return entireSong; // Esto soluciona el error de "return the exact lyrics"
}
//Your code above ^^^

console.log(sing());