import React from 'react';
import Footer from '@/components/Footer';

const PoliticasPrivacidad = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="gradient-bg text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Política de Privacidad
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200">
                            Tratamiento de Datos Personales – Sixteam.Pro
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 text-gray-700 leading-relaxed space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">1. Responsable del Tratamiento</h2>
                            <p>El responsable del tratamiento de los datos personales recolectados a través del sitio web Sixteam.Pro es:</p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-sixteam-teal">
                                <p><strong>Sixteam Innovación y Estrategia Digital S.A.S.</strong></p>
                                <p>NIT: 901967849</p>
                                <p>Correo para consultas y reclamos: <a href="mailto:contacto@sixteam.pro" className="text-sixteam-blue hover:underline">contacto@sixteam.pro</a></p>
                                <p>Sitio web: <a href="https://sixteam.pro" target="_blank" rel="noopener noreferrer" className="text-sixteam-blue hover:underline">https://sixteam.pro</a></p>
                            </div>
                            <p className="mt-4">
                                Sixteam Innovación y Estrategia Digital S.A.S. (en adelante “Sixteam”) es la empresa encargada de la operación del sitio web y de la prestación de servicios y productos relacionados con estrategias digitales, automatización, CRM y soluciones tecnológicas.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">2. Información que Recopilamos</h2>
                            <p className="mb-4">
                                A través del sitio web Sixteam.Pro podemos recopilar información personal de manera directa o automática, incluyendo:
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong>Información de contacto:</strong> Nombre, correo electrónico, número de teléfono u otros datos que el usuario proporcione voluntariamente mediante formularios de contacto, registro o solicitud de información.
                                </li>
                                <li>
                                    <strong>Información técnica de navegación:</strong> Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, fecha y hora de acceso y otros datos técnicos generados durante la navegación en el sitio web.
                                </li>
                                <li>
                                    <strong>Información comercial o de interés:</strong> Datos relacionados con solicitudes de información sobre nuestros servicios, agendamiento de reuniones o interacción con nuestros canales de contacto.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">3. Finalidades del Tratamiento</h2>
                            <p className="mb-4">
                                Los datos personales recolectados a través del sitio web podrán ser utilizados para las siguientes finalidades:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Atender solicitudes de información realizadas por los usuarios.</li>
                                <li>Contactar a personas interesadas en los servicios o productos ofrecidos por Sixteam.</li>
                                <li>Gestionar comunicaciones relacionadas con nuestros servicios.</li>
                                <li>Realizar seguimiento a solicitudes, consultas o requerimientos enviados a través del sitio web.</li>
                                <li>Mejorar el funcionamiento, seguridad y experiencia de navegación del sitio web.</li>
                                <li>Cumplir con obligaciones legales o regulatorias aplicables.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">4. Integraciones y Servicios de Terceros</h2>
                            <p className="mb-4">
                                El sitio web y los servicios de Sixteam pueden utilizar herramientas, plataformas o integraciones operadas por terceros para funciones como formularios, comunicaciones digitales, analítica o infraestructura tecnológica.
                            </p>
                            <p>
                                El tratamiento de la información a través de estas herramientas puede estar sujeto a las políticas de privacidad y condiciones de dichos proveedores. Sixteam no controla las políticas, cambios operativos o disponibilidad de estos servicios externos.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">5. Seguridad de la Información</h2>
                            <p className="mb-4">
                                Sixteam adopta medidas técnicas y administrativas razonables para proteger la información personal contra acceso no autorizado, pérdida, uso indebido, alteración o divulgación.
                            </p>
                            <p>
                                No obstante, ningún sistema de transmisión o almacenamiento de información en internet es completamente seguro, por lo que Sixteam no puede garantizar la seguridad absoluta de los datos transmitidos a través del sitio web.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">6. Derechos de los Titulares</h2>
                            <p className="mb-4">
                                De acuerdo con la normativa colombiana sobre protección de datos personales, los titulares de la información tienen derecho a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                                <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
                                <li>Revocar la autorización o solicitar la supresión de sus datos cuando sea procedente.</li>
                                <li>Acceder de forma gratuita a los datos personales que hayan sido objeto de tratamiento.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">7. Consultas y Reclamos</h2>
                            <p className="mb-4">Los titulares de datos personales podrán ejercer sus derechos mediante solicitud enviada al siguiente correo electrónico:</p>
                            <p className="font-bold underline mb-4 text-sixteam-blue">contacto@sixteam.pro</p>
                            <p className="mb-2">La solicitud deberá incluir, en la medida de lo posible:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Nombre del titular</li>
                                <li>Descripción de la solicitud</li>
                                <li>Datos de contacto para recibir respuesta</li>
                            </ul>
                            <p className="mt-4">Sixteam dará respuesta a las solicitudes dentro de los plazos establecidos por la normativa aplicable.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-sixteam-navy mb-4">8. Cambios en la Política de Privacidad</h2>
                            <p className="mb-4">
                                Sixteam podrá actualizar esta Política de Privacidad en cualquier momento para reflejar cambios legales, tecnológicos u operativos.
                            </p>
                            <p>
                                Las modificaciones serán publicadas en el sitio web Sixteam.Pro y entrarán en vigencia desde su fecha de publicación.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PoliticasPrivacidad;
