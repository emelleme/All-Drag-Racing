<?php 
class DVDPage extends Page
{
	
	
	static $has_one = array (
		'VideoImage' => 'Image'
	);
 
 
	public function getCMSFields() {
		$f = parent::getCMSFields();
 		$f->addFieldToTab('Root.Content.Main', new ImageField('VideoImage', 'Video Thumbnail'),'MenuTitle');
		return $f;
	}
}

class DVDPage_Controller extends Page_Controller
{
	public function init() {
		parent::init();
		
		//Check to see if Member is logged in and is a member of the safecam group
		/*if($member = Member::currentUser()){
			$dragmember = $member->inGroup('subscribers');
			if(!$dragmember){
				//Redirect User to login
				Director::redirect("/in");
			}else{
				ContentNegotiator::set_encoding('UTF-8');
			}
		}else{
			Director::redirect("/Security/login?BackURL=%2F".urlencode($this->URLSegment));
		}*/
	}
	
	public function FirstVideo(){
		$url = Director::urlParams();
		$vids = DataObject::get_one('VideoPage','ParentID='.$this->ID);
		return($vids);
	}
	
	public function Playlist(){
		$vids = DataObject::get('VideoPage','ParentID='.$this->ID,false,false);
		return $vids;
	}
	

}
