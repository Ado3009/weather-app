'use strict';

// https://63d69e2bdc3c55baf4399ac7.mockapi.io

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 3 && this.status == 200) {
//     console.log(xhttp.responseText);
//   }
// };

// xhttp.open("GET", "https://63d69e2bdc3c55baf4399ac7.mockapi.io/Users", true);
// xhttp.send();

// let request = fetch("https://63d69e2bdc3c55baf4399ac7.mockapi.io/Users");
// request.then((Response) => {
//   return Response.json();
// });
// console.log(request)

let APIkey = 'a40713652c26d9c8b88b54601cb995ae';

let input = document.querySelector('#input');
let sadrzaj = document.querySelector('.sadrzaj');

function input2() {
  input.placeholder = 'City...';
  input.style.border = '2px solid ';
}
function sakriElement() {
  let input = document.querySelector('#input').value;
  let sadrzaj = document.querySelector('.sadrzaj');

  if (input === '') {
    sadrzaj.style.display = 'none';
  }
}

input.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    let grad = input.value;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${grad}&appid=${APIkey}`
    )
      .then(response => response.json())
      .then(data => {
        const trenutnoVrijeme = data.weather[0].description;
        const temp = Math.round(data.main.temp - 273.15);
        sadrzaj.style.display = 'block';

        if (trenutnoVrijeme === 'scattered clouds') {
          sadrzaj.innerHTML = `<img src="images/cloud.jpg" alt="suncano"/> <span class="span-grad">${trenutnoVrijeme}</span><span class="span-temp">${temp}&#176C</span>`;
          input2();
        } else if (trenutnoVrijeme === 'clear sky') {
          sadrzaj.innerHTML = `<img src="images/blagosuncano.jpg" alt="clear sky"/> <span class="span-grad">${trenutnoVrijeme}</span><span class="span-temp">${temp}&#176C</span>`;
          input2();
        } else if (trenutnoVrijeme === 'overcast clouds') {
          sadrzaj.innerHTML = `<img src="images/basOblacno.jpg" alt="bas oblacno"/> <span class="span-grad"> ${trenutnoVrijeme}</span><span class="span-temp">${temp}&#176C</span>`;
          input2();
        } else if (trenutnoVrijeme === 'broken clouds') {
          sadrzaj.innerHTML = `<img src="images/basOblacno.jpg"  alt="oblacno"/> <span class="span-grad">${trenutnoVrijeme}</span><span class="span-temp">${temp}&#176C</span>`;
          input2();
        } else if (trenutnoVrijeme === 'snow') {
          sadrzaj.innerHTML = `<img src="images/susnjezica.jpg"  alt="oblacno"/> <span class="span-grad">${trenutnoVrijeme}</span><span class="span-temp">${temp}&#176C</span>`;
          input2();
        } else if (trenutnoVrijeme === 'rain') {
          sadrzaj.innerHTML = `<img src="images/kisno.jpg"  alt="oblacno"/> <span class="span-grad">${trenutnoVrijeme}</span><span class="span-temp">${temp}&#176C</span>`;
          input2();
        } else if (trenutnoVrijeme === 'sun') {
          sadrzaj.innerHTML = `<img src="images/sunacno.jpg"  alt="oblacno"/> <span class="span-grad">${trenutnoVrijeme}</span><span class="span-temp">${temp}&#176C</span>`;
          input2();
        }
        // sadrzaj.innerHTML = `trenutno vrijeme. u gradu ${grad} je ${trenutnoVrijeme} a temoperatura je ${temp}`;
      })
      .catch(error => {
        let input = document.querySelector('#input');
        input.style.border = '2px solid red';
        input.value = '';
        input.placeholder = 'Pogresan unos...';
        document.querySelector('.sadrzaj').style.display = 'none';
        console.log(error);
      });
  }
});
sakriElement();
// console.log(APIkey);
// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   let inputValue = input.value;
//   console.log(inputValue);

//   let req = fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
//   )
//     .then((responese) => {
//       // console.log(responese);`
//       for (let i = 0; i < req; i++) {
//         console.log(req[i]);
//       }
//       return responese.json();
//     })
//     .then((data) => {
//       // console.log(data);
//     })
//     .catch((error) => {
//       alert(error);
//     });

//   console.log(req);
//   if (inputValue === req) {
//     // console.log(responese);
//   }
// });
