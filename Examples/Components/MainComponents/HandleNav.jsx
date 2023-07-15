import { useState } from 'react';
import { NavButton, SideNav } from './';

export default function HandleNav() {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <section>
      {visible ? <SideNav handleChange={handleChange} /> : <NavButton handleChange={handleChange}/> }
    </section>
  );
}

