import {GoBell  , GoDatabase} from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage(){

    return <div>
        <div>
            <Button secondary  rounded className="mb-5">
                <GoBell />
                heyyy</Button>
        </div>
        <div>
            <Button danger rounded >
                hello</Button>
        </div>
        <div>
            <Button warning rounded>
                <GoDatabase />
                click me</Button>
        </div>
        <div>
            <Button secondary rounded  >
                
                hellow</Button>
        </div>
        <div>
            <Button primary rounded>submit</Button>
        </div>
    </div>
}

export default ButtonPage;