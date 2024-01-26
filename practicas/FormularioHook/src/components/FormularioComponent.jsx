import { useState } from "react";

export const FormularioComponent = () => {

    const [formState, setFormState] = useState({
        userName: 'Kike Zepeda',
        email: 'enrique@gmail.com',
        password: '123456789'
    })

    const {userName, email, password} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
        console.log(target.name)
        console.log(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            className="form-control"
            name="userName"
            placeholder="Enter UserName"
            value={userName}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
