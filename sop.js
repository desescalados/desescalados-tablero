/* SOP de des:escalados (versión 1.0, tomada de sistema-desescalados-v1.html).
   Para actualizarlo: cambia este archivo y sube la versión en index.html y version.json.
   - sops[].items son los entregables que se marcan en cada episodio. Si cambias el id de un entregable,
     las marcas ya hechas con el id anterior dejan de contar; mantén los ids de los que no cambian.
   - desde: etapa (0 a 3) desde la cual el entregable se muestra en "Lo que sigue". */
window.SOP_DATA = {
  version: '1.0',
  actualizado: '2026-10-28',
  intro: 'Cada etapa tiene un solo dueño y termina entregándole algo concreto a la siguiente. Nadie entra al trabajo de otro: se alimenta antes o se trabaja en paralelo.',
  estructura: 'Cold open con montaje de frases · voz en off que presenta al invitado · conversación · pregunta de cierre · «siempre da para diseñar, cuestionar y crear» · bloopers.',
  pendientes: [
    'Definir el tiempo real del SOP 03.',
    'Revisar el SOP 04 con Caliche.'
  ],
  sops: [
    {
      n: 1, nombre: 'Invitado y preproducción', dueno: 'JP',
      objetivo: 'Termina cuando existen la ficha del invitado, el documento de investigación y el guion. Sin las tres, no se graba.',
      meta: '6 a 8 horas por episodio',
      pasos: [
        {n: 1, t: 'Mantener la hoja de invitados posibles: nombre, qué hace, por qué encaja, quién tiene el contacto, en qué va. Revisarla el primer lunes del mes.', ojo: 'tener siempre mínimo tres contactados o confirmados. Con uno solo, si se cae, se cae el mes.'},
        {n: 2, t: 'Elegir las dos fechas de grabación del mes con tres semanas de anticipación. Cada grabación queda mínimo dos semanas antes de su publicación.'},
        {n: 3, t: 'Escribirle al invitado por un solo canal: quiénes somos, qué nos interesa de su trabajo, que dura una hora, dónde se graba, y dos fechas posibles.', ojo: 'un solo seguimiento a los siete días. Después se marca «sin respuesta» y se retoma en tres meses.'},
        {n: 4, t: 'Al confirmar, pedirle en el mismo mensaje: nombre como quiere aparecer, nombres exactos de sus marcas, Instagram de cada una, páginas web, foto en alta y carpeta con imágenes de sus proyectos. Confirmar que autoriza publicar.', ojo: 'pedirlo ahora. Después de grabar la gente deja de responder.'},
        {n: 5, t: 'Crear la carpeta del episodio y guardar ahí todo lo que mande.'},
        {n: 6, t: 'Investigar entre tres y cinco horas: proyectos, entrevistas y charlas anteriores, qué defiende y con qué se pelea. Documento de máximo dos páginas.', ojo: 'las entrevistas viejas sirven para ver qué le han preguntado mil veces y no repetirlo.'},
        {n: 7, t: 'Cerrar ese documento con tres cosas: la tensión o punto incómodo de su historia, dos preguntas que nadie le ha hecho, y la tesis del episodio en una sola frase.', ojo: 'la tesis es lo que el episodio va a argumentar. En el de David del Valle fue «el diseño nunca ha dependido de la escala». De ahí salen el título, la portada y el cold open. Si no queda escrita antes, toca buscarla en la edición.'},
        {n: 8, t: 'Escribir el guion en seis bloques: apertura, origen, oficio, tensión, proyecto ancla y cierre. Máximo tres preguntas por bloque y quién lo lidera.', ojo: 'no se leen en la grabación. Son el mapa para que ningún tema se quede por fuera.'},
        {n: 9, t: 'Mandar mensaje 48 horas antes con dirección, hora de llegada y duración. Si a las 24 horas no responde, llamarlo.'}
      ],
      items: [
        {id: '1a', t: 'Ficha del invitado completa', hace: 'JP', para: 'Parra'},
        {id: '1b', t: 'Guion de los seis bloques con líderes asignados', hace: 'JP', para: 'Parra'},
        {id: '1c', t: 'Tesis del episodio escrita en una frase', hace: 'JP', para: 'Parra'},
        {id: '1d', t: 'Marcas, Instagram, webs y foto en alta', hace: 'JP', para: 'Caliche'},
        {id: '1e', t: 'Carpeta de imágenes de proyectos del invitado', hace: 'JP', para: 'Caliche'},
        {id: '1f', t: 'Fechas del mes en el tablero y confirmación de 48 horas respondida', hace: 'Equipo', para: 'Equipo'}
      ]
    },
    {
      n: 2, nombre: 'Grabación y entrega', dueno: 'Parra',
      objetivo: 'Termina cuando el material está en el disco duro y Samuel confirmó que lo recibió completo. Parra también es dueño del tablero de producción.',
      meta: '5 horas el día de grabación',
      pasos: [
        {n: 1, t: 'Dos días antes, contando cantidades: baterías cargadas (cuántas), tarjetas formateadas (cuántas), micrófonos con pilas nuevas (cuántos), luces, cables, espacio libre en el MacBook y en el disco duro. Se cuenta y se marca, no se mira por encima.', ojo: 'dos días antes, no el mismo día, para que dé tiempo de conseguir lo que falte.'},
        {n: 2, t: 'El día de la grabación, cada uno a lo suyo: los que van a entrevistar llegan con su guion impreso y se dedican a recibir al invitado y conversar con él. Los demás montan cámaras, micrófonos y luces.', ojo: 'no todos montando. El invitado no debe quedarse solo esperando mientras se arma el set.'},
        {n: 3, t: 'Marcar con cinta en el piso dónde va cada silla y cada trípode. Revisar el fondo. Dejar agua en la mesa.', ojo: 'las marcas hacen que el set se vea igual siempre y que el próximo montaje tome la mitad.'},
        {n: 4, t: 'Grabar 60 segundos de prueba con todas las cámaras y micrófonos, después abrir esos archivos y escucharlos con audífonos.', ojo: 'la barra de nivel se ve bien aunque el audio esté dañado. Hay que escuchar el archivo.'},
        {n: 5, t: 'Ponerle el micrófono al invitado y probarlo con él hablando. Explicarle cuánto dura, cuántos anfitriones son, que puede repetir una respuesta si se enreda, y que los errores se editan.', ojo: 'si empieza a contar la mejor historia mientras se le pone el micrófono, pedirle que la guarde. La primera vez siempre es la mejor.'},
        {n: 6, t: 'Palmada fuerte con todas las cámaras ya grabando. No detener la grabación entre bloques.', ojo: 'si hay que cambiar tarjeta, avisar en voz alta y parar la conversación.'},
        {n: 7, t: 'Asignar antes de empezar quién mira las pantallas, los niveles y el espacio de las tarjetas durante la conversación. Si el que opera también entrevista, esa tarea es de otra persona.'},
        {n: 8, t: 'Si una respuesta se enreda, pedirla otra vez ahí mismo: «devolvámonos, repíteme eso».'},
        {n: 9, t: 'Dejar grabando antes de empezar y después de terminar. Esos clips van a la carpeta de bloopers con una línea de qué pasó en cada uno.'},
        {n: 10, t: 'Apenas termina la conversación, arrancar el AirDrop de los celulares al MacBook de JP mientras se desmonta. Celulares desbloqueados, sobre la mesa, cerca del MacBook.', ojo: 'si se deja para cuando ya todos se están yendo, alguien se queda esperando o la transferencia se corta.'},
        {n: 11, t: 'Del MacBook, copiar todo al disco duro de Samuel con la nomenclatura. Abrir un archivo de cada cámara y cada audio para confirmar que copiaron bien.', ojo: 'no borrar los celulares hasta que Samuel escriba que abrió todo el material completo.'},
        {n: 12, t: 'Escribir qué salió mal, si salió algo. Si no, escribir «sin incidencias». Mover el episodio a «Grabado» y avisarle a Samuel.'}
      ],
      notas: [
        'Nomenclatura (v1): EP##_NOMBRE-INVITADO / BRUTO (una carpeta por cámara, más AUDIO y BLOOPERS) / INSUMOS (guion, transcripción, gráficos, tarjetas) / PROYECTO (archivo de Premiere) / SALIDA (máster, reel, portada, clips).',
        'Sin tildes, sin ñ, sin espacios · versiones v01, v02 · la aprobada se renombra APROBADO, nunca FINAL.'
      ],
      items: [
        {id: '2a', t: 'Material completo en el disco duro, con la nomenclatura', hace: 'Parra', para: 'Samuel'},
        {id: '2b', t: 'Carpeta de bloopers con la nota de qué pasó en cada clip', hace: 'Parra', para: 'Samuel'},
        {id: '2c', t: 'Nota de incidencias', hace: 'Parra', para: 'Samuel'}
      ]
    },
    {
      n: 3, nombre: 'Postproducción', dueno: 'Samuel',
      objetivo: 'Nadie más entra al proyecto de Premiere. Los demás entregan antes de que arranque o trabajan en paralelo desde el paso 05.',
      meta: 'Tiempo por confirmar',
      recibe: [
        {titulo: 'Recibe antes de abrir el proyecto', lista: [
          {de: 'Parra', t: 'Material en el disco duro, bloopers y nota de incidencias'},
          {de: 'Caliche', t: 'Gráficos del invitado exportados al tamaño de la secuencia'}
        ]},
        {titulo: 'Recibe de Caliche, máximo 48 horas después del paso 05', lista: [
          {de: 'Caliche', t: 'Lista de frases para el cold open, con sus tiempos'},
          {de: 'Caliche', t: 'Tarjetas gráficas de los proyectos mencionados'}
        ]}
      ],
      pasos: [
        {n: 1, t: 'Copiar el material del disco a la carpeta del proyecto y revisar que estén todos los archivos, de principio a fin.'},
        {n: 2, t: 'Abrir un archivo de cada fuente: que ninguno esté dañado, que el audio no sature, que ninguna cámara se haya cortado en la mitad. Si falta algo, avisar antes de que se borren los celulares.'},
        {n: 3, t: 'Abrir la plantilla maestra de Premiere, importar y sincronizar. Si el audio quedó aparte, buscar una palabra que caiga en el mismo punto en la transcripción de las dos fuentes y alinear ahí.', ojo: 'si el micrófono entró directo al teléfono que graba, ese audio ya viene sincronizado. Vale probar una vez la sincronización automática por audio de Premiere.'},
        {n: 4, t: 'Escuchar el episodio completo cortando mientras avanza: quitar lo que no sirve y cambiar de cámara cortando la pista de arriba y arrastrándola.', ojo: 'es el paso más largo del sistema. Todo lo demás existe para que este llegue lo más fácil posible.'},
        {n: 5, t: 'Exportar la transcripción en texto y una versión de video. Dejar la transcripción en INSUMOS y avisarle a Caliche.', ojo: 'aquí el episodio deja de depender de una sola persona. De acá en adelante Caliche trabaja en paralelo.'},
        {n: 6, t: 'Ver esa exportación buscando cuatro cosas: cortes de audio mal hechos, cambios de cámara mal cortados, transiciones raras y efectos mal puestos. Anotar los tiempos.'},
        {n: 7, t: 'Volver a Premiere, arreglar lo anotado y poner música y efectos de sonido en los puntos de la plantilla.'},
        {n: 8, t: 'Poner las imágenes de proyectos y las tarjetas de Caliche, más los efectos y los blurs.'},
        {n: 9, t: 'Armar el cold open: de la lista de Caliche, escoger ocho frases, montarlas seguidas al inicio y ponerles música.', ojo: 'la lista son quince o veinte frases con su tiempo. Cuáles entran y en qué orden lo decide Samuel.'},
        {n: 10, t: 'Poner subtítulos y frases grandes en pantalla.'},
        {n: 11, t: 'Colorimetrizar.'},
        {n: 12, t: 'Armar los bloopers del final con los clips y la nota de Parra.'},
        {n: 13, t: 'Exportar el episodio completo, verlo entero y hacer los últimos ajustes.'},
        {n: 14, t: 'Armar el reel vertical con la plantilla, reacomodando los subtítulos al formato.'},
        {n: 15, t: 'Dejar el máster y el reel en SALIDA, mover el episodio en el tablero y avisarle a Parra y a Caliche.'}
      ],
      notas: ['Reporte mensual de números, una vez al mes (va en la sección Negocio, no en cada episodio).'],
      items: [
        {id: '3a', t: 'Transcripción en texto en INSUMOS', hace: 'Samuel', para: 'Caliche'},
        {id: '3b', t: 'Máster del episodio en SALIDA', hace: 'Samuel', para: 'Parra'},
        {id: '3c', t: 'Reel vertical', hace: 'Samuel', para: 'Parra'}
      ]
    },
    {
      n: 4, nombre: 'Publicación y difusión', dueno: 'Caliche y Parra',
      objetivo: 'Caliche hace lo gráfico y el copy. Parra saca los clips y publica. Este SOP todavía no se ha revisado con Caliche.',
      meta: 'SOP por revisar con Caliche',
      pasos: [
        {n: 1, quien: 'Caliche', t: 'Antes de que Samuel abra el proyecto: armar los gráficos con el nombre, las marcas y las redes del invitado, con los datos de la ficha de JP. Exportarlos al tamaño exacto de la secuencia y dejarlos en INSUMOS.', ojo: 'al tamaño correcto es lo que hace que Samuel solo tenga que arrastrarlos, sin abrir Illustrator ni buscar fotos en Instagram.'},
        {n: 2, quien: 'Caliche', t: 'Al recibir la transcripción, leerla y sacar tres cosas: quince o veinte frases fuertes con el tiempo de cada una, la lista de proyectos mencionados, y cuál frase sirve de título.', ojo: 'hay 48 horas. Si se demora más, Samuel queda frenado esperando.'},
        {n: 3, quien: 'Caliche', t: 'Armar las tarjetas gráficas de esos proyectos con las imágenes que mandó el invitado y dejarlas en INSUMOS.'},
        {n: 4, quien: 'Caliche', t: 'Diseñar la portada: fondo negro, naranja de marca, tipografía condensada en mayúsculas, logo arriba a la izquierda, y abajo el invitado, sus marcas y el número de episodio.'},
        {n: 5, quien: 'Caliche', t: 'Con el máster listo, escribir la descripción de YouTube: gancho, presentación del invitado, temas, tagline, redes y webs del invitado, y capítulos con tiempos.'},
        {n: 6, quien: 'Parra', t: 'Sacar entre doce y quince clips, escogidos de la lista de frases del paso 02.', ojo: 'en el episodio de David del Valle fueron 31. Menos clips mejor escogidos cuestan la mitad y probablemente rinden igual.'},
        {n: 7, quien: 'Parra', t: 'Programar el episodio, el reel y los clips en los días y franjas acordados. Mover el episodio a «Publicado».'}
      ],
      items: [
        {id: '4a', t: 'Gráficos del invitado en INSUMOS, antes de la edición', hace: 'Caliche', desde: 1},
        {id: '4b', t: 'Lista de frases y de proyectos, dentro de 48 horas', hace: 'Caliche', desde: 2},
        {id: '4c', t: 'Tarjetas de proyectos en INSUMOS', hace: 'Caliche', desde: 2},
        {id: '4d', t: 'Portada del episodio', hace: 'Caliche', desde: 2},
        {id: '4e', t: 'Descripción de YouTube con capítulos', hace: 'Caliche', desde: 3},
        {id: '4f', t: 'Doce a quince clips listos', hace: 'Parra', desde: 3},
        {id: '4g', t: 'Todo programado', hace: 'Parra', desde: 3}
      ]
    }
  ]
};
