import { Header, FloatButtons, Footer } from '../MainComponents/';
import header_img from '../../images/photos/pousada/intern_10.jpg'

export default function Photos() {
  return (
    <section className='photos'>
      <FloatButtons />
      <Header cover={header_img} />
      <Footer />
    </section>
  );
}