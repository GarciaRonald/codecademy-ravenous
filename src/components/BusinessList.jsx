import Business from './Business';
import '../styles/BusinessList.css';

function BusinessList(props) {
    const busArray = props.businesses.map(bus => {
        const randKey = crypto.randomUUID();
        return (
            <Business
                key={randKey}
                business={bus}
            />
        );
    });

    return (
        <div className='businesslist'>
            {busArray}
        </div>
    );
}

export default BusinessList;