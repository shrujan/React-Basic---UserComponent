import ReactFormExample from "../components/ReactFormsExample/ReactFormExample";

const BasicReactForms = () => {

  const submitForm = () => {}

  return <section>
    <form onSubmit={ submitForm }>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
      </div>
      
      <button>Save</button>
    </form>
  </section>
}

export default BasicReactForms;
