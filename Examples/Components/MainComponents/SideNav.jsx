import { Nav } from './';

export default function SideNav(props) {
    const opts = ['Home','Sobre','Fotos','Suítes','Contato', 'Login', 'Criar Conta']
    const { handleChange } = props;
  return (
    <section>
      <span className='close-nav-button' onClick={handleChange}>x</span>
      <Nav opts={opts} navclname='side-nav' optclname='side-nav-opts'/>
    </section>
  );
}
