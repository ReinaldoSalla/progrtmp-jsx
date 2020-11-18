import React, { useState, FormEvent } from 'react';
import Event from './Profile.types';
import './Profile.css';

// const Space = ({ n }: any) => (
//   <>
//     {new Array(n).fill(0).map((_, index) => (
//       <br key={index} />
//     ))}
//   </>
// );

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [progrLang, setProgrLang] = useState('JavaScript');
//   const [description, setDescription] = useState('');
//   const [yearsOfExperience, setYearsOfExperience] = useState(0);
//   const [isExpert, setIsExpert] = useState(false);

//   const handleNameChange = (event: any) => {
//     setName(event.target.value);
//   };

//   const handleBirthdayChange = (event: any) => {
//     setBirthday(event.target.value);
//   };

//   const handleProgrLangChange = (event: any) => {
//     setProgrLang(event.target.value);
//   };

//   const handleDescriptionChange = (event: any) => {
//     setDescription(event.target.value);
//   };

//   const handleYearsOfExperienceChange = (event: any) => {
//     setYearsOfExperience(event.target.value);
//   };

//   const handleExpertChange = (event: any) => {
//     setIsExpert(event.target.checked);
//   };

//   return (
//     <div>
//       <label htmlFor='name'>Name:</label>
//       <Space n={1} />
//       <input id='name' value={name} onChange={handleNameChange} type='text' />
//       <Space n={2} />
//       <label htmlFor='birthday'>Birthday:</label>
//       <Space n={1} />
//       <input id='birthday' type='date' value={birthday} onChange={handleBirthdayChange} />
//       <Space n={2} />
//       <label htmlFor='programming language'>Programming language</label>
//       <Space n={1} />
//       <select id='programming language' value={progrLang} onChange={handleProgrLangChange}>
//         <option>C</option>
//         <option>C++</option>
//         <option>Java</option>
//         <option>Python</option>
//         <option>JavaScript</option>
//       </select>
//       <Space n={2} />
//       <label htmlFor='description'>Skills on {progrLang}</label>
//       <Space n={1} />
//       <textarea id='description' value={description} onChange={handleDescriptionChange} />
//       <Space n={2} />
//       <label htmlFor='experience'>Experience</label>
//       <Space n={1} />
//       <input id='experience' type='number' value={yearsOfExperience} onChange={handleYearsOfExperienceChange} />
//       <Space n={2} />
//       <label htmlFor='expert'>Is an expert?</label>
//       <input id='expert' type='checkbox' checked={isExpert} onChange={handleExpertChange} />
//     </div>
//   );
// };

const Profile = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    progrLang: 'JavaScript',
    description: '',
    yearsOfExperience: 0,
    isExpert: false,
  });

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    console.log(`Submitted data: ${JSON.stringify(formData)}`);
  };

  const handleChange = ({
    target: { type, name, value, checked }}: Event
  ): void => {
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className='profile__main--wrapper'>
      <form className='profile__form' onSubmit={handleSubmit}>
        <h2 className='profile__title'>Write Your Profile</h2>
        <label className='profile__label' htmlFor='name'>Name</label>
        <div className='profile__input--wrapper'>
          <input className='profile__input' name='name' id='name' value={formData.name} onChange={handleChange} type='text' />
        </div>
        <label className='profile__label' htmlFor='birthday'>Birthday</label>
        <div className='profile__input--wrapper'>
          <input className='profile__input' name='birthday' id='birthday' type='date' value={formData.birthday} onChange={handleChange} />
        </div>
        <label className='profile__label' htmlFor='programming language'>Programming language</label>
        <div className='profile__input--wrapper'>
          <select className='profile__input' name='progrLang' id='programming language' value={formData.progrLang} onChange={handleChange}>
            <option>C</option>
            <option>C++</option>
            <option>Java</option>
            <option>Python</option>
            <option>JavaScript</option>
          </select>
        </div>
        <label className='profile__label' htmlFor='description'>Skills on {formData.progrLang}</label>
        <div className='profile__input--wrapper'>
          <textarea className='profile__input' name='description' id='description' value={formData.description} onChange={handleChange} />
        </div>
        <label className='profile__label' htmlFor='experience'>Experience</label>
        <div className='profile__input--wrapper'>
          <input className='profile__input' name='yearsOfExperience' id='experience' type='number' value={formData.yearsOfExperience} onChange={handleChange} />
        </div>
        <div className='profile__label--check--wrapper'>
          <label htmlFor='expert'>Is an expert?</label>
          <input name='isExpert' id='expert' type='checkbox' checked={formData.isExpert} onChange={handleChange} />
        </div>
        <div className='profile__button--wrapper'>
          <button className='button' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;