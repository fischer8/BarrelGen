import { FloatButtons, Header, Footer } from "../MainComponents/";
import header_img from '../../images/elementos/main_cover.webp';

export default function Contact() {
  return(
    <section className='contact'>
      <FloatButtons/>
      <Header cover={header_img}/>
      <Footer/>
    </section>
  );
}