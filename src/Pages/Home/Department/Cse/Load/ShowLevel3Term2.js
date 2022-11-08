import React, { useEffect, useState } from 'react';

const ShowLevel3Term2 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/level3term2')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);

    return (
        <div>
            <h2 className="font-bold text-2xl mt-16 mb-5">Available question :{users.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    users.map((a, index) =>
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <div className="card-body">
                                <h2 className="font-bold text-2xl">Semester: {a.semester}</h2>
                                <h2 className="font-bold text-2xl">Examination: {a.exam}</h2>
                                <p className='text-lg font-bold'>Course Title : {a.title}</p>
                                <p className='text-lg font-bold'>Course Code : {a.code}</p>
                                <div className="card-actions justify-center">
                                    <a className=' hover:font-bold color-blue text-xl text-sky-600' href={a.link}>Google Drive Link</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ShowLevel3Term2;