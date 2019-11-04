<template>
	<div class="md:px-16 md:py-3  overflow-hidden">
		<div class="mx-auto w-full lg:w-901 px-2 md:px-0 md:my-12 my-6 flex flex-col">
			<div class="flex flex-row items-baseline">
      			<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-custom-200 text-center">Latest Musics</h3>
      		</div>
	      	<div v-if="!loading" class="mt-4">
		        
		        <div class="mt-4 w-full flex flex-col md:flex-row flex-wrap overflow-hidden">
				
		        <div v-for="music in musics" >
		        	<div  class="music relative bg-black flex flex-col w-full md:w-3/3 md:w-300  rounded-lg my-2 mx-0 md:mx-2 overflow-hidden">
						<img @click="slideInfo(music.id)" class="w-full    h-64 object-cover rounded-lg  object-center cursor-pointer" :src="`${music.image}`">
		  				
		  				<div class="music-detail offset absolute top left-0 h-full w-full flex flex-col items-center bg-black">
		  					<h4 class="text-white text-lg p-2 mb-2 font-bold">{{ music.name }}</h4>
		  					<div class="flex">
		  						<a :href="`${music.links.itunes}`">
		  							<svg class="w-10 h-10 text-white text-bold " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.6 80.3C129 80.3 52.5 157 52.5 251.5S129 422.8 223.6 422.8s171.2-76.7 171.2-171.2c0-94.6-76.7-171.3-171.2-171.3zm79.4 240c-3.2 13.6-13.5 21.2-27.3 23.8-12.1 2.2-22.2 2.8-31.9-5-11.8-10-12-26.4-1.4-36.8 8.4-8 20.3-9.6 38-12.8 3-.5 5.6-1.2 7.7-3.7 3.2-3.6 2.2-2 2.2-80.8 0-5.6-2.7-7.1-8.4-6.1-4 .7-91.9 17.1-91.9 17.1-5 1.1-6.7 2.6-6.7 8.3 0 116.1.5 110.8-1.2 118.5-2.1 9-7.6 15.8-14.9 19.6-8.3 4.6-23.4 6.6-31.4 5.2-21.4-4-28.9-28.7-14.4-42.9 8.4-8 20.3-9.6 38-12.8 3-.5 5.6-1.2 7.7-3.7 5-5.7.9-127 2.6-133.7.4-2.6 1.5-4.8 3.5-6.4 2.1-1.7 5.8-2.7 6.7-2.7 101-19 113.3-21.4 115.1-21.4 5.7-.4 9 3 9 8.7-.1 170.6.4 161.4-1 167.6zM345.2 32H102.8C45.9 32 0 77.9 0 134.8v242.4C0 434.1 45.9 480 102.8 480h242.4c57 0 102.8-45.9 102.8-102.8V134.8C448 77.9 402.1 32 345.2 32zM223.6 444c-106.3 0-192.5-86.2-192.5-192.5S117.3 59 223.6 59s192.5 86.2 192.5 192.5S329.9 444 223.6 444z"/></svg>
		  						</a>
		  						<a :href="`${music.links.spotify}`">
		  							<svg class="w-10 h-10 text-white text-bold " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
		  						</a>

		  					</div>
		  				</div>
		        	</div>
		        </div>
		        </div>

	        </div>

	        <div v-else class="md:mt-10 mt-4 flex flex-row items-center justify-center">
	            <div class=" flex justify-center items-center">

			        <Loader></Loader>

			    </div>
	        </div>  
        </div>
	</div>
</template>
<script>
import carousel from 'vue-owl-carousel';
import Loader from '../partials/Loader';


export default {
	name : 'Musics',
	data(){
		return {
			slide: false,
	    	loading: false,
	    	musics : [
	    		{
	    			id : "1",
	    			type : 'single',
	    			image : "/images/be-the-one-music.jpg",
	    			name : "Be the One",
	    			links : {
	    				spotify : "https://spotify.com",
	    				itunes : "https://itunes.com"
	    			}
	    		},
	    		{
	    			id : "2",
	    			type : 'single',
	    			image : "/images/last-dance-music.png",
	    			name : "Last dance",
	    			links : {
	    				spotify : "https://dualipa.com/music/#",
	    				itunes : "https://itunes.apple.com/gb/album/last-dance-single/id1077776427"
	    			}
	    		},
	    		{
	    			id : "3",
	    			type : 'album',
	    			image : "/images/DGAF.jpg",
	    			name : "IDGAF (Remixes II)",
	    			links : {
	    				spotify : "https://open.spotify.com/album/4M7slCAvVUFZLYICsgY3xq?si=ak8QQ9a3TvuwmblkSkfWxA",
	    				itunes : "https://itunes.apple.com/gb/album/idgaf-remixes-ii-ep/1376572320"
	    			}
	    		},
	    		{
	    			id : "4",
	    			type : 'single',
	    			image : "/images/swan-song-music.jpg",
	    			name : "Swan Song (From Alita Battle Angel)",
	    			links : {
	    				spotify : "https://open.spotify.com/album/429B3se6xtZuvblNnS2iy7?si=JwEyBZBcSiysjl7ExnARcw",
	    				itunes : "https://itunes.apple.com/gb/album/electricity-feat-diplo-mark-ronson-single/1434745598"
	    			}
	    		},
	    		{
	    			id : "5",
	    			type : 'single',
	    			image : "/images/new-rules-live.png",
	    			name : "New Rules (Live)",
	    			links : {
	    				spotify : "https://open.spotify.com/album/6pobOtMOg9Fa4gqwIcZulc?si=kpQH9DxfQsCHxEsKCDqIxA",
	    				itunes : "https://itunes.apple.com/gb/album/new-rules-live-at-the-brits-single/1350457501"
	    			}
	    		}
			],
		}
	},
	mounted(){
	  	this.slideOut();
	},
	methods: {
		slideOut(){
			let musics = document.querySelectorAll('.music');
			musics.forEach((m) => {

			let details = m.querySelector('.music-detail');
				m.addEventListener("mouseover", (e) => {
					details.classList.remove('offset');
					details.classList.add('inset');
					m.classList.add('.offset');
				});

				m.addEventListener("mouseleave", (e) => {
					details.classList.add('offset');
					details.classList.remove('inset');
					m.classList.remove('.offset');
				});
			});
		},
		slideInfo(){
			this.slide = ! this.slide;
		}
	  
	},
	components:{
	  	carousel , Loader
	}
}
</script>
<style scoped>
	.offset{
		transition: all 0.4s ease-in-out;
		opacity: 0;
		transform: translateX(100%);
	}
	.inset{
		transition: all 0.4s ease-in-out;
		transform: translateX(0);
		opacity: 1;
	}
</style>