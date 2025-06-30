import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

const productes = [
    {
        "id": 1,
        "nom": "Plàtan",
        "preu": 0.5,
        "cantidad": 4
    },
    {
        "id": 2,
        "nom": "Poma",
        "preu": 0.8
    },
    {
        "id": 3,
        "nom": "Pinya",
        "preu": 5
    },
    {
        "id": 4,
        "nom": "Meló",
        "preu": 6
    },
];


function Fruiteria() {
    const [totalCompra, setTotalCompra] = useState(0);

    const [listaPlatanos, setlistaPlatanos] = useState([]);
    const [listaManzana, setlistaManzana] = useState([]);
    const [listaPiña, setlistaPiña] = useState([]);
    const [listaMelon, setlistaMelon] = useState([]);


    const agregarPlatano = (id, preu) => {

        if (listaPlatanos.length === 0) {
            setlistaPlatanos([{ id: id, cantidad: 1, precio: preu }]);
        }
        else
            setlistaPlatanos(obj => { // Crear una copia del array actual
                const nuevaLista = obj.map(item => {
                    if (item.id === id) {
                        // Crear una copia del objeto y aumentar la cantidad
                        return { ...item, cantidad: item.cantidad + 1 };
                    }
                    return item;
                });
                return nuevaLista;
            });

    };


    const agregarManzana = (id, preu) => {
        if (listaManzana.length === 0) {
            setlistaManzana([{ id: id, cantidad: 1, precio: preu }]);
        }
        else
            setlistaManzana(obj => { // Crear una copia del array actual
                const nuevaLista = obj.map(item => {
                    if (item.id === id) {
                        // Crear una copia del objeto y aumentar la cantidad
                        return { ...item, cantidad: item.cantidad + 1 };
                    }
                    return item;
                });
                return nuevaLista;
            });
    };

    const agregarPiña = (id, preu) => {
        if (listaPiña.length === 0) {
            setlistaPiña([{ id: id, cantidad: 1, precio: preu }]);
        }
        else
            setlistaPiña(obj => { // Crear una copia del array actual
                const nuevaLista = obj.map(item => {
                    if (item.id === id) {
                        // Crear una copia del objeto y aumentar la cantidad
                        return { ...item, cantidad: item.cantidad + 1 };
                    }
                    return item;
                });
                return nuevaLista;
            });
    };

    const agregarMelon = (id, preu) => {
        if (listaMelon.length === 0) {
            setlistaMelon([{ id: id, cantidad: 1, precio: preu }]);
        } else
            setlistaMelon(obj => { // Crear una copia del array actual
                const nuevaLista = obj.map(item => {
                    if (item.id === id) {
                        // Crear una copia del objeto y aumentar la cantidad
                        return { ...item, cantidad: item.cantidad + 1 };
                    }
                    return item;
                });
                return nuevaLista;
            });
    };


    const agregarCarrito = (id, preu) => {
        switch (id) {
            case 1:
                agregarPlatano(id, preu)
                break;
            case 2:
                agregarManzana(id, preu)
                break;
            case 3:
                agregarPiña(id, preu);
                break;
            case 4:
                agregarMelon(id, preu);
                break;
        }
        /*
        const totalPlatanos = listaPlatanos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        const totalManzanas = listaManzanas.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        const totalPiñas = listaPiña.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        const totalMelones = listaMelon.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        const compraTotal = totalPlatanos + totalManzanas + totalPiñas + totalMelones;
        */
        //setTotalCompra(totalCompra + compraTotal);
        const producto = productes.find((producto) => producto.id === id);
        setTotalCompra(totalCompra + producto.preu);

        //setTotalCompra(totalCompra + producto.preu);
    }

    const mostrarProductos = productes.map((producto) => {
        return (
            <tr key={producto.id}>
                <td>{producto.nom}</td>
                <td>{producto.preu} €</td>
                <td><Button variant="success" onClick={() => agregarCarrito(producto.id, producto.preu)}>Agregar</Button></td>
            </tr>
        )
    });


    const vaciarLista = (id) => {
        switch (id) {
            case 1:
                setlistaPlatanos([])
                setTotalCompra(totalCompra - listaPlatanos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0));
                break;
            case 2:
                setlistaManzana([]);
                setTotalCompra(totalCompra - listaManzana.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0));
                break;
            case 3:
                setlistaPiña([]);
                setTotalCompra(totalCompra - listaPiña.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0));
                break;
            case 4:
                setlistaMelon([]);
                setTotalCompra(totalCompra - listaMelon.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0));
                break;
        }

    }


    return (
        <>
            <h1>Fruiteria</h1>
            <Table>
                <thead>
                    <tr className="table-dark">
                        <th>Nom</th>
                        <th>Preu</th>
                        <th>Opcion</th>
                    </tr>
                </thead>
                <tbody>{mostrarProductos}</tbody>
            </Table>
            <br></br>
            <div>
                {listaPlatanos.length > 0 && (
                    <ul>
                        Platanos
                        {listaPlatanos.map((pro, idx) => (
                            <li key={idx}>
                                {pro.cantidad} Unidades x ${pro.precio} €/u =
                                {pro.cantidad * pro.precio}€
                                <Button variant="success" onClick={() => vaciarLista(pro.id)}  > Vaciar
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                {listaManzana.length > 0 && (
                    <ul>
                        Manzanas
                        {listaManzana.map((pro, idx) => (
                            <li key={idx}>
                                {pro.cantidad} Unidades x ${pro.precio} €/u =
                                {pro.cantidad * pro.precio}€
                                <Button variant="success" onClick={() => vaciarLista(pro.id)}  > Vaciar
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                {listaPiña.length > 0 && (
                    <ul>
                        Piñas
                        {listaPiña.map((pro, idx) => (
                            <li key={idx}>
                                {pro.cantidad} Unidades x ${pro.precio} €/u =
                                {pro.cantidad * pro.precio}€
                                <Button variant="success" onClick={() => vaciarLista(pro.id)}  > Vaciar
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                {listaMelon.length > 0 && (
                    <ul>
                        Melones
                        {listaMelon.map((pro, idx) => (
                            <li key={idx}>
                                {pro.cantidad} Unidades x ${pro.precio} €/u =
                                {pro.cantidad * pro.precio}€
                                <Button variant="success" onClick={() => vaciarLista(pro.id)}  > Vaciar
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <p>Total Compra: {totalCompra}€</p>
            </div>
            <div></div>
        </>
    );
}

export default Fruiteria;