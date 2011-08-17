<?php 
class ProducerPage extends Page
{
	static $db = array (
		'Website' => 'Varchar'
	);
	
	static $has_one = array (
		'ProducerLogo' => 'Image'
	);
 
 
	public function getCMSFields() {
		$f = parent::getCMSFields();
		$f->renameField('Title','Producer Name');
		$f->addFieldToTab('Root.Content.Main', new TextField('Website', 'Website'),'MenuTitle');
 		$f->addFieldToTab('Root.Content.Main', new ImageField('ProducerLogo', 'Producer Logo'),'MenuTitle');
		return $f;
	}
}

class ProducerPage_Controller extends Page_Controller
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
		} */
		
	}
	
	public function ProducerVideos(){
		$vids = DataObject::get('VideoHolderPage',false,"Rand()",false,'10');
		return $vids;
	}
	
	
	

}
