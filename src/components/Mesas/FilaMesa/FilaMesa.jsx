import iconoEditar from '/iconoEditar.svg'
import {Link} from 'react-router-dom' 
import iconoEliminar from '/iconoEliminar.svg'
import './FilaMesa.css'

// import { Link } from 'react-router-dom'

const FilaMesa = () => {
    return (
      <div>
          <section className='bg-white w-full px-6 rounded-lg mt-5'>
            <ul className='grid grid-cols-3 gap-10 '>
              <li className=" filamesa text-black text-center col-span-1 py-2  ">
                <div className="flex justify-center items-center md:gap-5">
                    <img src="/src/img/imagenMesa.png" className="w-11 h-11"/>
                    3
                </div>
                </li>
              <li className="filamesa text-black text-center col-span-1 py-4  ">2</li>
              <li className="text-black text-center col-span-1 py-4 ">
                <div className="flex justify-center items-center gap-5">
                  <Link
                    to="/header/mesa/registro">
                    <img src={iconoEditar} alt='icono de editar' className='w-7'/>
                  </Link>
                  <button>
                    <img src={iconoEliminar} alt='icono de eliminar' className='w-7' />
                  </button>
                </div>
              </li>
            </ul>
          </section>
          {/* <ListaProducto/> */}
      </div>
    )
  }
  
  export default FilaMesa
  