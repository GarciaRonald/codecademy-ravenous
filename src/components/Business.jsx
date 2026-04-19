import '../styles/Business.css';

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
        <div className='business'>
            <div className='img-container'>
                <img
                    src={sampleBus.imgSrc}
                    alt={sampleBus.name}
                />
            </div>

            <div className='business-title'>
                <h2>{sampleBus.name}</h2>
            </div>

            <div className='business-info'>
                <div className='info-left'>
                    <p>{sampleBus.address}</p>
                    <p>{sampleBus.city}</p>
                    <p> {sampleBus.state} {sampleBus.zipCode}</p>
                </div>

                <div className='info-right'>
                    <p className='orange cat'>{sampleBus.category.toUpperCase()}</p>
                    <p className='orange'>{`${sampleBus.rating} star${sampleBus.rating > 1 && 's'}`}</p>
                    <p>{`${sampleBus.reviewCount} review${sampleBus.reviewCount === 1 ? '' : 's'}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;