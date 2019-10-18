<template>
	<div class="md:px-16 md:py-3  overflow-hidden">
		<div class="mx-auto w-full lg:w-901 px-2 md:px-0 md:my-12 my-6 flex flex-col">
			<div class="flex flex-row items-baseline">
      			<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-custom-200 text-center">Latest Musics</h3>
      		</div>
	      	<div v-if="!loading" class="mt-4">
		        
		        <div class="mt-4 w-full flex flex-col md:flex-row flex-wrap overflow-hidden">
				
		        <div v-for="n in news" >
		        	
		        	<div  class="music relative bg-black flex flex-col w-full md:w-3/3 md:w-300  rounded-lg my-2 mx-0 md:mx-2 overflow-hidden">
						<img @click="slideInfo(n.sys.id)" class="w-full    h-64 object-cover rounded-lg  object-center cursor-pointer" src="">
		  				
		  				<div class="music-detail offset absolute top left-0 h-full w-full flex flex-col items-center">
		  					<h4 class="text-white text-lg p-2 mb-2 font-bold">{{ n.fields.title }}</h4>
			        		<p class="text-white p-2 font-semibold">{{ n.fields.intro }}</p>
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
import {createClient} from '../contentful'
import carousel from 'vue-owl-carousel';
import Loader from '../partials/Loader';

const client = createClient();

export default {
	name : 'Musics',
	data(){
		return {
			slide: false,
			musics : null,
	    	loading: false,
	    	news : [
				{
					fields: {
						newsImage:{
							fields:{
								file:{url:"hello"}
							}
						},
						title : "One",
						intro : "Here goes the intro haha suckers",
						posts : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					sys : {id : "1"}

				},
				{
					fields: {
						newsImage:{
							fields:{
								file:{url:"hello"}
							}
						},
						title : "Two",
						intro : "Here goes the intro haha suckers",
						posts : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					sys : {id : "2"}

				},
				{
					fields: {
						newsImage:{
							fields:{
								file:{url:"hello"}
							}
						},
						title : "Three",
						intro : "Here goes the intro haha suckers",
						posts : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					sys : {id : "3"}

				},
				{
					fields: {
						newsImage:{
							fields:{
								file:{url:"hello"}
							}
						},
						title : "Four",
						intro : "Here goes the intro haha suckers",
						posts : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					sys : {id : "4"}

				}
			],
		}
	},
	mounted(){
	  	//this.getLatestVideos();
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
				});

				m.addEventListener("mouseleave", (e) => {
					details.classList.add('offset');
					details.classList.remove('inset');
				});
			});
		},
		slideInfo(){
			this.slide = ! this.slide;
		}
	  //   async getLatestVideos(){
	  //     this.loading = true;
	  //     const all = await client.getEntries({
	  //         'content_type': 'duaVideos', //duaMusics duaNews
	  //         order: '-sys.createdAt'
	  //       });
	  //     this.videos = all.items;
	  //     this.loading = false;
	  //   }
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