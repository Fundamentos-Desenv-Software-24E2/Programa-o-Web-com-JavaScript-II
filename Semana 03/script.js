let planetas = [];

planetas.push("Mercurio");
planetas.push("Venus");
planetas.push("Terra");
planetas.push("Marte");
planetas.push("Jupiter");

alert("Tamanho do array: " + planetas.length);

planetas[5] = "Saturno";

alert("Tamanho do array: " + planetas.length);

planetas.push("Urano");

planetas.splice(2, 1);

alert("Planetas: " + planetas + "!");