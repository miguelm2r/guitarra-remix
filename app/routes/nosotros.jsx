import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica"
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {


  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt='imagen nosotros' />

        <div>
          <p>Vestibulum justo diam, efficitur et rhoncus at, dapibus placerat leo. Nulla bibendum nisi eu arcu rutrum iaculis. Donec gravida nulla id risus varius, ut eleifend purus tempus. Sed fringilla sollicitudin ipsum ac accumsan. Aenean vitae viverra libero.</p>
          
          <p>Vestibulum justo diam, efficitur et rhoncus at, dapibus placerat leo. Nulla bibendum nisi eu arcu rutrum iaculis. Donec gravida nulla id risus varius, ut eleifend purus tempus. Sed fringilla sollicitudin ipsum ac accumsan. Aenean vitae viverra libero.</p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros