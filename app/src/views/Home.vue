<template>
	<div>
		<v-lazy>
	<v-carousel height="550" v-model="model">
		<v-carousel-item
				:src="require('../assets/IMG-20200105-WA0020.jpg')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/IMG-20200616-WA0011.jpg')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/IMG-20200615-WA0018.jpg')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/IMG-20200616-WA0048.jpg')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/IMG-20200105-WA0037.jpg')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/IMG-20200615-WA0040.jpg')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/IMG-20200616-WA0036.jpg')"
		>
		</v-carousel-item>
		<v-carousel-item
				:src="require('../assets/IMG-20200616-WA0053.jpg')"
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
