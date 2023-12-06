import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
const [showModal , setShowModal] = useState(false);

    const handleClick =() => {
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept </Button>
        </div>
    )

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
           Here is an imptt. agreement for uhh to accept. 
        </p>
    </Modal>

    return(
        <div className="relative">
        <Button onClick={handleClick} primary>
            Open Modal
        </Button>
    { showModal && modal}
    </div>
    )};

export default ModalPage;