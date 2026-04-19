const sampleBus = {
    imgSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
};

function Business() {
    return (
        <div>
            <div>
                <img src="#" alt="Empty Image" />
            </div>
            <div>
                <h2>Name</h2>
            </div>
            <div>
                <div>
                    <p>Address</p>
                    <p>City State Zip</p>
                </div>
                <div>
                    <p>Category</p>
                    <p>Rating</p>
                    <p>Rating Count</p>
                </div>
            </div>
        </div>
    );
}

export default Business;