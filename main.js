/***
 *
 *  EFFET BARNUM
 *
 */


// Création des phrases
let premier = new Array( "Mesdames, Messieurs,",
               "Je reste fondamentalement persuadé que",
               "Dès lors, sachez que je me battrai pour faire admettre que",
               "Par ailleurs, c'est en tout connaissance de cause que je peux affirmer aujourd'hui que",
               "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que",
               "J'ai depuis longtemps (ai-je besoin de vous le rappeler), défendu l'idée que",
               "Et c'est en tout conscience que je déclare avec conviction que",
               "Et ce n'est certainement pas vous, mes chers compatriotes, qui me contredirez si je vous dis que");

let deuxieme = ["la conjoncture actuelle",
               "la situation d'exclusion que certains d'entre vous connaissent",
               "l'acuité des problèmes de la vie quotidienne",
               "la volonté farouche de sortir notre pays de la crise",
               "l'effort prioritaire en faveur des exclus",
               "le particularisme dû à notre histoire unique",
               "l'aspiration plus que légitime de chacun au progrès social",
               "la nécessité de répondre à votre inquiétude journalière, que vous soyez jeunes ou âgés"];

let troisieme = ["doit s'intégrer à la finalisation globale",
                "oblige à la prise en compte encore plus effective",
                "interpelle le citoyen que je suis et nous oblige tous à  aller de l'avant dans la voie",
                "à pour conséquence obligatoire l'urgente nécessité",
                "conforte mon désir incontestable d'aller dans le sens",
                "doit nous amener au choix réellement impératif",
                "fait des préoccupations de la population de base dans l'élaboration",
                "entraine une mission somme toute des plus exaltantes"];

let quatrieme = ["d'un processus allant vers plus d'égalité.",
                "d'un avenir s'orientant vers plus de progrès et plus de justice.",
                "d'une restructuration sociale dans laquelle chacun pourra enfin retrouver sa dignité.",
                "d'une valorisation sans concession de nos caractère spécifiques.",
                "d'un plan correspondant véritablement aux exigences légitimes de chacun.",
                "de solutions rapides correspondant aux grands axes sociaux prioritaires.",
                "d'un programme plus humain, plus fraternel et plus juste.",
                "d'un projet porteur de véritables espoirs, notamment pour les plus démunis."];





//update serie
function updateSerie(serie, key)
{
	let begin = serie.slice(0, key);
	let end   = serie.slice(key+1, 8);
	serie = begin.concat(end);
	return serie;
}

// Evenement click
$('#generate').click(function() {
	
	// on cree toutes les var
	let nb = $('#nb').val();
	let discours = "";
	let premierSerie   = premier;
	let deuxiemeSerie  = deuxieme;
	let troisiemeSerie = troisieme;
	let quatriemeSerie = quatrieme;
	
	let indexPhrase, part1, part2, part3, part4;
	
	// création du discours
	for(let i = 0; i<nb; i++) {
	
	  // on tire au sort la premiere phrase
	  indexPhrase = Math.floor(Math.random() * premierSerie.length) ;
	  if(i == 0) {indexPhrase = 0};
	  part1 = premierSerie[indexPhrase];	  
	  premierSerie = updateSerie(premierSerie, indexPhrase);
	    
	  // on tire au sort la deuxieme phrase
	  indexPhrase = Math.floor(Math.random() * deuxiemeSerie.length) ;
	  part2 = deuxiemeSerie[indexPhrase];
	  deuxiemeSerie = updateSerie(deuxiemeSerie, indexPhrase);

	  // on tire au sort la troisieme phrase
	  indexPhrase = Math.floor(Math.random() * troisiemeSerie.length) ;
	  part3 = troisiemeSerie[indexPhrase];
	  troisiemeSerie = updateSerie(troisiemeSerie, indexPhrase);
	   
	  // on tire au sort la quatrieme phrase
	  indexPhrase = Math.floor(Math.random() * quatriemeSerie.length) ;
	  part4 = quatriemeSerie[indexPhrase];
	  quatriemeSerie = updateSerie(quatriemeSerie, indexPhrase);
	  
	  
	  discours += part1 + " " + part2 + " " + part3 + " " + part4 + "<br/><br/>";	
	}
	
	
	$('#barnumText').html(discours);
	
});

