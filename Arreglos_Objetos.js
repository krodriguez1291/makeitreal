var persona = {
    nombre: "Kevin",
    edad: 28,
    nacionalidad: "Colombiano",
    idioma: "Español",
    saludar: function (lang) {
        if (lang === "es") {
            console.log("Hola, " + this.nombre)
        } else if (lang === "en") {
            console.log("Hi, " + this.nombre)
        }
    }
}

persona.saludar("en");

var personas = [
    {
        nombre: "Jesus",
        sexo: "M",
        edad: 36,
        idiomas: ["EN","ES"],
        verEdad: function(){
           console.log("La edad de "+this.nombre+" es "+this.edad);
        }
      
    },
    {
        nombre: "Kevin",
        sexo: "M",
        edad: 28,
        idiomas: ["EN","ES"],
        verEdad: function(){
           console.log("La edad de "+this.nombre+" es "+this.edad);
        }
      
    },
    {
        nombre: "Wendy",
        sexo: "F",
        edad: 29,
        idiomas: ["EN","ES"],
        verEdad: function(){
           console.log("La edad de "+this.nombre+" es "+this.edad);
        }
      
    },
    {
        nombre: "Jorge",
        sexo: "M",
        edad: 56,
        idiomas: ["EN","ES"],
        verEdad: function(){
           console.log("La edad de "+this.nombre+" es "+this.edad);
        }
      
    },
    {
        nombre: "Margarita",
        sexo: "F",
        edad: 76,
        idiomas: ["EN","ES"],
        verEdad: function(){
           console.log("La edad de "+this.nombre+" es "+this.edad);
        }
      
    }
];

for (var i = 0; i<personas.length; i++){
    var persona = personas[i];
    for (var j = 0; j<persona.idiomas.length; j++){
      if(persona.idiomas[j] === "ES"){
        persona.verEdad();
      }
    }
  }
  