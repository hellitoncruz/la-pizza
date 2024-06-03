'use client'

import { useEffect, useRef, useState } from "react"
import Image from 'next/image'

import './styles.scss'

export default function Page() {

  const [toggle, setToggle] = useState(1)
  
  const menuRef = useRef<HTMLUListElement>(null) 


  function updateToggle(id: number) {
    setToggle(id)
  }

  function openMenu() {
    menuRef?.current?.classList.toggle("menu-mobile")
  }

  function closeMenu() {
    if (menuRef?.current?.classList.contains("menu-mobile")) {
      menuRef.current.classList.remove("menu-mobile")
    }
  }

  return (
    <div className='page-container'>
      <div className='banner-container' id='home'>
      </div>

      <div className='products-container' id='products'>
        <h3>Mais vendidas</h3>
        <div className='product-contents'>
        <div className='product-item'>
            <Image width={120}
      height={120} className= "product-img" src='/assets/product1.svg' alt="" />
            <h4 className='product-name'>La Cuma</h4>
            <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='product-price'>00,00</p>
              <button className='product-buy-button'>Comprar agora</button>
          </div>

          <div className='product-item'>
            <Image width={120}
      height={120} className= "product-img" src='/assets/product2.svg' alt="" />
            <h4 className='product-name'>La Menta</h4>
            <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='product-price'>00,00</p>
            <button className='product-buy-button'>Comprar agora</button>
          </div>

          <div className='product-item'>
            <Image width={120}
      height={120} className= "product-img" src='/assets/product3.svg' alt="" />
            <h4 className='product-name'>La Toca</h4>
            <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='product-price'>00,00</p>
            <button className='product-buy-button'>Comprar agora</button>
          </div>

          <div className='product-item'>
            <Image width={120}
      height={120} className= "product-img" src='/assets/product4.svg' alt="" />
            <h4 className='product-name'>La Toca</h4>
            <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='product-price'>00,00</p>
            <button className='product-buy-button'>Comprar agora</button>
          </div>
        </div>
      </div>

      <div className='about-container' id='about'>
        <div className='about-content'>
        <Image width={488}
      height={500} className= "about-img" src='/assets/about-img.svg' alt="" />
          <div className='about-texts'>
          <h3>Sobre a La P<span className="yellow-letter">i</span><span className="red-letter">z</span><span className="green-letter">z</span>a</h3>
          <p>Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma sedutor de massa fresca assa no forno, criando as pizzas mais deliciosas da cidade.</p>
            <a href="/know-more">Ler mais sobre</a>
          </div>
        </div>
      </div>

      <footer>
        <div className='footer-content'><p>@ 2024 - Helliton Cruz</p></div>
      </footer>
    </div>
  );
}