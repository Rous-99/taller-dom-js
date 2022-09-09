// Import stylesheets
import './style.css';

// Write Javascript code!
const form = document.getElementById('form-suscription');
console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault(); //para que no reinicie todo el form, que no envie datos aún

  console.log('SUBMIT');

  //1 FORMA DE HACER: CON GETELEMENT, PERO SI TENEMOS MUCHOS DATOS NOS TIRARIAMOS LA VIDA EN INTENTAR ACCEDER A CADA UNO DE ELLOS. HAY UNA FORMA MAS RAPIDA

  // const name = document.getElementById('input-name').value;

  // const price = document.getElementById('input-price').value;

  // const date = document.getElementById('input-date').value;

  //console.log(name, price, date);
  //console.log(price);
  //console.log(date);

  //2 FORMA:FORMDATA
  // const formdata = new FormData(e.target.elements); //creamos un objeto, E.TARGET ES EL FORMULARIO
  // console.log(formdata);

  //3 forma: CON ITERACION

  const inputs = e.target.elements;
  const items = {};

  for (let i = 0; i < inputs.length; i++) {
    const element = inputs.item(i);
    if (element.type != 'submit') {
      //para quitar al botón del obj
      items[element.name] = element.value;
    }
  }

  console.log(items);
  //BAD CHOICE
  // const template = (
  //   <div class="suscription-item">
  //     <div class="suscription-details">
  //       <span class="suscription-name">${suscription.name}</span>
  //       <time datetime="" class="suscription-date">
  //         ${suscription.date}
  //       </time>
  //     </div>
  //     <div class="suscription-price">${suscription.price}</div>
  //   </div>
  // );

  // const suscriptionList = document.getElementById('suscription-list');
  // suscriptionList.innerHTML += template;

  console.log(items);

  const template = document.getElementById('template-item').content;
  template.querySelector('.suscription-name').textContent = suscription.name;
  template.querySelector('.suscription-price').textContent = suscription.price;
  template.querySelector('.suscription-date').textContent = suscription.date;

  const clone = template.cloneNode(true);
  const suscriptionList = document.getElementById('suscription-list');
  suscriptionList.appendChild(clone);

  //NO ME FUNCIONA
});

//NOS FALTA QUE SE REGISTRE EN EL SUSCRIPTION-LIST
//quiero acceder a los datos del formulario. Para ello le coloco una id al input del dato que quiero tener
