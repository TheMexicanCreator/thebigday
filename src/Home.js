import React from 'react';
import './Home.css';
import Product from './Product.js'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
             <img className='home_image' src='https://static.wixstatic.com/media/8b44cb_68aaa701e2ed4d96a2bb54e4a35cba6e~mv2.jpg/v1/fill/w_2539,h_1487,al_c,q_90,enc_auto/8b44cb_68aaa701e2ed4d96a2bb54e4a35cba6e~mv2.jpg' alt='' />
             <div className='home_row'>
               <Product title='Calvin Klein Black Suit' price={169.99} image='https://image.menswearhouse.com/is/image/TMW/MW40_3F1D_10_CALVIN_KLEIN_FORMAL_MAIN?$40MainPDP$' rating={5} />
               <Product title='Pronto Uomo Modern Fit Notch Lapel Tuxedo, Black' price={299.99} image='https://image.menswearhouse.com/is/image/TMW/MW40_3G2P_10_PRONTO_UOMO_FORMAL_MAIN?$40GridMobile$' rating={5} />
             </div>
             <div className='home_row'>
               <Product title='Paisley & Gray Black Slim Fit Formal Dress Pants' price={99.99} image='https://image.menswearhouse.com/is/image/TMW/MW40_38YX_10_PAISLEY_GRAY_BLACK_MAIN?$40GridDesktop$' rating={4}/>
               <Product title='Midnight Pin Dot Tuxedo' price={149.99} image='https://static.theblacktux.com/products/tuxedos/midnight-pin-dot-tuxedo/1_20160811_HolidayEcom_BlackAndPinDotJacket_2238_w1_1812x1875.jpg?trim=0,186&width=461' rating={5} />
               <Product title='Notch Lapel Tuxedo' price={149.99} image='https://static.theblacktux.com/products/tuxedos/notched-lapel-tuxedo/2_02_NLT_0706_Ext_F_1812x1875.jpg?trim=0,186&width=461' rating={5}/>
             </div>
             <div className='home_row'>
               <Product title='Shawl Collar Tuxedo' price={149.99} image='https://static.theblacktux.com/products/tuxedos/shawl-collar-tuxedo/1_11_SCT_4417_Ext_F_1812x1875_new.jpg?trim=0,186&width=461' rating={5} />
             </div>
        </div>
    </div>
  )
}

export default Home