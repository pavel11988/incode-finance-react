import { render as rtlRender, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import App from "../components/App/App"

const render = component => rtlRender(
<Provider store={store}>
    {component}
</Provider>
)


describe('App test', () => {
    test('render title', async() => {
        render(<App/>)
        expect(screen.getByText('Finance React Test Task')).toBeInTheDocument();
        expect(screen.getByRole("table")).toBeInTheDocument();
    });
})