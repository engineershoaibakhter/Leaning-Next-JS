import store from "./store";

const {Provider} = require("react-redux");

export function Providers({children}){
    <Provider store={store}>
        {children}
    </Provider>
}