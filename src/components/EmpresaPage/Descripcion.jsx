import React, { useEffect, useState } from 'react'

export const Descripcion = ({ texto }) => {
    const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    setScrollPos(currentScrollPos / maxScroll);
  };

  return (
    <div style={{ opacity: scrollPos }} className='bg-slate-100 rounded-xl my-6 h-auto py-4'>
      <h2 className='sm:mx-8 md:mx-40 lg:mx-80 my-3 text-blue-600 text-4xl font-semibold'>QUIENES SOMOS</h2>
      <p className=' sm:mx-8 md:mx-40 lg:mx-80 '>
        {texto}
      </p>
    </div>
  );
}
export default Descripcion;
