import React, { useState } from 'react';
import Carousel from './Carousel';

const NoticiasFiltro = ({ noticias }) => {
    const [busqueda, setBusqueda] = useState('');

    const noticiasFiltradas = noticias.filter(noticia =>
        noticia.tituloDeNoticia.toLowerCase().includes(busqueda.toLowerCase())
    );
    console.log(noticiasFiltradas)

    return (
        <div >

            <div className="flex my-5  border-solid border-2 border-y-black py-3">
                <a href='/' className='text-5xl font-bold text-blue-600 bg-gray-200 rounded-sm p-3 mx-5 cursor-pointer hover:bg-blue-600 hover:text-gray-200'>
                    INICIO
                </a>
                <a href='/empresas' className='text-5xl font-bold text-blue-600 bg-gray-200 rounded-sm p-3 mx-5 cursor-pointer hover:bg-blue-600 hover:text-gray-200'>
                    EMPRESAS
                </a>

                <div className='flex justify-end w-full items-center mx-6'>
                    <img className=' h-max w-16 mx-5' src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" alt="" />
                    <input
                        type="text"
                        placeholder="Buscar noticias..."
                        className="w-64 h-16 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 border-solid border-2 border-indigo-600"
                        onChange={e => setBusqueda(e.target.value)}
                    />
                </div>

            </div>
            <Carousel slides={noticiasFiltradas} />
        </div>
    );
};

export default NoticiasFiltro;
