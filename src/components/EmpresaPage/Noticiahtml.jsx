import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { traerEmpresas, traerNoticias } from '../../db/operaciones';

export const Noticiahtml = () => {
    const [idC, setId] = useState([])
    const { id } = useParams();
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        setId(id)
        traerNoticias().then((noticias) => {
            setNoticias(noticias);
        })
    }, [])

    return (
        <>
            {noticias.map((noticia, index) => {
                if(noticia.id === idC) {
                    return (
                        <React.Fragment key={index}>
                            <div dangerouslySetInnerHTML={{ __html: noticia.contenidoHTML }} />
                        </React.Fragment>
                    )
                }
                return null;
            })}
        </>
    )
}

export default Noticiahtml;
