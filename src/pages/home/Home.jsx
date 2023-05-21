import React from "react";
import style from "./Home.module.css";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

export default function PageHome() {
    return (
       
        <div>
            <div className={style.head}>
                <div className={style.headContainer}>
                    <div className={style.navHead}>
                        <span>Sobre</span>
                        <span>Habilidades</span>
                        <span>Portfolio</span>
                        <span className={style.meContate}>Me Contate</span>
                    </div>

                    <div className={style.containerLeft}>
                        <h2>Oi, Eu sou</h2>
                        <h1>Eduardo Pereira</h1>
                        <p>Front-end Developer / UI Designer</p>
                        <div className={style.iconsHeader}>
                        <a href=""><MdAlternateEmail/></a>
                        <a href=""><BsGithub/></a>
                        <a href=""><BsLinkedin/></a>
                        
                    </div>
                    </div>
                    <div>
                        <div className={style.containerRight}>
                            {/* <Image
                                src="/image/eu4.png"
                                width={572}
                                height={650}
                                alt="Eduardo"
                                /> */}
                            <div className={style.box}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.footerText}>
                    <h3>Conheça um pouco mais de mim</h3>
                    <span>Sou uma pessoa no qual amo oque eu faço e não me arrependo da área que escolhi, o meu objetivo não é ser o melhor programador, mas sim o que se dedica muito para aprender um pouco de cada coisa, também quero crescer na vida mas sem usar ninguém como escada, atualmente trabalho como editor de vídeo mas meu objetivo é conseguir uma vaga na área de TI.</span>
                </div>
            </div>
            
            <div className={style.main}>
                <div className={style.SobreMim}>
                    <h3>Sobre Mim</h3>
                    <p>confira um pouco do que sou capaz!</p>
                </div>
                <div className={style.InfoMainBox}>
                    <div className={style.InfoMainDesign}>
                         <h3>DESIGN</h3>
                         <p>Posso criar um design personalizado para o seu site, levando em consideração suas necessidades e sugestões. Além disso, estou disponível para consultar você ao longo do processo de trabalho.</p>
                    </div>
                    <div className={style.InfoMainDevelopment}>
                        <h3>DEVELOPMENT</h3>
                        <p>Posso desenvolver seu projeto, começando pelo básico e avançando de acordo com suas necessidades e preferências.</p>
                    </div>
                    <div className={style.InfoMainMaintenance}>
                        <h3>MAINTENANCE</h3>
                        <p>Ofereço um suporte abrangente tanto para o seu site quanto para você, garantindo assistência máxima em todas as áreas necessárias.</p>
                    </div>
                </div>

                <div className={style.habilidades}>
                    <h3>HABILIDADES</h3>
                </div>

                <div className={style.mainInfo}>
                    <h3>OQUE EU USO:</h3>
                    <div className={style.iconsMain} >
                        <div className={style.icons}>
                        <Image
                            src="/icons/html5.png"
                            width={40}
                            height={50}
                            alt="HTML5"
                        />
                        <span>HTML5</span>
                        </div>
                        <div className={style.icons}>
                        <Image
                            src="/icons/css.png"
                            width={40}
                            height={50}
                            alt="CSS"
                        />
                        <span>CSS</span>
                        </div>
                        <div className={style.icons}>
                        <Image
                            src="/icons/sass.png"
                            width={55}
                            height={50}
                            alt="SASS"
                        />
                        <span>SASS</span>
                        </div>
                        <div className={style.icons}>
                        <Image
                            src="/icons/javascript.png"
                            width={45}
                            height={50}
                            alt="JAVASCRIPT"
                        />
                        <span>JAVASCRIPT</span>
                        </div>
                        <div className={style.icons}>
                        <Image
                            src="/icons/react.png"
                            width={50}
                            height={50}
                            alt="REACT"
                        />
                        <span>REACT</span>
                        </div>
                        <div className={style.icons}>
                        <Image
                            src="/icons/git.png"
                            width={50}
                            height={50}
                            alt="GIT"
                        />
                        <span>GIT</span>
                        </div>
                        <div className={style.icons}>
                        <Image
                            src="/icons/figma.png"
                            width={35}
                            height={50}
                            alt="FIGMA"
                        />
                        <span>FIGMA</span>
                        </div>
                    </div>
                    <h3>APRENDENDO:</h3>
                    <div className={style.iconsMain}>
                       <div className={style.icons}>
                        <Image
                            src="/icons/nodejs.png"
                            width={40}
                            height={50}
                            alt="NODEJS"
                        />
                        <span>NODEJS</span>
                        </div>
                       <div className={style.icons}>
                        <Image
                            src="/icons/mysql.png"
                            width={50}
                            height={50}
                            alt="MYSQL"
                        />
                        <span>MYSQL</span>
                        </div>
                       <div className={style.icons}>
                        <Image
                            src="/icons/mongodb.png"
                            width={20}
                            height={50}
                            alt="MONGODB"
                        />
                        <span>MONGODB</span>
                        </div>
                       <div className={style.icons}>
                        <Image
                            src="/icons/typescript.png"
                            width={45}
                            height={50}
                            alt="TYPESCRIPT"
                        />
                        <span>TYPESCRIPT</span>
                        </div>
                    </div>
                    <h3>OUTRAS HABILIDADES:</h3>
                    <div className={style.iconsMain}>
                    <div className={style.icons}>
                        <Image
                            src="/icons/english.png"
                            width={50}
                            height={50}
                            alt="ENGLISH"
                        />
                        <span>ENGLISH</span>
                        </div>
                    </div>

                </div>
                <div className={style.footerMain}>
                    <div className={style.projetos}>
                        <h3>P R O J E T O S</h3>
                    </div>
                </div>
                <div className={style.footerProject}>
                <div className={style.footerProjects}>
                    <div className={style.projectCard}>
                        <div className={style.moveit}>
                         <h4>MOVE IT</h4>
                         <span>Projeto baseado na tecnica pomodoro</span>
                         <a href="https://project-d.vercel.app">DEMO</a>
                        </div>
                    </div>
                    <div className={style.projectCard}>
                    <div className={style.untilProject}>
                        <h4>Projeto</h4>
                        <span>DESCRIÇÃO</span>
                        <a href="#">DEMO</a>
                        </div>
                    </div>
                    <div className={style.projectCard}>
                    <div className={style.untilProject}>
                        <h4>Projeto</h4>
                        <span>DESCRIÇÃO</span>
                        <a href="#">DEMO</a>
                        </div>
                    </div>
                    <div className={style.projectCard}>
                    <div className={style.untilProject}>
                        <h4>Projeto</h4>
                        <span>DESCRIÇÃO</span>
                        <a href="#">DEMO</a>
                        </div>
                    </div>
                    <div className={style.projectCard}>
                    <div className={style.untilProject}>
                        <h4>Projeto</h4>
                        <span>DESCRIÇÃO</span>
                        <a href="#">DEMO</a>
                        </div>
                    </div>
                    <div className={style.projectCard}>
                    <div className={style.untilProject}>
                        <h4>Projeto</h4>
                        <span>DESCRIÇÃO</span>
                        <a href="#">DEMO</a>
                        </div>
                    </div>
                    
                </div>
                <p className={style.footerTextP}>e vem mais por ai!!</p>
                </div>
                <div className={style.footerArea}>
                    <a href="#">Voltar ao topo</a>
                    <div className={style.iconsFooter}> 
                        <a href=""><BsLinkedin/></a>
                        <a href=""><BsInstagram/></a>
                        <a href=""><AiOutlineMail/></a>
                    </div>
                    <p>@2023  Eduardo Pereira Todos os direitos reservados</p>
                </div>
           </div>
        </div>
    )
}