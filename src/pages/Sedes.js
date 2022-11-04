import { useState } from "react"

const Sedes = () => {
    const [sedes, setSedes] = useState([{ nombre: "Chiquibambilla" }, { nombre: "Abancay" }])
    return (
        <div>
            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>SEDES</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {
                        sedes.map(sede => {
                            return (
                            <div className="col-sm-4">
                                <h3>{sede.nombre}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                            </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Sedes