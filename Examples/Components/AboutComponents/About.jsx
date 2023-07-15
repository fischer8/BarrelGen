import { FloatButtons, Header, Footer } from '../MainComponents'
import header_img from '../../images/photos/pousada/intern_10.jpg'
import '../../styles/About.css'

export default function About() {
  return (
    <section className='about'>
      <FloatButtons />
      <Header cover={header_img} />
      <h2>Sobre</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur rem molestiae culpa repellat iusto quos nisi delectus eaque qui provident illo exercitationem obcaecati quibusdam numquam dolor ullam magni unde explicabo reiciendis, excepturi doloribus a. Est!</p>
      <Footer/>
    </section>
  );
}