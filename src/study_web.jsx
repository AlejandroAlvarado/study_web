import { useState } from 'react';
import {
  CheckCircle2, XCircle, Trophy, RotateCcw, ArrowRight, ArrowLeft,
  BookOpen, MapPin, Globe2, Briefcase, Sparkles, Home,
  Calculator, TrendingUp, Triangle, Ruler, BarChart3, Divide,
  Square, Coins,
} from 'lucide-react';

// ===========================
// SOCIAL STUDIES QUESTIONS
// ===========================
const SOCIAL_QUESTIONS = [
  // ===== ESTUDIOS SOCIALES Y CÍVICA =====
  { cat: 'civica', q: '¿Qué son los Estudios Sociales?', options: ['Una disciplina que analiza al ser humano desde la historia, geografía y otras áreas', 'Una materia que solo estudia eventos históricos antiguos', 'Una asignatura que solo enseña los nombres y capitales de los países', 'El estudio de los recursos naturales y los ecosistemas'], correct: 0, tip: 'Los Estudios Sociales nos ayudan a entender cómo viven las personas en sociedad.' },
  { cat: 'civica', q: '¿Qué es la Educación Cívica?', options: ['El estudio de las leyes y el sistema judicial únicamente', 'La enseñanza de la historia universal y sus civilizaciones', 'La enseñanza de valores y actitudes para formar buenos ciudadanos', 'Una materia que enseña geografía y mapas del mundo'], correct: 2, tip: 'La Educación Cívica forma ciudadanos activos y responsables.' },
  { cat: 'civica', q: '¿Qué disciplina estudia la superficie terrestre y su relación con el ser humano?', options: ['Historia', 'Geografía', 'Economía', 'Sociología'], correct: 1, tip: 'La Geografía usa herramientas como los mapas para ubicar lugares.' },
  { cat: 'civica', q: '¿Qué disciplina se enfoca en los acontecimientos del pasado?', options: ['Historia', 'Antropología', 'Geografía', 'Economía'], correct: 0, tip: 'Una herramienta útil de la Historia son las líneas del tiempo.' },
  { cat: 'civica', q: '¿Qué estudia la Economía?', options: ['Cómo se relacionan las personas en familia y comunidad', 'Cómo se forman los paisajes naturales del planeta', 'Cómo las sociedades manejan los recursos para satisfacer sus necesidades', 'Cómo evolucionaron las culturas a lo largo del tiempo'], correct: 2, tip: 'La Economía analiza el consumo de bienes y servicios.' },
  { cat: 'civica', q: 'La palabra "Antropología" viene del griego. ¿Qué significa?', options: ['Estudio de la sociedad y los grupos sociales', 'Estudio del hombre (anthropos = hombre, logos = conocimiento)', 'Estudio de la economía y los mercados', 'Estudio del territorio y los pueblos antiguos'], correct: 1, tip: 'La Antropología investiga al ser humano, su cultura y civilización.' },
  { cat: 'civica', q: '¿Qué estudia la Sociología?', options: ['Cómo la sociedad influye en las personas y cómo las personas transforman la sociedad', 'Los acontecimientos importantes del pasado lejano', 'La producción y el consumo de bienes y servicios', 'La superficie de la Tierra y sus paisajes'], correct: 0, tip: 'Aborda temas como las migraciones y los cambios en la población.' },
  { cat: 'civica', q: '¿Qué estudian las Ciencias Políticas?', options: ['Los hechos históricos antiguos de cada país', 'Las dinámicas políticas desde el nivel local hasta el internacional', 'El comportamiento humano y las costumbres', 'Las relaciones económicas entre países'], correct: 1, tip: 'Promueven una comprensión crítica de las sociedades.' },
  { cat: 'civica', q: '¿Cuál es uno de los objetivos de los Estudios Sociales?', options: ['Memorizar fechas históricas y nombres de países', 'Dar una visión general sobre la sociedad y su evolución histórica', 'Enseñar a usar mapas y herramientas de navegación', 'Aprender los nombres científicos de plantas y animales'], correct: 1, tip: 'También fomenta la identificación con la patria.' },
  { cat: 'civica', q: 'La Educación Cívica busca formar ciudadanos:', options: ['Conscientes, participativos y comprometidos con la democracia', 'Obedientes que sigan siempre las reglas sin cuestionarlas', 'Expertos en historia universal antigua', 'Que sepan los nombres de todos los países del mundo'], correct: 0, tip: 'Ciudadanos que respeten las instituciones democráticas del Estado.' },
  { cat: 'civica', q: '¿En qué áreas de la vida cotidiana impactan los Estudios Sociales y la Educación Cívica?', options: ['Únicamente en la escuela durante las clases', 'Solo en el ámbito del hogar familiar', 'En el país, la comunidad, la escuela y el hogar', 'Solo cuando se ejerce el voto en elecciones'], correct: 2, tip: 'En el hogar propician valores como respeto y solidaridad.' },
  { cat: 'civica', q: '¿Qué herramienta es muy útil para estudiar Historia?', options: ['Los mapas geográficos del mundo actual', 'Las líneas del tiempo', 'Las gráficas estadísticas de población', 'Los modelos del sistema solar'], correct: 1, tip: 'Las líneas del tiempo nos muestran el orden de los eventos históricos.' },
  { cat: 'civica', q: '¿Qué disciplina investiga al ser humano considerando sus características físicas, su cultura y su civilización?', options: ['Geografía', 'Economía', 'Antropología', 'Ciencias Políticas'], correct: 2, tip: 'La Antropología viene del griego: anthropos (hombre) + logos (conocimiento).' },
  { cat: 'civica', q: '¿Qué disciplinas aportan conocimientos a los Estudios Sociales?', options: ['Solo Historia y Geografía', 'Solo Geografía y Economía', 'Geografía, Historia, Economía, Antropología, Sociología y Ciencias Políticas', 'Únicamente Historia y Sociología'], correct: 2, tip: 'Por eso los Estudios Sociales nos dan una visión muy completa.' },

  // ===== GEOGRAFÍA DE COSTA RICA =====
  { cat: 'geografia', q: '¿Cuál es la superficie terrestre de Costa Rica?', options: ['51 100 km²', '101 300 km²', '25 500 km²', '75 200 km²'], correct: 0, tip: '¡Costa Rica es un país pequeño pero muy diverso!' },
  { cat: 'geografia', q: '¿Cuál es el punto más alto de Costa Rica?', options: ['Volcán Arenal (1670 m)', 'Volcán Poás (2708 m)', 'Cerro Chirripó (3 821 m)', 'Volcán Irazú (3432 m)'], correct: 2, tip: 'El Cerro Chirripó está en la cordillera de Talamanca.' },
  { cat: 'geografia', q: '¿Cuál es la orientación del país?', options: ['De norte a sur', 'De este a oeste', 'De noroeste a sureste', 'De suroeste a noreste'], correct: 2, tip: 'Si miras el mapa, verás que va inclinado de noroeste a sureste.' },
  { cat: 'geografia', q: 'Costa Rica está bañada por:', options: ['Solo el Mar Caribe en toda su costa', 'Solo el Océano Pacífico en sus dos costas', 'El Mar Caribe y el Océano Pacífico', 'El Océano Atlántico y el Océano Índico'], correct: 2, tip: '¡Tenemos costas en dos mares diferentes!' },
  { cat: 'geografia', q: '¿Con qué país limita Costa Rica al norte?', options: ['Panamá', 'Nicaragua', 'Honduras', 'El Salvador'], correct: 1, tip: 'Nicaragua es nuestro vecino del norte.' },
  { cat: 'geografia', q: '¿Con qué país limita Costa Rica al sureste?', options: ['Nicaragua', 'Colombia', 'Panamá', 'Guatemala'], correct: 2, tip: 'Panamá está en el sureste de Costa Rica.' },
  { cat: 'geografia', q: '¿Con qué limita Costa Rica al este?', options: ['Mar Caribe', 'Océano Pacífico', 'Nicaragua', 'Panamá'], correct: 0, tip: 'El Mar Caribe queda al este, en provincias como Limón.' },
  { cat: 'geografia', q: '¿Con qué limita Costa Rica al oeste?', options: ['Mar Caribe', 'Océano Pacífico', 'Nicaragua', 'Panamá'], correct: 1, tip: 'El Océano Pacífico está al oeste y al sur del país.' },
  { cat: 'geografia', q: '¿Cuántas provincias tiene Costa Rica?', options: ['5', '6', '7', '8'], correct: 2, tip: 'San José, Alajuela, Heredia, Cartago, Guanacaste, Puntarenas y Limón.' },
  { cat: 'geografia', q: '¿En qué zona climática se ubica Costa Rica?', options: ['Zona polar, cerca del Polo Norte', 'Zona intertropical, entre el Trópico de Cáncer y el Trópico de Capricornio', 'Zona templada, lejos del Ecuador', 'Zona desértica con escasa lluvia'], correct: 1, tip: 'Por eso tenemos un clima cálido todo el año.' },
  { cat: 'geografia', q: '¿Cuál de estas NO es una provincia de Costa Rica?', options: ['Heredia', 'Cartago', 'Managua', 'Puntarenas'], correct: 2, tip: 'Managua es la capital de Nicaragua, no una provincia de Costa Rica.' },
  { cat: 'geografia', q: '¿Cuántos continentes hay en el mundo?', options: ['4', '5', '6', '7'], correct: 1, tip: 'África, América, Asia, Europa y Oceanía.' },
  { cat: 'geografia', q: '¿Cuántos océanos hay en el mundo?', options: ['3', '4', '5', '6'], correct: 2, tip: 'Pacífico, Atlántico, Índico, Ártico y Antártico.' },
  { cat: 'geografia', q: '¿En qué continente se encuentra Costa Rica?', options: ['Asia', 'África', 'América', 'Europa'], correct: 2, tip: 'Costa Rica está en América Central, parte del continente americano.' },
  { cat: 'geografia', q: '¿En qué subregión de América se ubica Costa Rica?', options: ['América del Norte', 'América Central (Centroamérica)', 'América del Sur', 'El Caribe insular'], correct: 1, tip: 'Centroamérica es el "puente" entre Norte y Sur América.' },
  { cat: 'geografia', q: '¿Cuáles son las dos estaciones climáticas de Costa Rica?', options: ['Verano e invierno como en Estados Unidos', 'Estación seca y estación lluviosa', 'Primavera y otoño', 'Estación fría y estación cálida'], correct: 1, tip: 'En Costa Rica no hay las cuatro estaciones, solo seca (verano) y lluviosa (invierno).' },

  // ===== CENTROAMÉRICA Y VECINOS =====
  { cat: 'centroamerica', q: '¿Cuántos países forman Centroamérica?', options: ['5', '6', '7', '8'], correct: 2, tip: 'Belice, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica y Panamá.' },
  { cat: 'centroamerica', q: '¿Cuáles son los países de Centroamérica?', options: ['Belice, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica y Panamá', 'México, Guatemala, Honduras, Nicaragua y Costa Rica', 'Costa Rica, Panamá, Colombia y Venezuela', 'Cuba, República Dominicana, Haití y Jamaica'], correct: 0, tip: '¡Son siete países hermanos!' },
  { cat: 'centroamerica', q: '¿Cuál es una ventaja de la ubicación de Costa Rica?', options: ['Los suelos son muy fértiles, ideales para la agricultura', 'Está rodeada por desiertos que protegen el territorio', 'Tiene una sola estación climática durante todo el año', 'Su tamaño grande facilita el transporte interno'], correct: 0, tip: 'Por eso podemos sembrar muchos productos.' },
  { cat: 'centroamerica', q: '¿Por qué Costa Rica tiene tanta biodiversidad?', options: ['Porque es uno de los países más grandes del mundo', 'Porque actúa como un puente natural entre América del Norte y América del Sur', 'Porque casi todo su territorio es selva amazónica', 'Porque tiene mucha nieve permanente en sus montañas'], correct: 1, tip: 'Por eso aquí viven especies de los dos continentes.' },
  { cat: 'centroamerica', q: '¿Cuál de estos NO es un volcán activo de Costa Rica?', options: ['Arenal', 'Poás', 'Irazú', 'Popocatépetl'], correct: 3, tip: 'El Popocatépetl está en México. En Costa Rica: Rincón de la Vieja, Arenal, Poás, Irazú y Turrialba.' },
  { cat: 'centroamerica', q: '¿Qué desventaja tiene Costa Rica por su ubicación?', options: ['Estar muy lejos de los océanos importantes', 'Sufrir sismos y terremotos por las placas tectónicas', 'Tener un clima frío que dificulta los cultivos', 'Estar aislada de los demás países centroamericanos'], correct: 1, tip: 'Estamos sobre placas tectónicas que se mueven.' },
  { cat: 'centroamerica', q: '¿Qué son los sismos?', options: ['Lluvias muy fuertes que causan inundaciones', 'Movimientos de la corteza terrestre causados por placas tectónicas o erupciones volcánicas', 'Vientos giratorios que destruyen estructuras', 'Olas gigantes que llegan a las costas'], correct: 1, tip: 'Los sismos pequeños se llaman temblores y los grandes terremotos.' },
  { cat: 'centroamerica', q: '¿Qué son los huracanes?', options: ['Movimientos de la tierra causados por placas tectónicas', 'Desprendimientos de rocas y tierra por una pendiente', 'Tormentas con lluvias intensas y vientos que pueden superar los 250 km/h', 'Períodos largos sin lluvia que afectan los cultivos'], correct: 2, tip: 'Los huracanes pueden provocar inundaciones y, a veces, tornados.' },
  { cat: 'centroamerica', q: '¿Qué es una sequía?', options: ['Una tormenta tropical con mucha lluvia', 'La ausencia prolongada de lluvias que causa escasez de agua', 'Un período corto de fuertes vientos', 'Un movimiento brusco de la tierra'], correct: 1, tip: 'Las sequías afectan a los cultivos y al ganado.' },
  { cat: 'centroamerica', q: '¿Qué son los deslizamientos?', options: ['Vientos giratorios muy fuertes', 'Lluvias intensas que duran muchos días', 'Desprendimientos de rocas, tierra y árboles que bajan por una pendiente', 'Movimientos del mar hacia las costas'], correct: 2, tip: 'Suelen ocurrir cuando llueve mucho en zonas montañosas.' },
  { cat: 'centroamerica', q: 'Costa Rica conviven personas de distintas nacionalidades. ¿A qué ventaja se refiere esto?', options: ['Diversidad climática del país', 'Diversidad cultural por la posición geográfica', 'Cantidad de volcanes activos', 'Tamaño pequeño del territorio'], correct: 1, tip: 'Por nuestra ubicación, somos un país de muchas culturas.' },

  // ===== ECONOMÍA, POLÍTICA Y CULTURA =====
  { cat: 'economia', q: '¿Cuál de estos productos exporta Costa Rica?', options: ['Trigo, soya y maíz a gran escala', 'Café, leche, textiles, lácteos y flores', 'Petróleo y derivados como gasolina', 'Vehículos pesados y maquinaria industrial'], correct: 1, tip: 'También exportamos zapatos, salsas, medicamentos y envases de vidrio.' },
  { cat: 'economia', q: '¿Cuál de estos productos importa Costa Rica?', options: ['Café (uno de nuestros principales productos)', 'Plásticos para envasado, derivados del petróleo (gasolina) y papel', 'Bananos en grandes cantidades', 'Piñas para exportación'], correct: 1, tip: 'También importamos frijoles, harina, jabón y caucho.' },
  { cat: 'economia', q: '¿Qué significa TLC?', options: ['Tratado de Libre Comercio', 'Tarifa Local Comercial', 'Tratado Latinoamericano de Cooperación', 'Transporte y Logística Centroamericana'], correct: 0, tip: 'Es un acuerdo entre países para ampliar el mercado de bienes y servicios.' },
  { cat: 'economia', q: '¿Qué es el SICA?', options: ['Un acuerdo militar entre los países de Centroamérica', 'El Sistema de Integración Centroamericana, establecido en 1991', 'Una organización deportiva que une a la región', 'Un programa educativo de intercambio estudiantil'], correct: 1, tip: 'Su objetivo es unir a la región para fomentar la paz y el desarrollo.' },
  { cat: 'economia', q: '¿En qué año se estableció el SICA?', options: ['1971', '1981', '1991', '2001'], correct: 2, tip: 'El SICA se creó en 1991 para unir a los países centroamericanos.' },
  { cat: 'economia', q: '¿Cómo se llama la tradición que celebra la independencia centroamericana y comienza en Guatemala?', options: ['La Carrera de la Antorcha', 'El Desfile de los Faroles', 'La Marcha por la Libertad', 'El Recorrido del Bicentenario'], correct: 0, tip: 'Simboliza el correo que llevaba la noticia de la independencia y termina en Costa Rica.' },
  { cat: 'economia', q: '¿Cuándo se celebra la independencia centroamericana?', options: ['15 de agosto', '15 de septiembre', '12 de octubre', '20 de noviembre'], correct: 1, tip: 'El 15 de septiembre se celebra en toda Centroamérica.' },
  { cat: 'economia', q: '¿Cuál es uno de los conflictos limítrofes que ha tenido Costa Rica con Nicaragua?', options: ['Por las playas de Guanacaste y derechos de pesca', 'Por el control de los volcanes fronterizos', 'Problemas de navegación por el Río San Juan', 'Por las rutas comerciales terrestres'], correct: 2, tip: 'El gobierno nicaragüense ha impedido que la policía costarricense navegue armada.' },
  { cat: 'economia', q: '¿En qué año el ejército nicaragüense ocupó la Isla Calero?', options: ['2010', '1990', '2020', '1985'], correct: 0, tip: 'Esto generó un conflicto diplomático con Costa Rica.' },
  { cat: 'economia', q: '¿Cómo se llama el tratado limítrofe entre Costa Rica y Nicaragua?', options: ['Tratado de Versalles', 'Tratado Cañas-Jerez', 'Tratado de París', 'Tratado de Tordesillas'], correct: 1, tip: 'Aunque existe el tratado, han surgido disputas sobre sus fronteras.' },
  { cat: 'economia', q: '¿Quiénes son los principales compradores de productos costarricenses dentro de Centroamérica?', options: ['Únicamente Estados Unidos y Canadá', 'Guatemala, Honduras y Panamá', 'Principalmente China y Japón', 'Brasil y Argentina como destino mayor'], correct: 1, tip: 'Mantenemos relaciones comerciales fuertes con nuestros vecinos centroamericanos.' },
  { cat: 'economia', q: '¿Qué organización organiza los Juegos Deportivos Centroamericanos?', options: ['La FIFA (organización mundial de fútbol)', 'La Organización Deportiva Centroamericana (Ordeca)', 'El Comité Olímpico Internacional', 'La UNESCO de las Naciones Unidas'], correct: 1, tip: 'Estos juegos refuerzan las relaciones culturales con nuestros vecinos.' },
];

