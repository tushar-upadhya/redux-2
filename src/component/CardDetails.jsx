import { useEffect, useState } from "react";

import { Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

import { ADD, DLT, REMOVE } from "../redux/action/action";

const CardDetails = () => {
    const [data, setData] = useState([]);
    // console.log("data:", data);

    const { id } = useParams();
    // console.log("id:", id);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getData = useSelector((state) => state.cartReducer.carts);
    // console.log("getData:", getData);

    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id == id;
        });
        setData(compareData);
    };

    //? add data
    const send = (e) => {
        dispatch(ADD(e));
    };

    const dlt = (id) => {
        dispatch(DLT(id));
        navigate("/");
    };

    const remove = (item) => {
        dispatch(REMOVE(item));
    };

    useEffect(() => {
        compare();
    }, [id]);

    return (
        <>
            <div className="container mt-2">
                <h2 className="text-center">Item Details</h2>

                <section className="container mt-3">
                    <div className="iteamsdetails">
                        {data.map((ele) => {
                            return (
                                <>
                                    <div className="items_img">
                                        <img src={ele.imgdata} alt="" />
                                    </div>

                                    <div className="details">
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p>
                                                        <strong>
                                                            Restaurant
                                                        </strong>
                                                        : {ele.rname}
                                                    </p>
                                                    <p>
                                                        <strong>Price</strong>:
                                                        ₹ {ele.price}
                                                    </p>
                                                    <p>
                                                        <strong>Dishes</strong>:
                                                        {ele.address}
                                                    </p>

                                                    <p>
                                                        <strong>total</strong>:
                                                        {ele.price * ele.qnty}
                                                    </p>

                                                    <div
                                                        className="mt-5 d-flex justify-content-between align-item-center"
                                                        style={{
                                                            width: "100",
                                                            cursor: "pointer",
                                                            background: "#ddd",
                                                            color: "#111",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: 24,
                                                            }}
                                                            onClick={
                                                                ele.qnty <= 1
                                                                    ? () =>
                                                                          dlt(
                                                                              ele.id
                                                                          )
                                                                    : () =>
                                                                          remove(
                                                                              ele
                                                                          )
                                                            }
                                                        >
                                                            -
                                                        </span>

                                                        <span
                                                            style={{
                                                                fontSize: 22,
                                                            }}
                                                        >
                                                            {ele.qnty}
                                                        </span>

                                                        <span
                                                            style={{
                                                                fontSize: 24,
                                                            }}
                                                            onClick={() =>
                                                                send(ele)
                                                            }
                                                        >
                                                            +
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>
                                                        <strong>
                                                            Rating :
                                                        </strong>
                                                        <span
                                                            style={{
                                                                background:
                                                                    "green",
                                                                color: "#fff",
                                                                padding:
                                                                    "2px 5px",
                                                                borderRadius:
                                                                    "5px",
                                                            }}
                                                        >
                                                            {ele.rating}★
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Order Review :
                                                        </strong>
                                                        <span>
                                                            {ele.somedata}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Remove :
                                                        </strong>
                                                        <span>
                                                            <i
                                                                className="fas fa-trash"
                                                                style={{
                                                                    color: "red",
                                                                    fontSize:
                                                                        "20",
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() =>
                                                                    dlt(ele.id)
                                                                }
                                                            ></i>
                                                        </span>
                                                    </p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
};

export default CardDetails;
