<template>
	<v-app id="inspire">
		<v-navigation-drawer app v-model="drawer" dark color="green darken-4">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title">
						Barbershopdeschaar.nl
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list
					dense
					nav
			>
				<v-list-item
						v-for="item in items"
						:key="item.title"
						:to="item.to"
						link
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="green lighten-1" dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		<v-img
				:style="height"
				height="80"
				contain
				dark
				position="start"
				src="http://0314media.nl/img/logo.webp"
				width="100"
		>
		</v-img>
			<v-spacer></v-spacer>

			<v-btn icon v-for="i in headerIcons" :href="i.link">
				<v-icon>{{i.icon}}</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>


<script>

export default {
	computed: {
		height () {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return 'margin-top:1.2em'
			}
		},
	},
  name: 'App',

  components: {
  },


  data: () => ({
	 drawer: null,
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard',to:'/', },
          { title: 'Prijzen', icon: 'mdi-currency-eur',to:'/Prijzen', },
		  { title: 'Galerij', icon: 'mdi-camera',to:'/Galerij', },
		  { title: 'Over ons', icon: 'mdi-information-outline',to:'/About', },
          { title: 'Contact', icon: 'mdi-map-marker',to:'/Contact', },
      ],
	  headerIcons: [
		  { icon:'mdi-phone',link:'tel:0611263861'},
		  { icon:'mdi-whatsapp',link:'https://api.whatsapp.com/send?phone=0634016976'},
		  { icon:'mdi-facebook',link:'https://www.facebook.com/Barbershop-De-Achterhoek-109519520965648'},
		  { icon:'mdi-instagram',link:'https://www.instagram.com/barbershopdeachterhoek/?hl=nl'},
	  ],
      right: null,
  }),
};
</script>
