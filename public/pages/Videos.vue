<template>
	<div class="md:px-16 md:py-3  overflow-hidden">
		<div class="mx-auto w-full lg:w-901 px-2 md:px-0 md:my-12 my-6 flex flex-col">
			<div class="flex flex-row items-baseline">
      			
      			<router-link to="/" class="text-custom-200 text-lg mr-2">< Back</router-link>
      			/
      			<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-custom-200 text-center">Video Playlist</h3>
      		</div>

	      	<div v-if="!loading" >

		        <div class="mt-4 w-full flex flex-col md:flex-row flex-wrap">
				
		        <div v-for="video in videos" >
		        	
		        	<div @click="openModal(video)" class="relative flex flex-col w-full md:w-full lg:w-300 h-auto  rounded-lg overflow-hidden p-3 rounded-lg ">
						<img class="w-full md:w-56 lg:w-full  h-64 object-cover rounded-lg  object-center cursor-pointer hover:bg-gray-300" :src="`${video.videoImage}`">
		  				<h4 class="text-custom-100 text-lg text-center">{{ video.title }}</h4>
		  				<svg class="absolute top-0 right-0 mt-24 mr-24 h-16 w-16 text-custom-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"/></svg>
		        	</div>
		        </div>
		        </div>
		       

	        </div>

	        <div v-else class="md:mt-10 mt-4 flex flex-row items-center justify-center">
	            <div class=" flex justify-center items-center">

			        <Loader></Loader>
 
			    </div>
	        </div>  

	        <div :class="(singleModal) ? 'fixed-modal' : 'hidden'" class="z-20 bg-gray-100">
			<div v-if="selected" class="relative h-screen w-full px-10 py-6 flex flex-col md:flex-row">
				<div class="absolute inset-0 bg-gray-100 z-0" @click="()=>{
	      					this.selected = null; 
	      					this.singleModal = false ;
	      				}">
					
				</div>
				<div class="mx-auto w-full md:w-2/3 z-10">
					<div class="w-full flex flex-row justify-between items-baseline mb-3">
	      				<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-custom-200 text-center">{{ selected.title }}</h3>
	      				<h3 class="text-custom-200 text-lg md:text-2xl mr-2 hover:shadow-md cursor-pointer" @click="()=>{
	      					this.selected = null; 
	      					this.singleModal = false ;
	      				}">< Back</h3>
	      				
	      			</div>
				
	      			<div class="w-full bg-black text-custom-200">
	      				
	      				<iframe class="w-full h-64  md:h-500 rounded-lg" :src="`${selected.videoUrl}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	      				
	      			</div>
				</div>

			</div>
			</div>
        </div>
	</div>
</template>
<script>
import carousel from 'vue-owl-carousel';
import Loader from '../partials/Loader';

export default {
	name : 'Videos',
	data(){
		return {
			singleModal : false,
			selected : null,
			videos :[
	        	{
	        		id : "1",
		        	videoImage: "/images/swan-song-video.jpg",
		        	videoUrl : "https://www.youtube.com/embed/kO8fTk6oKQg",
		        	title : 'Swan Song'
	        	},
	        	{
	        		id : "2",
		        	videoImage: "/images/DGAF.jpg",
		        	videoUrl : "https://www.youtube.com/embed/Mgfe5tIwOj0",
		        	title : 'IGDF'
	        	},
	        	{
	        		id : "3",
		        	videoImage: "/images/new-rules.png",
		        	videoUrl : "https://www.youtube.com/embed/k2qgadSvNyU",
		        	title : 'New Rules'
	        	},
	        	{
	        		id : "4",
		        	videoImage: "/images/hotter-than-hell.jpg",
		        	videoUrl : "https://www.youtube.com/embed/fEOyePhElr4",
		        	title : 'Hotter Than Hell'
	        	},
	        	{
	        		id : "5",
		        	videoImage: "/images/one-kiss-video.jpg",
		        	videoUrl : "https://www.youtube.com/embed/DkeiKbqa02g",
		        	title : 'One Kiss'
	        	},
	        	{
	        		id : "6",
		        	videoImage: "/images/elctricity-video.jpg",
		        	videoUrl : "https://www.youtube.com/embed/Q4-jOuHO-z4",
		        	title : 'Electricity'
	        	}
	        ],
	    	loading: false
		}
	},
	methods: {
		openModal(data){
    		// console.log(?data);
    		this.selected = data;
    		this.singleModal = true;
	    }
	},
	components:{
	  	carousel , Loader
	}
}
</script>
<style scoped="">
	.fixed-modal{
		display: block;
		position: fixed;
    	top: 0;
    	left:0;
    	width: 100%;
    	height: auto;
	}
</style>