// ===========================
// MATH QUESTIONS
// ===========================
const MATH_QUESTIONS = [
  // NÚMEROS
  { cat: 'numeros', q: '¿Cuántas cifras tienen los números menores que un millón?', options: ['4', '5', '6', '7'], correct: 2, tip: 'Tienen CM, DM, UM, C, D y U: seis cifras en total.' },
  { cat: 'numeros', q: 'En el número 148 015, ¿qué representa el 1 que está al inicio?', options: ['Una unidad', 'Una decena', 'Una centena de millar (CM)', 'Una decena de millar'], correct: 2, tip: 'La primera cifra de un número de 6 cifras es la centena de millar.' },
  { cat: 'numeros', q: '¿Cómo se escribe en números "doscientos cincuenta y seis mil ochenta y nueve"?', options: ['256 089', '200 689', '256 980', '25 689'], correct: 0, tip: 'Doscientos cincuenta y seis = 256, ochenta y nueve = 089.' },
  { cat: 'numeros', q: '¿Cómo se lee el número 198 309?', options: ['Mil novecientos ochenta y tres con nueve', 'Ciento noventa y ocho mil trescientos nueve', 'Diecinueve mil ochocientos treinta y nueve', 'Diecinueve mil ochocientos tres con nueve'], correct: 1, tip: 'Se lee de izquierda a derecha: 198 mil + 309.' },
  { cat: 'numeros', q: 'Los números pares terminan en:', options: ['1, 3, 5, 7, 9', '0, 2, 4, 6, 8', 'Solo en 0', 'Solo en 2'], correct: 1, tip: 'Los pares son los que se pueden dividir entre 2 sin que sobre nada.' },
  { cat: 'numeros', q: '¿Cuál de estos es un número impar?', options: ['58', '350', '327', '462'], correct: 2, tip: 'El 327 termina en 7, por eso es impar.' },
  { cat: 'numeros', q: '¿Cuál de estos es un número par?', options: ['79', '281', '469', '350'], correct: 3, tip: 'El 350 termina en 0, por eso es par.' },
  { cat: 'numeros', q: '¿Qué símbolo se usa para "mayor que"?', options: ['<', '>', '=', '+'], correct: 1, tip: 'Recuerda: la abertura grande siempre apunta al número mayor.' },
  { cat: 'numeros', q: '¿Cuál es la comparación correcta? 125 526 ___ 125 425', options: ['<', '>', '=', 'No se puede comparar'], correct: 1, tip: '125 526 es mayor porque 5 > 4 en las centenas.' },
  { cat: 'numeros', q: 'Si dos números son iguales, ¿qué símbolo usamos?', options: ['<', '>', '=', '+'], correct: 2, tip: 'El signo igual (=) significa que ambas cantidades son lo mismo.' },
  { cat: 'numeros', q: 'Al comparar 35 582 y 37 582, ¿cuál es correcto?', options: ['35 582 > 37 582', '35 582 < 37 582', '35 582 = 37 582', 'Son iguales'], correct: 1, tip: 'En las decenas de millar, 5 < 7, por eso 35 582 es menor.' },
  { cat: 'numeros', q: '¿Qué quiere decir CM en la caja de valores?', options: ['Centímetro', 'Centena de millar', 'Centena', 'Metro'], correct: 1, tip: 'CM = Centena de millar (la primera cifra de un número de 6 cifras).' },
  { cat: 'numeros', q: '¿Cuántos ceros tiene "diez mil"?', options: ['2', '3', '4', '5'], correct: 2, tip: '10 000 tiene cuatro ceros.' },

  // SUCESIONES Y PATRONES
  { cat: 'sucesiones', q: 'En la sucesión 10, 20, 30, 40, 50... ¿cuál es el patrón?', options: ['De 5 en 5', 'De 10 en 10', 'De 20 en 20', 'De 100 en 100'], correct: 1, tip: 'Cada número aumenta 10 unidades.' },
  { cat: 'sucesiones', q: '¿Qué número sigue en la sucesión: 22, 32, 42, 52...?', options: ['60', '62', '72', '56'], correct: 1, tip: 'El patrón es de 10 en 10, así que 52 + 10 = 62.' },
  { cat: 'sucesiones', q: 'En la sucesión 15, 25, 35, 45, 55... el patrón es:', options: ['De 5 en 5', 'De 10 en 10', 'De 15 en 15', 'De 20 en 20'], correct: 1, tip: '¡Cuidado! Aunque empiece en 15, la diferencia entre cada número es 10.' },
  { cat: 'sucesiones', q: '¿Qué número sigue: 36, 46, 56, 66, 76...?', options: ['86', '96', '80', '100'], correct: 0, tip: 'El patrón es de 10 en 10: 76 + 10 = 86.' },
  { cat: 'sucesiones', q: 'Si una sucesión empieza en 12 y aumenta de 12 en 12, ¿qué número sigue después del 24?', options: ['30', '32', '36', '48'], correct: 2, tip: '24 + 12 = 36.' },
  { cat: 'sucesiones', q: '¿Cuál es el patrón en: 16, 32, 48, 64?', options: ['De 8 en 8', 'De 10 en 10', 'De 16 en 16', 'De 20 en 20'], correct: 2, tip: 'Cada número aumenta 16: 16+16=32, 32+16=48...' },
  { cat: 'sucesiones', q: '¿Qué número falta? 25, 35, ___, 55, 65', options: ['40', '45', '50', '60'], correct: 1, tip: 'El patrón es de 10 en 10: 35 + 10 = 45.' },
  { cat: 'sucesiones', q: '¿Cómo se descubre el patrón de una sucesión?', options: ['Sumando todos los números de la sucesión', 'Mirando solo el primer número de la sucesión', 'Restando un número del siguiente para ver cuánto aumenta', 'Multiplicando el primero por el último'], correct: 2, tip: 'Por ejemplo: en 22, 32, 42... 32-22=10, 42-32=10. ¡El patrón es 10 en 10!' },

  // OPERACIONES
  { cat: 'operaciones', q: '¿Cuál es el resultado de 88 ÷ 8?', options: ['9', '10', '11', '12'], correct: 2, tip: '8 × 11 = 88, entonces 88 ÷ 8 = 11.' },
  { cat: 'operaciones', q: 'En la división 64 ÷ 2, ¿cuál es el cociente?', options: ['30', '32', '34', '16'], correct: 1, tip: 'La mitad de 64 es 32.' },
  { cat: 'operaciones', q: '¿Cuáles son los primeros múltiplos de 3?', options: ['0, 3, 6, 9, 12', '1, 2, 3, 4, 5', '3, 6, 9, 30, 60', '2, 4, 6, 8, 10'], correct: 0, tip: 'Multiplicamos 3 por 0, 1, 2, 3, 4...' },
  { cat: 'operaciones', q: '¿Cuál es el primer múltiplo de cualquier número?', options: ['1', '0', 'El mismo número', '10'], correct: 1, tip: 'Cualquier número multiplicado por 0 es 0.' },
  { cat: 'operaciones', q: '¿Cómo se llama el número que se divide?', options: ['Cociente', 'Divisor', 'Dividendo', 'Residuo'], correct: 2, tip: 'El dividendo es el que se reparte.' },
  { cat: 'operaciones', q: '¿Cómo se llama el resultado de una división?', options: ['Suma', 'Resta', 'Cociente', 'Producto'], correct: 2, tip: 'El cociente es la respuesta de la división.' },
  { cat: 'operaciones', q: 'Una división es exacta cuando el residuo es:', options: ['0', '1', 'Mayor que el divisor', 'El mismo que el dividendo'], correct: 0, tip: 'Si no sobra nada, la división es exacta.' },
  { cat: 'operaciones', q: '¿Cuánto da 92 ÷ 4?', options: ['21', '22', '23', '24'], correct: 2, tip: '4 × 23 = 92.' },
  { cat: 'operaciones', q: '¿Qué operación es la inversa de la división?', options: ['La suma', 'La resta', 'La multiplicación', 'Ninguna'], correct: 2, tip: 'La división y la multiplicación son operaciones inversas.' },
  { cat: 'operaciones', q: '¿Cuál es un múltiplo de 5?', options: ['12', '17', '20', '23'], correct: 2, tip: '5 × 4 = 20, así que 20 es múltiplo de 5.' },
  { cat: 'operaciones', q: 'Si 452 ÷ 4 = 113, ¿cuánto es 113 × 4?', options: ['400', '450', '452', '460'], correct: 2, tip: 'La multiplicación comprueba la división: 113 × 4 + 0 = 452.' },
  { cat: 'operaciones', q: '¿Cuántos son los múltiplos de un número?', options: ['Solo 5', 'Solo 10', 'Infinitos', 'Solo 100'], correct: 2, tip: 'Podemos seguir multiplicando para siempre, los múltiplos son infinitos.' },

  // GEOMETRÍA
  { cat: 'geometria', q: 'Un ángulo agudo es el que mide:', options: ['Menos de 90°', 'Exactamente 90°', 'Más de 90°', '180°'], correct: 0, tip: 'Los ángulos agudos son los más "cerraditos".' },
  { cat: 'geometria', q: 'Un ángulo obtuso es el que mide:', options: ['Menos de 90°', 'Exactamente 90°', 'Más de 90°', 'Menos de 45°'], correct: 2, tip: 'Los ángulos obtusos son más abiertos que un ángulo recto.' },
  { cat: 'geometria', q: '¿Cuántos lados tiene un triángulo?', options: ['2', '3', '4', '5'], correct: 1, tip: 'La palabra "triángulo" lleva "tri" que significa 3.' },
  { cat: 'geometria', q: '¿Cómo se llama la parte de abajo del triángulo?', options: ['Vértice', 'Lado', 'Base', 'Altura'], correct: 2, tip: 'La base es donde el triángulo "se apoya".' },
  { cat: 'geometria', q: '¿Cómo se llama el punto donde se unen dos lados de un triángulo?', options: ['Base', 'Vértice', 'Altura', 'Ángulo'], correct: 1, tip: 'Un triángulo tiene tres vértices.' },
  { cat: 'geometria', q: 'Un triángulo equilátero tiene:', options: ['Todos sus lados de diferente medida', 'Sus tres lados de la misma medida', 'Solo dos lados iguales', 'Solo un lado largo'], correct: 1, tip: '"Equi" significa igual: tres lados iguales.' },
  { cat: 'geometria', q: 'Un triángulo isósceles tiene:', options: ['Sus tres lados iguales', 'Sus tres lados diferentes', 'Solo dos lados de la misma medida y uno diferente', 'Cuatro lados'], correct: 2, tip: 'Por ejemplo: 3 cm, 3 cm y 4 cm.' },
  { cat: 'geometria', q: 'Un triángulo escaleno tiene:', options: ['Sus tres lados iguales', 'Sus tres lados de diferente medida', 'Solo dos lados iguales', 'Lados curvos'], correct: 1, tip: 'Por ejemplo: 4 cm, 5 cm y 6 cm.' },
  { cat: 'geometria', q: 'Un triángulo rectángulo tiene un ángulo que mide:', options: ['60°', '90°', '120°', '180°'], correct: 1, tip: '"Recto" significa de 90°.' },
  { cat: 'geometria', q: 'Un triángulo acutángulo tiene:', options: ['Un ángulo de 90°', 'Sus tres ángulos menores de 90°', 'Un ángulo mayor de 90°', 'Lados curvos'], correct: 1, tip: 'Todos sus ángulos son agudos (acutángulo viene de "agudo").' },
  { cat: 'geometria', q: 'Un triángulo obtusángulo tiene:', options: ['Tres ángulos menores de 90°', 'Un ángulo mayor de 90°', 'Tres ángulos de 90°', 'Un ángulo de 90°'], correct: 1, tip: 'Tiene un ángulo obtuso (mayor que 90°).' },
  { cat: 'geometria', q: '¿Verdadero o falso? Un triángulo rectángulo solo tiene un ángulo de 90°', options: ['Verdadero', 'Falso', 'A veces', 'Nunca'], correct: 0, tip: 'Solo uno de sus ángulos es recto, los otros dos son agudos.' },
  { cat: 'geometria', q: '¿Cómo se clasifica un triángulo con ángulos de 60°, 60° y 60°?', options: ['Rectángulo', 'Acutángulo', 'Obtusángulo', 'Recto'], correct: 1, tip: 'Todos sus ángulos son menores de 90°, así que es acutángulo.' },
  { cat: 'geometria', q: 'Si un triángulo tiene un ángulo de 120°, ¿cómo se clasifica?', options: ['Acutángulo', 'Rectángulo', 'Obtusángulo', 'Equilátero'], correct: 2, tip: '120° es mayor de 90°, así que es obtusángulo.' },

  // MEDIDAS DE LONGITUD
  { cat: 'longitud', q: '¿Cuál es la unidad principal de medida de longitud?', options: ['El kilómetro', 'El metro', 'El centímetro', 'El decímetro'], correct: 1, tip: 'Todas las demás unidades son múltiplos o submúltiplos del metro.' },
  { cat: 'longitud', q: '¿Cuál es la unidad de medida de longitud más grande?', options: ['Centímetro', 'Metro', 'Kilómetro', 'Milímetro'], correct: 2, tip: 'El kilómetro (km) tiene 1000 metros.' },
  { cat: 'longitud', q: '¿Cuál es la unidad de medida de longitud más pequeña?', options: ['Centímetro', 'Milímetro', 'Decímetro', 'Metro'], correct: 1, tip: 'El milímetro (mm) es la más pequeña.' },
  { cat: 'longitud', q: '¿Cuántos centímetros tiene un metro?', options: ['10', '100', '1000', '10 000'], correct: 1, tip: '1 m = 100 cm.' },
  { cat: 'longitud', q: '¿Cuántos milímetros tiene un centímetro?', options: ['5', '10', '100', '1000'], correct: 1, tip: '1 cm = 10 mm.' },
  { cat: 'longitud', q: '¿Cuántos metros tiene un kilómetro?', options: ['100', '1000', '10 000', '100 000'], correct: 1, tip: '1 km = 1000 m.' },
  { cat: 'longitud', q: '5 m = ___ cm', options: ['50', '500', '5000', '5'], correct: 1, tip: 'Multiplica por 100: 5 × 100 = 500 cm.' },
  { cat: 'longitud', q: '7 cm = ___ mm', options: ['7', '70', '700', '0,7'], correct: 1, tip: 'Multiplica por 10: 7 × 10 = 70 mm.' },
  { cat: 'longitud', q: '2 m = ___ dm', options: ['2', '20', '200', '2000'], correct: 1, tip: '1 m = 10 dm, así que 2 m = 20 dm.' },
  { cat: 'longitud', q: '8 dm = ___ mm', options: ['80', '800', '8000', '8'], correct: 1, tip: '1 dm = 100 mm, así que 8 dm = 800 mm.' },
  { cat: 'longitud', q: '¿Qué unidad usarías para medir el largo de una carretera?', options: ['Milímetros', 'Centímetros', 'Kilómetros', 'Decímetros'], correct: 2, tip: 'Las distancias largas se miden en kilómetros.' },
  { cat: 'longitud', q: '¿Qué unidad usarías para medir el largo de un lápiz?', options: ['Kilómetros', 'Metros', 'Centímetros', 'Hectómetros'], correct: 2, tip: 'Las cosas pequeñas se miden en centímetros.' },
  { cat: 'longitud', q: 'Ordena de mayor a menor: km, cm, m, mm', options: ['km, m, cm, mm', 'mm, cm, m, km', 'cm, mm, m, km', 'm, km, cm, mm'], correct: 0, tip: 'El kilómetro es el más grande y el milímetro el más pequeño.' },

  // ÁREAS Y SUPERFICIE
  { cat: 'areas', q: '¿Cuál es la unidad principal para medir áreas?', options: ['El metro (m)', 'El metro cuadrado (m²)', 'El metro cúbico (m³)', 'El kilómetro (km)'], correct: 1, tip: 'El metro cuadrado se usa para medir superficies, como el piso de un cuarto.' },
  { cat: 'areas', q: '¿Para qué sirve el metro cuadrado?', options: ['Para medir distancias largas', 'Para medir el área de superficies', 'Para medir el peso', 'Para medir el tiempo'], correct: 1, tip: 'Lo usamos para saber cuánto espacio ocupa una superficie.' },
  { cat: 'areas', q: '¿Cuál es el símbolo del metro cuadrado?', options: ['m', 'm²', 'm³', 'cm'], correct: 1, tip: 'El "²" arriba indica que es cuadrado (al cuadrado).' },
  { cat: 'areas', q: '¿Cuáles son los múltiplos del metro cuadrado?', options: ['cm², dm², mm²', 'dam², hm², km²', 'g, kg, mg', 'ml, l, kl'], correct: 1, tip: 'Los múltiplos son MÁS GRANDES que el m²: dam², hm², km².' },
  { cat: 'areas', q: '¿Cuáles son los submúltiplos del metro cuadrado?', options: ['dam², hm², km²', 'dm², cm², mm²', 'm, dm, cm', 'l, ml, kl'], correct: 1, tip: 'Los submúltiplos son MÁS PEQUEÑOS que el m²: dm², cm², mm².' },
  { cat: 'areas', q: '¿Qué unidad usarías para medir el área del piso de tu cuarto?', options: ['Centímetros cuadrados (cm²)', 'Metros cuadrados (m²)', 'Kilómetros cuadrados (km²)', 'Milímetros cuadrados (mm²)'], correct: 1, tip: 'Para áreas como cuartos, casas o canchas usamos m².' },
  { cat: 'areas', q: '¿Qué unidad usarías para medir el área de un país?', options: ['Centímetros cuadrados (cm²)', 'Metros cuadrados (m²)', 'Kilómetros cuadrados (km²)', 'Milímetros cuadrados (mm²)'], correct: 2, tip: 'Costa Rica tiene 51 100 km² de superficie.' },
  { cat: 'areas', q: '¿Qué unidad usarías para medir el área de una uña?', options: ['Milímetros cuadrados (mm²) o centímetros cuadrados (cm²)', 'Metros cuadrados (m²)', 'Kilómetros cuadrados (km²)', 'Decámetros cuadrados (dam²)'], correct: 0, tip: 'Para áreas muy pequeñas usamos mm² o cm².' },
  { cat: 'areas', q: '¿Cuál es la unidad de área MÁS GRANDE?', options: ['m²', 'km²', 'cm²', 'dm²'], correct: 1, tip: 'El kilómetro cuadrado (km²) es el más grande de los múltiplos comunes.' },
  { cat: 'areas', q: '¿Cuál es la unidad de área MÁS PEQUEÑA?', options: ['m²', 'cm²', 'mm²', 'km²'], correct: 2, tip: 'El milímetro cuadrado (mm²) es el más pequeño.' },
  { cat: 'areas', q: 'Costa Rica tiene 51 100 km². ¿En qué unidad se mide la superficie de un país?', options: ['Centímetros cuadrados', 'Metros cuadrados', 'Kilómetros cuadrados', 'Milímetros cuadrados'], correct: 2, tip: 'Para áreas tan grandes como un país, usamos km².' },
  { cat: 'areas', q: '¿Qué diferencia hay entre el metro (m) y el metro cuadrado (m²)?', options: ['Son lo mismo', 'El metro mide longitud, el m² mide área (superficie)', 'El m² es más pequeño que el m', 'El metro mide peso'], correct: 1, tip: 'Con el metro medimos lo largo, con el m² lo ancho × largo (área).' },

  // DINERO Y MONEDAS
  { cat: 'dinero', q: '¿Cuál es la unidad monetaria de Costa Rica?', options: ['El dólar', 'El euro', 'El colón', 'El peso'], correct: 2, tip: 'El colón se llama así en honor a Cristóbal Colón.' },
  { cat: 'dinero', q: '¿Cuál es el símbolo del colón costarricense?', options: ['$', '€', '₡', '£'], correct: 2, tip: 'El símbolo ₡ es una "C" con dos rayitas verticales.' },
  { cat: 'dinero', q: '¿Cuántas monedas de ₡100 necesitas para tener ₡500?', options: ['3', '4', '5', '10'], correct: 2, tip: '5 × ₡100 = ₡500.' },
  { cat: 'dinero', q: '¿Cuántos billetes de ₡1000 necesitas para tener ₡5000?', options: ['3', '5', '10', '50'], correct: 1, tip: '5 × ₡1000 = ₡5000.' },
  { cat: 'dinero', q: '¿Cuántas monedas de ₡50 hacen ₡100?', options: ['1', '2', '5', '10'], correct: 1, tip: '2 × ₡50 = ₡100.' },
  { cat: 'dinero', q: 'Si tienes 2 billetes de ₡5000 y 1 de ₡1000, ¿cuánto dinero tienes?', options: ['₡6 000', '₡10 000', '₡11 000', '₡15 000'], correct: 2, tip: '₡5000 + ₡5000 + ₡1000 = ₡11 000.' },
  { cat: 'dinero', q: '¿Cuál es el billete de mayor valor en Costa Rica?', options: ['₡10 000', '₡20 000', '₡50 000', '₡100 000'], correct: 2, tip: 'El billete de ₡50 000 es el más alto.' },
  { cat: 'dinero', q: 'Si una golosina cuesta ₡500 y pagas con ₡1000, ¿cuánto te dan de cambio?', options: ['₡100', '₡200', '₡500', '₡1500'], correct: 2, tip: '₡1000 - ₡500 = ₡500 de vuelto.' },
  { cat: 'dinero', q: 'Compras un libro de ₡3500 y pagas con ₡5000. ¿Cuánto te dan de vuelto?', options: ['₡500', '₡1500', '₡2000', '₡3500'], correct: 1, tip: '₡5000 - ₡3500 = ₡1500.' },
  { cat: 'dinero', q: '¿Cuántas monedas de ₡25 necesitas para tener ₡100?', options: ['2', '3', '4', '5'], correct: 2, tip: '4 × ₡25 = ₡100.' },
  { cat: 'dinero', q: '¿Cuántos billetes de ₡2000 hacen ₡10 000?', options: ['2', '5', '10', '20'], correct: 1, tip: '5 × ₡2000 = ₡10 000.' },
  { cat: 'dinero', q: 'María tiene 3 billetes de ₡2000 y 2 de ₡1000. ¿Cuánto tiene en total?', options: ['₡5 000', '₡7 000', '₡8 000', '₡10 000'], correct: 2, tip: '(3 × ₡2000) + (2 × ₡1000) = ₡6000 + ₡2000 = ₡8 000.' },

  // DATOS Y GRÁFICOS
  { cat: 'graficos', q: 'En un gráfico de barras, ¿cómo se muestra la cantidad?', options: ['Con la altura de las barras', 'Con el color de las barras', 'Con el ancho del papel', 'Con el orden alfabético'], correct: 0, tip: 'Mientras más alta la barra, más cantidad representa.' },
  { cat: 'graficos', q: 'Si en un gráfico la fruta favorita es el banano con 60 niños, ¿qué fruta es la más popular?', options: ['Manzana', 'Banano', 'Fresa', 'Naranja'], correct: 1, tip: 'La fruta favorita es la que tiene la barra más alta.' },
  { cat: 'graficos', q: 'En un gráfico de barras, la fruta menos preferida es la que tiene...', options: ['La barra más alta', 'La barra más baja', 'El color más oscuro', 'El nombre más largo'], correct: 1, tip: 'La barra más bajita representa la menor cantidad.' },
  { cat: 'graficos', q: '¿Para qué sirve un gráfico de barras?', options: ['Para hacer cálculos matemáticos complejos', 'Para comparar cantidades de forma visual', 'Para escribir información en orden alfabético', 'Para guardar datos secretos'], correct: 1, tip: 'Los gráficos hacen que sea más fácil comparar cantidades.' },
  { cat: 'graficos', q: '¿Cómo podemos resumir información de manera visual?', options: ['Con dibujos, diagramas, cuadros y gráficos', 'Solo escribiendo párrafos largos', 'Únicamente con listas de números', 'Con grabaciones de audio'], correct: 0, tip: 'Hay muchas formas de representar datos visualmente.' },
];

