import React, { useEffect, useState } from 'react'
import NavbarEmpresa from './NavbarEmpresa/NavbarEmpresa';
import FooterEmpresa from './FooterEmpresa/FooterEmpresa';
import { Carousel } from './Carousel';
import Descripcion from './Descripcion';
import Mapa from './Mapa';
import { useParams } from 'react-router-dom';
import { traerEmpresas, traerNoticiaId } from '../../db/operaciones';
import NoticiasFiltro from './NoticiasFiltro';

export const Empresa = () => {

    const [empresas, setEmpresas] = useState([])
    const [idC, setId] = useState([])
    const { id } = useParams();
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        traerEmpresas().then((empresa) => {
            setEmpresas(empresa);
        })

        setId(id)
        traerNoticiaId(id).then((noticias) => {
            setNoticias(noticias);
        })

    }, [])

    return (
        <div>
            {empresas.map((empresa, index) => {
                return (
                    <React.Fragment key={index}>
                        {empresa.id === idC ? (
                            <>
                                <NavbarEmpresa telefono={empresa.telefono} nombreEmpresa={empresa.denominacion} horarios={empresa.horarioAtencion} />
                                <NoticiasFiltro noticias={noticias} id={empresa.id} />
                                <Descripcion texto={empresa.quienesSomos} />
                                <Mapa latitud={empresa.latitud} longitud={empresa.longitud} />
                                <FooterEmpresa nombreEmpresa={empresa.nombreEmpresa} domicilio={empresa.domicilio} />
                            </>
                        ) : null}
                    </React.Fragment>
                )
            })}



        </div>

    )
}
export default Empresa;
