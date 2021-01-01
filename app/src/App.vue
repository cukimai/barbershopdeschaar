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
				max-height="150"
				max-width="250"
				src="require('../assets/logo.jpg')"
		> Hier komt de logo

		</v-img>
			<v-spacer></v-spacer>

			<v-btn icon v-for="i in headerIcons">
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
  name: 'App',

  components: {
  },

  data: () => ({
	 drawer: null,
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard',to:'/', },
          { title: 'Prijzen', icon: 'mdi-currency-eur',to:'/Prijzen', },
          { title: 'Over ons', icon: 'mdi-information-outline',to:'/About', },
          { title: 'Contact', icon: 'mdi-map-marker',to:'/Contact', },
      ],
	  headerIcons: [
		  { icon:'mdi-phone'},
		  { icon:'mdi-whatsapp'},
		  { icon:'mdi-facebook'},
		  { icon:'mdi-instagram'},
	  ],
      right: null,
  }),
};
</script>
