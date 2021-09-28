import Card from "../UI/Card/Card"

const IngredientForm = () => {
    const submitHandler = event => {
        event.preventDefault();

    }

    return <section>
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='title'>Name</label>
                    <input id='title' type='text'/>
                </div>

                <div>
                    <label htmlFor='amount'>Amount</label>
                    <input id='amount' type='text'/>
                </div>

                <div>
                    <button type='submit'>Add Ingredient</button>
                </div>
            </form>
        </Card>
    </section>
}


export default IngredientForm;
