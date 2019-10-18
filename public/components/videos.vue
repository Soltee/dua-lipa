<template>
	<div class="md:px-16 md:py-3  overflow-hidden">
		<div class="mx-auto w-full md:w-901 px-2 md:px-0 md:my-12 my-6">
      		<div class="flex flex-row justify-between">
      			<h3 class="m-0   font-bold text-lg md:text-2xl text-custom-200 text-center">Latest Video</h3>
      			<router-link to="videos" class="text-custom-200 text-md">View All</router-link>
      		</div>

	      	<div v-if="!loading" >
		        <carousel class="md:mt-10 mt-4" :items="1" :nav="false">
		        	<div  v-for="video in videos"  class="flex flex-row items-center justify-center">
		        		<iframe class="w-full h-64  md:h-500" :src="`${video.fields.videoUrl}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		            </div>
				</carousel>
	        </div>

	        <div v-else class="md:mt-10 mt-4 flex flex-row items-center justify-center">
	            <div class=" flex justify-center items-center">

			        <Loader></Loader>

			    </div>
	        </div>  
        </div>
    	<!--END OF LATEST VIDEO-->
    
    	<div class="mx-auto w-full md:w-901 px-2 md:my-12 my-6">
	        <h3 class="m-0 font-bold flex flex-row text-lg md:text-2xl text-custom-200 text-center">Around the World</h3>
	        <div v-if="!loading" class="mt-4 md:mt-10">
		        <carousel class="mx-auto" :responsive="{0:{items:1,nav:false},600:{items:3, nav:false}}"  :nav="false">
		        	<div v-for="video in videos"  class="flex flex-row items-center justify-center">
			        	<img class="w-64 h-64 object-cover object-center" :src="`https:${video.fields.videoImage.fields.file.url}`">
					</div>
		        </carousel>
	        </div>
	        <div v-else class="md:mt-10 flex flex-row items-center justify-center">
	           <div class="flex justify-center items-center">
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
	  name: 'videos',
	  data () {
	    return {
	      videos : null,
	    	loading: false
	    }
	  }, 
	  mounted(){
	  	//this.getLatestVideos();
	  },
	  methods: {
	  //   async getLatestVideos(){
	  //     this.loading = true;
	  //     const all = await client.getEntries({
	  //         'content_type': 'duaVideos', //duaMusics duaNews
	  //         order: '-sys.createdAt',
	  //         limit: 4
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

<style lang="css">

	.w-901{width: 900px;}
</style>