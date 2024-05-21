import React from 'react'

const AddUsersForm = () => {

    const submit=(e)=>{
        e.preventDefault();

        const {firstname,age}=e.target;
        const new_user={
            id: Date.now(),
            firstname: firstname.value,
            age: +age.value
            
        }
        console.log(new_user);
        e.target.reset();
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" placeholder='firstname'name='firstname'/>
            <input type="text" placeholder='age'name='age'/>
            <button>AddUser</button>
        </form>
    </div>
  )
}

export default AddUsersForm