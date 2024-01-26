import { UseForm } from "../hooks/UseForm";

export const FormularioComponent = () => {
    const initialForm = {
            userName: '',
            email: '',
            password: ''
    }
    const {formState, userName, email, password, onInputChange} = UseForm(initialForm)
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
