import React from 'react'
import erkek from './images/erkek-kuofor.jpg'
import './We.css'

const We = () => {
    return (
        <div className='We' id='We'>
            <div className='container'>
                <img src={erkek} alt='john' />
                <div className='col-2'>
                    <h2>Hakkımızda</h2>
                    <span className='line'></span>
                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek .</p>
                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı </p>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default We