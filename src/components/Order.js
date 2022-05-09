import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getorders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 401 || res.status === 403) {
                    navigate('/login')
                }
                return res.json()
            }
            )
            .then(data => {
                setOrder(data);
            })
    }, [])
    return (
        <div>
            <h2>This is Order:{order.length}</h2>
        </div>
    );
};

export default Order;