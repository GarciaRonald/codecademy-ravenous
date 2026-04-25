import '../styles/Business.css';

function Business(props) {
    const { imgSrc, name, address, city, state, zipCode, category, rating, reviewCount } = props.business;
    
    return (
        <div className='business'>
            <div className='img-container'>
                <img
                    src={imgSrc}
                    alt={name}
                />
            </div>

            <div className='business-title'>
                <h2>{name}</h2>
            </div>

            <div className='business-info'>
                <div className='info-left'>
                    <p>{address}</p>
                    <p>{city}</p>
                    <p>{state} {zipCode}</p>
                </div>

                <div className='info-right'>
                    <p className='orange cat'>{category.toUpperCase()}</p>
                    <p className='orange'>{`${rating} star${rating > 1 && 's'}`}</p>
                    <p>{`${reviewCount} review${reviewCount === 1 ? '' : 's'}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;