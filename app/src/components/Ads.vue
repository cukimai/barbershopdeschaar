<template>
	<div>
		<v-container class="mt-16">
			<v-row>
				<v-col v-for="adv in advertentie1" cols="12" md="3">
					<v-card  shaped >
						<div class="d-flex justify-center pt-3">
							<v-avatar size="90" color="amber">
								<v-icon dark size="62" center>{{adv.icon}}</v-icon>
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
			</v-row>
		</v-container>

		<v-container fluid class="amber my-16 py-10">
			<div v-for="adv in advertentie2" class="text-center white--text">
				<v-avatar size="100" color="white">
					<v-icon size="80" color="black">
						{{adv.icon}}
					</v-icon>
				</v-avatar>
				<v-card-title class="justify-center text-white text-h5" >
					{{adv.text}}
				</v-card-title>
				<v-rating
						v-model="rating"
						background-color="indigo lighten-3"
						color="indigo"
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
				{ icon:'mdi-crown' ,title:'Klant is koning',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tincidunt laoreet. Nulla vestibulum est vel gravida tristique. Maecenas ultrices urna in justo placerat imperdiet. Praesent ut nisl ipsum. Proin bibendum, justo vitae auctor fringilla, nisl nisi commodo tortor, in finibus lorem arcu ut mi. Cras condimentum orci sit amet sodales consectetur. Donec egestas finibus consectetur. Sed iaculis nisl nec libero tincidunt, vitae porttitor nunc condimentum. Sed tellus nisl, tristique ut lacus a, tempus feugiat augue.'},
				{ icon:'mdi-hair-dryer' ,title:'test',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tincidunt laoreet. Nulla vestibulum est vel gravida tristique. Maecenas ultrices urna in justo placerat imperdiet. Praesent ut nisl ipsum. Proin bibendum, justo vitae auctor fringilla, nisl nisi commodo tortor, in finibus lorem arcu ut mi. Cras condimentum orci sit amet sodales consectetur. Donec egestas finibus consectetur. Sed iaculis nisl nec libero tincidunt, vitae porttitor nunc condimentum. Sed tellus nisl, tristique ut lacus a, tempus feugiat augue.'},
				{ icon:'mdi-content-cut' ,title:'test',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tincidunt laoreet. Nulla vestibulum est vel gravida tristique. Maecenas ultrices urna in justo placerat imperdiet. Praesent ut nisl ipsum. Proin bibendum, justo vitae auctor fringilla, nisl nisi commodo tortor, in finibus lorem arcu ut mi. Cras condimentum orci sit amet sodales consectetur. Donec egestas finibus consectetur. Sed iaculis nisl nec libero tincidunt, vitae porttitor nunc condimentum. Sed tellus nisl, tristique ut lacus a, tempus feugiat augue.'},
				{ icon:'mdi-baby-face' ,title:'test',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tincidunt laoreet. Nulla vestibulum est vel gravida tristique. Maecenas ultrices urna in justo placerat imperdiet. Praesent ut nisl ipsum. Proin bibendum, justo vitae auctor fringilla, nisl nisi commodo tortor, in finibus lorem arcu ut mi. Cras condimentum orci sit amet sodales consectetur. Donec egestas finibus consectetur. Sed iaculis nisl nec libero tincidunt, vitae porttitor nunc condimentum. Sed tellus nisl, tristique ut lacus a, tempus feugiat augue.'},
			],
            advertentie2:[
				{ icon:'mdi-currency-eur' ,title:'Korting',text:'Beoordeel ons nu op google en ontvang eenmalig 5 euro korting!'},
			]
        }),
    }
</script>