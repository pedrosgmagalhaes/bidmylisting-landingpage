import React from 'react';

const ListingComponent = (props) => {
    return (
        <div>
            <div>
                <div className="d-flex align-items-start justify-content-center flex-column">
                    <div className="d-flex flex-row">
                        <span><img src={props.icon} alt="Create Your Listing" /></span>
                        <h4 className="mx-2">{props.title}</h4>
                    </div>
                    <p className="mt-2">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ListingComponent;
