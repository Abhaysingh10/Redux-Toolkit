import React from 'react'
import logo from '../../src/logo.svg'
function Dashboard() {
    return (
        <>

            <div className='container fluid' style={{ backgroundColor: "", margin: "auto" }}>
                <div className='row'>
                    <div className='col'>
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" src={logo} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Nike</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <btn class="btn btn-primary">Add <i class="bi bi-cart"></i></btn>

                            </div>
                        </div>
                    </div>
                    <div className="col"><div class="card" style={{ width: "18rem;" }}>
                        <img class="card-img-top" src={logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Puma</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <btn class="btn btn-primary">Add <i class="bi bi-cart"></i></btn>
                        </div>
                    </div></div>
                    <div className="col">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" src={logo} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Campus</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <btn class="btn btn-primary">Add <i class="bi bi-cart"></i></btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Dashboard