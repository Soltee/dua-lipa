<template>
	<div class="relative  md:px-16 md:py-3  overflow-hidden">
		<div class="mx-auto w-full lg:w-901 px-2 md:px-0 md:my-12 my-6 flex flex-col">
			<div class="flex flex-row items-baseline">
      			<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-custom-200 text-center">Latest News</h3>
      		</div>
			<div v-if="!loading" class="mt-4">
				<div class="mt-4 w-full flex flex-col md:flex-row flex-wrap overflow-hidden">
				
		        <div v-for="n in news" >
		        	
		        	<div  class="bg-black flex flex-col w-full md:w-64 md:w-300  rounded-lg my-2 mx-0 md:mx-2 hover:shadow-md">
						<img @click="openModal(n)" class=" w-full    h-64 object-cover rounded-lg  object-center cursor-pointer" src="">
		  				<h4 class=" text-white text-lg p-2 mb-2 font-bold">{{ n.fields.title }}</h4>
			        	<p class="text-white p-2 font-semibold ">{{ n.fields.intro }}</p>
		        	</div>
		        </div>
		        </div>
				
			</div>
			<div v-else>
				<Loader></Loader>
			</div>
		</div>
		<div :class="(singleModal) ? 'fixed-modal' : 'hidden'" class="z-20 bg-black">
			<div v-if="selected" class="py-6 px-2 flex w-full sm:flex-row absolute justify-end rounded-lg w-full bg-black overflow-hidden">
				<div class="absolute inset-0 bg-black z-0" @click="()=>{
	      					this.selected = null; 
	      					this.singleModal = false ;
	      				}">
					
				</div>
				<div class="flex-1 z-10">
					<div class="flex flex-row items-baseline">
	      				<h3 class="text-white text-lg md:text-2xl mr-2 hover:text-gray-300 cursor-pointer" @click="()=>{
	      					this.selected = null; 
	      					this.singleModal = false ;
	      				}">< Back</h3>
	      				/
	      				<h3 class="m-0 ml-2 font-bold text-lg md:text-2xl text-white text-center">{{ selected.fields.title }}</h3>
	      			</div>

	      			<div class="text-white mt-4">
	      				<div  class="bg-black flex flex-col w-full   rounded-lg ">
							<img  class="w-full    h-64 object-cover rounded-lg  object-center cursor-pointer" :src="``">
				        	<p class="text-white p-2 font-semibold">
				        		{{ selected.fields.posts }}
				        	</p>
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
	name : 'News',
	data(){
		return {
			singleModal : false,
			selected : null,
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
	    	loading: false
		}
	},
	mounted(){
	  	// this.getLatestNews();
	  },
	  methods: {
	    // async getLatestNews(){
	    //   this.loading = true;
	    //   const all = await client.getEntries({
	    //       'content_type': 'duaNews', //duaMusics duaNews
	    //       order: '-sys.createdAt'
	    //     });
	    //   this.news = all.items;
	    //   this.loading = false;
	    // },
	    openModal(data){
    		this.selected = data;
    		this.singleModal = true;
	    }
	    ,
	    slugify(text)
		{
		    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
		}
	  },
	  components:{
	  	carousel , Loader
	  }
}
</script>
<style scoped>
	.fixed-modal{
		display: block;
		position: fixed;
    	top: 0;
    	left:0;
    	width: 400px;
    	height: 100vh;
	}
</style>