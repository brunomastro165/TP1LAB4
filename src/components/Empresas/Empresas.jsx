import React, { useEffect, useState } from 'react'
import { traerEmpresas } from '../../db/operaciones'

export const Empresas = () => {
    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        traerEmpresas().then((empresa) => {
            setEmpresas(empresa);
        })
    }, [])

    console.log(empresas);
    return (
        <div className="grid grid-cols-2 gap-4 p-4 place-content-center ">
            <div className="flex place-content-center font-bold my-7">Empresas</div>
            <div className="flex place-content-center font-bold my-7">
                Paginas
            </div>

            {empresas.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex place-content-center">{item.nombreEmpresa}</div>
                    <div className="flex place-content-center">
                        <a href={`/empresa/${item.id}`} className="text-blue-500 hover:underline">
                            Ver Empresa
                        </a>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}
