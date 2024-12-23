// // Ghi nhớ tên người dùng
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [name, setName] = useState('')
//   const handleClick = () =>{
//     localStorage.setItem('name', name)
//     alert('Lưu tên thành công ^^')
//   }

//   useEffect(() =>{
//     const nameInLocal = localStorage.getItem('name')
//     nameInLocal ? setName(nameInLocal) : setName('');
//   }, [])
//   return (
//     <div style={{display: 'flex', justifyContent: 'center'}}>
//       <div>
//         <p>Xin chào { name || 'bạn' } !</p>
//         <input 
//         value={name}
//         onChange={e => setName(e.target.value)}
//         ></input>
//         <button
//         onClick={handleClick}
//         >Lưu</button>
//       </div>
//     </div>
//   )
// }

// export default App





//Ghi nhớ trạng thái chế độ sáng/tối
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [status, setStatus] = useState('')
  const statusStyle = useRef();

  const handleClick = () => {
    setStatus(status == 'light' ? 'dark' : 'light')
  }
  
  useEffect(() => {
    const statusStorage = localStorage.getItem('status')
    if(statusStorage){
      setStatus(statusStorage)
    }else{
      setStatus('light')
    }
  }, [])
  useEffect(() => {
    if (status == 'light') {
      statusStyle.current.style.backgroundColor = '#fff';
      statusStyle.current.style.color = '#000';
    } else {
      statusStyle.current.style.backgroundColor = 'rgb(78 77 77)';
      statusStyle.current.style.color = '#fff';
    }
    localStorage.setItem('status', status)
  }, [status])

  return (
    <div className='main' ref={statusStyle} >
      <h2>Trạng thái: {status}</h2>
      <span>Bấm vào đây để chuyển đổi chết độ sáng tối == </span>
      <button
        onClick={handleClick}
      >Toglge</button>
    </div>
  )
}

export default App




