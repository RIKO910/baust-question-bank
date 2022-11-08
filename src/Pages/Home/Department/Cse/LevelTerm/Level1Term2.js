import React from 'react';

const Level1Term2 = () => {
    const handelAddUser = event => {
        event.preventDefault();
        const semester = event.target.semester.value;
        const exam = event.target.exam.value;
        const title = event.target.title.value;
        const code = event.target.code.value;
        const link = event.target.link.value;

        const users = { semester,exam,title, code, link };

        fetch('http://localhost:5000/level1term2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('user added successfully!!!!');
                event.target.reset();
            })

    }
    return (
        <div>
            <form onSubmit={handelAddUser} class="">
                <div className="hero min-h-screen bg-base-200">
                    <div className="card-body">
                        <input type="text" name="semester" id="semester" placeholder="Semester" className="input px-20 input-bordered" />
                        <input type="text" name="exam" id="exam" placeholder="Examination" className="input px-20 input-bordered" />
                        <input type="text" name="title" id="title" placeholder="Course Title" className="input px-20 input-bordered" />
                        <input type="text" name="code" id="code" placeholder="Course code" className="input px-20 input-bordered" />
                        <input type="text" name="link" id="link" placeholder="google drive link" className="input px-20 input-bordered" />
                        <input type="submit" name="submit" class="btn btn-outline-success btn-md px-20  btn-block" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Level1Term2;