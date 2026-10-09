/* =========================================================
   1. CONTENIDO
   const declara una variable que no reasignaremos.
   Un objeto agrupa datos con nombres; un array [] es una lista.
   Agregá nuevas unidades siguiendo la misma estructura.
   ========================================================= */
const cursos = {
    en: {
        nombre: 'inglés',
        consejos: [
            { frase: 'That works for me.', significado: 'Me viene bien.', registro: 'Neutro', uso: 'Para aceptar un horario o una propuesta; sirve también en el trabajo.', ejemplo: '— How about meeting at six?\n— That works for me!' },
            { frase: 'Just a heads-up…', significado: 'Solo para avisarte…', registro: 'Informal / laboral', uso: 'Introduce un aviso anticipado. En un mensaje muy formal, preferí “Please note that…”.', ejemplo: 'Just a heads-up: the restaurant closes at nine.' },
            { frase: 'I’m on my way.', significado: 'Estoy en camino.', registro: 'Neutro', uso: 'Indica que ya estás yendo al lugar, no que recién estás por salir.', ejemplo: '— Are you coming?\n— Yes, I’m on my way.' },
            { frase: 'I’m down.', significado: 'Me sumo / tengo ganas.', registro: 'Informal', uso: 'Para aceptar un plan entre amigos. Sin contexto, “down” también puede significar triste.', ejemplo: '— Want to grab a coffee?\n— I’m down!' }
        ],
        unidades: [
            {
                id: 'en-past', titulo: 'Lo que había pasado antes', tema: 'Past perfect', descripcion: 'Ordená dos momentos del pasado y expresá qué ocurrió primero.',
                teoria: [
                    'El past perfect se forma con had + participio: “The driver had left”. Sitúa una acción antes de otro momento pasado.',
                    '“When I called, the driver had left”: cuando llamé, ya se había ido. “When I called, the driver left”: el contexto suele sugerir que se fue en ese momento.',
                    'Con before y after, el orden ya puede estar claro y el past simple suele ser suficiente. El past perfect destaca la anterioridad; no es obligatorio en toda narración.',
                    'En preguntas: “Had they finished?”. En negativas: “They hadn’t finished”.'
                ], ejemplo: 'By the time we arrived, the restaurant had closed.',
                preguntas: [
                    { texto: 'By the time I called, the driver ___ the order.', opciones: ['had collected', 'has collected', 'collects'], correcta: 0, explicacion: 'La recogida ocurrió antes de la llamada: had + collected.' },
                    { texto: '¿Qué frase deja claro que el restaurante cerró antes de nuestra llegada?', opciones: ['When we arrived, the restaurant closed.', 'When we arrived, the restaurant had closed.', 'When we arrive, the restaurant closes.'], correcta: 1, explicacion: 'Had closed sitúa el cierre antes de arrived.' },
                    { texto: 'Completá la pregunta: “___ they finished before you arrived?”', opciones: ['Did', 'Have', 'Had'], correcta: 2, explicacion: 'La pregunta de past perfect comienza con Had; finished es el participio.' },
                    { texto: 'Elegí la negativa correcta.', opciones: ['She hadn’t saw the message.', 'She hadn’t seen the message.', 'She didn’t had seen the message.'], correcta: 1, explicacion: 'Después de had usamos el participio seen, no el pasado simple saw.' }
                ]
            },
            {
                id: 'en-conditional', titulo: 'Si hubiera sido distinto…', tema: 'Condicionales mixtos', descripcion: 'Conectá decisiones del pasado con consecuencias en el presente.',
                teoria: [
                    'El tercer condicional imagina otro pasado: if + past perfect, would have + participio. “If I had left earlier, I would have arrived on time”.',
                    'Un condicional mixto puede conectar una condición pasada con un resultado presente: “If I had slept well, I wouldn’t be tired now”.',
                    'Para situaciones hipotéticas presentes usamos if + past simple y would + infinitivo: “If I knew the answer, I would tell you”.',
                    'En estas estructuras estándar, no ponemos would en la cláusula con if. Would puede aparecer allí en otros usos, como voluntad o cortesía.'
                ], ejemplo: 'If I had kept practising, I would feel more confident now.',
                preguntas: [
                    { texto: 'If I had slept better, I ___ tired now.', opciones: ['wouldn’t have been', 'won’t be', 'wouldn’t be'], correcta: 2, explicacion: 'Now indica un resultado presente de una condición pasada: wouldn’t be.' },
                    { texto: 'If we ___ earlier, we would have caught the train.', opciones: ['had left', 'would leave', 'have left'], correcta: 0, explicacion: 'La condición irreal pasada usa had left.' },
                    { texto: 'If I knew her number, I ___ her.', opciones: ['had called', 'would call', 'would have call'], correcta: 1, explicacion: 'Es una situación hipotética presente: would + call.' },
                    { texto: 'Elegí la frase estándar para una oportunidad perdida ayer.', opciones: ['If I would have known, I told you.', 'If I know, I would have told you.', 'If I had known, I would have told you.'], correcta: 2, explicacion: 'Tercer condicional: had known + would have told.' }
                ]
            },
            {
                id: 'en-work', titulo: 'Natural, claro y profesional', tema: 'Inglés para conversaciones', descripcion: 'Elegí frases que encajan en llamadas, avisos y mensajes de trabajo.',
                teoria: [
                    'El registro cambia según la relación. “Could you…?” suele sonar más cortés que una orden directa; “Please” no convierte cualquier frase en la mejor opción.',
                    '“On my way to…” indica que estás en camino. Para una tercera persona: “He’s on his way to the restaurant”.',
                    '“Send it over” significa enviar algo y es habitual en conversaciones laborales. “Could you send it over by email so we have a written record?” pide dejar constancia.',
                    '“A heads-up” es un aviso anticipado; “That works for me” acepta una propuesta. Las expresiones informales funcionan mejor cuando el contexto lo permite.'
                ], ejemplo: 'Could you send it over by email so we have a written record?',
                preguntas: [
                    { texto: 'El repartidor ya está yendo al restaurante. ¿Qué decís?', opciones: ['He’s on his way to the restaurant.', 'He’s in his way at the restaurant.', 'He has on the way restaurant.'], correcta: 0, explicacion: 'La expresión es on his way to + destino.' },
                    { texto: 'Querés pedir amablemente una confirmación por escrito.', opciones: ['Send email now.', 'Could you confirm that by email?', 'You must to email it.'], correcta: 1, explicacion: 'Could you + infinitivo es una forma cortés de pedir algo.' },
                    { texto: 'Te proponen un horario que te viene bien.', opciones: ['I work for that.', 'It works me.', 'That works for me.'], correcta: 2, explicacion: 'That works for me significa que la propuesta te resulta conveniente.' },
                    { texto: '“Just a heads-up: the pickup time has changed.” ¿Qué estás haciendo?', opciones: ['Pidiendo que alguien levante la cabeza.', 'Dando un aviso anticipado.', 'Confirmando que todo terminó.'], correcta: 1, explicacion: 'Heads-up es un aviso para que la otra persona esté al tanto.' }
                ]
            }
        ]
    },
    de: {
        nombre: 'alemán',
        consejos: [
            { frase: 'Klingt gut!', significado: '¡Suena bien!', registro: 'Conversacional', uso: 'Una respuesta breve y natural para aceptar una propuesta.', ejemplo: '— Treffen wir uns um sechs?\n— Klingt gut!' },
            { frase: 'Ich bin dabei.', significado: 'Me sumo / cuenten conmigo.', registro: 'Neutro', uso: 'Para confirmar que participás en un plan o actividad.', ejemplo: '— Wir gehen morgen ins Kino.\n— Ich bin dabei!' },
            { frase: 'Das passt mir gut.', significado: 'Me viene bien.', registro: 'Neutro', uso: 'Para decir que un horario o una propuesta te resulta conveniente.', ejemplo: '— Geht es am Donnerstag?\n— Ja, das passt mir gut.' },
            { frase: 'Alles klar.', significado: 'Entendido / todo bien.', registro: 'Conversacional', uso: 'Puede confirmar que entendiste. Con entonación de pregunta, también puede preguntar si está todo bien.', ejemplo: '— Ruf mich an, wenn du da bist.\n— Alles klar.' }
        ],
        unidades: [
            {
                id: 'de-order', titulo: 'El verbo encuentra su lugar', tema: 'Orden y subordinadas', descripcion: 'Recuperá la posición del verbo con weil, obwohl y conectores.',
                teoria: [
                    'En una oración declarativa principal, el verbo conjugado ocupa la segunda posición. Se cuentan constituyentes, no palabras: “Heute lerne ich Deutsch”.',
                    'En subordinadas introducidas por weil, dass u obwohl, el verbo conjugado normalmente va al final: “weil ich heute arbeite”.',
                    'Si la subordinada va primero, ocupa la primera posición: “Weil ich arbeite, komme ich später”. El verbo de la principal queda justo después de la coma.',
                    'Deshalb no funciona como weil: puede ocupar la primera posición de una principal y el verbo sigue en segunda: “Deshalb komme ich später”.'
                ], ejemplo: 'Obwohl ich wenig Zeit habe, übe ich jeden Tag.',
                preguntas: [
                    { texto: 'Elegí la subordinada correcta en alemán escrito estándar.', opciones: ['weil ich habe heute Zeit', 'weil ich heute Zeit habe', 'weil habe ich heute Zeit'], correcta: 1, explicacion: 'Con weil, el verbo conjugado habe va al final.' },
                    { texto: 'Completá: “Heute ___ ich Deutsch.”', opciones: ['lerne', 'lernen', 'gelernt'], correcta: 0, explicacion: 'Heute ocupa la primera posición y lerne, conjugado con ich, la segunda.' },
                    { texto: 'Elegí el orden correcto.', opciones: ['Weil ich arbeite, ich komme später.', 'Weil ich arbeite, später ich komme.', 'Weil ich arbeite, komme ich später.'], correcta: 2, explicacion: 'La subordinada inicial ocupa la primera posición; después aparece komme.' },
                    { texto: 'Elegí una principal correcta con deshalb.', opciones: ['Deshalb ich bleibe zu Hause.', 'Deshalb bleibe ich zu Hause.', 'Deshalb ich zu Hause bleibe.'], correcta: 1, explicacion: 'Deshalb ocupa la primera posición y bleibe debe ir en segunda.' }
                ]
            },
            {
                id: 'de-cases', titulo: '¿Dónde o hacia dónde?', tema: 'Casos y preposiciones', descripcion: 'Distinguí ubicación y destino con las Wechselpräpositionen.',
                teoria: [
                    'Preposiciones como in, an, auf, unter y über pueden regir dativo o acusativo. La ubicación (wo?) usa dativo; el destino (wohin?) usa acusativo.',
                    '“Ich bin in der Schule” expresa ubicación. “Ich gehe in die Schule” expresa destino. No es simplemente movimiento versus quietud: moverse dentro de un lugar puede seguir usando dativo.',
                    'En masculino: der → den (acusativo), der → dem (dativo). En femenino: die → die (acusativo), die → der (dativo).',
                    'Otras preposiciones tienen un caso fijo: mit siempre rige dativo y für siempre rige acusativo en estos usos.'
                ], ejemplo: 'Ich lege das Buch auf den Tisch. Das Buch liegt auf dem Tisch.',
                preguntas: [
                    { texto: 'El libro está sobre la mesa: “Das Buch liegt auf ___ Tisch.”', opciones: ['dem', 'den', 'der'], correcta: 0, explicacion: 'Es ubicación; Tisch es masculino y el dativo usa dem.' },
                    { texto: 'Ponés el libro sobre la mesa: “Ich lege das Buch auf ___ Tisch.”', opciones: ['dem', 'der', 'den'], correcta: 2, explicacion: 'Expresa destino y lleva acusativo: den Tisch.' },
                    { texto: '“Ich fahre mit ___ Zug.”', opciones: ['den', 'dem', 'das'], correcta: 1, explicacion: 'Mit rige dativo. El masculino der Zug pasa a dem Zug.' },
                    { texto: 'Alguien corre dentro del parque, sin expresar entrada: “Er läuft im Park.” ¿Por qué dativo?', opciones: ['Porque laufen nunca expresa movimiento.', 'Porque todas las preposiciones usan dativo.', 'Porque expresa dónde ocurre la actividad.'], correcta: 2, explicacion: 'El movimiento dentro de una ubicación no exige acusativo. Im = in dem.' }
                ]
            },
            {
                id: 'de-polite', titulo: 'Pedilo con más sutileza', tema: 'Konjunktiv II', descripcion: 'Practicá deseos, hipótesis y pedidos corteses.',
                teoria: [
                    'El Konjunktiv II permite expresar hipótesis y cortesía: “Ich hätte gern einen Kaffee” o “Könnten Sie mir helfen?”.',
                    'Formas frecuentes: haben → hätte, sein → wäre, können → könnte. Para muchos verbos se usa würde + infinitivo.',
                    'En una subordinada con wenn, el verbo conjugado va al final: “Wenn ich mehr Zeit hätte, würde ich öfter üben”.',
                    'En pedidos, Sie señala trato formal y du informal: “Könnten Sie…?” frente a “Könntest du…?”.'
                ], ejemplo: 'Wenn ich mehr Zeit hätte, würde ich jeden Tag Deutsch sprechen.',
                preguntas: [
                    { texto: 'Pedido formal y cortés: “___ Sie mir helfen?”', opciones: ['Könntest', 'Könnten', 'Könnte'], correcta: 1, explicacion: 'Con Sie formal usamos könnten. Könntest corresponde a du.' },
                    { texto: '“Ich ___ gern einen Kaffee.”', opciones: ['hätte', 'wäre', 'würde'], correcta: 0, explicacion: 'Ich hätte gern… es una forma cortés de expresar lo que querés.' },
                    { texto: '“Wenn ich mehr Zeit ___, würde ich öfter üben.”', opciones: ['habe hätte', 'würde', 'hätte'], correcta: 2, explicacion: 'La hipótesis usa hätte al final de la subordinada.' },
                    { texto: 'Elegí la construcción correcta con würde.', opciones: ['Ich würde mehr geübt.', 'Ich würde öfter üben.', 'Ich würde übe öfter.'], correcta: 1, explicacion: 'Würde + infinitivo; en esta principal üben va al final.' }
                ]
            }
        ]
    }
};

