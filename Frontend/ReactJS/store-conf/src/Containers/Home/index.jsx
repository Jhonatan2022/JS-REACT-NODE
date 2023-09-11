import { Products } from "../../Components/Products";
import initialState from "../../initialState";

function Home() {
    return (
        <Products products={initialState.products} />
    );
}

export { Home };