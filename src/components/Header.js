import React from 'react';
import { Link } from 'react-router-dom';

// stateless function doesn't need this.props.tag for example just use props.tag
const Header = () => ( 
    <header className="wrap container-fluid">
        <div className="row  middle-xs">
            <div className="col-xs-3 col-sm-7">
                <div className="box">
                    <Link to="/" className="logo__interaction">
                        <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.95 91.17">
                            <defs>
                                <clipPath id="clip-path"><path className="cls-1" d="M12.83,43.63,33.58,91.17H99.67a11.67,11.67,0,0,0,0-23.34H87.07L64.12,49.62A18.61,18.61,0,0,1,61.9,58.7c-6.24,10.9-21.83,11-30.72,3.49-8.65-7.26-7.94-18.55-7.94-28.76Z"/></clipPath>
                            </defs>
                            <title>logo</title>
                            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-2" d="M12.83,43.63l20.75,46,56.75,1.5h9.34a11.67,11.67,0,0,0,0-23.34H87.07L64.12,49.62A18.61,18.61,0,0,1,61.9,58.7c-6.24,10.9-21.83,11-30.72,3.49-8.65-7.26-7.94-18.55-7.94-28.76Z"/><g className="cls-3"><circle className="cls-4" cx="38.96" cy="45.58" r="26.13"/><circle className="cls-5" cx="110.83" cy="57.03" r="26.13"/></g><path id="_Clipping_Path_" data-name="&lt;Clipping Path&gt;" className="cls-6" d="M97.58,91.17H32.46A32.34,32.34,0,0,1,.12,58.83L0,11.67a11.67,11.67,0,1,1,23.33,0V39.53c0,10.21-.77,21.5,7.88,28.76,8.88,7.46,24.48,7.41,30.72-3.49a17.34,17.34,0,0,0,2.23-8.74c0-6.14-.33-12.25-.33-18.39a11.67,11.67,0,0,1,23.34,0l-.1,8.58V76.57c0,8.46,4.94,13.87,11.21,14.6Z"/></g></g>
                        </svg>
                    </Link>
                </div>
            </div>
            
            <div className="col-xs-9 col-sm-5">
                <div className="box social">

                    <div className="row end-xs">
                        <div className="col-sm-1">
                            <div className="box">
                                <div className="social_icon social_email">
                                    <a href="mailto:lcruztaveras@gmail.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.28 15.38">
                                            <title>email</title>
                                            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                                            <path className="cls-1" d="M9.8,8.77,18.55.05a1.08,1.08,0,0,0-.27,0H1A1.19,1.19,0,0,0,.74.05Z"/><path className="cls-1" d="M10.16,9.82a.49.49,0,0,1-.35.15.54.54,0,0,1-.35-.14L.05.77A1,1,0,0,0,0,1V14.38a1,1,0,0,0,1,1H18.28a1,1,0,0,0,1-1V1a.78.78,0,0,0,0-.22Z"/></g></g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1">
                            <div className="box">
                                <div className="social_icon social_behance">
                                    <a href="https://www.behance.net/LisCT" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.65 12.85">
                                            <title>behance</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                                            <path id="Behance" className="cls-1" d="M18.65,1.82H13.47V.53h5.18V1.82ZM10,7.09A3.42,3.42,0,0,1,10.53,9,3.77,3.77,0,0,1,10,11a3.53,3.53,0,0,1-.91,1,3.48,3.48,0,0,1-1.45.64,8.61,8.61,0,0,1-1.81.18H0V0H6.21A3.94,3.94,0,0,1,9.53,1.37a3.21,3.21,0,0,1,.59,2,2.89,2.89,0,0,1-.59,1.89,3,3,0,0,1-1,.73A2.86,2.86,0,0,1,10,7.09ZM3,5.07H5.68A2.61,2.61,0,0,0,7,4.75a1.21,1.21,0,0,0,.52-1.13,1.15,1.15,0,0,0-.69-1.19,4.91,4.91,0,0,0-1.52-.2H3ZM7.82,8.79A1.38,1.38,0,0,0,7,7.41a3.37,3.37,0,0,0-1.29-.22H3v3.43H5.68A3,3,0,0,0,7,10.39,1.61,1.61,0,0,0,7.82,8.79ZM20.57,6.7a12.56,12.56,0,0,1,.08,1.82H14a2.18,2.18,0,0,0,1,2,2.42,2.42,0,0,0,1.32.34,2,2,0,0,0,1.34-.42,1.89,1.89,0,0,0,.49-.63h2.46a3,3,0,0,1-.89,1.66,4.45,4.45,0,0,1-3.46,1.34,5,5,0,0,1-3.24-1.13A4.44,4.44,0,0,1,11.52,8a5,5,0,0,1,1.27-3.67A4.41,4.41,0,0,1,16.08,3a5.26,5.26,0,0,1,2.17.43,3.69,3.69,0,0,1,1.58,1.36A4.6,4.6,0,0,1,20.57,6.7Zm-2.42.24a2,2,0,0,0-.64-1.46A2.11,2.11,0,0,0,16.08,5a1.88,1.88,0,0,0-1.43.53A2.47,2.47,0,0,0,14,6.94Z"/></g></g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-1">
                            <div className="box">
                                <div className="social_icon social_dribble">
                                    <a href="https://dribbble.com/LisCT" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8">
                                            <title>Dibble</title>
                                            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                                                <path className="cls-1" d="M7.6,6.13A33,33,0,0,0,5.6,3a5.4,5.4,0,0,0-3,3.77A20,20,0,0,0,7.6,6.13Z"/><path className="cls-1" d="M6.61,2.66h0Z"/><path className="cls-1" d="M11.46,3.85A5.36,5.36,0,0,0,7.9,2.51a5.26,5.26,0,0,0-1.27.15,27,27,0,0,1,2,3.14A5.83,5.83,0,0,0,11.46,3.85Z"/><path className="cls-1" d="M8.82,8.78a7.24,7.24,0,0,0-4.23,3.37A5.37,5.37,0,0,0,7.9,13.29a5.22,5.22,0,0,0,2.1-.43A22.26,22.26,0,0,0,8.85,8.77Z"/>
                                                <path className="cls-1" d="M8.27,7.94l.21-.06c-.13-.31-.28-.62-.43-.92a20,20,0,0,1-5.54.77V7.9a5.36,5.36,0,0,0,1.38,3.6h0A8.6,8.6,0,0,1,8.27,7.94Z"/>
                                                <path className="cls-1" d="M7.9,0a7.9,7.9,0,1,0,7.9,7.9A7.9,7.9,0,0,0,7.9,0Zm6.18,9.17a6.06,6.06,0,0,1-.36,1.19,6.58,6.58,0,0,1-.59,1.07,5.68,5.68,0,0,1-.77.93,5.29,5.29,0,0,1-.93.77,6.58,6.58,0,0,1-1.07.59,6.06,6.06,0,0,1-1.19.36,6.27,6.27,0,0,1-2.54,0,6.06,6.06,0,0,1-1.19-.36,6.19,6.19,0,0,1-1.07-.59,5.75,5.75,0,0,1-.94-.77,6.34,6.34,0,0,1-.77-.93,7.38,7.38,0,0,1-.58-1.07,6.85,6.85,0,0,1-.37-1.19A6.67,6.67,0,0,1,1.58,7.9a6.67,6.67,0,0,1,.13-1.27,6.85,6.85,0,0,1,.37-1.19,6.46,6.46,0,0,1,.58-1.07,7,7,0,0,1,.77-.94,7,7,0,0,1,.94-.77,6.32,6.32,0,0,1,2.26-1A6.67,6.67,0,0,1,7.9,1.58a6.76,6.76,0,0,1,1.27.13,6.08,6.08,0,0,1,1.19.37,6.53,6.53,0,0,1,1.07.58,6.92,6.92,0,0,1,.93.77,5.75,5.75,0,0,1,.77.94,6.19,6.19,0,0,1,.59,1.07,6.06,6.06,0,0,1,.36,1.19,6,6,0,0,1,.13,1.27A6,6,0,0,1,14.08,9.17Z"/>
                                                <path className="cls-1" d="M9.86,8.52a22.58,22.58,0,0,1,1.05,3.85,5.39,5.39,0,0,0,2.31-3.62A7.94,7.94,0,0,0,9.86,8.52Z"/>
                                                <path className="cls-1" d="M9.06,6.61l.36.78c0,.09.07.19.11.28a13,13,0,0,1,3.76.17,5.34,5.34,0,0,0-1.23-3.37A6.83,6.83,0,0,1,9.06,6.61Z"/>
                                            </g></g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1">
                            <div className="box">
                                <div className="social_icon social_github">
                                    <a href="https://github.com/LisCT" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.24 19.49">
                                            <title>github</title>
                                            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                                                <path className="cls-1" d="M12.47,18.71V16.66a2.66,2.66,0,0,0-1.11-2.37c.46,0,.89-.11,1.27-.19a9.67,9.67,0,0,0,1.23-.35A5.92,5.92,0,0,0,15,13.21a5.18,5.18,0,0,0,1-.81,4.83,4.83,0,0,0,.79-1.14,6,6,0,0,0,.51-1.52,9.77,9.77,0,0,0,.19-1.95,5,5,0,0,0-1.35-3.52A4.64,4.64,0,0,0,16,.79l-.33,0A3.26,3.26,0,0,0,14.43,1a9.6,9.6,0,0,0-2,1.1A11.93,11.93,0,0,0,9.12,1.7a11.76,11.76,0,0,0-3.28.44,11.78,11.78,0,0,0-1.34-.8,6.11,6.11,0,0,0-1-.42A2.87,2.87,0,0,0,2.78.78a2.42,2.42,0,0,0-.42,0l-.13,0a4.64,4.64,0,0,0-.14,3.48A5,5,0,0,0,.74,7.79a9.77,9.77,0,0,0,.19,2,6,6,0,0,0,.51,1.52,4.83,4.83,0,0,0,.79,1.14,5.18,5.18,0,0,0,1,.81,5.92,5.92,0,0,0,1.16.54,9.67,9.67,0,0,0,1.23.35c.38.08.81.14,1.27.19a2.64,2.64,0,0,0-1.09,2.37v2.09Z"/>
                                                <path className="cls-1" d="M5.79,19.49A.75.75,0,0,1,5,18.75V16.66a3.93,3.93,0,0,1,.4-1.84,9.34,9.34,0,0,1-1.31-.37,6.76,6.76,0,0,1-1.3-.6,5.81,5.81,0,0,1-1.14-.94A5.6,5.6,0,0,1,.77,11.6,7.21,7.21,0,0,1,.2,9.9,10.65,10.65,0,0,1,0,7.79,5.76,5.76,0,0,1,1.25,4.1,5.54,5.54,0,0,1,1.53.52.74.74,0,0,1,2,.08a1.33,1.33,0,0,1,.26,0,2.66,2.66,0,0,1,.59,0A4.83,4.83,0,0,1,3.7.2,9,9,0,0,1,4.83.67,12.69,12.69,0,0,1,6,1.33a13.46,13.46,0,0,1,6.31,0,10.26,10.26,0,0,1,1.9-1A3.72,3.72,0,0,1,15.77,0l.33,0a.75.75,0,0,1,.61.46A5.57,5.57,0,0,1,17,4.1a5.76,5.76,0,0,1,1.25,3.69A10.65,10.65,0,0,1,18,9.9a7.21,7.21,0,0,1-.57,1.7,5.6,5.6,0,0,1-.92,1.31,5.81,5.81,0,0,1-1.14.94,6.76,6.76,0,0,1-1.3.6,9.23,9.23,0,0,1-1.3.37,3.93,3.93,0,0,1,.4,1.84v2.05a.74.74,0,0,1-.74.74l-6.68,0Zm6.68-.78ZM2.76,1.52A3.63,3.63,0,0,0,2.79,4a.77.77,0,0,1-.15.78,4.24,4.24,0,0,0-1.15,3,9,9,0,0,0,.17,1.8,5.54,5.54,0,0,0,.44,1.34,4.12,4.12,0,0,0,.67,1,4.39,4.39,0,0,0,.84.69,5.07,5.07,0,0,0,1,.47,7.77,7.77,0,0,0,1.13.32c.36.07.76.13,1.19.17a.76.76,0,0,1,.65.56.74.74,0,0,1-.3.8,1.89,1.89,0,0,0-.77,1.76V18l5.19,0V16.66a2,2,0,0,0-.78-1.76.74.74,0,0,1-.3-.8.76.76,0,0,1,.65-.56c.43,0,.83-.1,1.19-.17a7.77,7.77,0,0,0,1.13-.32,5.07,5.07,0,0,0,1-.47,4.39,4.39,0,0,0,.84-.69,4.34,4.34,0,0,0,.67-1,5.54,5.54,0,0,0,.44-1.34,9,9,0,0,0,.17-1.8,4.24,4.24,0,0,0-1.15-3A.77.77,0,0,1,15.45,4a3.69,3.69,0,0,0,0-2.5,6.85,6.85,0,0,0-.79.24,9.23,9.23,0,0,0-1.86,1,.73.73,0,0,1-.61.1,11.77,11.77,0,0,0-3.1-.41A11.51,11.51,0,0,0,6,2.85a.72.72,0,0,1-.62-.1A10.15,10.15,0,0,0,4.17,2a5.22,5.22,0,0,0-.9-.38A2.77,2.77,0,0,0,2.76,1.52Z"/></g></g>
                                        </svg>
                                    </a>    
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1">
                            <div className="box">
                                <div className="social_icon social_instagram">
                                    <a href="https://www.instagram.com/lisccode/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.92 38.92">
                                            <title>Instagram</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                                            <path className="cls-1" d="M28.18,0H10.74A10.75,10.75,0,0,0,0,10.74V28.18A10.75,10.75,0,0,0,10.74,38.92H28.18A10.74,10.74,0,0,0,38.92,28.18V10.74A10.75,10.75,0,0,0,28.18,0ZM19.46,29.49a10,10,0,1,1,10-10A10,10,0,0,1,19.46,29.49ZM31.7,10.83A2.53,2.53,0,1,1,29.91,6.5a2.53,2.53,0,0,1,1.79,4.33Z"/></g></g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1">
                            <div className="box">
                                <div className="social_icon social_twitter">
                                    <a href="https://twitter.com/lisct" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.75 18.78">
                                            <title>twitter</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M22,2.82a8.67,8.67,0,0,1-2.49.69,4.43,4.43,0,0,0,1.91-2.4,8.62,8.62,0,0,1-2.76,1.05,4.35,4.35,0,0,0-7.52,3,4.07,4.07,0,0,0,.12,1,12.31,12.31,0,0,1-9-4.54,4.27,4.27,0,0,0-.59,2.19A4.35,4.35,0,0,0,3.61,7.38a4.39,4.39,0,0,1-2-.54v0a4.35,4.35,0,0,0,3.49,4.26A4.37,4.37,0,0,1,4,11.3a4.47,4.47,0,0,1-.82-.08,4.36,4.36,0,0,0,4.06,3,8.74,8.74,0,0,1-5.39,1.85,8.94,8.94,0,0,1-1-.06,12.22,12.22,0,0,0,6.66,2A12.27,12.27,0,0,0,19.8,5.63V5.07A8.6,8.6,0,0,0,22,2.82Z"/>
                                            <path className="cls-1" d="M7.45,18.78A13.1,13.1,0,0,1,.36,16.7a.79.79,0,0,1,.52-1.45c.32,0,.64.05,1,.05a8,8,0,0,0,3.35-.73,5.15,5.15,0,0,1-2.77-3.11.79.79,0,0,1,.15-.75A5.12,5.12,0,0,1,.85,6.89v0a.82.82,0,0,1,.39-.69l.19-.08a5.17,5.17,0,0,1,.15-4.88A.79.79,0,0,1,2.2.8a.8.8,0,0,1,.68.28,11.6,11.6,0,0,0,7.43,4.17V5.13A5.14,5.14,0,0,1,18.86,1.3,8.1,8.1,0,0,0,21,.43a.8.8,0,0,1,.9.06.79.79,0,0,1,.26.86,5.24,5.24,0,0,1-.28.69.76.76,0,0,1,.71.28.78.78,0,0,1,.06.94,9.45,9.45,0,0,1-2,2.2v.17a13.55,13.55,0,0,1-3.38,8.85A12.59,12.59,0,0,1,7.45,18.78ZM3.94,16.65a11.55,11.55,0,0,0,3.51.55A11.09,11.09,0,0,0,16,13.44a12,12,0,0,0,3-7.8V5.09a.78.78,0,0,1,.33-.66l.17-.13a.79.79,0,0,1-.78-.54A.77.77,0,0,1,19,2.9l-.2,0A.8.8,0,0,1,18,2.7a3.56,3.56,0,0,0-6.15,2.43,3.1,3.1,0,0,0,.1.81.82.82,0,0,1-.17.69.8.8,0,0,1-.64.28A13.11,13.11,0,0,1,2.54,3.06a3.35,3.35,0,0,0-.07.71A3.53,3.53,0,0,0,4.05,6.72a.8.8,0,0,1,.31.9.78.78,0,0,1-.75.55h0a5,5,0,0,1-1-.12,3.54,3.54,0,0,0,2.65,2.32.82.82,0,0,1,.64.75.79.79,0,0,1-.59.79,5,5,0,0,1-.84.16,3.55,3.55,0,0,0,2.74,1.38A.79.79,0,0,1,8,14a.82.82,0,0,1-.26.88A9.58,9.58,0,0,1,3.94,16.65Z"/></g></g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1">
                            <div className="box">
                                <div className="social_icon social_linkedin">
                                    <a href="https://www.linkedin.com/in/lisct/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.3 15.62">
                                            <title>linkedin</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="LinkedIn">
                                            <path className="cls-1" d="M15.78,9.46V15.1H12.51V9.84c0-1.33-.48-2.23-1.66-2.23a1.8,1.8,0,0,0-1.68,1.2,2.38,2.38,0,0,0-.11.8V15.1H5.79s0-8.91,0-9.84H9.06v1.4l0,0h0v0A3.26,3.26,0,0,1,12,5C14.16,5,15.78,6.44,15.78,9.46ZM2.37.52a1.7,1.7,0,1,0,0,3.4h0a1.71,1.71,0,1,0,0-3.4ZM.71,15.1H4V5.26H.71Z"/>
                                            <path className="cls-1" d="M15.78,15.62H12.51A.52.52,0,0,1,12,15.1V9.84c0-1.71-.83-1.71-1.14-1.71A1.28,1.28,0,0,0,9.66,9a1.49,1.49,0,0,0-.08.61V15.1a.52.52,0,0,1-.52.52H5.79a.51.51,0,0,1-.52-.52c0-.09.05-8.91,0-9.81a.58.58,0,0,1,.15-.39.51.51,0,0,1,.37-.16H9.06a.52.52,0,0,1,.52.52v0A3.78,3.78,0,0,1,12,4.51c2.65,0,4.29,1.9,4.29,5V15.1A.52.52,0,0,1,15.78,15.62Zm-2.75-1h2.23V9.46C15.26,7,14.08,5.55,12,5.55a2.7,2.7,0,0,0-2.45,1.3.53.53,0,0,1-1,.09.54.54,0,0,1-.06-.39V5.78H6.32c0,1.82,0,7.1,0,8.8H8.54v-5a2.66,2.66,0,0,1,.15-1,2.29,2.29,0,0,1,2.16-1.52c.66,0,2.18.27,2.18,2.75Zm-9,1H.71a.52.52,0,0,1-.52-.52V5.26a.53.53,0,0,1,.52-.52H4a.52.52,0,0,1,.52.52V15.1A.52.52,0,0,1,4,15.62Zm-2.75-1H3.46V5.78H1.23ZM2.35,4.44A2.22,2.22,0,1,1,2.37,0a2.22,2.22,0,1,1,0,4.44Zm0-3.4a1.19,1.19,0,1,0,0,2.36A1.2,1.2,0,0,0,3.68,2.22,1.18,1.18,0,0,0,2.37,1Z"/></g></g></g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </header>
    
)

export default Header