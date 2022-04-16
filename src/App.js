import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [showList, setShowList] = useState(true);

  function toggleShowList() {
    setBirthdayCount(0)
    setShowList(false)
  }

  const listElements = data.map((birthday, index) => {
    
    return (
      <List key={index} name={birthday.name} age={birthday.age + 1} alt={birthday.name} image={birthday.image} />
    )
  })

  const [birthdayCount, setBirthdayCount] = useState(listElements.length);

  return (
    <main>
      <section className="container">
        <h3>{birthdayCount} Birthdays today</h3>
        {showList && listElements}
        <button onClick={() => toggleShowList()}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
