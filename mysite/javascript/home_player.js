$f("top_player", "mysite/swf/flowplayer-3.2.5.swf", { 
	//  This next code configures the player to use rtmp plugin for streaming. 
		clip: { 
			url: 'mp4:promo_videos/All_Drag_Racing_Network.m4v',
			autoPlay: false,
        	autoBuffering: true,
        	provider: 'rtmp'
		}, 
	// Here is our rtpm plugin configuration 
		plugins: {
			controls: {
			
			backgroundColor: "transparent",
			backgroundGradient: "none",
			sliderColor: '#FFFFFF',
			sliderBorder: '1.5px solid rgba(160,160,160,0.7)',
			volumeSliderColor: '#FFFFFF',
			volumeBorder: '1.5px solid rgba(160,160,160,0.7)',
 
			timeColor: '#ffffff',
			durationColor: '#AE0707',
 
			tooltipColor: 'rgba(255, 255, 255, 0.7)',
			tooltipTextColor: '#000000'
		},	  
	  		rtmp: {  
			url: 'http://s3.amazonaws.com/alldragracing/flowplayer.rtmp-3.2.3.swf',		
			
/*
	"netConnectionUrl" below defines where the streams are found;
	this URL is specific to Amazon CloudFront. it is the address you are given when you made a streaming distribution of the bucket in which your video resides, ending in .cloudfront.net. YOU *MUST* ADD "/cfx/st" IN ORDER TO ENSURE THAT YOUR VIDEO WILL STREAM. Mine would read 'rtmp://s1jng015tymskd.cloudfront.net/cfx/st'
*/
netConnectionUrl: 'rtmp://s2p3ryxd78qjd5.cloudfront.net/cfx/st'  
	  	} 
}	     
});
