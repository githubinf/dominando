
import React, { useState, useEffect } from 'react';

/**
 * COMPONENTES DE APOYO
 */

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <section className={`py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
    {children}
  </section>
);

const Highlight: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = "text-energeticOrange" }) => (
  <span className={`font-bold ${color}`}>{children}</span>
);

const Button: React.FC<{ onClick?: () => void; className?: string; children: React.ReactNode }> = ({ onClick, className = "", children }) => (
  <button
    onClick={onClick}
    className={`bg-energeticOrange hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-lg shadow-xl transition-all transform hover:scale-105 active:scale-95 text-xl text-center uppercase tracking-wider ${className}`}
  >
    {children}
  </button>
);

const Pillar: React.FC<{ number: string; title: string; subtitle: string; points: string[]; result: string }> = ({ number, title, subtitle, points, result }) => (
  <div className="mb-16 border-l-4 border-emeraldGreen pl-8 relative">
    <div className="absolute -left-[22px] top-0 bg-deepBlue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <h3 className="text-3xl md:text-4xl serif-text font-bold text-deepBlue mb-2">{title}</h3>
    <p className="text-xl italic text-gray-600 mb-6">{subtitle}</p>
    <ul className="space-y-4 mb-6">
      {points.map((p, i) => (
        <li key={i} className="flex items-start">
          <span className="text-emeraldGreen mr-3">✓</span>
          <span className="text-lg text-gray-800">{p}</span>
        </li>
      ))}
    </ul>
    <div className="bg-emeraldGreen/10 p-6 rounded-lg border border-emeraldGreen/20">
      <p className="font-semibold text-deepBlue">
        <span className="text-emeraldGreen uppercase tracking-widest text-sm block mb-1">Resultado concreto:</span>
        {result}
      </p>
    </div>
  </div>
);

const Testimonial: React.FC<{ text: string; author: string; location: string }> = ({ text, author, location }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 italic relative">
    <span className="absolute top-4 right-8 text-6xl text-gray-100 font-serif">"</span>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">"{text}"</p>
    <div className="not-italic">
      <p className="font-bold text-deepBlue">— {author}</p>
      <p className="text-sm text-gray-500 uppercase tracking-widest">{location}</p>
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-xl md:text-2xl font-bold text-deepBlue pr-4">{question}</span>
        <span className={`text-2xl transform transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-lg text-gray-600 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

/**
 * COMPONENTE PRINCIPAL
 */

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPayment = () => {
    const element = document.getElementById('boton-pago-final');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFinalPayment = () => {
    window.location.href = "https://fcofrancis.pay.clickbank.net/?cbitems=5";
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emeraldGreen/30">
      {/* Barra de Urgencia Superior */}
      <div className="bg-deepBlue text-white py-3 px-4 text-center text-sm font-medium tracking-wide">
        OFERTA EXCLUSIVA: Acceso inmediato por solo $9,99 — <span className="text-energeticOrange uppercase italic">Disponible solo por tiempo limitado</span>
      </div>

      {/* Encabezado Editorial */}
      <header className="py-12 px-6 max-w-6xl mx-auto border-b border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-emeraldGreen font-bold uppercase tracking-[0.3em] mb-4 text-sm md:text-base">Dominando el comercio electrónico</p>
            <h1 className="text-5xl md:text-7xl font-bold serif-text text-deepBlue leading-[1.1] mb-6">
              Dominando el Marketing de Afiliados
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Y cómo construir un negocio rentable desde cero con uno de los mejores sistemas de monetización.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <img 
              src="https://i.ibb.co/wvy2hr3/dominando-el-marketing-de-afiliados.png" 
              alt="Portada del Libro" 
              className="w-64 md:w-80 h-auto rounded-lg shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="text-center pt-12 md:pt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-deepBlue mb-8 uppercase tracking-tighter">
          ¿Cansado de promesas vacías de "dinero rápido" mientras tu cuenta bancaria sigue vacía?
        </h2>
        <div className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-loose mb-12 text-left">
          <p className="mb-6 drop-cap">
            Descubre el sistema probado que ya ha ayudado a más de <Highlight color="text-deepBlue">3.500 emprendedores</Highlight> hispanohablantes a construir negocios de afiliados reales, éticos y rentables —sin inventario, sin jefes y sin horarios fijos.
          </p>
          <p className="mb-6">
            Solo hoy: <span className="text-4xl font-bold text-energeticOrange">$9,99</span> <span className="text-gray-400 line-through text-lg">(precio normal $47,00)</span>.
          </p>
          <p className="mb-10 font-medium">
            Este no es otro manual de atajos. Es tu mapa para construir un negocio digital que funcione mientras duermes. Incluye acceso inmediato + <Highlight color="text-emeraldGreen">garantía de devolución de 30 días</Highlight>. Si en un mes no ves avances concretos en tu estrategia, te devolvemos cada centavo. Sin preguntas.
          </p>
        </div>
        
        <Button onClick={scrollToPayment} className="w-full md:w-auto mb-4">
          Obtener acceso inmediato por $9,99
        </Button>
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-4">Pago 100% Seguro vía Clickbank — Encriptación SSL de 256 bits</p>
      </Section>

      {/* Sección del Dolor */}
      <div className="bg-softGray">
        <Section>
          <h3 className="text-3xl md:text-4xl serif-text font-bold text-deepBlue text-center mb-12 italic">¿Te sientes así hoy?</h3>
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {[
              "Publicas contenido sin saber siquiera a quién le hablas, esperando que \"algún día\" aparezcan las ventas.",
              "Te abruma la cantidad de programas de afiliados y no sabes cuáles elegir sin arriesgar tu reputación.",
              "Generas tráfico... pero casi nadie hace clic en tus enlaces de recomendación profesional.",
              "Inviertes horas creando contenido que nadie lee, comparte o convierte en ingresos reales.",
              "Te preocupa cometer errores legales al no divulgar correctamente tus relaciones comerciales."
            ].map((item, idx) => (
              <div key={idx} className="flex items-center bg-white p-6 rounded-lg shadow-sm border-l-4 border-energeticOrange">
                <span className="text-2xl mr-4">❌</span>
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xl text-gray-600 max-w-2xl mx-auto">
            Si te sientes identificado, <Highlight color="text-deepBlue">no estás solo</Highlight>. Sucede porque el 92% de quienes empiezan reciben formación incompleta: aprenden trucos aislados sin entender el sistema completo.
          </p>
        </Section>
      </div>

      {/* Historia del Autor */}
      <Section className="prose prose-lg max-w-4xl">
        <h2 className="text-4xl serif-text text-deepBlue mb-8">Te voy a ser sincero: Mi historia no empezó con un "éxito relámpago"</h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>Me llamo <Highlight color="text-deepBlue">Francisco González</Highlight>, y hace unos años me encontraba exactamente donde tú ahora mismo.</p>
          <p>Tenía un blog con 127 suscriptores (sí, conté uno por uno), había probado cinco programas de afiliados diferentes y mi mayor "éxito" era una comisión de $3,47 por una venta de un libro digital sobre... ¡cómo ganar dinero en internet! La ironía me perseguía.</p>
          <p>Mi mayor fracaso llegó cuando promocioné un programa de suplementos sin probarlo primero. Generé 14 ventas en una semana... y 11 devoluciones en los días siguientes. Mi audiencia me abandonó, mi reputación quedó hecha trizas y pasé tres meses sin generar ni un solo centavo.</p>
          <p className="bg-deepBlue text-white p-8 rounded-xl font-serif text-2xl italic leading-snug">
            Aquella experiencia me enseñó algo invaluable: en la comercialización por afiliados, la ética no es opcional; es tu único activo que no puede ser destruido por un algoritmo.
          </p>
          <p>Durante los siguientes dos años, invertí más de 1.200 horas investigando, probando y documentando qué funciona realmente. Probé 27 programas en 4 nichos diferentes. Creé 83 piezas de contenido antes de encontrar el formato que convierte. Aprendí la optimización de motores de búsqueda de la manera más dura.</p>
          <p>Hoy, mi estrategia genera ingresos recurrentes que superan los <Highlight color="text-emeraldGreen">$4.300 mensuales</Highlight>. Pero lo que más valoro es haber ayudado a más de 3.500 personas a construir negocios digitales que respetan su tiempo e inteligencia.</p>
        </div>
      </Section>

      {/* Qué es y qué no es */}
      <div className="bg-deepBlue py-24 text-white">
        <Section className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl serif-text text-emeraldGreen mb-8">Lo que sí incluye esta guía</h3>
              <ul className="space-y-6">
                {[
                  "Un sistema paso a paso para construir tu negocio desde cero.",
                  "Metodología probada para identificar nichos rentables de baja competencia.",
                  "Estrategias para crear contenido que educa primero y vende después.",
                  "Guía completa de cumplimiento legal para países hispanohablantes.",
                  "Sistema de seguimiento de resultados con métricas financieras reales.",
                  "Acceso inmediato al libro completo en formato digital descargable."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emeraldGreen mr-4 text-xl">✅</span>
                    <p className="text-lg opacity-90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl serif-text text-energeticOrange mb-8">Lo que NO encontrarás aquí</h3>
              <ul className="space-y-6">
                {[
                  "Promesas de \"enriquecerte en 7 días\" o ganar dinero sin esfuerzo.",
                  "Listas interminables de programas sin ningún criterio de selección.",
                  "Tácticas engañosas, correo no deseado o métodos de dudosa ética.",
                  "Requisito de invertir dinero adicional en herramientas costosas.",
                  "Trucos mágicos que dejan de funcionar al mes siguiente."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-energeticOrange mr-4 text-xl">❌</span>
                    <p className="text-lg opacity-90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* Los 4 Pilares */}
      <Section>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl serif-text text-deepBlue mb-6">Tu camino hacia un negocio rentable</h2>
          <p className="text-xl text-gray-500 uppercase tracking-widest">Los 4 pilares fundamentales del sistema</p>
        </div>

        <Pillar
          number="1"
          title="Los cimientos inquebrantables"
          subtitle="Entender el modelo sin ilusiones pasajeras"
          points={[
            "Por qué el 83% de los afiliados abandonan en los primeros 90 días.",
            "Identificación de las tres partes esenciales del ecosistema de valor.",
            "Diferencia entre métricas de vanidad y métricas de rentabilidad real.",
            "Plan de acción personalizado para tus primeros 14 días."
          ]}
          result="En 14 días tendrás claridad total sobre cómo funciona el modelo y un plan de acción específico para tu situación financiera."
        />

        <Pillar
          number="2"
          title="Tu territorio digital"
          subtitle="Construir presencia sin depender de algoritmos ajenos"
          points={[
            "Lista de verificación de 27 puntos para un sitio optimizado.",
            "Desarrollo de una marca personal auténtica que genera confianza.",
            "Implementación de tu lista de correo propia como activo principal.",
            "Optimización para buscadores basada en el servicio a la audiencia."
          ]}
          result="En 30 días contarás con una presencia digital sólida que genera tráfico orgánico consistente y una lista de suscriptores comprometidos."
        />

        <Pillar
          number="3"
          title="La selección estratégica"
          subtitle="Elegir programas que pagan y protegen tu credibilidad"
          points={[
            "Matriz de evaluación de 5 criterios para productos de alta calidad.",
            "Investigación de reputación de anunciantes antes de asociarte.",
            "Negociación de mejores condiciones y comisiones exclusivas.",
            "Divulgación ética y legal de enlaces según normativas vigentes."
          ]}
          result="En 21 días tendrás activos 2 o 3 programas de afiliados alineados con tu audiencia, con tasas de conversión superiores al promedio del mercado."
        />

        <Pillar
          number="4"
          title="La conversión ética"
          subtitle="Transformar visitantes en clientes sin ejercer presión"
          points={[
            "Creación de contenido persuasivo que educa antes de recomendar.",
            "Implementación de llamados a la acción que aumentan la conversión un 37%.",
            "Psicología del consumidor aplicada a necesidades reales y honestas.",
            "Automatización de correos electrónicos para nutrir a tus prospectos."
          ]}
          result="En 45 días verás un aumento medible en tus tasas de conversión, con suscriptores que agradecen tus recomendaciones genuinas."
        />
      </Section>

      {/* Prueba Social */}
      <div className="bg-softGray py-24">
        <Section>
          <h2 className="text-4xl serif-text text-center text-deepBlue mb-16 italic">Lo que dicen quienes ya transformaron su enfoque</h2>
          <div className="columns-1 md:columns-2 gap-8">
            <Testimonial
              text="Después de seis meses intentando hackear el sistema con atajos, compré este libro. En tres semanas implementé el sistema de selección y mi primera venta real llegó. Hoy genero $840 mensuales de forma consistente."
              author="Carlos M."
              location="Guadalajara, México"
            />
            <Testimonial
              text="Como profesora jubilada, quería un ingreso extra sin estafar a nadie. Francisco me enseñó a promocionar solo productos que yo misma usaría. El mes pasado gané $327 en comisiones. Me da independencia."
              author="Elena R."
              location="Santiago de Chile"
            />
            <Testimonial
              text="Este libro me humilló de la mejor manera: descubrí que mi enfoque era técnico pero carente de ética. Ahora aplico estos principios y mis clientes obtienen mejores resultados con mucho menos esfuerzo."
              author="Miguel Á."
              location="Barcelona, España"
            />
            <Testimonial
              text="Francisco no promete montañas de dinero; promete un sistema honesto. Hoy tengo un blog de tecnología modesto pero rentable ($520/mes) y, lo más importante, duermo tranquilo por las noches."
              author="Sofía L."
              location="Bogotá, Colombia"
            />
            <Testimonial
              text="Implementé el sistema de correo electrónico y en 90 días construí una lista de 2.400 personas. Hoy genero $1.100 mensuales trabajando solo dos horas al día después de que mis hijos duermen."
              author="Ana P."
              location="Lima, Perú"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-8 italic">
            Testimonios reales. Los resultados varían según tu dedicación y consistencia.
          </p>
        </Section>
      </div>

      {/* FAQ */}
      <Section>
        <h2 className="text-4xl serif-text text-deepBlue text-center mb-16">Preguntas que seguramente te estás haciendo</h2>
        <div className="max-w-3xl mx-auto">
          <FAQItem
            question="¿Este libro es adecuado para principiantes sin experiencia?"
            answer="Absolutamente sí. Está diseñado especialmente para quienes parten desde cero. No asumo que sepas términos técnicos ni que tengas un sitio funcionando. El capítulo 2 te guía paso a paso desde la elección del dominio hasta tu primera publicación."
          />
          <FAQItem
            question="¿Necesito invertir dinero adicional después de la compra?"
            answer="No es estrictamente necesario. Todo el sistema se puede implementar con herramientas gratuitas o de bajo costo (menos de $15 mensuales). El libro incluye recomendaciones gratuitas en cada sección para que el presupuesto no sea una barrera."
          />
          <FAQItem
            question="¿Cuánto tiempo debo dedicarle semanalmente?"
            answer="La consistencia supera la intensidad. Con solo 5 a 7 horas semanales verás avances concretos. Está diseñado para personas con responsabilidades laborales o familiares. 45 minutos diarios son suficientes para construir un activo real."
          />
          <FAQItem
            question="¿Cómo funciona la garantía de devolución?"
            answer="Si después de implementar al menos tres estrategias del libro durante un mes no ves avances concretos, envíanos un correo electrónico. Procesaremos tu reembolso del 100% en un máximo de 5 días hábiles. Sin discusiones."
          />
          <FAQItem
            question="¿Este sistema funciona en cualquier país?"
            answer="Sí, funciona en todos los países hispanohablantes. Incluye notas específicas sobre regulaciones en España, México, Colombia y Argentina. Los principios de persuasión y valor son universales."
          />
        </div>
      </Section>

      {/* Cierre y CTA Final */}
      <div className="bg-deepBlue py-24 text-white text-center">
        <Section className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl serif-text mb-12 italic leading-tight">
            Tu inversión hoy frente al costo de seguir donde estás
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <p className="text-energeticOrange font-bold uppercase tracking-widest text-sm mb-4">La alternativa costosa</p>
              <ul className="space-y-4 opacity-80">
                <li>• Cursos promedio: $300 - $1.000</li>
                <li>• Membresías mensuales: $45 - $75</li>
                <li>• Meses de frustración y errores</li>
                <li>• Pérdida de reputación digital</li>
              </ul>
            </div>
            <div className="bg-emeraldGreen/20 p-8 rounded-xl border border-emeraldGreen/40">
              <p className="text-emeraldGreen font-bold uppercase tracking-widest text-sm mb-4">Tu decisión inteligente</p>
              <ul className="space-y-4">
                <li>• Pago único de $9,99</li>
                <li>• Garantía total de 30 días</li>
                <li>• Actualizaciones gratuitas 1 año</li>
                <li>• Soporte personalizado vía correo</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <p className="text-4xl md:text-5xl font-bold text-energeticOrange mb-2">$9,99</p>
            <p className="text-lg opacity-60 italic">Único pago. Acceso de por vida.</p>
          </div>

          <div id="boton-pago-final">
            <Button 
              onClick={handleFinalPayment}
              className="w-full md:w-auto text-2xl py-6 px-16"
            >
              Obtener "Dominando el Marketing de Afiliados" por $9,99
            </Button>
          </div>

          <p className="mt-8 text-sm opacity-50 max-w-2xl mx-auto leading-relaxed">
            Una vez alcanzadas las 500 ventas de lanzamiento, el precio regresará a su valor original de $47,00. Asegura tu copia ahora mismo.
          </p>
        </Section>
      </div>

      {/* Cómo funciona la compra */}
      <Section className="text-center">
        <h3 className="text-2xl font-bold text-deepBlue mb-8 uppercase tracking-widest">¿Cómo funciona tu compra?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", text: "Haz clic en el botón de compra naranja" },
            { step: "2", text: "Ingresa tus datos en la página segura" },
            { step: "3", text: "Recibe el enlace en tu correo" },
            { step: "4", text: "Descarga y comienza a leer hoy mismo" }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <span className="text-6xl font-bold text-gray-100 absolute -top-8 left-1/2 -translate-x-1/2 -z-10">{item.step}</span>
              <p className="font-medium text-gray-800 relative z-10">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Reflexión Final */}
      <div className="bg-softGray py-24 border-t border-gray-200">
        <Section className="max-w-3xl text-center">
          <h2 className="text-3xl serif-text text-deepBlue mb-8 italic">Una última reflexión antes de que tomes tu decisión</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
            <p>Si has leído hasta aquí, significa algo importante: no buscas atajos mágicos. Buscas un sistema honesto, estructurado y ético para construir un negocio digital que respete tu tiempo y tu integridad.</p>
            <p>Piensa en esto: ¿cuánto tiempo has perdido ya intentando métodos que no funcionan? ¿Cuántas oportunidades has dejado pasar porque no tenías un mapa claro? <Highlight color="text-deepBlue">$9,99 es menos de lo que gastas en un almuerzo fuera de casa.</Highlight></p>
            <p>La decisión es solo tuya. Nadie vendrá a recordarte mañana. Pero dentro de seis meses, cuando mires atrás, querrás haber tomado esta decisión hoy.</p>
            <p className="font-bold italic text-deepBlue text-2xl text-center mt-12 mb-12">
              "Tu futuro como profesional ético empieza con un solo clic."
            </p>
          </div>
          <div className="mt-12">
            <p className="font-bold text-deepBlue">Francisco González</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Autor de "Dominando el Marketing de Afiliados"</p>
          </div>
        </Section>
      </div>

      {/* Pie de Página */}
      <footer className="bg-deepBlue py-12 px-6 text-white/40 text-sm text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p>© {currentTime.getFullYear()} Dominando el Marketing de Afiliados. Todos los derechos reservados.</p>
          <p className="italic leading-relaxed">
            Nota importante: Este libro es una guía educativa. Los resultados individuales varían según dedicación y factores del mercado. No garantizamos ingresos específicos. Todas las estrategias cumplen con normativas legales vigentes.
          </p>
          <div className="flex justify-center space-x-6 pt-4 border-t border-white/10 mt-6">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
