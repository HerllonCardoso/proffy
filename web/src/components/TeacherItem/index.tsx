import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/60345415?s=460&u=cbe3c6f0841abbd29f06f24c8f86034b4aa851b5&v=4" alt=""/>
                        <div>
                            <strong>Herllon Cardoso</strong>
                            <span>IT</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        <br />  <br />
                        Unde repellendus voluptates reiciendis aliquam, explicabo numquam. 
                        Sit laborum quisquam ea officia error perferendis atque, vero modi esse excepturi distinctio, neque eum!
                    </p>
                    
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,0</strong>
                        </p>
                        <button>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;