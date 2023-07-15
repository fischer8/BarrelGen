export default function DialogButtons() {
  return (
    <section className='dialog-buttons'>
      <a className='contact-button' href={zapZap} rel='noreferrer' target='_blank'>Contato</a>
      <a className='location-button' href={location} rel='noreferrer' target='_blank'>Localização no Maps</a>
    </section>
  );
}
