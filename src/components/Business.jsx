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
                <img
                    src={sampleBus.imgSrc}
                    alt={sampleBus.name}
                    height="200"
                />
            </div>

            <div>
                <h2>{sampleBus.name}</h2>
            </div>

            <div>
                <div>
                    <p>{sampleBus.address}</p>
                    <p>{sampleBus.city} {sampleBus.state} {sampleBus.zipCode}</p>
                </div>

                <div>
                    <p>{sampleBus.category}</p>
                    <p>{`${sampleBus.rating} star${sampleBus.rating > 1 && 's'}`}</p>
                    <p>{`${sampleBus.reviewCount} review${sampleBus.reviewCount === 1 ? '' : 's'}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;