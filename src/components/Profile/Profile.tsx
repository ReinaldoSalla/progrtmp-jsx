/*
section vs div
destructure deeply nestes objs
event: any
*/

import React, { useState } from 'react';
import './Profile.css';

// const Profile = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     setPassword('');
//     setEmail('');
//   }

//   const handleEmailChange = (event: any) => {
//     setEmail(event.target.value);
//   };

//   const handleChangePassword = (event: any) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <div className='profile__main--wrapper'>
//       <div className='profile__center--wrapper'>
//         <h2 className='profile__title'>Profile</h2>
//         <form className='profile__form' onSubmit={handleSubmit}>
//           <label htmlFor='email'>
//             Email
//           </label>
//           <input 
//             id='name'
//             onChange={handleEmailChange}
//             value={email}
//           />
//           <label htmlFor='password'>
//             Password
//           </label>
//           <input 
//             id='password'
//             onChange={handleChangePassword}
//             value={password}
//           />
//           <label>
//             Pick your programming language
//           <select>
//             <option>C</option>
//             <option>C++</option>
//             <option>Java</option>
//             <option>Python</option>
//             <option>JavaScript</option>
//           </select>
//           </label>
//           <button type='submit'>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

const Profile = () => (
  <div>
    <select>
      <option>C</option>
      <option>C++</option>
      <option>Java</option>
      <option>Python</option>
      <option>JavaScript</option>
    </select>
  </div>
)

export default Profile;