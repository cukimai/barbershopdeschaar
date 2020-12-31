<template>
	<div>
	<v-carousel v-model="model">
		<v-carousel-item
				v-for="(color, i) in colors"
				:key="color"
		>
			<v-sheet
					:color="color"
					height="100%"
					tile
			>
				<v-row
						class="fill-height"
						align="center"
						justify="center"
				>
					<div class="display-3">
						Website is in productie

					</div>
				</v-row>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
		<Ads></Ads>
		<OurTeam></OurTeam>
		<Footer></Footer>
	</div>
</template>

<script>
// @ is an alias to /src
import Ads from '@/components/Ads.vue'
import Footer from '@/components/Footer.vue'
import OurTeam from '@/components/OurTeam.vue'

export default {
  name: 'Home',
  components: {
    Ads,Footer,OurTeam
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
