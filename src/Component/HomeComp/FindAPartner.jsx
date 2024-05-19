import React from 'react'

const FindAPartner = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="path/to/your/image1.jpg"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <h5 className="card-title">Learn Swiss German</h5>
              <p className="card-text">
                Connect with Swiss German speakers to practice your language skills and learn about Swiss culture.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="path/to/your/image2.jpg"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Discover Swiss Cuisine</h5>
              <p className="card-text">
                Connect with Swiss individuals who love cooking and learn how to prepare traditional Swiss dishes.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="path/to/your/image3.jpg"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <h5 className="card-title">Explore Swiss Nature</h5>
              <p className="card-text">
                Connect with Swiss outdoor enthusiasts and explore the beautiful Swiss landscapes together.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindAPartner