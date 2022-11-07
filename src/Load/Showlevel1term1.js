import React, { useEffect, useState } from 'react';

const Showlevel1term1 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/level1term1')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);

    return (
        <div>
            <h2>Available user :{users.length}</h2>
            {
                users.map((a ,index) =>
                <a href={a.weight}>{a.name}</a>
                )
            }
        </div>
    );
};

export default Showlevel1term1;