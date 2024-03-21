import React from 'react'
import NavbarEmpresa from './NavbarEmpresa/NavbarEmpresa';
import FooterEmpresa from './FooterEmpresa/FooterEmpresa';
import { Carousel } from './Carousel';
import Descripcion from './Descripcion';
import Mapa from './Mapa';

export const Empresa = () => {
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg"
      ];
    
    return (
        <div>
            <NavbarEmpresa telefono="123-456-7890" nombreEmpresa="Mi Puta Empresa" horarios="9:00 AM - 5:00 PM" />
            <Carousel slides={slides}/>
            <Descripcion texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a enim dictum, pulvinar libero sit amet, condimentum enim. Phasellus ac dignissim mi. Suspendisse id tortor feugiat, cursus diam pharetra, euismod mauris. Nam suscipit leo id tortor egestas, non egestas dolor egestas. Etiam sit amet ornare erat. Ut feugiat mi sit amet fermentum posuere. Cras vitae ex gravida ex tincidunt pulvinar sed ac est. Curabitur ultricies sem nec mi porta dignissim. Maecenas sit amet semper nisi, sit amet malesuada nulla. Nam tempor purus a tincidunt cursus. Nunc velit libero, imperdiet non nisi sed, rutrum vestibulum orci. Nunc accumsan neque felis, sed venenatis eros porttitor ut. Nam gravida dui nec ex luctus, euismod commodo nisi dignissim. Cras ultricies lorem non nisi rhoncus, eu tristique enim vestibulum."}/>
            <Mapa latitud={-32.918087588820725} longitud={-68.84104627147876}/>
            <FooterEmpresa nombreEmpresa="Mi Puta Empresa" domicilio={"La casa del vata"} />
        </div>
    )
}
export default Empresa;
