<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <label for="name">name</label>
    <input type="text" name="name" id="name">
    <button type="submit" class="submit">Send</button>

    <p class="tahap-1"></p>
    <p class="tahap-2"></p>
    <p class="tahap-3"></p>
    <p class="tahap-4"></p>
    <p class="tahap-5"></p>
    <p class="tahap-6"></p>
    <p class="tahap-7"></p>

    <p class="hasil"></p>

    <script>
        const tahap1 = document.querySelector('.tahap-1');
        const tahap2 = document.querySelector('.tahap-2');
        const tahap3 = document.querySelector('.tahap-3');
        const tahap4 = document.querySelector('.tahap-4');
        const tahap5 = document.querySelector('.tahap-5');
        const tahap6 = document.querySelector('.tahap-6');
        const tahap7 = document.querySelector('.tahap-7');

        const submitButton = document.querySelector('.submit');
        submitButton.addEventListener('click', function () {
            // - length (panjang string) harus terdiri dari 6 karakter

            let maxValueLength = 6;
            const inputValue = document.querySelector('#name').value;
            if (inputValue.length === maxValueLength) {
                tahap1.innerHTML = 'tahap pertama berhasil';
            } else {
                tahap1.innerHTML =
                    'tahap pertama belum berhasil: panjang string harus terdiri dari 6 karakter)';
            }


            let arrayOfInput = [...inputValue];
            let a = arrayOfInput[0];
            let b = arrayOfInput[1];
            let c = arrayOfInput[2];
            let d = arrayOfInput[3];
            let e = arrayOfInput[4];
            let f = arrayOfInput[5];

            // - karakter pertama tidak diperbolehkan berupa angka (0,1,2,3,4,5,6,7,8,9)

            if ((/^-?\d+$/).test(a)) {
                tahap2.innerHTML =
                    'tahap kedua belum berhasil: karakter pertama tidak diperbolehkan berupa angka (0,1,2,3,4,5,6,7,8,9)';
            } else {
                tahap2.innerHTML = 'Tahap kedua berhasil';
            }

            // - karakter kedua harus merupakan bentuk huruf kecil dari huruf vokal (a,i,u,e,o)
            if (b == arrayOfInput[1].toLowerCase() && /[aeiou]/.test(b)) {
                tahap3.innerHTML = 'Tahap ketiga berhasil';
            } else {
                tahap3.innerHTML =
                    'Tahap ketiga belum berhasil: karakter kedua harus merupakan bentuk huruf kecil dari huruf vokal (a,i,u,e,o)';
            }

            //  - karakter ketiga harus selain dari (b,c,D, atau F)

            // let caracterExpect = ['b', 'c', 'D', 'F'];
            let caracterExpect = /[bcDF]/;
            if (caracterExpect.test(c)) {
                tahap4.innerHTML =
                    'Tahap keempat belum berhasil: karakter ketiga harus selain dari (b,c,D, atau F)';
            } else {
                tahap4.innerHTML =
                    'Tahap keempat berhasil';
            }

            // - karakter keempat tidak boleh whitespace (\r,\n,\t,\f, atau <space>)

            let encapeCaracter = /[\n, \r, \t, \f, \b]/;
            if (encapeCaracter.test(d)) {
                tahap6.innerHTML =
                    'Tahap ke enam belum berhasil: karakter keempat tidak boleh whitespace (\r,\n,\t,\f, atau <space>)';
            } else {
                tahap5.innerHTML = 'Tahap ke lima berhasil';
            }

            // - karakter kelima harus merupakan bentuk huruf besar dari huruf vokal

            if (e == arrayOfInput[4].toUpperCase() && /[AEIOEU]/.test(e)) {
                tahap6.innerHTML = 'Tahap ke enam berhasil';
            } else {
                tahap6.innerHTML =
                    'Tahap ke enam belum berhasil: karakter ke lima harus merupakan bentuk huruf besar dari huruf vokal ';
            }

            // - karakter keenam tidak boleh simbol koma(,) atau titik(.)

            let symbol = /[\.,\,]/;
            if (symbol.test(f)) {
                tahap7.innerHTML =
                    'Tahap ke tujuh belum berhasil: karakter keenam tidak boleh simbol koma(,) atau titik(.)';
            } else {
                tahap7.innerHTML = 'Tahap ke tujuh berhasil';
            }
        });
    </script>
</body>

</html>