// ===========================
// CATEGORIES
// ===========================
const SOCIAL_CATEGORIES = [
  { id: 'all', name: 'Todos los temas', icon: Sparkles, color: '#f59e0b', desc: 'Practica todo lo que necesitas saber' },
  { id: 'civica', name: 'Estudios Sociales y Cívica', icon: BookOpen, color: '#16a34a', desc: 'Definiciones y disciplinas' },
  { id: 'geografia', name: 'Geografía de Costa Rica', icon: MapPin, color: '#0ea5e9', desc: 'Mapas, provincias, clima y límites' },
  { id: 'centroamerica', name: 'Centroamérica y vecinos', icon: Globe2, color: '#dc2626', desc: 'Países, ventajas y desastres' },
  { id: 'economia', name: 'Economía, política y cultura', icon: Briefcase, color: '#7c3aed', desc: 'Comercio, SICA, tradiciones y conflictos' },
];

const MATH_CATEGORIES = [
  { id: 'all', name: 'Todos los temas', icon: Sparkles, color: '#f59e0b', desc: 'Practica todo de matemáticas' },
  { id: 'numeros', name: 'Números', icon: Calculator, color: '#7c3aed', desc: 'Cifras, par/impar, comparar' },
  { id: 'sucesiones', name: 'Sucesiones y patrones', icon: TrendingUp, color: '#0ea5e9', desc: 'Series numéricas y patrones' },
  { id: 'operaciones', name: 'División y múltiplos', icon: Divide, color: '#16a34a', desc: 'Divisiones y múltiplos' },
  { id: 'geometria', name: 'Geometría', icon: Triangle, color: '#dc2626', desc: 'Triángulos y ángulos' },
  { id: 'longitud', name: 'Medidas de longitud', icon: Ruler, color: '#f59e0b', desc: 'km, m, cm, mm y conversiones' },
  { id: 'areas', name: 'Áreas y superficie', icon: Square, color: '#0891b2', desc: 'Metro cuadrado y unidades de área' },
  { id: 'dinero', name: 'Dinero y monedas', icon: Coins, color: '#ca8a04', desc: 'Colones, monedas y billetes' },
  { id: 'graficos', name: 'Datos y gráficos', icon: BarChart3, color: '#ec4899', desc: 'Gráficos de barras' },
];

