import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { traerEmpresas, traerNoticias } from '../../db/operaciones';
import NavbarEmpresa from './NavbarEmpresa/NavbarEmpresa';
import FooterEmpresa from './FooterEmpresa/FooterEmpresa';

export const Noticiahtml = () => {
    const [empresas, setEmpresas] = useState([])
    const [idC, setId] = useState([])
    const { id } = useParams();
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        setId(id)
        traerNoticias().then((noticias) => {
            setNoticias(noticias);
        })
        traerEmpresas().then((empresa) => {
            setEmpresas(empresa);
        })
    }, [])

    return (
        <>
            {empresas.map((empresa, i) =>
                noticias.map((noticia, index) => {
                    if (noticia.id === idC && empresa.id === noticia.idEmpresa) {
                        return (
                            <React.Fragment key={index}>
                                <NavbarEmpresa telefono={empresa.telefono} nombreEmpresa={empresa.denominacion} horarios={empresa.horarioAtencion} />
                                <div className='flex justify-center w-full relative my-6 '>
                                    <div className=' flex justify-center absolute w-3/4 opacity-30 bg-black'>
                                        <h2 className=' opacity-100 text-white text-2xl'>{noticia.tituloDeNoticia}</h2>
                                    </div>

                                    <img className=' shadow-lg w-3/4' src={noticia.imagenNoticia} alt="" />

                                </div>
                                <div className='flex justify-center w-full relative my-6 '>
                                    <h2 className=' w-3/4 text-6xl font-bold'>{noticia.tituloDeNoticia}</h2>

                                </div>
                                <div className='flex justify-center w-full relative my-3 '>
                                    <h2 className=' w-3/4 text-xl'>{noticia.fecha}</h2>
                                </div>
                                <div className='flex justify-center w-full relative my-3 '>
                                    <h2 className=' w-3/4 text-xl text-blue-200 border-y-2 border-black py-4'>Resumen de la noticia</h2>
                                </div>

                                <div className='flex justify-center w-full relative my-3 '>
                                    <h2 className=' w-3/4 text-xl'>{noticia.resumenNoticia}</h2>
                                </div>
                                <div className='flex justify-center w-full relative my-10 '>
                                    <div className='w-3/4'>
                                        <div dangerouslySetInnerHTML={{ __html: noticia.contenidoHTML }} />
                                    </div>
                                </div>
                                <FooterEmpresa nombreEmpresa={empresa.nombreEmpresa} domicilio={empresa.domicilio} />
                            </React.Fragment>
                        )
                    }
                    return null;
                })
            )}
        </>
    )
}

export default Noticiahtml;
