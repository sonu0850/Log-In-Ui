import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  // const navigate = useNavigate()
  // const token= localStorage.getItem('token')
  // if(token){
  //   navigate('/Home')
    
  // }



  
  return (
    <div className='Home w-100 h-100 fs-2 d-flex flex-wrap justify-content-center  gap-5'>


 <div className="card" style={{ width: "25rem", border: "none"}}>
  <img className="card-img-top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/107599/01/sv01/fnd/PNA/fmt/png/FUTURE-7-ULTIMATE-FG/AG-Men's-Soccer-Cleats" alt="Card image cap" width={20}/>
  <div className="card-body">
    <h5 className="card-title">  FUTURE 7 ULTIMATE FG/AG Men's Soccer Cleats</h5>
    <p className="card-text">
    FUTURE 7 ULTIMATE FG/AG Men's Soccer 
    </p>
    <a href="#" className="btn btn-primary">
    $240.00
    </a>
  </div>
</div>
 <div className="card" style={{ width: "25rem" , border: "none" }}>
  <img className="card-img-top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/307889/03/sv01/fnd/PNA/fmt/png/Scuderia-Ferrari-Future-Cat-OG-Motorsport-Shoes" alt="Card image cap" width={20}/>
  <div className="card-body">
    <h5 className="card-title">  Scuderia Ferrari Future Cat OG Motorsport Shoes</h5>
    <p className="card-text">
    Scuderia Ferrari Future Cat OG Motorsport Shoes
    </p>
    <a href="#" className="btn btn-primary">
    $100.00
    </a>
  </div>
</div>
 <div className="card" style={{ width: "25rem" , border: "none" }}>
  <img className="card-img-top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380017/01/sv01/fnd/PNA/fmt/png/ForeverRun-NITRO%E2%84%A2-Men's-Running-Shoes" alt="Card image cap" width={20}/>
  <div className="card-body">
    <h5 className="card-title">  ForeverRun NITRO™ Men's Running Shoes </h5>
    <p className="card-text">
    ForeverRun NITRO™ Men's Running Shoes
    </p>
    <a href="#" className="btn btn-primary">
    $150.00
    </a>
  </div>
</div>

 <div className="card" style={{ width: "25rem" , border: "none" }}>
  <img className="card-img-top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/307648/04/sv01/fnd/PNA/fmt/png/Mercedes-AMG-Petronas-Motorsport-RS-X-Motorsport-Men's-Shoes" alt="Card image cap" width={20}/>
  <div className="card-body">
    <h5 className="card-title">  Mercedes-AMG Petronas Motorsport RS-X Motorsport Men's Shoes</h5>
    <p className="card-text">
    Mercedes-AMG Petronas Motorsport RS-X Motorsport Men's Shoes
    </p>
    <a href="#" className="btn btn-primary">
    $100.00
    </a>
  </div>
</div>
 <div className="card" style={{ width: "25rem" , border: "none" }}>
  <img className="card-img-top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/107834/01/sv01/fnd/PNA/fmt/png/FUTURE-7-ULTIMATE-FTR-FG/AG-Men's-Soccer-Cleats" alt="Card image cap" width={20}/>
  <div className="card-body">
    <h5 className="card-title">  BFUTURE 7 ULTIMATE FTR FG/AG Men's Soccer Cleats </h5>
    <p className="card-text">
    FUTURE 7 ULTIMATE FTR FG/AG Men's Soccer Cleats 
    </p>
    <a href="#" className="btn btn-primary">
    $70.00
    </a>
  </div>
</div>
 <div className="card" style={{ width: "25rem" , border: "none" }}>
  <img className="card-img-top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374923/04/sv01/fnd/PNA/fmt/png/Basket-Classic-XXI-Men's-Sneakers" alt="Card image cap" width={20}/>
  <div className="card-body">
    <h5 className="card-title">  Basket Classic XXI Men's Sneakers </h5>
    <p className="card-text">
    Basket Classic XXI Men's Sneakers
    </p>
   <br /><a href="#" className="btn btn-primary"> br
    $70.00
    </a>
  </div>
</div>

    </div>
  )
}

export default Home
