import React from 'react'

export const Noticia = ({ noticia }) => {
    return (
        <div className='relative'>
            <img
                src={noticia.imagenNoticia}
                className="w-full flex object-cover cursor-pointer z-0"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/Noticia/${noticia.id}` // Reemplaza esto con la URL de tu página
                }}
            />
            <div className=' absolute left-3/4 z-10 text-5xl font-bold text-blue-600 bg-gray-200 rounded-bl-2xl px-10 pb-10 top-0 pt-20'>
            {noticia.tituloDeNoticia}
          </div>
            
        </div>
    );
}
