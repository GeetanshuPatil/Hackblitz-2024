document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('carList');
    const nextCarBtn = document.getElementById('nextCarBtn');
    const cars = [
        {
            model: 'Toyota Camry',
            rate: '$25,000',
            imageUrl: 'toyota camry.jpg'
        },
        {
            model: 'Honda Civic',
            rate: '$23,000',
            imageUrl: 'honda_civic.jpg'
        },
        {
            model: 'Ford Mustang',
            rate: '$30,000',
            imageUrl: 'ford_mustang.jpg'
        },
        {
            model: 'Bugatti Veyron',
            rate: '$150,000',
            imageUrl: 'bugatti veyron.jpeg'
        },
        {
            model: 'Bugatti Chiron',
            rate: '$120,000',
            imageUrl: 'bugatti chiron.jpg'
        },
        {
            model: 'McLaren',
            rate: '$30,000',
            imageUrl: 'mclaren.jpg'
        }
    ];
    let currentIndex = 0;

    function addCar(model, rate, imageUrl) {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');

        const image = document.createElement('img');
        image.src = imageUrl;

        const details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `<h2>${model}</h2><p>Rate: ${rate}</p>`;

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Buy';
        buyBtn.classList.add('button', 'buy-btn');
        buyBtn.addEventListener('click', function() {
            alert(`You have bought ${model}!`);
        });

        carDiv.appendChild(image);
        carDiv.appendChild(details);
        carDiv.appendChild(buyBtn);

        carList.appendChild(carDiv);
    }

    function showNextCar() {
        carList.innerHTML = ''; // Clear previous cars
        currentIndex = (currentIndex + 1) % cars.length;
        const currentCar = cars[currentIndex];
        addCar(currentCar.model, currentCar.rate, currentCar.imageUrl);
    }

    // Initial cars
    cars.forEach(car => {
        addCar(car.model, car.rate, car.imageUrl);
    });

    // Event listener for next car button
    nextCarBtn.addEventListener('click', showNextCar);
});
