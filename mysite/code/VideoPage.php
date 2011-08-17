<?php 
class VideoPage extends Page
{
	static $db = array (
		'VideoLink' => 'Varchar',
		'TotalPlays' => 'Int'
	);
	
	static $has_one = array (
		'VideoImage' => 'Image'
	);
	
	static $defaults = array(
				'TotalPlays' => 0
			);
	
	/* function canView() { 
		if($member = Member::CurrentUser())
		{
			if($member->inGroup('subscribers')){
				return true;
			}else{
				return false;
			}	
		}else{
			return false;
		}
	}*/
 
 
	public function getCMSFields() {
		$f = parent::getCMSFields();
 		$f->addFieldToTab('Root.Content.Main', new TextField('VideoLink', 'Insert the Video Link (e.g. war_on_wheels/VST01.mv4)'), 
'MenuTitle');
		$f->addFieldToTab('Root.Content.Main', new ImageField('VideoImage', 'Video Thumbnail'),'VideoLink');
		return $f;
	}
}

class VideoPage_Controller extends Page_Controller
{
	public function init() {
		parent::init();
		
		//Check to see if Member is logged in and is a member of the safecam group
		if($member = Member::currentUser()){
			$dragmember = $member->inGroup('subscribers');
			if($dragmember){
				ContentNegotiator::set_encoding('UTF-8');
				//Increase Member Total Play Count
				//$d = DataObject::get_by_id('Member',$member->ID);
				//$d->TotalImpressions = $d->TotalImpressions +1;
				//$d->write();
			}else{
			 Director::redirect('/subscribe');
			}
		}
	}
	
	public function MetaTags($includeTitle = true) {
		$tags = "";
		if($includeTitle === true || $includeTitle == 'true') {
			$tags .= "<title>" . Convert::raw2xml(($this->MetaTitle)
				? $this->MetaTitle
				: $this->Title) . "</title>\n";
		}

		$charset = ContentNegotiator::get_encoding();
		$tags .= "<meta http-equiv=\"Content-type\" content=\"text/html; charset=$charset\" />\n";
		/*if($this->MetaKeywords) {
			$tags .= "<meta name=\"keywords\" content=\"" . Convert::raw2att($this->MetaKeywords) . "\" />\n";
		}
		if($this->MetaDescription) {
			$tags .= "<meta name=\"description\" content=\"" . Convert::raw2att($this->MetaDescription) . "\" />\n";
		}
		if($this->ExtraMeta) { 
			$tags .= $this->ExtraMeta . "\n";
		} */
		$parent = $this->getParent();
		$image = $this->VideoImage();
		$imgurl = $image->getAbsoluteUrl();
		$thispage = $this->getAbsoluteLiveLink(false);
		//Facebook Meta tags
		$tags .= "<meta property=\"fb:app_id\" content=\"207604255917606\"/>\n";
		$tags .= "<meta property=\"og:title\" content=\"$parent->Title | AllDragRacing.tv\" />\n";
		$tags .= "<meta property=\"og:url\" content=\"$thispage\"/>\n";
		$tags .= "<meta property=\"og:type\" content=\"movie\"/>\n";
		$tags .= "<meta property=\"og:image\" content=\"$imgurl\"/>\n";
		$tags .= "<meta property=\"og:site_name\" content=\"AllDragRacing.tv\"/>\n";
		$tags .= "<meta property=\"og:description\" content=\"" . Convert::raw2att($parent->MetaDescription) . "\"/>\n";
		
		$this->extend('MetaTags', $tags);

		return $tags;
	}
	
	public function TotalPlays(){
				$this->TotalPlays++;
				$d = DataObject::get_by_id('VideoPage',$this->ID);
				$d->TotalPlays = $this->TotalPlays;
				$d->write();
				return $this->TotalPlays;
	}
	
	public function FullLink(){
		$protocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']),'https') 
                === FALSE ? 'http' : 'https';
		$host     = $_SERVER['HTTP_HOST'];
		$params = Director::urlParams();
		$currentUrl = $protocol . '://' . $host .  '/' . $params['URLSegment'] . '/' . $params['Action'];
		return $currentUrl;
	}
		
	public function Playlist(){
		$vids = DataObject::get('VideoPage','ParentID='.$this->ParentID,false,false);
		return $vids;
	}
				

}
