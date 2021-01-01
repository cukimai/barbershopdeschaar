<template>
	<div>
		<v-data-table
				:headers="headers"
				:items="knippen"
				item-key="name"
				class="elevation-1"
				:custom-filter="filterOnlyCapsText"
		>
		</v-data-table>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                prijs: '',
                knippen: [
                    {
                        name: 'Knippen, föhnen, stijlen',
                        prijs: 20,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Knippen t/m 10 jaar',
                        prijs: 15,
                    },
                    {
                        name: 'Baard / Bijwerken of scheren',
                        prijs: 13,
                    },
                ],
            }
        },
        computed: {
            headers () {
                return [
                    {
                        text: 'Behandeling',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Prijzen',
                        value: 'prijs',
                        filter: value => {
                            if (!this.prijs) return true

                            return value < parseInt(this.prijs)
                        },
                    },
                ]
            },
        },
        methods: {
            filterOnlyCapsText (value, search, item) {
                return value != null &&
                    search != null &&
                    typeof value === 'string' &&
                    value.toString().toLocaleUpperCase().indexOf(search) !== -1
            },
        },
    }
</script>