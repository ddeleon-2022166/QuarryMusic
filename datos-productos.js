const productos = {
    "rubber-soul": {
        tag: "[PREVENTA]",
        titulo: "The Beatles: Rubber Soul",
        precio: "Q600.00",
        imagen: "Images/Albums/RubberSoul.jpg",
        descripcion: "El álbum Rubber Soul de The Beatles es una obra fundamental dentro de la historia del rock. Lanzado en 1965, este disco marcó un punto de inflexión en la evolución musical de la banda, incorporando sonidos más sofisticados y letras introspectivas que influirían en generaciones posteriores. Con una producción innovadora y una identidad sonora única, incluye temas icónicos como Drive My Car, Norwegian Wood (This Bird Has Flown) y In My Life, considerados clásicos atemporales. Una pieza imprescindible para coleccionistas y amantes de la música, ideal para enriquecer cualquier colección.",
        tracks: [
            { num: "01", nombre: "Nowhere Man", file: "musica/The Beatles/Rubber Soul/Nowhere Man - Remastered 2009.mp3" },
            { num: "02", nombre: "Michelle", file: "musica/The Beatles/Rubber Soul/Michelle - Remastered 2009.mp3" },
            { num: "03", nombre: "In My Life", file: "musica/The Beatles/Rubber Soul/In My Life - Remastered 2009.mp3" }
        ]
    },
    "layla-lovesongs": {
        tag: "[PREVENTA]",
        titulo: "Derek and the Dominos: Layla",
        precio: "Q600.00",
        imagen: "Images/Albums/LaylaSongs.jpg",
        descripcion: "El álbum Layla and Assorted Love Songs de Derek and the Dominos es una obra emblemática del rock y el blues. Publicado en 1970, este disco doble destaca por su intensidad emocional y su fusión de guitarras, consolidándose como un referente dentro del género. Liderado por Eric Clapton*, el álbum incluye la legendaria canción Layla, junto a otros temas memorables como Bell Bottom Blues y Key to the Highway. Una pieza imprescindible para coleccionistas y amantes del rock clásico, reconocida por su profundidad musical y su influencia duradera.",
        tracks: [
            { num: "01", nombre: "Layla", file: "musica/Clapton/Derek and the Dominos/Layla.mp3" },
            { num: "03", nombre: "I Looked Away", file: "musica/Clapton/Derek and the Dominos/I Looked Away.mp3" },
            { num: "03", nombre: "Anyday", file: "musica/Clapton/Derek and the Dominos/Anyday.mp3" },
        ]
    },
    "desintegration": {
        tag: "[PREVENTA]",
        titulo: "The Cure: Desintegration",
        precio: "Q500.00",
        imagen: "Images/Albums/Desintegration.jpg",
        descripcion: "El álbum Disintegration de The Cure es considerado una de las obras más influyentes del rock alternativo. Lanzado en 1989, este disco destaca por su atmósfera melancólica, arreglos envolventes y una profunda carga emocional que lo han convertido en un clásico atemporal. Con una producción cuidada y un sonido distintivo, incluye temas emblemáticos como Lovesong, Pictures of You y Fascination Street. Una pieza esencial para coleccionistas y seguidores del rock alternativo, ideal para quienes buscan una experiencia musical intensa y envolvente.",
        tracks: [
            { num: "01", nombre: "Lovesong", file: "musica/The Cure/Desintegration/Lovesong - Remastered 2010.mp3" },
            { num: "02", nombre: "Pictures Of You", file: "musica/The Cure/Desintegration/Pictures Of You - Remastered.mp3" },
            { num: "03", nombre: "Lullaby", file: "musica/The Cure/Desintegration/Lullaby - Remastered.mp3" },
        ]
    },
    "nirvana-mtv": {
        tag: "",
        titulo: "Nirvana: MTV Unplugged in New York",
        precio: "Q700.00",
        imagen: "Images/Albums/NirMTV.jpg",
        descripcion: "El álbum MTV Unplugged in New York de Nirvana es una de las presentaciones acústicas más icónicas de la historia del rock. Grabado en 1993 para la serie MTV Unplugged y publicado en 1994, este disco muestra una faceta más íntima y emocional de la banda. Liderado por Kurt Cobain, el álbum incluye interpretaciones memorables como About a Girl, Come as You Are y la emotiva versión de Where Did You Sleep Last Night. Una pieza imprescindible para coleccionistas y fanáticos del grunge, reconocida por su crudeza, sensibilidad y legado musical.",
        tracks: [
            { num: "01", nombre: "The Man Who Sold The World", file: "musica/Nirvana/MTV Unplugged in New York/The Man Who Sold The World - Live.mp3" },
            { num: "02", nombre: "Something In The Way", file: "musica/Nirvana/MTV Unplugged in New York/Something In The Way - Live.mp3" },
            { num: "03", nombre: "About A Girl", file: "musica/Nirvana/MTV Unplugged in New York/About A Girl - Live.mp3" },
        ]
    },
    "help": {
        tag: "",
        titulo: "The Beatles: Help!",
        precio: "Q800.00",
        imagen: "Images/Albums/Help.jpg",
        descripcion: "El álbum Help! de The Beatles es una de las obras más representativas de la etapa intermedia de la banda. Lanzado en 1965, este disco combina el sonido fresco del pop rock con una evolución hacia composiciones más personales y sofisticadas. Incluye temas icónicos como Help!, Ticket to Ride y Yesterday, esta última considerada una de las canciones más influyentes y versionadas de todos los tiempos. Una pieza esencial para coleccionistas y amantes de la música, ideal para completar cualquier colección dedicada a los clásicos del rock.",
        tracks: [
            { num: "01", nombre: "Another Girl", file: "musica/The Beatles/Help!/Another Girl - Remastered 2009.mp3" },
            { num: "02", nombre: "Yesterday", file: "musica/The Beatles/Help!/Yesterday - Remastered 2009.mp3" },
            { num: "03", nombre: "The Night Before", file: "musica/The Beatles/Help!/The Night Before - Remastered 2009.mp3" },
        ]
    },
    "wish": {
        tag: "",
        titulo: "The Cure: Wish",
        precio: "Q700.00",
        imagen: "Images/Albums/Wish.jpg",
        descripcion: "El álbum Wish de The Cure es una de las producciones más exitosas y accesibles de la banda. Lanzado en 1992, este disco combina la melancolía característica del grupo con un sonido más energético y orientado al rock alternativo. Incluye temas destacados como Friday I'm in Love, High y A Letter to Elise, que reflejan la versatilidad y evolución musical de la banda. Una pieza imprescindible para coleccionistas y seguidores del rock alternativo, ideal para quienes buscan un equilibrio entre intensidad emocional y accesibilidad sonora.",        
        tracks: [
            { num: "01", nombre: "Friday I'm In Love", file: "musica/The Cure/Wish/Friday I'm In Love.mp3" },
            { num: "02", nombre: "High", file: "musica/The Cure/Wish/High.mp3" },
            { num: "03", nombre: "A Letter To Elise", file: "musica/The Cure/Wish/A Letter To Elise.mp3" },
        ]
    },
    "ahi-vamos": {
        tag: "",
        titulo: "Gustavo Cerati: Ahi Vamos",
        precio: "Q700.00",
        imagen: "Images/Albums/AhiVamos.jpg",
        descripcion: " El álbum Ahí Vamos de Gustavo Cerati es una de las obras más destacadas de su carrera como solista. Lanzado en 2006, este disco representa un regreso a un sonido más directo y orientado al rock, sin perder la profundidad lírica y la calidad sonora que caracterizan al artista. Incluye canciones emblemáticas como Crimen, La Excepción y Adiós, que consolidaron su éxito y reconocimiento en toda Latinoamérica. Una pieza esencial para coleccionistas y amantes del rock en español, ideal para enriquecer cualquier colección musical.",        
        tracks: [
            { num: "01", nombre: "Lago en el Cielo", file: "musica/Gustavo Cerati/Ahi Vamos/Lago en el Cielo.mp3" },
            { num: "02", nombre: "Crimen", file: "musica/Gustavo Cerati/Ahi Vamos/Crimen.mp3" },
            { num: "03", nombre: "Otra Piel", file: "musica/Gustavo Cerati/Ahi Vamos/Otra Piel.mp3" },
        ]
    },
    "soyokaze": {
        tag: "",
        titulo: "Lamp: Soyokaze Apartment Room 201",
        precio: "Q650.00",
        imagen: "Images/Albums/Soyokaze.jpg",
        descripcion: "El álbum Soyokaze Apartment Room 201 de Lamp es una delicada propuesta dentro del pop japonés contemporáneo. Lanzado en 2003, este disco se caracteriza por su sonido suave y nostálgico, con influencias del bossa nova, jazz y pop de los años 60. Con arreglos sutiles y una atmósfera íntima, incluye temas destacados como Last Train At 25 O'Clock y For Lovers, que reflejan la sensibilidad y estilo distintivo de la banda.Una pieza ideal para coleccionistas y oyentes que buscan una experiencia musical relajante y sofisticada.",        
        tracks: [
            { num: "01", nombre: "Us Tonight", file: "musica/Lamp/Soyokaze/Us Tonight.mp3" },
            { num: "02", nombre: "Windy Afternoon", file: "musica/Lamp/Soyokaze/Windy Afternoon.mp3" },
            { num: "03", nombre: "From The Window", file: "musica/Lamp/Soyokaze/From The Window.mp3" },
        ]
    },
    "sixpence-none": {
        tag: "",
        titulo: "Sixpence None The Richer: Sixpence None The Richer",
        precio: "Q650.00",
        imagen: "Images/Albums/SixpenceNoneTheRicher.jpg",
        descripcion: "El álbum Sixpence None the Richer de Sixpence None the Richer es una de las producciones más representativas del pop alternativo de finales de los años 90. Lanzado en 1997, este disco combina melodías suaves con influencias del folk y el rock, destacando por su estilo delicado y accesible. Incluye temas icónicos como Kiss Me, así como There She Goes y Don't Dream It's Over, que consolidaron su reconocimiento internacional. Una pieza ideal para coleccionistas y amantes del pop alternativo, perfecta para complementar cualquier colección musical.",        
        tracks: [
            { num: "01", nombre: "Kiss Me", file: "musica/Sixpence None The Richer/Sixpence None The Richer/Kiss Me.mp3" },
            { num: "02", nombre: "The Waiting Room", file: "musica/Sixpence None The Richer/Sixpence None The Richer/The Waiting Room.mp3" },
            { num: "03", nombre: "Anything", file: "musica/Sixpence None The Richer/Sixpence None The Richer/Anything.mp3" },
        ]
    },
    "comfort-musica": {
        tag: "",
        titulo: "Soda Stereo: Comfort y Música Para Volar",
        precio: "Q750.00",
        imagen: "Images/Albums/StereoMTV.jpg",
        descripcion: "El álbum Comfort y Música para Volar de Soda Stereo* es una producción especial que captura una de las presentaciones más íntimas y experimentales de la banda. Lanzado en 1996, este disco reúne versiones acústicas y reinterpretaciones de algunos de sus temas más reconocidos, con arreglos únicos que incorporan elementos de rock alternativo y música clásica. Incluye destacadas interpretaciones como En la Ciudad de la Furia, Zoom y Ella Usó Mi Cabeza Como un Revólver, ofreciendo una nueva perspectiva del repertorio de la banda. Una pieza imprescindible para coleccionistas y seguidores del rock en español, ideal para quienes buscan versiones diferentes y una experiencia sonora más íntima.",
        tracks: [
            { num: "01", nombre: "Un Misil En Mi Placard - MTV Unplugged", file: "musica/Soda Stereo/Comfort/Un Misil En Mi Placard - MTV Unplugged.mp3" },
            { num: "02", nombre: "Te Para 3 - MTV Unplugged", file: "musica/Soda Stereo/Comfort/Te Para 3 - MTV Unplugged.mp3" },
            { num: "03", nombre: "Superstar", file: "musica/Soda Stereo/Comfort/Superstar.mp3" },
        ]
    },
    "revolver": {
        tag: "",
        titulo: "The Beatles: Revolver",
        precio: "Q800.00",
        imagen: "Images/Albums/Revolver.jpg",
        descripcion: "El álbum Revolver de The Beatles   es una de las obras más innovadoras e influyentes en la historia de la música. Lanzado en 1966, este disco marcó un punto de inflexión en la evolución del grupo, incorporando técnicas de estudio avanzadas, experimentación sonora y una mayor diversidad estilística. Incluye temas icónicos como Eleanor Rigby, Yellow Submarine y Tomorrow Never Knows, considerados fundamentales dentro de su catálogo. Una pieza esencial para coleccionistas y amantes del rock, ideal para enriquecer cualquier colección con un clásico atemporal.",
        tracks: [
            { num: "01", nombre: "Here, There And Everywhere", file: "musica/The Beatles/Revolver/Here, There And Everywhere - Remastered 2009  .mp3" },
            { num: "02", nombre: "For No One", file: "musica/The Beatles/Revolver/For No One - Remastered 2009.mp3" },
            { num: "03", nombre: "And Your Bird Can Sing", file: "musica/The Beatles/Revolver/And Your Bird Can Sing - Remastered 2009.mp3" },
        ]
    },
    "siempre-hoy": {
        tag: "",
        titulo: "Gustavo Cerati: Siempre Es Hoy",
        precio: "Q800.00",
        imagen: "Images/Albums/SiempreEsHoy.jpg",
        descripcion: "El álbum Siempre es Hoy de Gustavo Cerati es una de las propuestas más experimentales y electrónicas de su carrera solista. Lanzado en 2002, este disco destaca por su fusión de rock alternativo con elementos de música electrónica, creando una atmósfera moderna y envolvente. Incluye temas destacados como Cosas Imposibles, Karaoke y Sudestada, que reflejan la versatilidad y constante innovación del artista. Una pieza imprescindible para coleccionistas y seguidores del rock en español, ideal para quienes buscan una experiencia sonora diferente y vanguardista.",
        tracks: [
            { num: "01", nombre: "Karaoke", file: "musica/Gustavo Cerati/Siempre Es Hoy/Karaoke.mp3" },
            { num: "02", nombre: "Sudestada", file: "musica/Gustavo Cerati/Siempre Es Hoy/Sudestada.mp3" },
            { num: "03", nombre: "Cosas Imposibles", file: "musica/Gustavo Cerati/Siempre Es Hoy/Cosas Imposibles.mp3" },
        ]
    },
    "mess": {
        tag: "",
        titulo: "Sixpence None The Richer: This Beautiful Mess",
        precio: "Q750.00",
        imagen: "Images/Albums/Mess.jpg",
        descripcion: "El álbum This Beautiful Mess de Sixpence None the Richer es una destacada producción dentro del pop alternativo de los años 90. Lanzado en 1995, este disco presenta un sonido más introspectivo y orgánico, con influencias del folk y el rock, caracterizado por su sensibilidad melódica. Incluye temas representativos como Within a Room Somewhere y Algeltread, que muestran la esencia musical de la banda en sus primeras etapas. Una pieza ideal para coleccionistas y amantes del pop alternativo, perfecta para descubrir una faceta más íntima del grupo.",
        tracks: [
            { num: "01", nombre: "Kiss Me", file: "musica/Sixpence None The Richer/This Beautiful Mess/Thought Menagerie.mp3" },
            { num: "02", nombre: "Love, Salvation, the Fear of Death", file: "musica/Sixpence None The Richer/This Beautiful Mess/Love, Salvation, the Fear of Death.mp3" },
            { num: "03", nombre: "Circle of Error", file: "musica/Sixpence None The Richer/This Beautiful Mess/Circle of Error.mp3" },
        ]
    },
    "clapton-mtv": {
        tag: "OFERTA",
        titulo: "Eric Clapton: Unplugged",
        precio: "Q400.00",
        imagen: "Images/Albums/ClaptonMTV.jpg",
        descripcion: "El álbum Unplugged de Eric Clapton es una de las producciones acústicas más exitosas y reconocidas de la historia del rock. Grabado en 1992 para la serie MTV Unplugged, este disco muestra una faceta más íntima y depurada del artista. Incluye versiones memorables como Tears in Heaven, Layla y Running on Faith, destacando por sus arreglos acústicos y su profunda carga emocional. Una pieza imprescindible para coleccionistas y amantes del rock y el blues, ideal para quienes buscan una experiencia musical cercana y auténtica.",  
        tracks: [
            { num: "01", nombre: "Layla - Acoustic Live", file: "musica/Clapton/Unplugged/Layla - Acoustic Live.mp3" },
            { num: "03", nombre: "Signe - Acoustic Live", file: "musica/Clapton/Unplugged/Signe - Acoustic Live.mp3" },
            { num: "03", nombre: "Tears in Heaven - Acoustic Live", file: "musica/Clapton/Unplugged/Tears in Heaven - Acoustic Live.mp3" },
        ]
    },
    "still-blues": {
        tag: "OFERTA",
        titulo: "Gary Moore: Still Got The Blues",
        precio: "Q300.00",
        imagen: "Images/Albums/Moore.jpg",
        descripcion: "El álbum Still Got the Blues de Gary Moore es una obra fundamental dentro del blues rock. Lanzado en 1990, este disco marcó el regreso del artista a sus raíces en el blues, destacando por su virtuosismo en la guitarra y una interpretación cargada de sentimiento. Incluye temas emblemáticos como Still Got the Blues, Oh Pretty Woman y Walking by Myself, que consolidaron su reconocimiento dentro del género. Una pieza imprescindible para coleccionistas y amantes del blues y el rock clásico, ideal para enriquecer cualquier colección musical.",
        tracks: [
            { num: "01", nombre: "Still Got The Blues", file: "musica/Moore/Still Got The Blues/Still Got The Blues.mp3" },
            { num: "03", nombre: "Too Tired", file: "musica/Moore/Still Got The Blues/Too Tired.mp3" },
            { num: "03", nombre: "Tears in Heaven - Acoustic Live", file: "musica/Moore/Still Got The Blues/King Of The Blues.mp3" },
        ]
    },
    "hard-night": {
        tag: "",
        titulo: "The Beatles: A Hard Day's Night",
        precio: "Q500.00",
        imagen: "Images/Albums/A Hard Day's Night.jpg",
        descripcion: "El álbum A Hard Day's Night de The Beatles* es una de las producciones más emblemáticas de la primera etapa de la banda. Lanzado en 1964, este disco destaca por su energía, frescura y por incluir exclusivamente composiciones originales del dúo Lennon-McCartney. Incluye temas icónicos como A Hard Day's Night, Can't Buy Me Love y If I Fell, que reflejan el estilo distintivo y el impacto cultural del grupo en sus inicios. Una pieza esencial para coleccionistas y amantes del rock clásico, ideal para completar cualquier colección dedicada a The Beatles.",
        tracks: [
            { num: "01", nombre: "If I Fell", file: "musica/The Beatles/A Hard Day  s Night/If I Fell - Remastered 2009.mp3" },
            { num: "02", nombre: "I Should Have Known Better", file: "musica/The Beatles/A Hard Days Night/I Should Have Known Better - Remastered 2009.mp3" },
            { num: "03", nombre: "I'll Be Back", file: "musica/The Beatles/A Hard Days Night/I'll Be Back - Remastered 2009.mp3" },
        ]
    },
    "fatherless-widow": {
        tag: "",
        titulo: "Sixpence None The Richer: The Fatherless & The Widow",
        precio: "Q750.00",
        imagen: "Images/Albums/The Fatherless & The Widow.jpg",
        descripcion: "El álbum The Fatherless and the Widow de Sixpence None the Richer es una de las primeras producciones de la banda, destacando por su enfoque introspectivo y su estilo influenciado por el rock alternativo y el folk. Lanzado en 1994, este disco presenta una propuesta más cruda y espiritual, con composiciones cargadas de sensibilidad y una identidad sonora en formación. Incluye temas representativos como Trust, Musings. Una pieza ideal para coleccionistas y seguidores de la banda, perfecta para explorar sus inicios y evolución musical.",
        tracks: [
            { num: "01", nombre: "Musings", file: "musica/Sixpence None The Richer/The Fatherless & The Widow/Musings.mp3" },
            { num: "02", nombre: "Soul", file: "musica/Sixpence None The Richer/The Fatherless & The Widow/Soul.mp3" },
            { num: "03", nombre: "An Apology", file: "musica/Sixpence None The Richer/The Fatherless & The Widow/An Apology.mp3" },
        ]
    },
    "kiss-me": {
        tag: "",
        titulo: "The Cure: Kiss Me, Kiss Me, Kiss Me",
        precio: "Q500.00",
        imagen: "Images/Albums/Kiss Me, Kiss Me, Kiss Me.jpg",
        descripcion: "El álbum Kiss Me, Kiss Me, Kiss Me de The Cure es una de las producciones más ambiciosas y variadas de la banda. Lanzado en 1987, este disco doble destaca por su diversidad sonora, combinando rock alternativo, pop y elementos experimentales. Incluye temas icónicos como Just Like Heaven, Why Can't I Be You? y Catch, que reflejan la versatilidad y creatividad del grupo. Una pieza imprescindible para coleccionistas y amantes del rock alternativo, ideal para quienes buscan una experiencia musical rica y diversa.",
        tracks: [
            { num: "01", nombre: "Just Like Heaven", file: "musica/The Cure/Kiss Me/Just Like Heaven.mp3" },
            { num: "02", nombre: "A Thousand Hours", file: "musica/The Cure/Kiss Me/A Thousand Hours.mp3" },
            { num: "03", nombre: "Perfect Girl", file: "musica/The Cure/Kiss Me/Perfect Girl.mp3" },
        ]
    },
    "peluson-milk": {
        tag: "",
        titulo: "Luis Alberto Spinetta: Peluson Of Milk",
        precio: "Q450.00",
        imagen: "Images/Albums/Peluson Of Milk.jpg",
        descripcion: "El álbum Pelusón of Milk de Luis Alberto Spinetta es una de las obras más íntimas y poéticas del artista. Lanzado en 1991, este disco se caracteriza por su sonido delicado y sus letras profundas, consolidándose como un referente dentro del rock argentino. Incluye temas destacados como Seguir Viviendo Sin Tu Amor, Panacea y La Montaña, que reflejan la sensibilidad y el estilo único del músico. Una pieza esencial para coleccionistas y amantes del rock en español, ideal para enriquecer cualquier colección con una obra de gran valor artístico.",
        tracks: [
            { num: "01", nombre: "Seguir Viviendo Sin Tu Amor", file: "musica/Spinetta/Peluson Of Milk/Seguir Viviendo Sin Tu Amor - Remasterizado 2025.mp3" },
            { num: "02", nombre: "Ganges", file: "musica/Spinetta/Peluson Of Milk/Ganges - Remasterizado 2025.mp3" },
            { num: "03", nombre: "Dime La Forma ", file: "musica/Spinetta/Peluson Of Milk/Dime La Forma - Remasterizado 2025.mp3" },
        ]
    },
    "flock-seagulls": {
        tag: "",
        titulo: "A Flock of Seagulls: A Flock of Seagulls",
        precio: "Q550.00",
        imagen: "Images/Albums/A Flock of Seagulls.jpg",
        descripcion: "El álbum A Flock of Seagulls de A Flock of Seagulls es una de las producciones más representativas del movimiento new wave de los años 80. Lanzado en 1982, este disco destaca por su sonido synth-pop, guitarras atmosféricas y una estética futurista que definió una época. Incluye temas icónicos como I Ran (So Far Away) y Space Age Love Song, que se convirtieron en clásicos del género y consolidaron el reconocimiento internacional de la banda. Una pieza imprescindible para coleccionistas y amantes del new wave y synth-pop, ideal para enriquecer cualquier colección musical",
        tracks: [
            { num: "01", nombre: "I Ran (So Far Away)", file: "musica/A Flock of Seagulls/A Flock of Seagulls/I Ran (So Far Away).mp3" },
            { num: "02", nombre: "Telecommunication", file: "musica/A Flock of Seagulls/A Flock of Seagulls/Telecommunication.mp3" },
            { num: "03", nombre: "Space Age Love Song", file: "musica/A Flock of Seagulls/A Flock of Seagulls/Space Age Love Song.mp3" },
        ]
    },
    "sgt-peppers": {
        tag: "",
        titulo: "The Beatles: Sgt. Pepper's Lonely Hearts Club Band",
        precio: "600.00",
        imagen: "Images/Albums/Sgt. Pepper's Lonely Hearts Club Band.jpg",
        descripcion: "El álbum Sgt. Pepper's Lonely Hearts Club Band de The Beatles es una de las obras más influyentes y revolucionarias en la historia de la música. Lanzado en 1967, este disco marcó un antes y un después en la producción musical, destacando por su enfoque conceptual, innovación en estudio y riqueza sonora. Incluye temas icónicos como Lucy in the Sky with Diamonds, With a Little Help from My Friends y A Day in the Life, considerados clásicos fundamentales dentro de su catálogo. Una pieza esencial para coleccionistas y amantes del rock, ideal para enriquecer cualquier colección con un álbum verdaderamente trascendental.",
        tracks: [
            { num: "01", nombre: "With A Little Help From My Friends", file: "musica/The Beatles/Sgt. Peppers/With A Little Help From My Friends - Remastered 2009.mp3" },
            { num: "02", nombre: "When I'm Sixty Four", file: "musica/The Beatles/Sgt. Peppers/When I'm Sixty Four - Remastered 2009.mp3" },
            { num: "03", nombre: "She's Leaving Home", file: "musica/The Beatles/Sgt. Peppers/She's Leaving Home - Remastered 2009.mp3" },
        ]
    },
    "sgt-peppers": {
        tag: "",
        titulo: "The Beatles: Sgt. Pepper's Lonely Hearts Club Band",
        precio: "600.00",
        imagen: "Images/Albums/Sgt. Pepper's Lonely Hearts Club Band.jpg",
        descripcion: "El álbum Sgt. Pepper's Lonely Hearts Club Band de The Beatles es una de las obras más influyentes y revolucionarias en la historia de la música. Lanzado en 1967, este disco marcó un antes y un después en la producción musical, destacando por su enfoque conceptual, innovación en estudio y riqueza sonora. Incluye temas icónicos como Lucy in the Sky with Diamonds, With a Little Help from My Friends y A Day in the Life, considerados clásicos fundamentales dentro de su catálogo. Una pieza esencial para coleccionistas y amantes del rock, ideal para enriquecer cualquier colección con un álbum verdaderamente trascendental.",
        tracks: [
            { num: "01", nombre: "With A Little Help From My Friends", file: "musica/The Beatles/Sgt. Peppers/With A Little Help From My Friends - Remastered 2009.mp3" },
            { num: "02", nombre: "When I'm Sixty Four", file: "musica/The Beatles/Sgt. Peppers/When I'm Sixty Four - Remastered 2009.mp3" },
            { num: "03", nombre: "She's Leaving Home", file: "musica/The Beatles/Sgt. Peppers/She's Leaving Home - Remastered 2009.mp3" },
        ]
    },
    "ortofon": {
        tag: "",
        titulo: "Ortofon HiFi Accessory Pack",
        precio: "250.00",
        imagen: "Images/accesorios/Ortofon.webp",
        descripcion: "El Ortofon HiFi Accessory Pack de Ortofon* es un completo kit de accesorios diseñado para el mantenimiento y cuidado de sistemas de reproducción de vinilo. Ideal para audiófilos y coleccionistas, este conjunto proporciona las herramientas esenciales para preservar la calidad del sonido y prolongar la vida útil de los componentes. Incluye elementos fundamentales para la limpieza y ajuste, ayudando a mantener tanto los discos como la aguja en óptimas condiciones de funcionamiento. Una opción imprescindible para quienes buscan mejorar su experiencia auditiva y cuidar su colección de vinilos con estándares profesionales.",
    },
    "zomo": {
        tag: "",
        titulo: "Zomo VBC-01 Carbon Fiber Brush",
        precio: "100.00",
        imagen: "Images/accesorios/Zomo.webp",
        descripcion: "El Zomo VBC-01 Carbon Fiber Brush de Zomo* es un accesorio esencial para el cuidado y mantenimiento de discos de vinilo. Diseñado con fibras de carbono de alta calidad, este cepillo permite eliminar eficazmente el polvo y las partículas acumuladas en los surcos sin dañar la superficie. Gracias a sus propiedades antiestáticas, ayuda a reducir la acumulación de electricidad estática, mejorando la reproducción del sonido y disminuyendo ruidos no deseados. Sus finas fibras alcanzan incluso las partículas más pequeñas, contribuyendo a preservar la calidad y prolongar la vida útil de los vinilos.  Una herramienta indispensable para coleccionistas y audiófilos que buscan mantener su colección en óptimas condiciones y disfrutar de una experiencia de escucha limpia y fiel.",       
    },
    "projectclean": {
        tag: "",
        titulo: "Pro-Ject Clean It Stylus Brush",
        precio: "200.00",
        imagen: "Images/accesorios/Clean.webp",
        descripcion: "El Pro-Ject Clean It Stylus Brush de Pro-Ject es un accesorio esencial para el mantenimiento de tocadiscos, diseñado específicamente para la limpieza precisa de la aguja. Fabricado con miles de fibras de carbono ultra finas, este cepillo permite eliminar eficazmente el polvo, residuos y acumulaciones microscópicas sin dañar el delicado diamante de la aguja. Además, sus propiedades antiestáticas ayudan a reducir cargas eléctricas, mejorando la calidad de reproducción.  Su uso regular contribuye a prolongar la vida útil del cartucho y a mantener un sonido limpio, evitando distorsiones causadas por suciedad acumulada en la aguja. Una herramienta imprescindible para audiófilos y coleccionistas que buscan preservar tanto sus vinilos como su equipo en condiciones óptimas",    },
};