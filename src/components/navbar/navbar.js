import Ss from './Navbar1.js';
import Menu from './Navbar2.js';

export function Navbar() {
    return (
        <div>
            <div className="flex justify-between align-bottom">
                <Ss></Ss>
                <Menu></Menu>
            </div>
        </div>
    )
}