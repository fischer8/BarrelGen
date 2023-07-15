import { FloatButtons, Header, Main, DialogBox, Footer } from './';

export default function MainPage() {
  return (
    <section>
      <FloatButtons />
      <Header cover={header_img} />
      <Main />
      <DialogBox />
      <Footer />
    </section>
  );
}
