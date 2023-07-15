import hamb_icon from '../../images/elementos/hamb_icon.webp'

export default function NavButton(props) {
  const { handleChange } = props;
  return (
    <button className='nav-button-oc' onClick={handleChange}>
      <img className='hamb-img' src={hamb_icon} alt='' />
    </button>
  );
}

