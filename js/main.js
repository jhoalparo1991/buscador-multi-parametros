// Variables
let marca = document.querySelector("#marca");
let year = document.querySelector("#year");
let minimo = document.querySelector("#minimo");
let maximo = document.querySelector("#maximo");
let puertas = document.querySelector("#puertas");
let transmision = document.querySelector("#transmision");
let color = document.querySelector("#color");
let resultado = document.querySelector("#resultado");

let autoObj = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// events
document.addEventListener("DOMContentLoaded", () => {
  mostrar_anios();
  mostrar_autos(autos);
});

marca.addEventListener("change", (e) => {
  autoObj.marca = e.target.value;
  filtrar_autos();
});
year.addEventListener("change", (e) => {
  autoObj.year = parseInt(e.target.value);
  filtrar_autos();
});

minimo.addEventListener("change", (e) => {
  autoObj.minimo = (e.target.value);
  filtrar_autos();
});

maximo.addEventListener("change", (e) => {
  autoObj.maximo = parseInt(e.target.value);
  filtrar_autos();
});

puertas.addEventListener("change", (e) => {
  autoObj.puertas = parseInt(e.target.value);
  filtrar_autos();
});

transmision.addEventListener("change", (e) => {
  autoObj.transmision = e.target.value;
  filtrar_autos();
});

color.addEventListener("change", (e) => {
  autoObj.color = e.target.value;
  filtrar_autos();
});

// functions
function mostrar_autos(autos) {
  limpiar_html();
 autos.forEach((auto) => {
    let p = document.createElement("p");
    p.classList.add("autos");
    const { marca, modelo, year, puertas, transmision,precio } = auto;
    p.innerHTML += ` ${marca} ${modelo} - ${puertas} Puertas - Transmision: ${transmision} - Año: ${year} - Precio: $${precio}`;
    resultado.appendChild(p);
  });

}

function mostrar_anios() {
  let anio = new Date().getFullYear();
  let min_anio = anio - 10;
  for (let i = anio; i > min_anio; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}

function filtrar_autos(auto) {
  
  let autos_filtro = autos
    .filter(mostrar_marcas)
    .filter(mostrar_anio)
    .filter(mostrar_minimo)
    .filter(mostrar_maximo)
    .filter(mostrar_puertas)
    .filter(mostrar_transmision)
    .filter(mostrar_color)

    if(autos_filtro.length > 0){
      mostrar_autos(autos_filtro)
    }else{
      sinResultados();
    }

}

function limpiar_html(){
  resultado.innerHTML = '';
}

function mostrar_marcas(auto) {
  const { marca } = autoObj;
  if (marca) {
      return auto.marca === marca
  }
  return auto;
}

function mostrar_anio(auto) {
  const { year } = autoObj;
  if (year) {
      return auto.year === year
  }
  return auto;
}

function mostrar_minimo(auto) {
  const { minimo } = autoObj;
  if (minimo) {
      return auto.precio >= minimo
  }
  return auto;
}

function mostrar_maximo(auto) {
  const { maximo } = autoObj;
  if (maximo) {
      return auto.precio <= maximo
  }
  return auto;
}

function mostrar_puertas(auto) {
  const { puertas } = autoObj;
  if (puertas) {
      return auto.puertas === puertas
  }
  return auto;
}

function mostrar_transmision(auto) {
  const { transmision } = autoObj;
  if (transmision) {
      return auto.transmision === transmision
  }
  return auto;
}
function mostrar_color(auto) {
  const { color } = autoObj;
  if (color) {
      return auto.color === color
  }
  return auto;
}
function sinResultados(){
  limpiar_html();
  let p = document.createElement("p");
  p.textContent = 'La busqueda no tuvo resultado'
  p.classList.add('error');
  let section = document.querySelector('section');
  section.appendChild(p)
  setTimeout(()=>{
    p.remove();
  },3000)
}