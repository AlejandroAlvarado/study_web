import { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, Trophy, RotateCcw, ArrowRight, BookOpen, MapPin, Globe2, Briefcase, Sparkles, Home } from 'lucide-react';

const QUESTIONS = [
  // ESTUDIOS SOCIALES Y CÍVICA
  {
    cat: 'civica',
    q: '¿Qué son los Estudios Sociales?',
    options: [
      'Una materia que solo estudia el pasado',
      'Una disciplina que analiza al ser humano desde la historia, geografía y otras áreas',
      'Un libro de cuentos',
      'Una clase de matemáticas',
    ],
    correct: 1,
    tip: 'Los Estudios Sociales nos ayudan a entender cómo viven las personas en sociedad.',
  },
  {
    cat: 'civica',
    q: '¿Qué es la Educación Cívica?',
    options: [
      'Una clase de cocina',
      'Una clase de educación física',
      'La enseñanza de valores y actitudes para formar buenos ciudadanos',
      'Una materia de ciencias naturales',
    ],
    correct: 2,
    tip: 'La Educación Cívica forma ciudadanos activos y responsables.',
  },
  {
    cat: 'civica',
    q: '¿Qué disciplina estudia la superficie terrestre y su relación con el ser humano?',
    options: ['Historia', 'Geografía', 'Economía', 'Sociología'],
    correct: 1,
    tip: 'La Geografía usa herramientas como los mapas para ubicar lugares.',
  },
  {
    cat: 'civica',
    q: '¿Qué disciplina se enfoca en los acontecimientos del pasado?',
    options: ['Historia', 'Antropología', 'Geografía', 'Economía'],
    correct: 0,
    tip: 'Una herramienta útil de la Historia son las líneas del tiempo.',
  },
  {
    cat: 'civica',
    q: '¿Qué estudia la Economía?',
    options: [
      'Los animales y plantas',
      'El clima de los países',
      'Cómo las sociedades manejan los recursos para satisfacer sus necesidades',
      'El idioma de las personas',
    ],
    correct: 2,
    tip: 'La Economía analiza el consumo de bienes y servicios.',
  },
  {
    cat: 'civica',
    q: 'La palabra "Antropología" viene del griego. ¿Qué significa?',
    options: [
      'Estudio de los animales',
      'Estudio del hombre (anthropos = hombre, logos = conocimiento)',
      'Estudio de las plantas',
      'Estudio del cielo',
    ],
    correct: 1,
    tip: 'La Antropología investiga al ser humano, su cultura y civilización.',
  },
  {
    cat: 'civica',
    q: '¿Qué estudia la Sociología?',
    options: [
      'Cómo la sociedad influye en las personas y cómo las personas transforman la sociedad',
      'Solo el clima',
      'Los volcanes',
      'Los números',
    ],
    correct: 0,
    tip: 'Aborda temas como las migraciones y los cambios en la población.',
  },
  {
    cat: 'civica',
    q: '¿Qué estudian las Ciencias Políticas?',
    options: [
      'Los volcanes',
      'Las dinámicas políticas desde el nivel local hasta el internacional',
      'Las plantas tropicales',
      'Los deportes',
    ],
    correct: 1,
    tip: 'Promueven una comprensión crítica de las sociedades.',
  },
  {
    cat: 'civica',
    q: '¿Cuál es uno de los objetivos de los Estudios Sociales?',
    options: [
      'Aprender a bailar',
      'Dar una visión general sobre la sociedad y su evolución histórica',
      'Aprender a cocinar',
      'Ganar dinero',
    ],
    correct: 1,
    tip: 'También fomenta la identificación con la patria.',
  },
  {
    cat: 'civica',
    q: 'La Educación Cívica busca formar ciudadanos:',
    options: [
      'Ricos y famosos',
      'Silenciosos',
      'Conscientes, participativos y comprometidos con la democracia',
      'Que vivan lejos',
    ],
    correct: 2,
    tip: 'Ciudadanos que respeten las instituciones democráticas del Estado.',
  },
  {
    cat: 'civica',
    q: '¿En qué áreas de la vida cotidiana impactan los Estudios Sociales y la Educación Cívica?',
    options: [
      'Solo en la escuela',
      'Solo en el hogar',
      'País, comunidad, escuela y hogar',
      'Solo en el país',
    ],
    correct: 2,
    tip: 'En el hogar propician valores como respeto y solidaridad.',
  },
  {
    cat: 'civica',
    q: '¿Qué herramienta es muy útil para estudiar Historia?',
    options: ['La calculadora', 'Las líneas del tiempo', 'El microscopio', 'El telescopio'],
    correct: 1,
    tip: 'Las líneas del tiempo nos muestran el orden de los eventos históricos.',
  },

  // GEOGRAFÍA DE COSTA RICA
  {
    cat: 'geografia',
    q: '¿Cuál es la superficie terrestre de Costa Rica?',
    options: ['51 100 km²', '100 000 km²', '25 500 km²', '75 200 km²'],
    correct: 0,
    tip: '¡Costa Rica es un país pequeño pero muy diverso!',
  },
  {
    cat: 'geografia',
    q: '¿Cuál es el punto más alto de Costa Rica?',
    options: [
      'Volcán Arenal',
      'Volcán Poás',
      'Cerro Chirripó con 3 821 metros de altura',
      'Volcán Irazú',
    ],
    correct: 2,
    tip: 'El Cerro Chirripó está en la cordillera de Talamanca.',
  },
  {
    cat: 'geografia',
    q: '¿Cuál es la orientación del país?',
    options: [
      'De norte a sur',
      'De este a oeste',
      'De noroeste a sureste',
      'De suroeste a noreste',
    ],
    correct: 2,
    tip: 'Si miras el mapa, verás que va inclinado de noroeste a sureste.',
  },
  {
    cat: 'geografia',
    q: 'Costa Rica está bañada por:',
    options: [
      'Solo el Mar Caribe',
      'Solo el Océano Pacífico',
      'El Mar Caribe y el Océano Pacífico',
      'El Océano Atlántico y el Océano Índico',
    ],
    correct: 2,
    tip: '¡Tenemos costas en dos mares diferentes!',
  },
  {
    cat: 'geografia',
    q: '¿Con qué país limita Costa Rica al norte?',
    options: ['Panamá', 'Nicaragua', 'Honduras', 'El Salvador'],
    correct: 1,
    tip: 'Nicaragua es nuestro vecino del norte.',
  },
  {
    cat: 'geografia',
    q: '¿Con qué país limita Costa Rica al sureste?',
    options: ['Nicaragua', 'Colombia', 'Panamá', 'Guatemala'],
    correct: 2,
    tip: 'Panamá está en el sureste de Costa Rica.',
  },
  {
    cat: 'geografia',
    q: '¿Con qué limita Costa Rica al este?',
    options: ['Mar Caribe', 'Océano Pacífico', 'Nicaragua', 'Panamá'],
    correct: 0,
    tip: 'El Mar Caribe queda al este, en provincias como Limón.',
  },
  {
    cat: 'geografia',
    q: '¿Cuántas provincias tiene Costa Rica?',
    options: ['5', '6', '7', '8'],
    correct: 2,
    tip: 'San José, Alajuela, Heredia, Cartago, Guanacaste, Puntarenas y Limón.',
  },
  {
    cat: 'geografia',
    q: '¿En qué zona climática se ubica Costa Rica?',
    options: [
      'Polar',
      'Intertropical, entre el Trópico de Cáncer y el Trópico de Capricornio',
      'Templada',
      'Desértica',
    ],
    correct: 1,
    tip: 'Por eso tenemos un clima cálido todo el año.',
  },
  {
    cat: 'geografia',
    q: '¿Cuál de estas NO es una provincia de Costa Rica?',
    options: ['Heredia', 'Cartago', 'Managua', 'Puntarenas'],
    correct: 2,
    tip: 'Managua es la capital de Nicaragua, no una provincia de Costa Rica.',
  },
  {
    cat: 'geografia',
    q: '¿Cuántos continentes hay en el mundo?',
    options: ['3', '5', '7', '10'],
    correct: 1,
    tip: 'África, América, Asia, Europa y Oceanía.',
  },
  {
    cat: 'geografia',
    q: '¿Cuántos océanos hay en el mundo?',
    options: ['2', '3', '5', '8'],
    correct: 2,
    tip: 'Pacífico, Atlántico, Índico, Ártico y Antártico.',
  },

  // CENTROAMÉRICA Y VECINOS
  {
    cat: 'centroamerica',
    q: '¿Cuántos países forman Centroamérica?',
    options: ['5', '6', '7', '8'],
    correct: 2,
    tip: 'Belice, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica y Panamá.',
  },
  {
    cat: 'centroamerica',
    q: '¿Cuáles son los países de Centroamérica?',
    options: [
      'Belice, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica y Panamá',
      'México, Guatemala, Honduras, Nicaragua y Costa Rica',
      'Costa Rica, Panamá, Colombia y Venezuela',
      'Cuba, República Dominicana, Haití y Jamaica',
    ],
    correct: 0,
    tip: '¡Son siete países hermanos!',
  },
  {
    cat: 'centroamerica',
    q: '¿Cuál es una ventaja de la ubicación de Costa Rica?',
    options: [
      'Los suelos son muy fértiles para la agricultura',
      'Hace mucho frío todo el año',
      'Está muy lejos de otros países',
      'No tiene playas',
    ],
    correct: 0,
    tip: 'Por eso podemos sembrar muchos productos.',
  },
  {
    cat: 'centroamerica',
    q: '¿Por qué Costa Rica tiene tanta biodiversidad?',
    options: [
      'Porque es un país muy grande',
      'Porque actúa como un puente natural entre América del Norte y América del Sur',
      'Porque tiene muchos desiertos',
      'Porque está cerca del polo norte',
    ],
    correct: 1,
    tip: 'Por eso aquí viven especies de los dos continentes.',
  },
  {
    cat: 'centroamerica',
    q: '¿Cuál de estos NO es un volcán activo de Costa Rica?',
    options: ['Arenal', 'Poás', 'Irazú', 'Popocatépetl'],
    correct: 3,
    tip: 'El Popocatépetl está en México. En Costa Rica tenemos: Rincón de la Vieja, Arenal, Poás, Irazú y Turrialba.',
  },
  {
    cat: 'centroamerica',
    q: '¿Qué desventaja tiene Costa Rica por su ubicación?',
    options: [
      'Tener mucho oro',
      'Sufrir sismos y terremotos',
      'Tener muchos amigos',
      'Tener mucha comida',
    ],
    correct: 1,
    tip: 'Estamos sobre placas tectónicas que se mueven.',
  },
  {
    cat: 'centroamerica',
    q: '¿Qué son los sismos?',
    options: [
      'Lluvias muy fuertes',
      'Movimientos de la corteza terrestre causados por placas tectónicas o erupciones volcánicas',
      'Vientos muy fuertes',
      'Mucho calor',
    ],
    correct: 1,
    tip: 'Los sismos pequeños se llaman temblores y los grandes terremotos.',
  },
  {
    cat: 'centroamerica',
    q: '¿Qué son los huracanes?',
    options: [
      'Movimientos de la tierra',
      'Desprendimientos de rocas',
      'Tormentas con lluvias intensas y vientos que pueden superar los 250 km/h',
      'Falta de lluvia por mucho tiempo',
    ],
    correct: 2,
    tip: 'Los huracanes pueden provocar inundaciones y, a veces, tornados.',
  },
  {
    cat: 'centroamerica',
    q: '¿Qué es una sequía?',
    options: [
      'Mucha lluvia',
      'La ausencia prolongada de lluvias que causa escasez de agua',
      'Una tormenta',
      'Un sismo',
    ],
    correct: 1,
    tip: 'Las sequías afectan a los cultivos y al ganado.',
  },
  {
    cat: 'centroamerica',
    q: '¿Qué son los deslizamientos?',
    options: [
      'Vientos fuertes',
      'Lluvias muy intensas',
      'Desprendimientos de rocas, tierra y árboles que bajan por una pendiente',
      'Movimientos del mar',
    ],
    correct: 2,
    tip: 'Suelen ocurrir cuando llueve mucho en zonas montañosas.',
  },

  // ECONOMÍA Y CONFLICTOS
  {
    cat: 'economia',
    q: '¿Cuál de estos productos exporta Costa Rica?',
    options: [
      'Petróleo y aviones',
      'Café, leche, textiles, lácteos y flores',
      'Carros y camiones',
      'Computadoras de juegos',
    ],
    correct: 1,
    tip: 'También exportamos zapatos, salsas, medicamentos y envases de vidrio.',
  },
  {
    cat: 'economia',
    q: '¿Cuál de estos productos importa Costa Rica?',
    options: [
      'Café',
      'Plásticos para envasado, derivados del petróleo (gasolina) y papel',
      'Bananos',
      'Piñas',
    ],
    correct: 1,
    tip: 'También importamos frijoles, harina, jabón y caucho.',
  },
  {
    cat: 'economia',
    q: '¿Qué significa TLC?',
    options: [
      'Tratado de Libre Comercio',
      'Tratado de Lugares Cerrados',
      'Tarifa de Línea Costera',
      'Trabajo Local Compartido',
    ],
    correct: 0,
    tip: 'Es un acuerdo entre países para ampliar el mercado de bienes y servicios.',
  },
  {
    cat: 'economia',
    q: '¿Qué es el SICA?',
    options: [
      'Un volcán activo',
      'El Sistema de Integración Centroamericana, establecido en 1991',
      'Una comida típica',
      'Un río de Nicaragua',
    ],
    correct: 1,
    tip: 'Su objetivo es unir a la región para fomentar la paz y el desarrollo.',
  },
  {
    cat: 'economia',
    q: '¿Cómo se llama la tradición que celebra la independencia y comienza en Guatemala?',
    options: [
      'La Carrera de la Antorcha',
      'El Tope Nacional',
      'La Carrera de Tortugas',
      'La Caminata Real',
    ],
    correct: 0,
    tip: 'Simboliza el correo que llevaba la noticia de la independencia y termina en Costa Rica.',
  },
  {
    cat: 'economia',
    q: '¿Cuál es uno de los conflictos limítrofes que ha tenido Costa Rica con Nicaragua?',
    options: [
      'Por las playas de Guanacaste',
      'Por las montañas centrales',
      'Problemas de navegación por el Río San Juan',
      'Por la comida típica',
    ],
    correct: 2,
    tip: 'El gobierno nicaragüense ha impedido que la policía costarricense navegue armada.',
  },
  {
    cat: 'economia',
    q: '¿En qué año el ejército nicaragüense ocupó la Isla Calero?',
    options: ['2010', '1990', '2020', '1985'],
    correct: 0,
    tip: 'Esto generó un conflicto diplomático con Costa Rica.',
  },
  {
    cat: 'economia',
    q: '¿Cómo se llama el tratado limítrofe entre Costa Rica y Nicaragua?',
    options: [
      'Tratado de Versalles',
      'Tratado Cañas-Jerez',
      'Tratado de París',
      'Tratado de Tordesillas',
    ],
    correct: 1,
    tip: 'Aunque existe el tratado, han surgido disputas sobre sus fronteras.',
  },
  {
    cat: 'economia',
    q: '¿Quiénes son los principales compradores de productos costarricenses?',
    options: [
      'Estados Unidos y Canadá solamente',
      'Guatemala, Honduras y Panamá',
      'Solo China',
      'Solo Brasil',
    ],
    correct: 1,
    tip: 'Mantenemos relaciones comerciales fuertes con nuestros vecinos centroamericanos.',
  },
  {
    cat: 'economia',
    q: '¿Qué organización organiza los Juegos Deportivos Centroamericanos?',
    options: [
      'La FIFA',
      'La Organización Deportiva Centroamericana (Ordeca)',
      'Los Juegos Olímpicos',
      'La NBA',
    ],
    correct: 1,
    tip: 'Estos juegos refuerzan las relaciones culturales con nuestros vecinos.',
  },
];

