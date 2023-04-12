import './App.css';

// const word = 'Aiperi'

// const greet = (name) => {
//   return `Hi, person with name ${name}`
// }

// const formatDate = (date) => {
//   const day = date.getDate()
//   const month = date.getMonth() + 1
//   const year = date.getFullYear()
//   return `${day}/${month}/${year}`

// }

const user = {
  name: 'Михаил Д',
  birthYear: 2000,
  job: 'Фронтенд разработчик',
  education: {
    university: 'КГТУ',
    graduateYear: 2020
  }
}

const MainInfo = () => {
  return (
    <div>
        <h2>Основная информация</h2>
        <p>Имя:{user.name}</p>
        <p>Год рождения: {user.birthYear} </p>
        <p>Должность: {user.job}</p>
      </div>
  )
}

const Education = () => {
  return (
    <div>
    <h2>Образование</h2>
    <p>Университет: {user.education.university} </p>
    <p>Год выпуска: {user.education.graduateYear} </p>
  </div>
  )
}

function App() {
  return (
    // <div>
    //   <h1>Hello {word}!</h1>
    //   <h1>Sum 1+10={1+10}!</h1>
    //   <h1 className="greet">{greet('Jake')}</h1>
    //   <h1>{formatDate(new Date())}</h1>
    //   <label htmlFor="name">Имя </label>
    //   <input type="text" id="name"/>
    // </div>


    <>
       <h1>Резюме</h1>
       <MainInfo/>
       <Education/>
      
     
    </>
    



  );
}

export default App;
