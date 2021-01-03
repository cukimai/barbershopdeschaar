<template>
	<v-footer
			dark
			padless
	>
		<v-card
				class="flex"
				flat
				tile
		>
			<v-card-title class="green lighten-1">
				<strong class="subheading text-body-2 text-md-h6">Blijf op de hoogte met onze social media accounts!</strong>

				<v-spacer></v-spacer>

					<v-btn icon v-for="i in headerIcons" :href="i.link">
						<v-icon>{{i.icon}}</v-icon>
					</v-btn>
			</v-card-title>

			<v-card-text class="py-2 white--text text-center">
				{{ new Date().getFullYear() }} — <strong>Barbershopdeschaar.nl</strong> Made by <strong>Tom</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
    export default {
        data: () => ({
			headerIcons: [
				{ icon:'mdi-phone',link:'tel:0611263861'},
				{ icon:'mdi-whatsapp',link:'https://api.whatsapp.com/send?phone=0634016976'},
				{ icon:'mdi-facebook',link:'https://www.facebook.com/Barbershop-De-Achterhoek-109519520965648'},
				{ icon:'mdi-instagram',link:'https://www.instagram.com/barbershopdeachterhoek/?hl=nl'},
			],
        }),
    }
</script>