/* =========================================================
   2. ESTADO Y GUARDADO LOCAL
   El estado recuerda idioma, aciertos, errores y recompensas.
   localStorage conserva texto entre visitas a este navegador.
   No es una base de datos ni sincroniza el celu con la tablet.
   ========================================================= */
const CLAVE = 'entre-idiomas-v1';
function progresoNuevo() {
    return { sesiones: 0, puntos: 0, dominadas: [], errores: [], completas: [], guardados: [], premio: '' };
}
let estado = { idioma: 'en', en: progresoNuevo(), de: progresoNuevo() };
let almacenamientoDisponible = true;
try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE));
    // Validamos datos básicos para no romper la página si están dañados.
    if (guardado && ['en', 'de'].includes(guardado.idioma)) {
        estado.idioma = guardado.idioma;
        for (const idioma of ['en', 'de']) {
            const datos = guardado[idioma];
            if (!datos) continue;
            for (const campo of ['sesiones', 'puntos']) {
                if (Number.isSafeInteger(datos[campo]) && datos[campo] >= 0) estado[idioma][campo] = datos[campo];
            }
            for (const campo of ['dominadas', 'errores', 'completas']) {
                if (Array.isArray(datos[campo])) estado[idioma][campo] = [...new Set(datos[campo].filter(x => typeof x === 'string'))];
            }
            if (Array.isArray(datos.guardados)) estado[idioma].guardados = [...new Set(datos.guardados.filter(x => Number.isInteger(x) && x >= 0 && x < cursos[idioma].consejos.length))];
            if (typeof datos.premio === 'string') estado[idioma].premio = datos.premio.slice(0, 100);
        }
    }
} catch (error) {
    almacenamientoDisponible = false;
}

