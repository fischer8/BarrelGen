
export default function SuitesGrid() {
  const photos = [foto1,foto2,foto3,foto4,foto5,foto6];
  const menu = photos.map((photo) => <img className='main-photos' src={photo} alt='' key={photo.charAt(20)} />)
  return (
    <section className='main-suites'>
      {menu}
    </section>
  );
}

