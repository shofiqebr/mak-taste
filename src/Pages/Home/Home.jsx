
import Banner from './Banner';
import Card from './Card';
import Category from './Category';
import DeliveryTime from './DeliveryTime';
import OpenClose from './OpenClose';

const Home = (props) => {
    return (
        <div>
            <Banner />
            <Category/>
            <Card/>
            <OpenClose/>
            <DeliveryTime/> 
        </div>
    );
};

export default Home;