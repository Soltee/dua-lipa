<template>
	<div class="md:px-16 md:py-3  overflow-hidden">
		<div class="mx-auto w-full lg:w-901 px-2 md:px-0 md:my-12 my-6 flex flex-col">
			<div class="flex flex-row items-baseline">
      			
      			<router-link to="home" class="text-custom-200 text-lg mr-2">< Back</router-link>
      			/
      			<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-custom-200 text-center">Video Playlist</h3>
      		</div>

	      	<div v-if="!loading" >
		        <!-- <carousel class="mx-auto" :responsive="{0:{items:1,nav:false},600:{items:3, nav:false}}"  :nav="false">
		        	<div v-for="video in videos"  class="flex flex-row items-center justify-center">
			        	<img class="w-64 md:h-64 object-cover object-center" :src="`https:${video.fields.videoImage.fields.file.url}`">
					</div>
		        </carousel> -->

		        <div class="mt-4 w-full flex flex-col md:flex-row flex-wrap">
				
		        <div v-for="video in news" >
		        	
		        	<div @click="openModal(video.sys.id)" class="flex flex-col w-full md:w-full lg:w-300 h-auto  rounded-lg overflow-hidden p-3 rounded-lg">
						<img class="w-full md:w-56 lg:w-full  h-64 object-cover rounded-lg  object-center cursor-pointer" src="">
		  				<h4>Hello</h4>
		        	</div>
		        </div>
		        </div>
		       

	        </div>

	        <div v-else class="md:mt-10 mt-4 flex flex-row items-center justify-center">
	            <div class=" flex justify-center items-center">

			        <Loader></Loader>

			    </div>
	        </div>  

	        <div :class="(singleModal) ? 'fixed-modal' : 'hidden'" class="z-20 bg-gray-200">
			<div class="h-screen w-full px-10 py-6 flex flex-col md:flex-row">
			
				<div class="mx-auto w-full md:w-2/3">
					<div class="w-full flex flex-row justify-between items-baseline mb-3">
	      				<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-custom-200 text-center">Current Video</h3>
	      				<h3 class="text-custom-200 text-lg md:text-2xl mr-2 hover:shadow-md cursor-pointer" @click="()=>{
	      					this.selected = null; 
	      					this.singleModal = false ;
	      				}">< Back</h3>
	      				
	      			</div>

	      			<div class="w-full bg-black text-custom-200">
	      				<iframe class="w-full h-64  md:h-500 rounded-lg" :src="``" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	      			</div>
				</div>

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
	name : 'Videos',
	data(){
		return {
			singleModal : false,
			selected : null,
			videos : null,
			news : [
				{
					fields: {
						videoImage:{
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
						videoImage:{
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
						videoImage:{
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
						videoImage:{
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
	    	loading: false
		}
	},
	mounted(){
	  	//this.getLatestVideos();
	},
	methods: {
		openModal(data){
    		console.log(data);
    		this.selected = data;
    		this.singleModal = true;
	    }
	  //   ,async getLatestVideos(){
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
<style></style>