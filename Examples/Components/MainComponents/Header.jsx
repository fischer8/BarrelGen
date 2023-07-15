import { Nav } from './';
import logo_img from '../../images/elementos/lavita_logo.webp';

export default function Header(props) {
  const { cover } = props;
  const opts = ['Home', 'Fotos', 'Suítes', 'Contato', 'Login', 'Criar Conta'];

  return (
    <header>
      <Nav opts={opts} navclname='nav-container' optclname='nav-opts' />
      <img className='top-logo' src={logo_img} alt='' />
      <img className='top-cover' src={cover} alt='' />
    </header>
  );
}