// $ es una función corta que busca un elemento usando un selector CSS.
const $ = selector => document.querySelector(selector);
let vistaActual = 'inicio';
let consejoActual = 0;
let sesionActual = null;
function avisar(texto) { $('#mensaje').textContent = texto; }
function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); }
    catch (error) { almacenamientoDisponible = false; avisar('No se pudo guardar el progreso. En este navegador solo durará mientras la página esté abierta.'); }
}
function datosActuales() { return estado[estado.idioma]; }
function cursoActual() { return cursos[estado.idioma]; }
// Escape evita interpretar como HTML texto ingresado por la persona.
function escapar(texto) {
    return String(texto).replace(/[&<>"']/g, letra => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[letra]);
}
function siguienteUnidad() {
    return cursoActual().unidades.find(unidad => !datosActuales().completas.includes(unidad.id)) || cursoActual().unidades[0];
}
function teoriaHTML(unidad) {
    return `<div class="teoria-texto">${unidad.teoria.map(parrafo => `<p>${escapar(parrafo)}</p>`).join('')}<blockquote lang="${estado.idioma}">${escapar(unidad.ejemplo)}</blockquote></div>`;
}

/* =========================================================
   3. PANTALLAS
   textContent cambia texto; innerHTML permite crear etiquetas.
   Los textos personales siempre se insertan con textContent.
   ========================================================= */
function cambiarVista(nombre) {
    if (!['inicio', 'teoria', 'practica', 'premios'].includes(nombre)) return;
    vistaActual = nombre;
    document.querySelectorAll('.vista').forEach(panel => { panel.hidden = panel.id !== `vista-${nombre}`; });
    document.querySelectorAll('[data-vista]').forEach(boton => {
        if (boton.dataset.vista === nombre) boton.setAttribute('aria-current', 'page');
        else boton.removeAttribute('aria-current');
    });
    avisar('');
}
function mostrarConsejo() {
    const consejo = cursoActual().consejos[consejoActual];
    $('#frase-consejo').textContent = consejo.frase;
    $('#frase-consejo').lang = estado.idioma;
    $('#significado-consejo').textContent = consejo.significado;
    $('#uso-consejo').textContent = consejo.uso;
    $('#registro-consejo').textContent = consejo.registro;
    $('#ejemplo-consejo').textContent = consejo.ejemplo;
    $('#ejemplo-consejo').lang = estado.idioma;
    const guardado = datosActuales().guardados.includes(consejoActual);
    $('#boton-guardar').textContent = guardado ? 'Consejo guardado ✓' : 'Guardar consejo';
    $('#boton-guardar').setAttribute('aria-pressed', String(guardado));
}
function medallas() {
    const datos = datosActuales();
    return [
        { icono: '◆', nombre: 'Primer paso', texto: 'Completá tu primera sesión.', actual: datos.sesiones, meta: 1 },
        { icono: '✦', nombre: 'Volviendo al ritmo', texto: 'Completá 5 sesiones de práctica.', actual: datos.sesiones, meta: 5 },
        { icono: '★', nombre: 'Consolidando', texto: 'Respondé bien 8 ejercicios diferentes.', actual: datos.dominadas.length, meta: 8 },
        { icono: '◈', nombre: 'Sin cabos sueltos', texto: 'Completá las 3 unidades de este idioma.', actual: datos.completas.length, meta: 3 },
        { icono: '✧', nombre: 'Tu gran recompensa', texto: 'Completá 20 sesiones para tu premio personal.', actual: datos.sesiones, meta: 20 }
    ];
}
function actualizar() {
    const datos = datosActuales();
    const unidad = siguienteUnidad();
    $('#boton-ingles').setAttribute('aria-pressed', String(estado.idioma === 'en'));
    $('#boton-aleman').setAttribute('aria-pressed', String(estado.idioma === 'de'));
    $('#titulo-practica').textContent = unidad.titulo;
    $('#descripcion-practica').textContent = unidad.descripcion;
    const meta = datos.sesiones < 5 ? 5 : 20;
    $('#nombre-meta').textContent = datos.sesiones < 5 ? 'Volviendo al ritmo' : datos.sesiones < 20 ? 'Tu gran recompensa' : '¡Meta alcanzada!';
    $('#descripcion-meta').textContent = datos.sesiones < 5 ? 'Cinco sesiones para tu primera medalla de constancia.' : datos.sesiones < 20 ? 'Veinte sesiones para celebrar con tu premio personal.' : 'Podés seguir practicando y consolidando lo aprendido.';
    $('#progreso-meta').max = meta;
    $('#progreso-meta').value = Math.min(datos.sesiones, meta);
    $('#texto-progreso').textContent = `${datos.sesiones} de ${meta} prácticas completas`;
    $('#total-sesiones').textContent = datos.sesiones;
    $('#total-puntos').textContent = datos.puntos;
    $('#total-dominio').textContent = datos.dominadas.length;
    $('#pendientes-texto').textContent = datos.errores.length ? `${datos.errores.length} ejercicios pendientes de repaso.` : 'No tenés errores pendientes. ¡Buen momento para practicar!';
    $('#boton-repasar').disabled = datos.errores.length === 0;
    $('#guardados').innerHTML = datos.guardados.length ? datos.guardados.map(indice => {
        const consejo = cursoActual().consejos[indice];
        return `<div class="guardado"><strong lang="${estado.idioma}">${escapar(consejo.frase)}</strong><span>${escapar(consejo.significado)}</span><p class="nota">${escapar(consejo.uso)}</p></div>`;
    }).join('') : '<p class="nota">Guardá una frase desde el consejo del día para encontrarla acá.</p>';
    $('#biblioteca').innerHTML = cursoActual().unidades.map(unidad => `<article class="tarjeta"><span class="capsula">${escapar(unidad.tema)}</span><h3>${escapar(unidad.titulo)}</h3><p>${escapar(unidad.descripcion)}</p><details><summary>Leer teoría y ejemplos</summary>${teoriaHTML(unidad)}</details><button data-unidad="${unidad.id}">Practicar este tema</button></article>`).join('');
    $('#unidades').innerHTML = cursoActual().unidades.map((unidad, indice) => `<article class="tarjeta"><p class="ceja">UNIDAD 0${indice + 1}</p><h3>${escapar(unidad.titulo)}</h3><p>${escapar(unidad.descripcion)}</p><p class="nota">${datos.completas.includes(unidad.id) ? '✓ Práctica completada' : 'Pendiente'} · 4 ejercicios</p><button data-unidad="${unidad.id}" class="primario">${datos.completas.includes(unidad.id) ? 'Volver a practicar' : 'Empezar unidad'}</button></article>`).join('');
    $('#medallas').innerHTML = medallas().map(medalla => `<article class="tarjeta ${medalla.actual >= medalla.meta ? 'desbloqueada' : ''}"><span class="medalla-icono" aria-hidden="true">${medalla.icono}</span><h3>${medalla.nombre}</h3><p>${medalla.texto}</p><strong>${medalla.actual >= medalla.meta ? 'Desbloqueada ✓' : `${medalla.actual} / ${medalla.meta}`}</strong></article>`).join('');
    $('#premio-personal').value = datos.premio;
    $('#estado-premio').textContent = datos.sesiones >= 20 ? (datos.premio ? `¡Te ganaste tu premio: ${datos.premio}!` : '¡Meta lograda! Elegí cómo celebrarlo.') : `${Math.max(0, 20 - datos.sesiones)} prácticas para tu recompensa${datos.premio ? ': ' + datos.premio : '.'}`;
    mostrarConsejo();
}

/* =========================================================
   4. SESIÓN: CONSEJO → TEORÍA → EJERCICIOS → RESULTADO
   Los puntos se otorgan una vez por ejercicio diferente.
   Completar, no cerrar una sesión a mitad, suma una práctica.
   ========================================================= */
function abrirSesion(unidadId, repaso = false) {
    if ($('#sesion').open) return;
    const unidad = cursoActual().unidades.find(item => item.id === unidadId);
    if (!unidad && !repaso) return;
    let preguntas;
    if (repaso) {
        preguntas = cursoActual().unidades.flatMap(u => u.preguntas.map((pregunta, indice) => ({ ...pregunta, clave: `${u.id}-${indice}` }))).filter(pregunta => datosActuales().errores.includes(pregunta.clave));
        if (!preguntas.length) { avisar('No hay errores pendientes.'); return; }
    } else {
        preguntas = unidad.preguntas.map((pregunta, indice) => ({ ...pregunta, clave: `${unidad.id}-${indice}` }));
    }
    sesionActual = { unidad, preguntas, indice: 0, aciertos: 0, puntos: 0, repaso, respondida: false, terminada: false, medallasPrevias: medallas().filter(m => m.actual >= m.meta).map(m => m.nombre) };
    $('#sesion').showModal();
    mostrarConsejoSesion();
}
function prepararPaso(etiqueta, titulo) {
    $('#paso-sesion').textContent = etiqueta;
    $('#titulo-sesion').textContent = titulo;
    $('#cuerpo-sesion').innerHTML = '';
    $('#acciones-sesion').innerHTML = '';
    $('#sesion').scrollTop = 0;
}
function botonSesion(texto, accion, primario = true) {
    const boton = document.createElement('button');
    boton.textContent = texto;
    if (primario) boton.className = 'primario';
    boton.addEventListener('click', accion);
    $('#acciones-sesion').append(boton);
    return boton;
}
function mostrarConsejoSesion() {
    const consejo = cursoActual().consejos[consejoActual];
    prepararPaso('ANTES DE EMPEZAR', 'Una frase para tu próxima conversación.');
    $('#cuerpo-sesion').innerHTML = `<h3 lang="${estado.idioma}">${escapar(consejo.frase)}</h3><p>${escapar(consejo.significado)}</p><p>${escapar(consejo.uso)}</p><blockquote lang="${estado.idioma}">${escapar(consejo.ejemplo)}</blockquote><p class="nota">Tu sesión está lista. Leé a tu ritmo: no agregamos una espera artificial.</p>`;
    botonSesion(sesionActual.repaso ? 'Empezar repaso' : 'Continuar con la teoría', () => sesionActual.repaso ? mostrarPregunta() : mostrarTeoria()).focus();
    const guardado = datosActuales().guardados.includes(consejoActual);
    const boton = botonSesion(guardado ? 'Consejo guardado ✓' : 'Guardar consejo', () => {
        if (!datosActuales().guardados.includes(consejoActual)) datosActuales().guardados.push(consejoActual);
        guardar(); actualizar(); boton.textContent = 'Consejo guardado ✓'; boton.disabled = true;
    }, false);
    boton.disabled = guardado;
}
function mostrarTeoria() {
    prepararPaso('TEORÍA BREVE', sesionActual.unidad.titulo);
    $('#cuerpo-sesion').innerHTML = teoriaHTML(sesionActual.unidad);
    botonSesion('Ir a los ejercicios', mostrarPregunta).focus();
}
function mostrarPregunta() {
    const sesion = sesionActual;
    sesion.respondida = false;
    const pregunta = sesion.preguntas[sesion.indice];
    prepararPaso(`EJERCICIO ${sesion.indice + 1} DE ${sesion.preguntas.length}`, sesion.repaso ? 'Recuperá este punto.' : sesion.unidad.tema);
    $('#cuerpo-sesion').innerHTML = `<p id="enunciado">${escapar(pregunta.texto)}</p><div class="opciones" role="group" aria-labelledby="enunciado"></div><div id="feedback" role="status" aria-live="polite"></div>`;
    pregunta.opciones.forEach((opcion, indice) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        // Las respuestas en español no deben marcarse artificialmente como alemán/inglés.
        boton.addEventListener('click', () => responder(indice));
        $('.opciones').append(boton);
    });
    $('.opciones button').focus();
}
function responder(indice) {
    const sesion = sesionActual;
    if (!sesion || sesion.respondida || sesion.terminada) return;
    sesion.respondida = true;
    const pregunta = sesion.preguntas[sesion.indice];
    const datos = datosActuales();
    const correcta = indice === pregunta.correcta;
    if (correcta) {
        sesion.aciertos += 1;
        datos.errores = datos.errores.filter(clave => clave !== pregunta.clave);
        if (!datos.dominadas.includes(pregunta.clave)) {
            datos.dominadas.push(pregunta.clave);
            datos.puntos += 10;
            sesion.puntos += 10;
        }
    } else if (!datos.errores.includes(pregunta.clave)) datos.errores.push(pregunta.clave);
    document.querySelectorAll('.opciones button').forEach((boton, numero) => {
        boton.disabled = true;
        if (numero === pregunta.correcta) boton.classList.add('correcta');
        else if (numero === indice) boton.classList.add('incorrecta');
    });
    $('#feedback').className = 'feedback';
    $('#feedback').textContent = `${correcta ? '¡Correcto!' : 'Todavía no. Respuesta: ' + pregunta.opciones[pregunta.correcta] + '.'} ${pregunta.explicacion}`;
    guardar();
    botonSesion(sesion.indice + 1 === sesion.preguntas.length ? 'Ver mi resultado' : 'Siguiente ejercicio', () => {
        if (sesion.indice + 1 === sesion.preguntas.length) terminarSesion();
        else { sesion.indice += 1; mostrarPregunta(); }
    }).focus();
}
function terminarSesion() {
    const sesion = sesionActual;
    if (sesion.terminada) return;
    const anteriores = sesion.medallasPrevias;
    sesion.terminada = true;
    const datos = datosActuales();
    datos.sesiones += 1;
    if (!sesion.repaso && !datos.completas.includes(sesion.unidad.id)) datos.completas.push(sesion.unidad.id);
    guardar(); actualizar();
    const nuevas = medallas().filter(m => m.actual >= m.meta && !anteriores.includes(m.nombre));
    prepararPaso('SESIÓN COMPLETADA', 'Un paso más. Bien hecho.');
    $('#cuerpo-sesion').innerHTML = `<div class="resultado">${sesion.aciertos} / ${sesion.preguntas.length}</div><p>Respuestas correctas · <strong>+${sesion.puntos} puntos nuevos</strong></p><p>${datos.errores.length ? 'Tus errores quedan disponibles para un próximo repaso.' : 'No quedaron errores pendientes en este idioma.'}</p>${nuevas.map(m => `<p class="feedback">Premio desbloqueado: <strong>${m.nombre}</strong></p>`).join('')}<p class="nota">Los puntos cuentan aciertos nuevos. La medalla de constancia cuenta sesiones completas, aunque no todas las respuestas sean correctas.</p>`;
    botonSesion('Volver al inicio', () => { $('#sesion').close(); cambiarVista('inicio'); }).focus();
    botonSesion('Ver mis premios', () => { $('#sesion').close(); cambiarVista('premios'); }, false);
}

/* =========================================================
   5. EVENTOS
   addEventListener escucha una acción, por ejemplo un clic.
   dataset lee atributos data-* escritos en el HTML.
   ========================================================= */
function elegirIdioma(idioma) {
    if ($('#sesion').open || !['en', 'de'].includes(idioma)) return;
    estado.idioma = idioma;
    consejoActual = 0;
    guardar(); actualizar();
    avisar(`Ahora practicás ${cursoActual().nombre}.`);
}
$('#boton-ingles').addEventListener('click', () => elegirIdioma('en'));
$('#boton-aleman').addEventListener('click', () => elegirIdioma('de'));
document.querySelectorAll('[data-vista]').forEach(boton => boton.addEventListener('click', () => cambiarVista(boton.dataset.vista)));
$('#boton-practicar').addEventListener('click', () => abrirSesion(siguienteUnidad().id));
$('#boton-repasar').addEventListener('click', () => abrirSesion(null, true));
$('#otro-consejo').addEventListener('click', () => { consejoActual = (consejoActual + 1) % cursoActual().consejos.length; mostrarConsejo(); });
$('#boton-guardar').addEventListener('click', () => {
    const datos = datosActuales();
    if (datos.guardados.includes(consejoActual)) {
        datos.guardados = datos.guardados.filter(indice => indice !== consejoActual);
        avisar('Consejo quitado de tus guardados.');
    } else { datos.guardados.push(consejoActual); avisar('Consejo guardado para repasar.'); }
    guardar(); actualizar();
});
// Delegación: este evento sirve también para botones generados con innerHTML.
$('#contenido').addEventListener('click', evento => {
    const boton = evento.target.closest('[data-unidad]');
    if (boton) abrirSesion(boton.dataset.unidad);
});
$('#form-premio').addEventListener('submit', evento => {
    evento.preventDefault(); // Evita que el formulario recargue toda la página.
    const premio = $('#premio-personal').value.trim();
    if (!premio) { avisar('Escribí una recompensa antes de guardar.'); return; }
    datosActuales().premio = premio;
    guardar(); actualizar(); avisar('Tu recompensa personal quedó guardada.');
});
$('#cerrar-sesion').addEventListener('click', () => $('#sesion').close());
$('#sesion').addEventListener('close', () => {
    const incompleta = sesionActual && !sesionActual.terminada;
    sesionActual = null;
    actualizar();
    if (incompleta) avisar('Práctica cerrada. Tus respuestas se guardaron, pero la sesión incompleta no suma para la meta.');
});

/* WebMCP es opcional: solo registra la acción si el navegador lo admite.
   No cambia cómo funciona la web en navegadores habituales. */
if (document.modelContext?.registerTool) {
    const ciclo = new AbortController();
    try {
        Promise.resolve(document.modelContext.registerTool({
            name: 'start_language_practice',
            description: 'Selecciona inglés o alemán y abre una unidad de práctica; no completa la sesión.',
            inputSchema: { type: 'object', properties: { language: { type: 'string', enum: ['en', 'de'] }, unitId: { type: 'string' } }, required: ['language', 'unitId'], additionalProperties: false },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute(input) {
                if (!input || !['en', 'de'].includes(input.language) || !cursos[input.language].unidades.some(u => u.id === input.unitId)) throw new Error('Idioma o unidad no válidos.');
                if ($('#sesion').open) throw new Error('Cerrá la sesión actual antes de abrir otra.');
                elegirIdioma(input.language); abrirSesion(input.unitId);
                return { language: estado.idioma, unitId: sesionActual.unidad.id, stage: 'tip' };
            }
        }, { signal: ciclo.signal })).catch(() => {});
    } catch (error) { /* Un fallo de esta integración no interrumpe la práctica. */ }
    window.addEventListener('pagehide', () => ciclo.abort(), { once: true });
}
actualizar();
cambiarVista(vistaActual);
if (!almacenamientoDisponible) avisar('No se pudo leer el progreso guardado. Si el almacenamiento está bloqueado, los cambios pueden perderse al cerrar.');