const CATEGORIES = [
  { id: 'all', name: 'Todos los temas', icon: Sparkles, color: '#f59e0b', desc: 'Practica todo lo que necesitas saber' },
  { id: 'civica', name: 'Estudios Sociales y Cívica', icon: BookOpen, color: '#16a34a', desc: 'Definiciones y disciplinas' },
  { id: 'geografia', name: 'Geografía de Costa Rica', icon: MapPin, color: '#0ea5e9', desc: 'Mapas, provincias y límites' },
  { id: 'centroamerica', name: 'Centroamérica y vecinos', icon: Globe2, color: '#dc2626', desc: 'Países, ventajas y desastres' },
  { id: 'economia', name: 'Economía y conflictos', icon: Briefcase, color: '#7c3aed', desc: 'Comercio, SICA y conflictos limítrofes' },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz() {
  const [screen, setScreen] = useState('welcome');
  const [category, setCategory] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [wrongList, setWrongList] = useState([]);

  const fontStyles = (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap');
      .font-display { font-family: 'Fredoka', sans-serif; }
      .font-body { font-family: 'Nunito', sans-serif; }
      @keyframes pop {
        0% { transform: scale(0.8); opacity: 0; }
        60% { transform: scale(1.05); }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes bounce-in {
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-6px); }
        75% { transform: translateX(6px); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      .anim-pop { animation: pop 0.4s ease-out; }
      .anim-bounce-in { animation: bounce-in 0.5s ease-out; }
      .anim-shake { animation: shake 0.4s ease-in-out; }
      .anim-float { animation: float 3s ease-in-out infinite; }
    `}</style>
  );

  const startQuiz = (catId) => {
    const filtered = catId === 'all'
      ? QUESTIONS
      : QUESTIONS.filter((q) => q.cat === catId);
    const shuffled = shuffle(filtered).map((q) => {
      const indexed = q.options.map((opt, i) => ({ opt, original: i }));
      const shuffledOpts = shuffle(indexed);
      const newCorrect = shuffledOpts.findIndex((o) => o.original === q.correct);
      return {
        ...q,
        options: shuffledOpts.map((o) => o.opt),
        correct: newCorrect,
      };
    });
    setQuestions(shuffled);
    setCategory(catId);
    setIdx(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setWrongList([]);
    setScreen('quiz');
  };

  const handleAnswer = (i) => {
    if (showFeedback) return;
    setSelected(i);
    setShowFeedback(true);
    const current = questions[idx];
    if (i === current.correct) {
      setScore((s) => s + 1);
    } else {
      setWrongList((w) => [...w, { ...current, userAnswer: i }]);
    }
  };

  const next = () => {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setScreen('results');
    }
  };

  const goHome = () => {
    setScreen('welcome');
    setIdx(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setWrongList([]);
  };

  // ====== WELCOME SCREEN ======
  if (screen === 'welcome') {
    return (
      <div className="min-h-screen font-body p-4 sm:p-8 flex items-center justify-center">
        {fontStyles}
        <div className="max-w-2xl w-full">
          <div className="text-center anim-bounce-in">
            <div className="text-7xl sm:text-8xl mb-4 anim-float inline-block">🌴</div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold mb-3" style={{ color: '#15803d' }}>
              ¡Hola, Elián!
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700 font-semibold max-w-lg mx-auto">
              Vamos a prepararnos para tu prueba de Estudios Sociales con un quiz divertido sobre Costa Rica 🇨🇷
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-4 anim-pop" style={{ borderColor: '#fde68a' }}>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4 text-center" style={{ color: '#0c4a6e' }}>
              Elige un tema 📚
            </h2>
            <div className="grid gap-3">
              {CATEGORIES.map((c) => {
                const Icon = c.icon;
                const count = c.id === 'all' ? QUESTIONS.length : QUESTIONS.filter((q) => q.cat === c.id).length;
                return (
                  <button
                    key={c.id}
                    onClick={() => startQuiz(c.id)}
                    className="group flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-lg hover:scale-[1.02] text-left bg-white"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: c.color + '20' }}
                    >
                      <Icon size={24} style={{ color: c.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-semibold text-lg" style={{ color: c.color }}>
                        {c.name}
                      </div>
                      <div className="text-sm text-gray-600">{c.desc}</div>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {count}
                      </span>
                      <ArrowRight size={20} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            💡 Consejo: Lee bien cada pregunta antes de responder
          </p>
        </div>
      </div>
    );
  }

  // ====== QUIZ SCREEN ======
  if (screen === 'quiz') {
    const current = questions[idx];
    const progress = ((idx + (showFeedback ? 1 : 0)) / questions.length) * 100;
    const isCorrect = selected === current.correct;

    return (
      <div className="min-h-screen font-body p-4 sm:p-6">
        {fontStyles}
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goHome}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold text-sm bg-white px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Home size={16} /> Inicio
            </button>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm font-display font-semibold text-sm">
              Pregunta <span style={{ color: '#16a34a' }}>{idx + 1}</span> de {questions.length}
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm font-display font-semibold text-sm">
              ⭐ {score}
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-white rounded-full h-3 mb-6 overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #16a34a 0%, #0ea5e9 100%)',
              }}
            />
          </div>

          {/* Question card */}
          <div key={idx} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-4 anim-bounce-in" style={{ borderColor: '#bae6fd' }}>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#0ea5e9' }}>
                {CATEGORIES.find((c) => c.id === current.cat)?.name}
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold leading-snug" style={{ color: '#0c4a6e' }}>
                {current.q}
              </h2>
            </div>

            <div className="grid gap-3">
              {current.options.map((opt, i) => {
                let bgColor = 'bg-white';
                let borderColor = 'border-gray-200';
                let textColor = 'text-gray-800';
                let icon = null;
                let extraClass = 'hover:border-blue-400 hover:shadow-md hover:scale-[1.01]';

                if (showFeedback) {
                  extraClass = '';
                  if (i === current.correct) {
                    bgColor = 'bg-green-50';
                    borderColor = 'border-green-500';
                    textColor = 'text-green-900';
                    icon = <CheckCircle2 className="text-green-600" size={22} />;
                  } else if (i === selected) {
                    bgColor = 'bg-red-50';
                    borderColor = 'border-red-400';
                    textColor = 'text-red-900';
                    icon = <XCircle className="text-red-500" size={22} />;
                    extraClass = 'anim-shake';
                  } else {
                    bgColor = 'bg-gray-50';
                    borderColor = 'border-gray-200';
                    textColor = 'text-gray-500';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={showFeedback}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left font-semibold ${bgColor} ${borderColor} ${textColor} ${extraClass} ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-base ${
                      showFeedback && i === current.correct ? 'bg-green-500 text-white' :
                      showFeedback && i === selected ? 'bg-red-400 text-white' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="flex-1">{opt}</span>
                    {icon}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className="mt-6 anim-pop">
                <div
                  className={`rounded-2xl p-4 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-amber-50 border-2 border-amber-200'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">{isCorrect ? '🎉' : '💡'}</div>
                    <div>
                      <div className={`font-display font-semibold mb-1 ${isCorrect ? 'text-green-800' : 'text-amber-800'}`}>
                        {isCorrect ? '¡Correcto!' : '¡Casi! Tú puedes con la siguiente.'}
                      </div>
                      <div className="text-sm text-gray-700">{current.tip}</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={next}
                  className="w-full mt-4 py-4 rounded-2xl font-display font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #0ea5e9 100%)' }}
                >
                  {idx + 1 < questions.length ? 'Siguiente pregunta' : 'Ver mis resultados'} <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ====== RESULTS SCREEN ======
  if (screen === 'results') {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    let level, emoji, msg, color;
    if (pct >= 90) {
      level = '¡Excelente!';
      emoji = '🏆';
      msg = '¡Eres un experto en Estudios Sociales! Estás súper preparado.';
      color = '#f59e0b';
    } else if (pct >= 70) {
      level = '¡Muy bien!';
      emoji = '🌟';
      msg = '¡Buen trabajo! Solo repasa un poquito y estarás listo.';
      color = '#16a34a';
    } else if (pct >= 50) {
      level = '¡Vas por buen camino!';
      emoji = '📚';
      msg = 'Sigue estudiando. Repasa los temas y vuelve a intentarlo.';
      color = '#0ea5e9';
    } else {
      level = '¡A practicar!';
      emoji = '💪';
      msg = 'No te preocupes, con práctica vas a lograrlo. ¡Inténtalo de nuevo!';
      color = '#dc2626';
    }

    return (
      <div className="min-h-screen font-body p-4 sm:p-8 flex items-center justify-center">
        {fontStyles}
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border-4 anim-bounce-in text-center" style={{ borderColor: color + '40' }}>
            <div className="text-7xl sm:text-8xl mb-4 anim-float inline-block">{emoji}</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3" style={{ color }}>
              {level}
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto">{msg}</p>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 mb-6 border-2 border-yellow-200">
              <div className="font-display text-6xl sm:text-7xl font-bold mb-2" style={{ color }}>
                {score}/{total}
              </div>
              <div className="text-xl font-bold text-gray-700">
                {pct}% de respuestas correctas
              </div>
              <div className="flex justify-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Trophy
                    key={star}
                    size={28}
                    fill={pct >= star * 20 ? '#f59e0b' : 'none'}
                    style={{ color: pct >= star * 20 ? '#f59e0b' : '#d1d5db' }}
                  />
                ))}
              </div>
            </div>

            {wrongList.length > 0 && (
              <div className="text-left bg-amber-50 rounded-2xl p-5 mb-6 border-2 border-amber-200">
                <div className="font-display font-semibold text-amber-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">📝</span> Temas para repasar:
                </div>
                <ul className="space-y-3">
                  {wrongList.slice(0, 5).map((w, i) => (
                    <li key={i} className="text-sm">
                      <div className="font-semibold text-gray-800 mb-1">{w.q}</div>
                      <div className="text-green-700">
                        ✓ <span className="font-semibold">Correcto:</span> {w.options[w.correct]}
                      </div>
                      <div className="text-gray-600 italic">💡 {w.tip}</div>
                    </li>
                  ))}
                  {wrongList.length > 5 && (
                    <li className="text-sm text-gray-500 italic">
                      Y {wrongList.length - 5} pregunta{wrongList.length - 5 > 1 ? 's' : ''} más para repasar...
                    </li>
                  )}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => startQuiz(category)}
                className="flex-1 py-4 rounded-2xl font-display font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #0ea5e9 100%)' }}
              >
                <RotateCcw size={20} /> Intentar otra vez
              </button>
              <button
                onClick={goHome}
                className="flex-1 py-4 rounded-2xl font-display font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Home size={20} /> Cambiar tema
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            ¡Sigue practicando, lo vas a lograr! 💚
          </p>
        </div>
      </div>
    );
  }

  return null;
}
