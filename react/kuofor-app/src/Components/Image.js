// import React, {useEffect} from 'react';
// import "./Image.css";
// import gsap from "gsap";
// import image1 from "./images/ımage1.jpg"
// import image2 from "./images/ımage2.jpg"
// import image3 from "./images/ımage3.jpg"
// import image4 from "./images/ımage4.jpg"
// import image5 from "./images/ımage5.jpg"
// import image6 from "./images/ımage6.jpg"



// function Image() {
  
//     useEffect(() => {
//           const divs = document.querySelectorAll(".testimonials")
//           gsap.set(divs[0], {x:100, opacity:1} );

//           gsap
//           .timeline({repeat:-1, defaults:{duration:3}})

//           .add("one")
//           .to(divs[0], {y:600, x:0, opacity:0.05}, "one")
//           .to(divs[1], {y:-300, x:0, opacity:0.05}, "one")
//           .to(divs[2], {y:0, x:0, opacity:0.05}, "one")
//           .to(divs[3], {y:0, x:0, opacity:0.05}, "one")
//           .to(divs[4], {y:0, x:0, opacity:0.05}, "one")
//           .to(divs[5], {y:-1700, x:100, opacity:1}, "one")


//           .add("two")
//           .to(divs[0], {y:200, x:100, opacity:1}, "two")
//           .to(divs[1], {y:-300, x:0, opacity:0.05}, "two")
//           .to(divs[2], {y:0, x:0, opacity:0.05}, "two")
//           .to(divs[3], {y:0, x:0, opacity:0.05}, "two")
//           .to(divs[4], {y:0, x:0, opacity:0.05}, "two")
//           .to(divs[5], {y:-1500, x:0, opacity:0.05}, "two")

 
//           .add("three")
//           .to(divs[0], {y:0, x:0, opacity:0.05}, "three")
//           .to(divs[1], {y:-150, x:100, opacity:1}, "three")
//           .to(divs[2], {y:-400, x:0, opacity:0.05}, "three")
//           .to(divs[3], {y:0, x:0, opacity:0.05}, "three")
//           .to(divs[4], {y:0, x:0, opacity:0.05}, "three")
//           .to(divs[5], {y:0, x:0, opacity:0.05}, "three")

//           .add("four")
//           .to(divs[0], {y:0, x:0, opacity:0.05}, "four")
//           .to(divs[1], {y:300, x:0, opacity:0.05}, "four")
//           .to(divs[2], {y:-500, x:100, opacity:1}, "four")
//           .to(divs[3], {y:-600, x:0, opacity:0.05}, "four")
//           .to(divs[4], {y:-300, x:0, opacity:0.05}, "four")
//           .to(divs[5], {y:0, x:0, opacity:0.05}, "four")


//           .add("five")
//           .to(divs[0], {y:0, x:0, opacity:0.05}, "five")
//           .to(divs[1], {y:0, x:0, opacity:0.05}, "five")
//           .to(divs[2], {y:0, x:0, opacity:0.05}, "five")
//           .to(divs[3], {y:-900, x:100, opacity:1}, "five")
//           .to(divs[4], {y:-1000, x:0, opacity:0.05}, "five")
//           .to(divs[5], {y:-500, x:0, opacity:0.05}, "five")


//           .add("six")
//           .to(divs[0], {y:300, x:0, opacity:0.05}, "six")
//           .to(divs[1], {y:0, x:0, opacity:0.05}, "six")
//           .to(divs[2], {y:0, x:0, opacity:0.05}, "six")
//           .to(divs[3], {y:0, x:0, opacity:0.05}, "six")
//           .to(divs[4], {y:-1300, x:100, opacity:1}, "six")
//           .to(divs[5], {y:-500, x:0, opacity:0.05}, "six")



//     },)

//   return (
//     <div className="contented" >
//       <div className='testimonials'>
//         <div className='image'>
//             <div>
//                 <img className='img' src={image1} alt="berber" />
//             </div>
//         </div>
//         </div>
//         <div className='testimonials'>
//         <div className='image'>
//             <div>
//                 <img className='img' src={image2} alt="berber" />
//             </div>
//         </div>
//         </div> 
//         <div className='testimonials'>
//         <div className='image'>
//             <div>
//                 <img className='img' src={image3} alt="berber" />
//             </div>
//         </div>
//         </div> 
//         <div className='testimonials'>
//         <div className='image'>
//             <div>
//                 <img className='img' src={image4} alt="berber" />
//             </div>
//         </div>
//         </div>
//          <div className='testimonials'>
//         <div className='image'>
//             <div>
//                 <img className='img' src={image5} alt="berber" />
//             </div>
//         </div>
//         </div>
//         <div className='testimonials'>
//         <div className='image'>
//             <div>
//                 <img className='img' src={image6} alt="berber" />
//             </div>
//         </div>
//         </div>
        

//       <hr/>
//     </div>
//   )
// }

// export default Image
