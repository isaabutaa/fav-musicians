import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import HomeProvider from './context/HomeProvider.js'
import './css/index.css'
import App from './App.js'

ReactDOM.render(
    <Router>
        <UserProvider>
            <HomeProvider>
                <App />
            </HomeProvider> 
        </UserProvider>
    </Router>, document.getElementById('root'))