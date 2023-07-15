import { FloatButtons, Footer, Header } from '../MainComponents/';
import header_img from '../../images/photos/pousada/intern_10.jpg'

export default function Suites() {
  return(
    <section className='suites'>
      <FloatButtons />
      <Header cover={header_img} />
      <Footer />
    </section>
  );
}