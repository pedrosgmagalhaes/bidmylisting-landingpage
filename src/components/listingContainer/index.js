import React from 'react';
import PropTypes from 'prop-types';

function ListingComponent({ icon, title, description }) {
  return (
    <div>
      <div>
        <div className="d-flex align-items-start justify-content-center flex-column">
          <div className="d-flex flex-row">
            <span><img src={icon} alt="Create Your Listing" /></span>
            <h4 className="mx-2">{title}</h4>
          </div>
          <p className="mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

ListingComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListingComponent;
