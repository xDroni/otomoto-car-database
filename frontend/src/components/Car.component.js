import React from 'react';

function Car(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <a href={[props.car.car_fullPage]} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="image-parent text-center" style={{height: 168, width: 253}}>
              <img src={props.car.car_image} style={{maxHeight: 168, maxWidth: 253}} alt={props.car.car_model} className="img-fluid" />
            </div>
            <div className="col">
              <h5>{props.car.car_model}</h5>
              <p><small>{props.car.car_description}</small></p>
              <div className="row">
                <div className="col-3">{props.car.car_productionYear}</div>
                <div className="col-3">{props.car.car_mileage}</div>
                <div className="col-3">{props.car.car_engineCapacity}</div>
                <div className="col-3">{props.car.car_fuelType}</div>
                <div className="col-3">{props.car.car_city}</div>
              </div>
              <span className="badge badge-info badge-pill" style={{fontSize: 14}}>{props.car.car_price} {props.car.car_priceCurrency}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Car;