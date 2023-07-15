import { FooterArticle, FooterNav, Copyright } from './';

export default function Footer() {
  return (
    <footer>
      <article className='footer'>
        <img className='footer-logo' src={logo_img} alt='' />
        <FooterArticle />
        <FooterNav />
      </article>
        <Copyright />
    </footer>
  );
}
