import Business from './Business';
import '../styles/BusinessList.css';

function BusinessList(props) {
    const busArray = props.businesses.map(bus => {
        return (
            <Business />
        );
    });
    
    return (
        <div className='businesslist'>
            {busArray}
        </div>
    );
}

export default BusinessList;