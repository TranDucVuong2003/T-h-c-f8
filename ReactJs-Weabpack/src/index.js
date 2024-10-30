import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Tran Vuong</h2>
        </div>
    )
}

// Render component App vào #root element
//react@17
// ReactDOM.render(<App />, document.getElementById('root'))

//react@18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

