import React from 'react';

const Level1Term1 = () => {

    const handelAddUser =event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const weight = event.target.weight.value;
        const file = event.target.file.value;

        const users = { name, age, weight ,file};

        fetch('http://localhost:5000/level1term1', {
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
                        <div class="container text-center">

                            <div className='row'>
                                <div class="form-group col-md-6">
                                    <input type="name" name="name" id="name" placeholder="semester" class="form-control" />
                                </div>

                                <div class="form-group col-md-3">
                                    <input type="text" name="age" id="age" placeholder="Course code" class="form-control" min="50"
                                        max="" />
                                </div>

                                <div class="form-group col-md-3">
                                    <input type="text" name="weight" id="weight" placeholder="link" class="form-control" />
                                </div>
                                
                            </div>
                        </div>

                        <input type="submit" name="submit" class="btn btn-outline-success btn-lg btn-block" />
                    </form>
        </div>
    );
};

export default Level1Term1;