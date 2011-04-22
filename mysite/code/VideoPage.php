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
	
	function canView() { 
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
	}
 
 
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
			if(!$dragmember){
				//Redirect User to login
				Director::redirect("/in");
			}else{
				ContentNegotiator::set_encoding('UTF-8');
				//Increase Member Total Play Count
				$d = DataObject::get_by_id('Member',$member->ID);
				$d->TotalImpressions = $d->TotalImpressions +1;
				$d->write();
			}
		}
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
