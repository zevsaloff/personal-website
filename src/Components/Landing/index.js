import React, { Component, useEffect, useRef } from 'react'
import colors from '../../colors'
// import backgroundImage from '../../assets/photoForSite.png'
import landingPortrait from '../../assets/zev-landing-portrait.png'
import './iconAnimation.scss'

// import Logo from '../../Logo'

const LandingSection = () => {
  const appStyles = { color: 'blue' }
  const iconsRef = useRef(null)

  const iconsStyles = {
    width: '13vmin',
    fill: 'blue',
    position: 'absolute', 
    animationName: 'iconAnimation',
    animationDuration: '20s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate'
  }

  // paralax function
  useEffect(() => {
    const scrollContainer = document.getElementById('mySite')
    scrollContainer.addEventListener('scroll', e => {
      const offset = scrollContainer?.scrollTop
      const paralaxOffset = offset * 0.7
      iconsRef.current.style.top = `${-paralaxOffset}px`
      iconsRef.current.style.transform = `translate(0, ${-paralaxOffset}px)`
    })
    return () => {
      // cleanup
    }
  })
  return (
    <div
      id="landing"
      style={{
        scrollSnapAlign: 'start',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        margin: 0,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        position: 'relative',
        display: 'flex',
        

      }}
    >
      <div id="landingIcons"
        ref={iconsRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
          // opacity:0.6
        }}>
          <svg id="alienGun" style={{ ...iconsStyles, top: '7%', left: '14%',animationDelay:"0.2s", animationDirection:'reverse' }}
            viewBox="0 0 64 64" x="0px" y="0px">
  
            <g data-name="30-alien gun">
              <path id="gun"
                style={{ fill: colors.scBlue }}
                d="M61,30a3,3,0,0,0,0-6H56V22a1,1,0,0,0-1-1,6,6,0,0,0-4.91,2.562A7.008,7.008,0,0,0,45,20.08V19.2a1,1,0,0,0-.736-.965q-1.128-.307-2.264-.579V14.5a2.5,2.5,0,0,0-5,0v2.143a73,73,0,0,0-24,0V14.5a2.5,2.5,0,0,0-5,0v3.156q-1.135.273-2.264.579a1,1,0,0,0-.578.425,15.349,15.349,0,0,0-1.222,2.346A4,4,0,0,0,0,25v4a4,4,0,0,0,3.936,3.994A15.349,15.349,0,0,0,5.158,35.34a1,1,0,0,0,.578.425q1.128.307,2.264.579v3.9a12.714,12.714,0,0,0,1.336,5.66,7.582,7.582,0,0,1-1.422,8.764A3.121,3.121,0,0,0,10.121,60H27.354A1.647,1.647,0,0,0,29,58.354a4.259,4.259,0,0,0-2.916-4.046,1.078,1.078,0,0,1-.6-.5,20.588,20.588,0,0,1-2.566-9.816A14.431,14.431,0,0,0,34.72,37.7a72.964,72.964,0,0,0,9.544-1.937A1,1,0,0,0,45,34.8v-.88a7.008,7.008,0,0,0,5.09-3.482A6,6,0,0,0,55,33a1,1,0,0,0,1-1V30Zm0-4a1,1,0,0,1,0,2H56V26ZM43,29H36a2,2,0,0,1,0-4h7ZM39,14.5a.5.5,0,0,1,1,0v2.712q-.5-.105-1-.2Zm-29,0a.5.5,0,0,1,1,0v2.51q-.5.1-1,.2ZM2,29V25a2,2,0,0,1,1.213-1.837,15.529,15.529,0,0,0,0,7.674A2,2,0,0,1,2,29ZM9,56.879a1.129,1.129,0,0,1,.328-.793,9.584,9.584,0,0,0,2.286-3.661L16,54.618V58H10.121A1.122,1.122,0,0,1,9,56.879ZM25.451,56.2A2.266,2.266,0,0,1,26.973,58H18V54a1,1,0,0,0-.553-.9l-5.378-2.689a9.563,9.563,0,0,0-.944-5.4A10.7,10.7,0,0,1,10,40.248v-3.46a73.008,73.008,0,0,0,11.6,1.475c-.063.245-.127.49-.18.737H13a1,1,0,0,0-.895,1.447l2,4A1,1,0,0,0,15,45h5.935a22.567,22.567,0,0,0,2.8,9.777A3.072,3.072,0,0,0,25.451,56.2ZM15.618,43l-1-2h6.46c-.083.665-.134,1.332-.158,2ZM23,41.987a20.515,20.515,0,0,1,.671-3.658c.444.008.887.023,1.331.023,2.3,0,4.6-.115,6.9-.332A12.42,12.42,0,0,1,23,41.987Zm20-7.955a71.026,71.026,0,0,1-36.358-.094,13.5,13.5,0,0,1,0-13.876A71.026,71.026,0,0,1,43,19.968V23H36a4,4,0,0,0,0,8h7v3.032ZM45,31.9V22.1a5,5,0,0,1,0,9.8Zm9-1.026a4,4,0,0,1,0-7.746v7.746Z">
              </path>
              <path id="bigCircle"
                style={{ fill: colors.lightGrey }}
                d="M13,20a7,7,0,1,0,7,7A7.009,7.009,0,0,0,13,20Zm0,12a5,5,0,1,1,5-5A5.006,5.006,0,0,1,13,32Z"></path>
              <path id="smallCircle"
                style={{ fill: colors.kGreen }}
                d="M13,23a4,4,0,1,0,4,4A4,4,0,0,0,13,23Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,13,29Z"></path>
  
              <path id="mediumCircle"
                style={{ fill: colors.lightGrey }}
                d="M26,22a5,5,0,1,0,5,5A5.006,5.006,0,0,0,26,22Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,26,30Z"></path>
              <polygon className='plus'
                style={{ fill: colors.aRed }}
                points="56 17 58 17 58 15 60 15 60 13 58 13 58 11 56 11 56 13 54 13 54 15 56 15 56 17"></polygon>
              <polygon className='plus'
                style={{ fill: colors.aRed }}
                points="62 35 60 35 60 37 58 37 58 39 60 39 60 41 62 41 62 39 64 39 64 37 62 37 62 35"></polygon>
  
            </g>
          </svg>
          <svg id="astronaut" style={{ ...iconsStyles, bottom: '14%', right: '14%',animartionDelay:'0.5s',animationDirection:'alternate' }}
            viewBox="0 0 64 64" x="0px" y="0px">
            <g data-name="12-astronaut">
              <path id="naut"
                style={{ fill: colors.lightGrey }}
                d="M39.328,40.017l-2.386-1.591a3,3,0,0,0-1.165-1.83,18,18,0,1,0-23.554,0,3,3,0,0,0-1.165,1.83L8.672,40.017A9,9,0,0,0,0,49V63a1,1,0,0,0,1,1H47a1,1,0,0,0,1-1V49A9,9,0,0,0,39.328,40.017ZM14.366,38H34a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2Zm23.48-7H18.979a4.967,4.967,0,0,1-4.921-4.408A32.373,32.373,0,0,0,27,29.287a32.393,32.393,0,0,0,12.55-2.526A15.978,15.978,0,0,1,37.846,31Zm2.086-6.607A30.444,30.444,0,0,1,14,24.362V18.978A4.984,4.984,0,0,1,18.979,14H37.218A15.9,15.9,0,0,1,40,23C40,23.468,39.972,23.932,39.932,24.393ZM8,23A15.979,15.979,0,0,1,35.589,12H18.979A6.986,6.986,0,0,0,12,18.978v7.044A6.986,6.986,0,0,0,18.979,33H36.473a16.035,16.035,0,0,1-3.156,3H14.683A16.008,16.008,0,0,1,8,23ZM2,49a7.011,7.011,0,0,1,6-6.929V62H2Zm8-7.465,1.453-.969A2.991,2.991,0,0,0,14,42H34a2.991,2.991,0,0,0,2.547-1.434L38,41.535V62H36V50.157A6.164,6.164,0,0,0,29.843,44H18.157A6.164,6.164,0,0,0,12,50.157V62H10ZM17,62V59H31v3Zm16,0V58a1,1,0,0,0-1-1H16a1,1,0,0,0-1,1v4H14V50.157A4.162,4.162,0,0,1,18.157,46H29.843A4.162,4.162,0,0,1,34,50.157V62Zm13,0H40V42.071A7.011,7.011,0,0,1,46,49Z">
              </path>
              <path id="textBox"
                style={{ fill: colors.scBlue }}
                d="M63,0H32a1,1,0,0,0-1,1V5h2V2H62V49H59a1,1,0,0,0-.819.427L53,56.828V50a1,1,0,0,0-1-1H50v2h1v9a1,1,0,0,0,1.819.573L59.521,51H63a1,1,0,0,0,1-1V1A1,1,0,0,0,63,0Z">
              </path>
              <rect className="text" style={{ fill: colors.jonquilY }} x="37" y="6" width="5" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="44" y="6" width="14" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="42" y="12" width="10" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="54" y="12" width="4" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="44" y="18" width="14" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="44" y="24" width="2" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="48" y="24" width="10" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="43" y="30" width="11" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="56" y="30" width="2" height="2"></rect>
              <rect className="text" style={{ fill: colors.jonquilY }} x="41" y="36" width="13" height="2"></rect>
              <path id="suitCircle" style={ { fill: colors.mPurple }}d="M20,48a4,4,0,1,0,4,4A4,4,0,0,0,20,48Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,20,54Z"></path>
              <rect className="suitButton" style={{ fill: colors.mPurple }} x="25" y="49" width="6" height="2"></rect>
              <rect className="suitButton" style={{ fill: colors.mPurple }} x="25" y="53" width="6" height="2"></rect>
            </g>
          </svg>
          <svg id="handshake" style={{ ...iconsStyles, top: '40%', right: '10%',animationDelay:"1.5s", animationDirection:'normal' }}
            viewBox="0 0 64 64" x="0px" y="0px">
            <g data-name="26-robot and human handshake">
              <path id="robotHand"
                style={{ fill: colors.pPurple }}
                d="M33,23H29V22a1,1,0,0,0-1-1H24V20a1,1,0,0,0-1-1H18a1,1,0,0,0-1,1V39H16.9L16,30.947V23a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v8h.017a1.024,1.024,0,0,0-.011.11l1,9c0,.011.008.019.009.029s0,.017,0,.025L10.986,46H8.161l-2.845-.948a.968.968,0,0,0-.291-.047C5.016,45.005,5.009,45,5,45H1a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H4.839l2.845.948A.983.983,0,0,0,8,53h6v3H13a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V57a1,1,0,0,0-1-1H30V53h1a1,1,0,0,0,.986-.836l2-12a.662.662,0,0,0,0-.077A.838.838,0,0,0,34,40V34a.948.948,0,0,0-.039-.192A.972.972,0,0,0,34,33.615V24A1,1,0,0,0,33,23ZM24,39V32h3v7ZM19,29h3v1H19Zm13,3.615H29v-1.23h3ZM27,30H24V29h3Zm2,5h3v4H29Zm3-10v4.385H29V25Zm-5-2v4H24V23Zm-8-2h3v6H19Zm0,11h3v7H19Zm-7.883,0h2.988l.778,7H11.9ZM11,29h3v1H11Zm0-5h3v3H11ZM2,47H4v3H2Zm4,.388,1,.333v2.891l-1-.333ZM9,48h2.32l.5,3H9ZM30,62H14V58H30Zm-2-6H16V53H28Zm2.153-5H13.847L12.181,41H31.819Z">
              </path>
              <path id="humanHand"
                style={{ fill: colors.navajoWhite }}
                d="M63,0H40a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1h1.04L37.855,20.739a3.189,3.189,0,0,0,6.105,1.822l.04-.105v9.16a3,3,0,0,0,4,2.829v.624a3,3,0,0,0,6,.02,3,3,0,0,0,4-2.829V30.23A3,3,0,0,0,62,27.4V8h1a1,1,0,0,0,1-1V1A1,1,0,0,0,63,0ZM60,27.4a1,1,0,0,1-2,0V21a1,1,0,0,0-2,0V32.26a1,1,0,0,1-2,0V21a1,1,0,0,0-2,0V35.069a1,1,0,0,1-2,0V21a1,1,0,0,0-2,0V31.616a1,1,0,0,1-2,0V18H58V16H49.568A6.271,6.271,0,0,0,52,11H50c0,4.063-4.908,4.969-5.158,5.012a1,1,0,0,0-.351.129c-.024.014-.041.037-.064.053a.973.973,0,0,0-.2.176.994.994,0,0,0-.078.13,1.056,1.056,0,0,0-.086.146L42.077,21.89a1.189,1.189,0,0,1-2.282-.665L43.1,8H60ZM62,6H41V2H62Z">
              </path>
            </g>
          </svg>
          <svg id="coolGuy" style={{ ...iconsStyles, top: '25%', left: '42%',animationDelay:"1s",animationDirection:'alternate-reverse' }}
            viewBox="0 0 64 64" x="0px" y="0px">
            <g data-name="27-scientist">
              <path id="guyAndGlasses"
                style={{ fill: colors.aRed }}
                d="M63.217,56.023c-6.35-1.41-11.48-3.05-15.881-6.472l-1.32-1.028A10.926,10.926,0,0,0,47,44a1,1,0,0,0-1-1H43.635l2.133-8H49a1,1,0,0,0,.781-.375l4-5A1,1,0,0,0,54,29V16a1,1,0,0,0-1-1H52V11a3.006,3.006,0,0,0-2-2.829V7a3.006,3.006,0,0,0-2.073-2.854A5.008,5.008,0,0,0,43,0H21a5.008,5.008,0,0,0-4.927,4.146A3.006,3.006,0,0,0,14,7V8.171A3.006,3.006,0,0,0,12,11v4H11a1,1,0,0,0-1,1V29a1,1,0,0,0,.219.625l4,5A1,1,0,0,0,15,35h3.232l2.133,8H18a1,1,0,0,0-1,1,10.926,10.926,0,0,0,.984,4.523l-1.32,1.028c-4.4,3.422-9.531,5.062-15.881,6.472A1,1,0,0,0,0,57v6a1,1,0,0,0,1,1H63a1,1,0,0,0,1-1V57A1,1,0,0,0,63.217,56.023ZM27.387,17h9.226l-1.334,4H28.721ZM45,15H19V10.871a98.064,98.064,0,0,1,26,0Zm-6.279,2H52v8H47.48l-3.7-4.625A1,1,0,0,0,43,20H37.721ZM14,11a1,1,0,0,1,1-1,1,1,0,0,0,1-1V7a1,1,0,0,1,1-1,1,1,0,0,0,1-1,3,3,0,0,1,3-3H43a3,3,0,0,1,3,3,1,1,0,0,0,1,1,1,1,0,0,1,1,1V9a1,1,0,0,0,1,1,1,1,0,0,1,1,1v4H47V10a1,1,0,0,0-.858-.99,100,100,0,0,0-28.284,0A1,1,0,0,0,17,10v5H14Zm4,6h7.279l1,3H21a1,1,0,0,0-.781.375L16.52,25H12V17ZM12,28.649V27h5a1,1,0,0,0,.781-.375L21.48,22h5.466l.1.316A1,1,0,0,0,28,23h8a1,1,0,0,0,.949-.684L37.054,22H42.52l3.7,4.625A1,1,0,0,0,47,27h5v1.649L48.52,33H36.333L32.6,30.2a1,1,0,0,0-1.2,0L27.667,33H15.48ZM28,35a1,1,0,0,0,.6-.2L32,32.25l3.4,2.55a1,1,0,0,0,.6.2h7.7l-2.167,8.128A6.571,6.571,0,0,1,35.189,48H28.811a6.571,6.571,0,0,1-6.342-4.872L20.3,35ZM21.024,45a8.579,8.579,0,0,0,7.787,5h6.378a8.579,8.579,0,0,0,7.787-5h1.969A9.013,9.013,0,0,1,36,53H28a9.013,9.013,0,0,1-8.945-8ZM62,62H2V57.8c6.256-1.433,11.383-3.165,15.891-6.671l1.091-.848A10.99,10.99,0,0,0,28,55h8a10.99,10.99,0,0,0,9.018-4.719l1.091.848C50.617,54.635,55.744,56.367,62,57.8Z">
              </path>
              <rect className="coolGuyMouth" style={{ fill: colors.navajoWhite }} x="27" y="39" width="10" height="2"></rect>
              <rect className="coolGuyMouth" style={{ fill: colors.navajoWhite }} x="30" y="43" width="4" height="2"></rect>
            </g>
          </svg>
          <svg id="wristTech" style={{ ...iconsStyles, bottom: '82%', right: '17%',animationDelay:"2s",animationDirection:'reverse' }}
          viewBox="0 0 64 64" x="0px" y="0px">
            <g data-name="18-futuristic phone">
              <path id="hand" style={{ fill: colors.navajoWhite }}
                d="M62.208,42.347a4.434,4.434,0,0,0-.76-7.126l-4.043-2.332a3.956,3.956,0,0,0-2.5-.889H40a1.006,1.006,0,0,0-.555.168L27.7,40H17v2H28a1.006,1.006,0,0,0,.555-.168L40.3,34h14.6a1.952,1.952,0,0,1,1.273.471.965.965,0,0,0,.152.107l4.118,2.375a2.415,2.415,0,0,1,.438,3.872l-5.44-2.72A1,1,0,0,0,55,38H43a1,1,0,0,0-1,1,11.882,11.882,0,0,1-6.6,10.684l-2.844,1.421a1,1,0,0,0,.894,1.79l2.845-1.422A13.924,13.924,0,0,0,42,46.213V47a1,1,0,0,0,1,1v3a1,1,0,0,0,1,1h1v3a1,1,0,0,0,1,1h4.52l2.748,3.436-9.3,2.536L30.21,59.022A1.062,1.062,0,0,0,30,59H2V42H9V40H1a1,1,0,0,0-1,1V60a1,1,0,0,0,1,1H29.9l13.9,2.978A1.062,1.062,0,0,0,44,64a1.016,1.016,0,0,0,.263-.035l11.053-3.017h0l.015-.006a7.363,7.363,0,0,0,4.477-4.25A4.587,4.587,0,0,0,62,52.764v-.6l.241-.724a9.353,9.353,0,0,0-.18-5.479A6.291,6.291,0,0,0,62.208,42.347Zm-6.567,3.884A1.006,1.006,0,0,0,55,46H44V44H54.764l5.453,2.726a7.8,7.8,0,0,1,.258,3.534Zm4.56-3.512a3.43,3.43,0,0,1,.133,1.83l-4.887-2.444A1,1,0,0,0,55,42H44V40H54.764ZM55.319,58.8l-3.538-4.422A1,1,0,0,0,51,54H47V52h6.586l4.242,4.242A5.362,5.362,0,0,1,55.319,58.8Zm3.807-4.085-4.419-4.419A1,1,0,0,0,54,50H45V48h9.638L60,52.469v.3A2.6,2.6,0,0,1,59.126,54.712Z">
              </path>
              <path id="projectionBox" style={{ fill: colors.scBlue }}
                d="M1,30H7.279l5.773,17.316A1,1,0,0,0,14,48a1.017,1.017,0,0,0,.134-.009A1,1,0,0,0,15,47.056L15.946,30H45a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V29A1,1,0,0,0,1,30ZM13.292,41.714,9,28.839v-2.19A3.467,3.467,0,0,0,10.462,27l1.706,2.559A1,1,0,0,0,13,30h.943ZM10,24.908a1.491,1.491,0,0,1,0-2.816ZM16,28V27h8v1Zm10,0V26a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v2h-.465L12,25.7V22h5.184a2.982,2.982,0,0,0,5.632,0H28v3.7L26.465,28Zm-7-7.1a4.906,4.906,0,0,0,2,0V21a1,1,0,0,1-2,0Zm-.994-2.672L18.618,17h2.764l.612,1.225a2.953,2.953,0,0,1-3.988,0ZM24.775,12h-9.55a.22.22,0,0,1-.136-.057L15,11.764v-.539A.228.228,0,0,1,15.225,11h9.55a.228.228,0,0,1,.225.225v.539l-.089.179A.22.22,0,0,1,24.775,12ZM15.022,8h9.956c.009.1.022.2.022.3v.72A2.091,2.091,0,0,0,24.775,9h-9.55A2.091,2.091,0,0,0,15,9.023V8.3C15,8.2,15.013,8.1,15.022,8Zm.938-2A3.282,3.282,0,0,1,18.3,5H21.7a3.278,3.278,0,0,1,2.342,1Zm7.922,8-.777,1.553a.994.994,0,0,0-.067.286l-.143-.286A1,1,0,0,0,22,15H18a1,1,0,0,0-.895.553l-.143.286a.994.994,0,0,0-.067-.286L16.118,14ZM31,23.5a1.5,1.5,0,0,1-1,1.408V22.092A1.5,1.5,0,0,1,31,23.5ZM29.538,27A3.467,3.467,0,0,0,31,26.649V28H28.868ZM2,2H44V28H33V23h-.051A3.494,3.494,0,0,0,29.5,20H22.965a4.981,4.981,0,0,0,2.029-3.752l1.6-3.2a2.218,2.218,0,0,0,.276-.553l.026-.051a1.022,1.022,0,0,0,.029-.127c.013-.05.027-.1.036-.151A1.011,1.011,0,0,0,27,12V8.3A5.3,5.3,0,0,0,21.7,3H18.3A5.3,5.3,0,0,0,13,8.3V12a1.011,1.011,0,0,0,.04.169c.009.051.023.1.036.151a1.022,1.022,0,0,0,.029.127l.026.051a2.218,2.218,0,0,0,.276.553l1.6,3.2A4.981,4.981,0,0,0,17.035,20H10.5A3.5,3.5,0,0,0,7,23.5a3.443,3.443,0,0,0,.051.5H7v4H2Z">
              </path>
              <path id="hardware"
                style={{ fill: colors.mPurple }}
                d="M11,46V44H4a1,1,0,0,0-1,1V56a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V45a1,1,0,0,0-1-1H17v2h1v3H9V46ZM8,51H19a1,1,0,0,0,1-1V46h2v9H5V46H7v4A1,1,0,0,0,8,51Z">
              </path>
              <path className="projectionBoxes" style={{ fill: colors.pPurple }} d="M31,19H42a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1V18A1,1,0,0,0,31,19ZM32,5h9V17H32Z"></path>
              <path className="projectionBoxes" style={{ fill: colors.pPurple }} d="M42,20H35a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V21A1,1,0,0,0,42,20Zm-1,5H36V22h5Z"></path>
              <rect className="projectionLines" style={{ fill: colors.jonquilY }} x="4" y="4" width="7" height="2"></rect>
              <rect className="projectionLines" style={{ fill: colors.jonquilY }} x="4" y="8" width="7" height="2"></rect>
              <rect className="projectionLines" style={{ fill: colors.jonquilY }} x="4" y="12" width="7" height="2"></rect>
              <rect className="projectionLines" style={{ fill: colors.jonquilY }} x="4" y="16" width="4" height="2"></rect>
            </g>
          </svg>
          <svg id="timeMachine" style={{ ...iconsStyles, top: '55%', right: '38%',animationDelay:"0.5s",animationDirection:'alternate' }}
          viewBox="0 0 64 64" x="0px" y="0px">
            <g data-name="17-time machine">
              <path id="innerCircle"
                style={{ fill: colors.kGreen }}
                d="M25.309,49.88l.939-1.766A13.733,13.733,0,0,1,19.147,37H23V35H19.129C19.491,28.121,24.591,22.582,31,22.054V26h2V22.054c6.409.528,11.509,6.067,11.871,12.946H41v2h3.852a13.73,13.73,0,0,1-7.1,11.114l.939,1.766a15.828,15.828,0,0,0,8.216-14.1C46.908,27.078,40.221,20,32,20S17.092,27.078,17.092,35.777A15.826,15.826,0,0,0,25.309,49.88Z">
              </path>
              <path id="timeMachineRest"
                style={{ fill: colors.navajoWhite }}
                d="M63,38a1,1,0,0,0,1-1V32A32,32,0,0,0,0,32v5a1,1,0,0,0,1,1H3.217a31.133,31.133,0,0,0,7.875,19.587L.606,62.081A1,1,0,0,0,1,64H63a1,1,0,0,0,.394-1.919L52.908,57.587A31.133,31.133,0,0,0,60.783,38ZM2,32a30,30,0,0,1,60,0v4H60.8C60.522,19.408,47.714,6,32,6S3.478,19.408,3.2,36H2ZM5.872,62,28,52.516V60a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V52.516L58.128,62Zm7.293-27H10.021C10.509,23.127,19.649,13.558,31,13.023v3.031C21.369,16.592,13.645,24.791,13.165,35ZM33,13.023c11.351.535,20.491,10.1,20.979,21.977H50.835c-.48-10.209-8.2-18.408-17.835-18.946ZM32,18c9.31,0,16.883,8.075,16.883,18a18.088,18.088,0,0,1-9.094,15.965L36,50.341V48a1,1,0,0,0,1-.917l.79-9.475a4.716,4.716,0,0,0-2.605-4.635l-.783-.392A3.856,3.856,0,0,0,35,30.5,3.283,3.283,0,0,0,32,27a3.283,3.283,0,0,0-3,3.5,3.856,3.856,0,0,0,.6,2.081l-.782.392a4.715,4.715,0,0,0-2.606,4.635L27,47.083A1,1,0,0,0,28,48v2.341l-3.789,1.624A18.088,18.088,0,0,1,15.117,36C15.117,26.075,22.69,18,32,18ZM31,59H30V48h1Zm1-27c-.532,0-1-.7-1-1.5s.468-1.5,1-1.5,1,.7,1,1.5S32.532,32,32,32Zm-.614,1.925a2.551,2.551,0,0,0,1.228,0l1.673.837a2.728,2.728,0,0,1,1.507,2.68L35.08,46H28.92l-.714-8.558a2.728,2.728,0,0,1,1.508-2.68ZM33,48h1V59H33Zm17.951,8.749L42.042,52.93A20.107,20.107,0,0,0,50.85,37H55a1,1,0,0,0,1-1c0-13.785-10.767-25-24-25S8,22.215,8,36a1,1,0,0,0,1,1h4.15a20.107,20.107,0,0,0,8.808,15.93l-8.909,3.819A29.229,29.229,0,0,1,5.183,36.557C5.183,20.811,17.213,8,32,8S58.817,20.811,58.817,36.557A29.229,29.229,0,0,1,50.951,56.749Z">
              </path>
            </g>
          </svg>
          <svg id="ufo" style={{ ...iconsStyles, bottom: '49%', right: '70%',animationDelay:"1.5s",animationDirection:'alternate-reverse' }} 
          viewBox="0 0 64 64" x="0px" y="0px">
            <g data-name="20-UFO">
              <path id="ufoShell"
                style={{ fill: colors.sunGlowY }}
                d="M64,32c0-4.134-6.062-7.711-16.234-9.624a15.98,15.98,0,0,0-31.532,0C6.062,24.289,0,27.866,0,32c0,1.95,1.506,3.943,4.424,5.689l.1.163.083-.051a31.658,31.658,0,0,0,7.84,3.046A17.944,17.944,0,0,0,25.071,46H38.929a17.944,17.944,0,0,0,12.624-5.153C59.718,38.712,64,35.293,64,32ZM33,33.161a37.717,37.717,0,0,0,13.005-2.685h0c.095-.038.181-.087.27-.133L56.86,36.857C51.815,39.143,43.377,40.885,33,40.992ZM18,25a14,14,0,0,1,28,0v2.528a1.168,1.168,0,0,1-.737,1.09,35.565,35.565,0,0,1-26.525,0A1.167,1.167,0,0,1,18,27.528ZM2,32c0-2.895,5.593-5.875,14.028-7.548-.007.183-.028.363-.028.548v2.528a3.175,3.175,0,0,0,.118.841l-11.532,7.1C2.913,34.344,2,33.154,2,32Zm15.229-1.967a3.206,3.206,0,0,0,.766.443A37.717,37.717,0,0,0,31,33.161v7.831c-10.777-.111-19.462-1.985-24.427-4.4ZM38.929,44H25.071a15.961,15.961,0,0,1-8.039-2.168A88.155,88.155,0,0,0,32,43a88.155,88.155,0,0,0,14.968-1.168A15.961,15.961,0,0,1,38.929,44Zm19.994-8.221L47.7,28.873a3.177,3.177,0,0,0,.3-1.345V25c0-.185-.021-.365-.028-.548C56.407,26.125,62,29.105,62,32,62,33.263,60.909,34.567,58.923,35.779Z">
              </path>
              <path className="ufoCircles"
                style={{ fill: colors.pPurple }}
                d="M34.172,20.828a5.725,5.725,0,0,0,3.187,1.662,4.285,4.285,0,0,0,.624.045,3.562,3.562,0,0,0,2.553-1,3.686,3.686,0,0,0,.954-3.177,5.991,5.991,0,0,0-4.849-4.848,3.5,3.5,0,0,0-4.131,4.132A5.726,5.726,0,0,0,34.172,20.828Zm.706-4.949a1.566,1.566,0,0,1,1.131-.414,2.6,2.6,0,0,1,.349.025,4,4,0,0,1,3.152,3.152,1.517,1.517,0,0,1-1.868,1.868,4,4,0,0,1-3.152-3.152A1.745,1.745,0,0,1,34.878,15.879Z">
              </path>
              <path className="ufoCircles"
                style={{ fill: colors.pPurple }}
                d="M39.242,24.885a3.933,3.933,0,0,0,3.2,3.2,3.094,3.094,0,0,0,.426.03,2.5,2.5,0,0,0,1.792-.708h0a2.574,2.574,0,0,0,.677-2.218,3.78,3.78,0,0,0-1.094-2.108c-1.329-1.33-3.23-1.512-4.326-.416A2.577,2.577,0,0,0,39.242,24.885Zm2.092-.805a.513.513,0,0,1,.37-.123,1.717,1.717,0,0,1,1.128.539,1.8,1.8,0,0,1,.528.977.645.645,0,0,1-.111.52h0a.627.627,0,0,1-.521.112,1.943,1.943,0,0,1-1.5-1.5A.638.638,0,0,1,41.334,24.08Z">
              </path>
              <path id="ufoDialogueBox"
                style={{ fill: colors.paleBlue }}
                d="M1,19H4.586l3.707,3.707A1,1,0,0,0,9,23a.987.987,0,0,0,.383-.076A1,1,0,0,0,10,22V19h5V17H9a1,1,0,0,0-1,1v1.586L5.707,17.293A1,1,0,0,0,5,17H2V2H31V7h2V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V18A1,1,0,0,0,1,19Z">
              </path>
              <path id="ufoDialogueLines"
                style={{ fill: colors.jonquilY }}
                d="M29,8V6H19.414L17.707,4.293a1,1,0,0,0-1.656.391L15.279,7H13.535l-1.7-2.555a1.039,1.039,0,0,0-1.664,0L9,6.2,7.832,4.445a1,1,0,0,0-.733-.44,1.011,1.011,0,0,0-.806.288l-3,3L4.707,8.707,6.845,6.569,8.168,8.555a1.039,1.039,0,0,0,1.664,0L11,6.8l1.168,1.752A1,1,0,0,0,13,9h3a1,1,0,0,0,.949-.684l.488-1.464.856.855A1,1,0,0,0,19,8Z">
              </path>
              <path id="ufoDialogueLines"
                style={{ fill: colors.jonquilY }}
                d="M11.293,11.293l-1.138,1.138L8.832,10.445a1,1,0,0,0-1.727.108L6.382,12H4v2H7a1,1,0,0,0,.895-.553l.229-.459,1.044,1.567A1,1,0,0,0,9.9,15c.034,0,.066.005.1.005a1,1,0,0,0,.707-.293L12.414,13H19V11H12A1,1,0,0,0,11.293,11.293Z">
              </path>
              <path className="ufoLift"
                style={{ fill: colors.sOrange }}
                d="M20,52H44a1,1,0,0,0,.949-1.316l-1-3A1,1,0,0,0,43,47H21a1,1,0,0,0-.949.684l-1,3A1,1,0,0,0,20,52Zm1.721-3H42.279l.334,1H21.387Z">
              </path>
              <path className="ufoLift"
                style={{ fill: colors.sOrange }}
                d="M18.189,57.585A1,1,0,0,0,19,58H45a1,1,0,0,0,.949-1.316l-1-3A1,1,0,0,0,44,53H20a1,1,0,0,0-.949.684l-1,3A1,1,0,0,0,18.189,57.585ZM20.721,55H43.279l.334,1H20.387Z">
              </path>
              <path className="ufoLift"
                style={{ fill: colors.sOrange }}
                d="M45.949,59.684A1,1,0,0,0,45,59H19a1,1,0,0,0-.949.684l-1,3A1,1,0,0,0,18,64H46a1,1,0,0,0,.949-1.316ZM19.387,62l.334-1H44.279l.334,1Z">
              </path>
              <path className="ufoCircles"
                style={{ fill: colors.pPurple }}
                d="M23.721,34.086a6.079,6.079,0,0,0-2.866-1.065c-2.547-.3-4.621.749-4.823,2.445a2.7,2.7,0,0,0,1.247,2.448,6.079,6.079,0,0,0,2.866,1.065,7.085,7.085,0,0,0,.861.052c2.14,0,3.783-1,3.962-2.5A2.7,2.7,0,0,0,23.721,34.086ZM22.982,36.3c-.034.287-.982.888-2.6.7a4.13,4.13,0,0,1-1.911-.685c-.332-.246-.468-.486-.453-.6.03-.249.75-.733,1.99-.733a5.081,5.081,0,0,1,.61.037,4.13,4.13,0,0,1,1.911.685c.332.246.468.486.453.6Z">
              </path>
              <path className="ufoCircles"
                style={{ fill: colors.pPurple }}
                d="M43.145,33.021a6.079,6.079,0,0,0-2.866,1.065,2.7,2.7,0,0,0-1.247,2.448c.179,1.5,1.822,2.5,3.962,2.5a7.073,7.073,0,0,0,.861-.052,6.079,6.079,0,0,0,2.866-1.065,2.7,2.7,0,0,0,1.247-2.447C47.766,33.769,45.691,32.715,43.145,33.021Zm2.384,3.287a4.13,4.13,0,0,1-1.91.685c-1.612.189-2.566-.409-2.6-.7h0c-.015-.118.121-.358.453-.6a4.13,4.13,0,0,1,1.91-.685,5.1,5.1,0,0,1,.611-.037c1.24,0,1.96.484,1.99.734C46,35.822,45.861,36.062,45.529,36.308Z">
              </path>
            </g>
          </svg>
          <svg id="vr" style={{ ...iconsStyles, bottom: '19%', left: '10%',animationDelay:"2s",animationDirection:'normal' }} 
          viewBox="0 0 64 64" x="0px" y="0px">
            <g data-name="19-VR program">
              <path className="vrScreens"
                style={{ fill: colors.aRed }}
                d="M20.483,31.1a13.17,13.17,0,0,0,1.641-.1A1,1,0,0,0,23,30V25a1,1,0,0,0-1-1,12.034,12.034,0,0,1-9.146-4.206L10.759,17.35A1,1,0,0,0,9,18v6a.993.993,0,0,0,.132.5A13.054,13.054,0,0,0,20.483,31.1ZM11,20.7l.336.392A14.032,14.032,0,0,0,21,25.965v3.118a11.054,11.054,0,0,1-10-5.354Z">
              </path>
              <path className="vrScreens"
                style={{ fill: colors.aRed }}
                d="M41,35a1,1,0,0,0,.2-.02l3.721-.744a18.608,18.608,0,0,0,10.864-6.611A1,1,0,0,0,56,27V17a1,1,0,0,0-1.707-.707A23.238,23.238,0,0,1,42.88,22.558l-2.1.465A1,1,0,0,0,40,24V34a1,1,0,0,0,1,1Zm1-10.2,1.314-.292A25.25,25.25,0,0,0,54,19.266v7.378a16.606,16.606,0,0,1-9.475,5.631L42,32.78Z">
              </path>
              <path className="vrScreens"
                style={{ fill: colors.aRed }}
                d="M10.618,10.924A.979.979,0,0,0,11,11a1,1,0,0,0,.708-.293l.463-.465A11,11,0,0,1,20,7a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1,16.106,16.106,0,0,0-9.6,3.2A1,1,0,0,0,10,4v6A1,1,0,0,0,10.618,10.924ZM12,4.511a14.124,14.124,0,0,1,7-2.475v3a12.952,12.952,0,0,0-7,2.694Z">
              </path>
              <path className="vrScreens"
                style={{ fill: colors.aRed }}
                d="M49,8a7.518,7.518,0,0,1,5.792,2.714l2.44,2.927A1,1,0,0,0,59,13V6a1,1,0,0,0-.219-.624l-.815-1.02A9.338,9.338,0,0,0,48.8,1.02,1,1,0,0,0,48,2V7A1,1,0,0,0,49,8Zm1-5.136a7.377,7.377,0,0,1,6.4,2.742l.6.745v3.887l-.671-.8A9.517,9.517,0,0,0,50,6.052Z">
              </path>
              <path id="vrGuy"
                style={{ fill: colors.scBlue }}
                d="M64,47H49.288c-1.89-2.63-5.256-4.777-9.6-5.981l-1.7-10.183-.01,0a.7.7,0,0,0-.006-.08l-.924-3.7,2.891-7.708a1,1,0,0,0-.23-1.059L37,15.586V12.351a4.369,4.369,0,0,0,1-2.765V8.073a4.873,4.873,0,0,0-5.676-4.807l-4.489.748c-.02,0-.037.015-.057.019a1.016,1.016,0,0,0-.2.068.886.886,0,0,0-.087.044c-.017.01-.036.016-.053.027a1.03,1.03,0,0,0-.127.111.587.587,0,0,0-.046.041.986.986,0,0,0-.16.235c-.011.022-.017.046-.026.069a.931.931,0,0,0-.061.217c0,.016-.011.031-.013.048s0,.027,0,.041S27,4.977,27,5V8a1,1,0,0,0,.628.929l1.507.6L30.523,13H29a1,1,0,0,0-.447.105L22.884,15.94l-3.266-.816-1.786-2.679a1,1,0,0,0-1.075-.415l-4,1A1,1,0,0,0,12,14v2a1,1,0,0,0,1,1h1a1,1,0,0,0,.445.832l3,2a1,1,0,0,0,.124.058c.022.011.037.03.059.039l5,2a1.007,1.007,0,0,0,.744,0l1.933-.774,1.285.429-.485.969a1,1,0,0,0,.579,1.395l.316.106V31a1,1,0,0,0,.629.929l.371.148V37a.977.977,0,0,0,.016.179l.55,3.024c-6.235.71-11.314,3.308-13.836,6.8H0v2H13.612A7.962,7.962,0,0,0,13,52a7.736,7.736,0,0,0,.286,2H0v2H14.108c2.617,4.653,9.638,8,17.892,8s15.275-3.347,17.892-8H64V54H50.714A7.736,7.736,0,0,0,51,52a7.989,7.989,0,0,0-.6-3H64ZM30,32.739a10.954,10.954,0,0,0,2,.286l0,4.052.842,10.951-.937-.625L30,36.91Zm1.232,16.618,1.037.691-2.259,1.7a.228.228,0,0,1-.243.023.23.23,0,0,1-.081-.346Zm-1.294-1.608L28.085,50.22a2.231,2.231,0,0,0,3.124,3.124L34.6,50.8a.942.942,0,0,0,.072-.069.969.969,0,0,0,.073-.07,1.024,1.024,0,0,0,.106-.148c.012-.021.028-.04.04-.062a1.015,1.015,0,0,0,.087-.244c0-.01,0-.021,0-.031a1.05,1.05,0,0,0,.019-.2.251.251,0,0,1,0-.027c0-.008,0-.015,0-.023l-.481-6.23,2.412,9.162-1.122,1.931a2.2,2.2,0,0,0,1,3.549A19.053,19.053,0,0,1,32,58.944c-6.5,0-12-3.179-12-6.944,0-3.243,4.035-6.091,9.478-6.78Zm7.645,8.661a.208.208,0,0,1-.168.028.207.207,0,0,1-.093-.346,1.006,1.006,0,0,0,.157-.2L38.576,54h1.015A5.559,5.559,0,0,1,37.583,56.41Zm4.074-2.218.292-.876c.005-.017.006-.035.011-.052s.007-.037.011-.057a.976.976,0,0,0,.009-.388c0-.005,0-.01,0-.015L40.9,47.39c1.981,1.275,3.1,2.9,3.1,4.61,0,2.091-1.7,4-4.32,5.284A7.566,7.566,0,0,0,41.657,54.192ZM39.78,52H38.771L34,33.869v-.925a10.974,10.974,0,0,0,2.222-.53L38.02,43.2ZM35.454,25.608l-4.231-2.115.433-1.3,3.1.776a1,1,0,0,0,1.229-.806l.681-4.083,1.17,1.171Zm-6.087-2.873-.957-.319.485-.969a1,1,0,0,0-.579-1.395l-1.3-.435,2.317-.464L29.946,21Zm3.158-10.116-.8-1.988.955.317a.981.981,0,0,0,.288.047c.009,0,.019.005.028.005s.036-.007.055-.008a1.126,1.126,0,0,0,.182-.027.884.884,0,0,0,.088-.025.942.942,0,0,0,.19-.09c.014-.009.031-.012.046-.022l.01-.009.013-.007c.035-.026.063-.058.094-.086s.051-.043.073-.068a.964.964,0,0,0,.083-.118c.017-.027.037-.05.052-.078a1.1,1.1,0,0,0,.057-.148c.008-.025.021-.048.027-.074A.962.962,0,0,0,34,10h1.965a2.4,2.4,0,0,1-.57,1.184L33.96,11.9Zm.475,2,2-1v1.661l-1.73.576L33,15.586Zm-.347-9.38A2.875,2.875,0,0,1,36,8H34V7a1,1,0,0,0-.628-.929L31.69,5.4ZM29,6.477l3,1.2v.846l-3-1.2ZM15,15H14v-.219l2.559-.64L17.9,16.147l-.431,1.294L16,16.465V16A1,1,0,0,0,15,15Zm9.8,3.02A1,1,0,0,0,24,19v.523l-1,.4-3.753-1.5.136-.409.273-.819,3.1.776a1,1,0,0,0,.69-.075L29.236,15H31v1a1,1,0,0,0,.293.707l1,1a.969.969,0,0,0,.293.2.878.878,0,0,0,.085.033.98.98,0,0,0,.279.055c.017,0,.033.01.05.01s.013,0,.02,0a.976.976,0,0,0,.3-.049l1.425-.474-.549,3.294-2.417-.605-.826-2.479A1,1,0,0,0,29.8,17.02Zm4.809,6.905,5.528,2.764.686,2.741a8.969,8.969,0,0,1-6.608-.02L29,30.323v-5.6ZM32,62c-9.374,0-17-4.486-17-10,0-4.772,6.031-8.955,13.925-9.824l.2,1.076C22.633,44.1,18,47.7,18,52c0,5.016,6.149,8.944,14,8.944S46,57.016,46,52c0-2.862-2.03-5.474-5.569-7.165L40.4,44.9l-.337-1.688C45.534,44.965,49,48.325,49,52,49,57.514,41.374,62,32,62Z">
              </path>
            </g>
          </svg>
      </div>

      <div id="landingPortrait" 
      
      style={{
        backgroundImage: `url(${landingPortrait})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:"100%",
        height: '50%',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        opacity: 0.6,
        display:"block",
        userSelect:'none',
        pointerEvents:'none'
      }}
      >
        
      </div>

      {/* <img id="landingPortrait" 
        src={landingPortrait}
      /> */}
      <div id="nameAndTitle"
        style={{
          // color: 'darkgray',
          color:'black',
          // opacity:0.5,
          // fontFamily: 'Ubuntu',
          // fontWeight: 'bold',
          margin: '3vmax 0',
          fontSize: '7vmax',
          fontWeight:'900',
          padding: '5vmin',
          flex: 1,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          fontFamily: 'Spartan, sans-serif',
          fontWeight: '500',
          // marginBottom: '10vmin',
          position: 'absolute',
          bottom: '15vh',
          zIndex: 3,
          lineHeight:'normal'
        }}
      >
        {/* <Logo dimensions={{ width: '100px', height: '100px' } }/> */}
        {/* <br /> */}
        zev
        <div
          style={{
            // color:colors.aRed,
            // fontFamily:'Montserrat',
            fontSize:'50%'
          }}
        >coder</div>
        
        {/* <iframe
          style={{
            // position: 'relative',
            // top: '65%',
            borderRadius: '4px',
            boxShadow: 'rgb(255 255 255 / 56%) 0px 0px 5px 0px'
          }}
          // Up songs only

          src="https://open.spotify.com/embed/track/3zjx24dKimAUvpxBLucXRq?utm_source=generator"
          width="50%" height="80"
          frameBorder="0"

          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe> */}
      </div>
    </div>
  )
}

export default LandingSection

