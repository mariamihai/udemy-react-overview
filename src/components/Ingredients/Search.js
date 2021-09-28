import React from "react";

import Card from "../UI/Card/Card";

const Search = React.memo(() => {
    return <section>
        <Card>
            <div>
                <label htmlFor='filterInput'>Filter by title</label>
                <input id='filterInput' type='text'/>
            </div>
        </Card>
    </section>
})

export default Search;
