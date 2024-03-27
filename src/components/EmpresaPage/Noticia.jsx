import React from 'react'

export const Noticia = ({ noticias }) => {
    
    return (

        <div >
            {noticias?.map((noticia, index) => {
                return (
                    <React.Fragment key={index}>
                        <img
                            src={noticia.imagenNoticia}
                            className="w-full object-cover cursor-pointer z-0"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/Noticia/${noticia.id}` // Reemplaza esto con la URL de tu página
                            }}
                        />
                        <div className='absolute top-3/4 left-3/4 z-10 text-5xl font-bold text-blue-600 bg-gray-200 rounded-tl-2xl px-10 pt-3 pb-40'>
                            {noticia.tituloDeNoticia}
                        </div>
                    </React.Fragment>
                );
            })}

        </div>
    )
}
