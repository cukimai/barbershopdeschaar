<template>
	<div>
		<v-lazy>
	<v-carousel height="550" v-model="model">
		<v-carousel-item
				:src="require('../assets/crs1.webp')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/crs2.webp')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/crs3.webp')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/crs4.webp')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/crs5.webp')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/crs6.webp')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/crs7.webp')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/crs8.webp')"
		>
		</v-carousel-item>
	</v-carousel>
		</v-lazy>
		<v-lazy>
		<Ads></Ads>
		</v-lazy>
		<v-lazy>
		<OurTeam></OurTeam>
		</v-lazy>
		<Footer></Footer>
	</div>
</template>

<script>
// @ is an alias to /src
import Ads from '@/components/Ads.vue'
import Footer from '@/components/Footer.vue'
import OurTeam from '@/components/OurTeam.vue'
import AskDilko from '@/components/OurTeam.vue'

export default {
  name: 'Home',
  components: {
    Ads,Footer,OurTeam,AskDilko
  },
    data: () => ({
        model: 0,
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
        ],
    }),
}
</script>
