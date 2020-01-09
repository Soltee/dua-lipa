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
						<img @click="openModal(n)" class=" w-full    h-64 object-cover rounded-lg  object-center cursor-pointer" :src="`${n.fields.newsImage}`">
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
				<div class="flex-1 z-10 h-full overflow-y-scroll">
					<div class="flex flex-row items-baseline">
	      				<h3 class="text-white text-md md:text-lg mr-2 hover:text-gray-300 cursor-pointer" @click="()=>{
	      					this.selected = null; 
	      					this.singleModal = false ;
	      				}">< Back</h3>
	      				/
	      				<h3 class="m-0 ml-2 font-bold text-md md:text-lg text-white text-center">{{ selected.fields.title }}</h3>
	      			</div>

	      			<div class="text-white mt-4 ">
	      				<div  class="bg-black flex flex-col w-full   rounded-lg ">
							<img  class="w-full    h-64 object-cover rounded-lg  object-center cursor-pointer" :src="`${selected.fields.newsImage}`">
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
import carousel from 'vue-owl-carousel';
import Loader from '../partials/Loader';

export default {
	name : 'News',
	data(){
		return {
			singleModal : false,
			selected : null,
			news : [
				{
					fields: {
						newsImage:"/images/vote-for-britist-video-award.png",
						title : "Vote for British Video of the Year at the BRITs!",
						intro : "I’m competing with myself!! The BRITs voting for British Artist Video of the Year is now OPEN!! You guys can vote for me/us by tweeting either ...",
						posts : "I’m competing with myself!! The BRITs voting for British Artist Video of the Year is now OPEN!! You guys can vote for me/us by tweeting either #BRITVIDDUALIPA or #BRITVIDCALVINDUA on Twitter ❤️ you can only vote once every 24hrs, one hashtag at a time and sadly RT’s don’t count but please spread the word and CHOOSE YOUR FIGHTERRRR ha! Love xxx"
					},
					sys : {id : "1"}

				},
				{
					fields: {
						newsImage:"/images/win-61-aaward.jpg",
						title : "BEST DANCE RECORDING AND BEST NEW ARTIST AT THE 61ST GRAMMY AWARDS!!",
						intro : "I am a two time grammy winnin artist!!!! Beyond humbled and grateful for this moment. Sending so much love to my fans, my family, my team, all the incredible artists i’ve worked with and collaborated with. A real dream come true!!! THANK YOU!!",
						posts : "I am a two time grammy winnin artist!!!! Beyond humbled and grateful for this moment. Sending so much love to my fans, my family, my team, all the incredible artists i’ve worked with and collaborated with. A real dream come true!!! THANK YOU!! I feel like i blacked out during this part of the night but i think i pulled it through. So many people I didn’t get the chance to thank because my brain wasn’t working properly. I want to thank my band and especially @williambowerman @willnich@peterabbott17 for last night, for their dedication and love and for being such amazing friends too. My label @wbr from the UK all the way to the US, @lorenzoposocco who always makes me feel good on the inside and look good on the outside, @lornajblackwood for helping me take the best care of my voice, @iammarkronson @diplo @st_vincent all for making last night so special, @permpressmedia Kathy you are a boss woman and I couldn’t have done this without you and again my family, my friends AND MY FANS!!! I LOVE YOU ALL SO MUCH! Thank youu ❤️"
					},
					sys : {id : "2"}

				},
				{
					fields: {
						newsImage:"/images/getting-my.jpg",
						title : "Getting my own wax figure at London’s Madame Tussauds!",
						intro : "Last week I went to the unveiling of my Madame Tussaud’s London wax figure. I feel like I played it cool until I saw it in real life and felt like i was playing a staring game to see if it would blink. Totally surreal. Thank you to all the lovely...",
						posts : "Last week I went to the unveiling of my Madame Tussaud’s London wax figure. I feel like I played it cool until I saw it in real life and felt like i was playing a staring game to see if it would blink. Totally surreal. Thank you to all the lovely fans that came down to share this moment with me!! I’ve missed you all so much 💕 also who can guess where the outfit on the waxwork is from? @madametussauds xx"
					},
					sys : {id : "3"}

				},
				{
					fields: {
						newsImage:"/images/best-britist-artist.jpg",
						title : "Best British Single at the BRITs!",
						intro : "BRITISH SINGLE OF THE YEAR @calvinharris ONE KISS!! Craaaaazy!!!! Thank you thank y",
						posts : "BRITISH SINGLE OF THE YEAR @calvinharris ONE KISS!! Craaaaazy!!!! Thank you thank you thank you @brits 💕💕💕 "
					},
					sys : {id : "4"}

				},
				{
					fields: {
						newsImage:"/images/i-am-libre.jpg",
						title : "IAM LIBRE",
						intro : "LIBRE the new fragrance by YSL Beauty !!! Such a dream working with this incredible team and one of my favourite… ",
						posts : "LIBRE the new fragrance by YSL Beauty !!! Such a dream working with this incredible team and one of my favourite people ever @nabildo who killed thisss whole project! So excited for you to see what we have in store for youuu! Still pinching myself. "
					},
					sys : {id : "4"}

				}
			],
	    	loading: false
		}
	},
	methods: {
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