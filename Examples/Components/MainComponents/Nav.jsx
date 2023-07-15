import { Link } from 'react-router-dom';

export default function Nav(props) {
  const convert = (string) => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase();
  }
  const { opts, navclname, optclname } = props;
  const navOpts = opts.map((opt) => <Link to={`/${convert(opt)}`} key={opt}><li className={optclname}>{opt}</li></Link>)
  return (
    <nav className={navclname}>
      <ul>
        {navOpts}
      </ul>
    </nav>      
  );
}
