import { Link } from "react-router-dom";

function SlideBar() {
    const links = [
        {label: 'Dropdown' , path: '/'},
        {label: 'Accordion' , path: '/accordion'},
        {label: 'Button' , path: '/button'},
        {label: 'Table' , path: '/table'},
        {label: 'Modal' , path: '/modal'},
        {label: 'Counter' , path: '/counter'}
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link
                style={{padding: 10}}
                key={link.label} 
                to={link.path} 
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                {link.label}
            </Link>
        );
    });
    return(
        <div className='sticky top-0 overflow-y-scroll flex flex-colomn'>
            {renderedLinks}
        </div>
    )};

export default SlideBar;