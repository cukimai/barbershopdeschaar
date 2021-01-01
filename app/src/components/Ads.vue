<template>
	<div>
		<v-container class="mt-16">
			<v-row>
				<v-col v-for="adv in advertentie1" cols="12" md="3" sm="6">
					<v-card height="400"  shaped >
						<div class="d-flex justify-center pt-3">
							<v-avatar size="120" color="green darken-4">
								<v-icon dark size="70" center>{{adv.icon}}</v-icon>
							</v-avatar>
						</div>
						<v-card-title class="justify-center ">
							{{adv.title}}
						</v-card-title>
						<v-card-text>
							{{adv.text}}
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" md="3" sm="6">
					<v-card height="400"  shaped >
						<div class="d-flex justify-center pt-3">
							<v-avatar size="120" color="green darken-4">
								<v-icon dark size="70" center>mdi-whatsapp</v-icon>
							</v-avatar>
						</div>
						<v-card-title class="justify-center ">
							Beschikbaarheid
						</v-card-title>
						<v-card-text>
							Wij zijn 24/7 Whatsapp-bereikbaar voor jullie.
							U kunt ons bereiken op het nummer: <a href="tel:0611263861">0611263861</a>.
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>

		<v-container fluid class="green lighten-1 my-16 py-10">
			<div v-for="adv in advertentie2" class="text-center white--text">
				<v-avatar size="100" color="white">
					<v-icon size="80" color="black">
						{{adv.icon}}
					</v-icon>
				</v-avatar>
				<v-card-title class="justify-center text-white text-h6" >
					{{adv.text}}
				</v-card-title>
				<v-rating
						v-model="rating"
						background-color="red"
						color="red"
						size="32"
				></v-rating>
			</div>
		</v-container>
	</div>
</template>

<script>
    export default {
        data: () => ({
            advertentie1:[
				{ icon:'mdi-crown' ,title:'De klant',text:'De klanten zijn bij ons koning, dit word nog aangepast'},
				{ icon:'mdi-content-cut' ,title:'Kwaliteit',text:'Wij als barbershop de Achterhoek hebben meer dan 16 jaar ervaring in het barbersvak!\n' +
                        'Wij werken alleen met kappers die ervaring hebben en wij streven ernaar om ons werk elke keer beter te doen.\n' +
                        'Ons doel is om de klant de beste kwaliteit te leveren en een leuke ervaring bij ons,\n' +
                        'Onder anderen werken wij met kwaliteits producten.\n' +
                        'Wij maken gebruik van de beste haarproducten.'},
				{ icon:'mdi-parking' ,title:'Gratis Parkeren',text:'Op ons locatie is genoeg parkeergelegenheid, wij hebben rondom de barbershop meer dan 150 parkeerplekken\n' +
                        'en zijn daarom gemakkelijk te bereiken.\n' +
                        'Naast ons barbershop bevind zich ook de: Action,Dekamarkt,Kruidvat,Eetpunt en bloemist'},
				// { icon:'mdi-whatsapp' ,title:'Bereikbaarheid',text:'Wij zijn 24/7 Whatsapp-bereikbaar voor jullie.\n' +
                //         'U kunt ons bereiken op het nummer: 0612345678.'},
			],
            advertentie2:[
				{ icon:'mdi-currency-eur' ,title:'Korting',text:'Beoordeel ons nu op google en ontvang eenmalig 2 euro korting op wax!'},
			]
        }),
    }
</script>