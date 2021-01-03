<template>
	<v-container>
		<v-row>
			<v-col>
				<v-simple-table>
					<template v-slot:default>
						<thead>
						<tr>
							<th class="text-left">
								Adres
							</th>
							<th class="text-left">
								Telefoon
							</th>
							<th class="text-left">
								Provincie
							</th>
						</tr>
						</thead>
						<tbody>
						<tr
								v-for="item in desserts"
								:key="item.adres"
						>
							<td>{{ item.adres }}</td>
							<td>{{ item.telefoonnummer }}</td>
							<td>{{ item.provincie }}</td>
						</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=nl&amp;q=Stationsstraat%2028,%207005%20AT%20Doetinchem+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.mapsdirections.info/nl/cirkel-straal-kaart/">Meet cirkel op kaart</a></div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data () {
			return {
				desserts: [
					{
						adres: 'Stationsstraat 28, 7005 AT Doetinchem',
						telefoonnummer: '06 11263861',
						provincie: 'Gelderland',
					},
				],
			}
		},
	}
</script>