// ===========================
// SUBJECTS
// ===========================
const SUBJECTS = [
  {
    id: 'social',
    name: 'Estudios Sociales',
    emoji: '🌎',
    desc: 'Costa Rica, geografía, cívica, vecinos',
    color: '#16a34a',
    accentColor: '#0ea5e9',
    questions: SOCIAL_QUESTIONS,
    categories: SOCIAL_CATEGORIES,
  },
  {
    id: 'math',
    name: 'Matemáticas',
    emoji: '🧮',
    desc: 'Números, geometría, medidas, operaciones',
    color: '#7c3aed',
    accentColor: '#ec4899',
    questions: MATH_QUESTIONS,
    categories: MATH_CATEGORIES,
  },
];

// ===========================
// HELPERS
// ===========================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===========================
// MAIN COMPONENT
// ===========================
export default function StudyApp() {
  const [screen, setScreen] = useState('subjects');
  const [subjectId, setSubjectId] = useState(null);
  const [category, setCategory] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [wrongList, setWrongList] = useState([]);

  const currentSubject = SUBJECTS.find((s) => s.id === subjectId);

  const fontStyles = (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap');
      .font-display { font-family: 'Fredoka', sans-serif; }
      .font-body { font-family: 'Nunito', sans-serif; }
      @keyframes pop { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.05); } 100% { transform: scale(1); opacity: 1; } }
      @keyframes bounce-in { 0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
      @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
      @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      .anim-pop { animation: pop 0.4s ease-out; }
      .anim-bounce-in { animation: bounce-in 0.5s ease-out; }
      .anim-shake { animation: shake 0.4s ease-in-out; }
      .anim-float { animation: float 3s ease-in-out infinite; }
      .pattern-bg {
        background-color: #fef9e7;
        background-image:
          radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
      }
      .pattern-bg-math {
        background-color: #faf5ff;
        background-image:
          radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
      }
    `}</style>
  );

  const goToSubjects = () => {
    setScreen('subjects');
    setSubjectId(null);
    setIdx(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setWrongList([]);
  };

  const pickSubject = (id) => {
    setSubjectId(id);
    setScreen('topics');
  };

  const startQuiz = (catId) => {
    const allQs = currentSubject.questions;
    const filtered = catId === 'all' ? allQs : allQs.filter((q) => q.cat === catId);
    const shuffled = shuffle(filtered).map((q) => {
      const indexed = q.options.map((opt, i) => ({ opt, original: i }));
      const shuffledOpts = shuffle(indexed);
      const newCorrect = shuffledOpts.findIndex((o) => o.original === q.correct);
      return { ...q, options: shuffledOpts.map((o) => o.opt), correct: newCorrect };
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

  const goToTopics = () => {
    setScreen('topics');
    setIdx(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setWrongList([]);
  };

  // ====== SUBJECTS SCREEN ======
  if (screen === 'subjects') {
    return (
      <div className="min-h-screen pattern-bg font-body p-4 sm:p-8 flex items-center justify-center">
        {fontStyles}
        <div className="max-w-3xl w-full">
          <div className="text-center anim-bounce-in mb-8">
            <div className="text-7xl sm:text-8xl mb-4 anim-float inline-block">📚</div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold mb-3" style={{ color: '#15803d' }}>
              ¡Hola, Elián!
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold max-w-xl mx-auto">
              Elige la materia que quieres practicar hoy
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                onClick={() => pickSubject(s.id)}
                className="group bg-white rounded-3xl p-6 sm:p-8 border-4 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03] text-left anim-pop"
                style={{ borderColor: s.color + '40' }}
              >
                <div className="text-6xl sm:text-7xl mb-4 anim-float inline-block">{s.emoji}</div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2" style={{ color: s.color }}>
                  {s.name}
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{s.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: s.color }}>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{s.questions.length} preguntas</span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Empezar <ArrowRight size={16} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            💡 Puedes cambiar de materia en cualquier momento
          </p>
        </div>
      </div>
    );
  }

  // ====== TOPICS SCREEN ======
  if (screen === 'topics') {
    const bgClass = subjectId === 'math' ? 'pattern-bg-math' : 'pattern-bg';
    return (
      <div className={`min-h-screen ${bgClass} font-body p-4 sm:p-8 flex items-center justify-center`}>
        {fontStyles}
        <div className="max-w-2xl w-full">
          <button
            onClick={goToSubjects}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold text-sm bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all mb-4"
          >
            <ArrowLeft size={16} /> Cambiar materia
          </button>

          <div className="text-center anim-bounce-in mb-6">
            <div className="text-6xl mb-2 inline-block">{currentSubject.emoji}</div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: currentSubject.color }}>
              {currentSubject.name}
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-4 anim-pop" style={{ borderColor: currentSubject.color + '30' }}>
            <h2 className="font-display text-2xl font-semibold mb-4 text-center" style={{ color: '#0c4a6e' }}>
              Elige un tema 📚
            </h2>
            <div className="grid gap-3">
              {currentSubject.categories.map((c) => {
                const Icon = c.icon;
                const count = c.id === 'all'
                  ? currentSubject.questions.length
                  : currentSubject.questions.filter((q) => q.cat === c.id).length;
                return (
                  <button
                    key={c.id}
                    onClick={() => startQuiz(c.id)}
                    className="group flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-lg hover:scale-[1.02] text-left bg-white"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: c.color + '20' }}>
                      <Icon size={24} style={{ color: c.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-semibold text-lg" style={{ color: c.color }}>
                        {c.name}
                      </div>
                      <div className="text-sm text-gray-600">{c.desc}</div>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{count}</span>
                      <ArrowRight size={20} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            💡 Lee bien cada pregunta antes de responder
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
    const bgClass = subjectId === 'math' ? 'pattern-bg-math' : 'pattern-bg';
    const borderColor = subjectId === 'math' ? '#e9d5ff' : '#bae6fd';

    return (
      <div className={`min-h-screen ${bgClass} font-body p-4 sm:p-6`}>
        {fontStyles}
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 gap-2">
            <button
              onClick={goToTopics}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-semibold text-xs sm:text-sm bg-white px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Home size={14} /> Temas
            </button>
            <div className="bg-white px-3 py-2 rounded-full shadow-sm font-display font-semibold text-xs sm:text-sm">
              <span style={{ color: currentSubject.color }}>{idx + 1}</span> / {questions.length}
            </div>
            <div className="bg-white px-3 py-2 rounded-full shadow-sm font-display font-semibold text-xs sm:text-sm">
              ⭐ {score}
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-white rounded-full h-3 mb-6 overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${currentSubject.color} 0%, ${currentSubject.accentColor} 100%)` }}
            />
          </div>

          {/* Question card */}
          <div key={idx} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-4 anim-bounce-in" style={{ borderColor }}>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: currentSubject.accentColor }}>
                {currentSubject.categories.find((c) => c.id === current.cat)?.name}
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold leading-snug" style={{ color: '#0c4a6e' }}>
                {current.q}
              </h2>
            </div>

            <div className="grid gap-3">
              {current.options.map((opt, i) => {
                let bgColor = 'bg-white';
                let bColor = 'border-gray-200';
                let textColor = 'text-gray-800';
                let icon = null;
                let extraClass = 'hover:border-blue-400 hover:shadow-md hover:scale-[1.01]';

                if (showFeedback) {
                  extraClass = '';
                  if (i === current.correct) {
                    bgColor = 'bg-green-50';
                    bColor = 'border-green-500';
                    textColor = 'text-green-900';
                    icon = <CheckCircle2 className="text-green-600" size={22} />;
                  } else if (i === selected) {
                    bgColor = 'bg-red-50';
                    bColor = 'border-red-400';
                    textColor = 'text-red-900';
                    icon = <XCircle className="text-red-500" size={22} />;
                    extraClass = 'anim-shake';
                  } else {
                    bgColor = 'bg-gray-50';
                    bColor = 'border-gray-200';
                    textColor = 'text-gray-500';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={showFeedback}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left font-semibold ${bgColor} ${bColor} ${textColor} ${extraClass} ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-base ${
                        showFeedback && i === current.correct
                          ? 'bg-green-500 text-white'
                          : showFeedback && i === selected
                          ? 'bg-red-400 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
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
                <div className={`rounded-2xl p-4 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-amber-50 border-2 border-amber-200'}`}>
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
                  style={{ background: `linear-gradient(135deg, ${currentSubject.color} 0%, ${currentSubject.accentColor} 100%)` }}
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
    if (pct >= 90) { level = '¡Excelente!'; emoji = '🏆'; msg = '¡Eres un experto! Estás súper preparado.'; color = '#f59e0b'; }
    else if (pct >= 70) { level = '¡Muy bien!'; emoji = '🌟'; msg = '¡Buen trabajo! Solo repasa un poquito y estarás listo.'; color = '#16a34a'; }
    else if (pct >= 50) { level = '¡Vas por buen camino!'; emoji = '📚'; msg = 'Sigue estudiando. Repasa los temas y vuelve a intentarlo.'; color = '#0ea5e9'; }
    else { level = '¡A practicar!'; emoji = '💪'; msg = 'No te preocupes, con práctica vas a lograrlo. ¡Inténtalo de nuevo!'; color = '#dc2626'; }

    const bgClass = subjectId === 'math' ? 'pattern-bg-math' : 'pattern-bg';

    return (
      <div className={`min-h-screen ${bgClass} font-body p-4 sm:p-8 flex items-center justify-center`}>
        {fontStyles}
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border-4 anim-bounce-in text-center" style={{ borderColor: color + '40' }}>
            <div className="text-7xl sm:text-8xl mb-4 anim-float inline-block">{emoji}</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3" style={{ color }}>{level}</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto">{msg}</p>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 mb-6 border-2 border-yellow-200">
              <div className="font-display text-6xl sm:text-7xl font-bold mb-2" style={{ color }}>{score}/{total}</div>
              <div className="text-xl font-bold text-gray-700">{pct}% de respuestas correctas</div>
              <div className="flex justify-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Trophy key={star} size={28} fill={pct >= star * 20 ? '#f59e0b' : 'none'} style={{ color: pct >= star * 20 ? '#f59e0b' : '#d1d5db' }} />
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
                      <div className="text-green-700">✓ <span className="font-semibold">Correcto:</span> {w.options[w.correct]}</div>
                      <div className="text-gray-600 italic">💡 {w.tip}</div>
                    </li>
                  ))}
                  {wrongList.length > 5 && (
                    <li className="text-sm text-gray-500 italic">Y {wrongList.length - 5} pregunta{wrongList.length - 5 > 1 ? 's' : ''} más para repasar...</li>
                  )}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => startQuiz(category)}
                className="flex-1 py-4 rounded-2xl font-display font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${currentSubject.color} 0%, ${currentSubject.accentColor} 100%)` }}
              >
                <RotateCcw size={20} /> Otra vez
              </button>
              <button
                onClick={goToTopics}
                className="flex-1 py-4 rounded-2xl font-display font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Home size={20} /> Cambiar tema
              </button>
            </div>
            <button
              onClick={goToSubjects}
              className="w-full mt-3 py-3 rounded-2xl font-display font-semibold text-sm text-gray-500 hover:text-gray-700 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} /> Cambiar materia
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">¡Sigue practicando, lo vas a lograr! 💚</p>
        </div>
      </div>
    );
  }

  return null;
}