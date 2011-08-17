<?php
class Page extends SiteTree {

	public static $db = array(
	);

	public static $has_one = array(
	);

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	public static $allowed_actions = array (
	);

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates 
		// instead of putting Requirements calls here.  However these are 
		// included so that our older themes still work
		Requirements::themedCSS('layout'); 
		Requirements::themedCSS('typography'); 
		Requirements::themedCSS('form'); 
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
		if($this->MetaKeywords) {
			$tags .= "<meta name=\"keywords\" content=\"" . Convert::raw2att($this->MetaKeywords) . "\" />\n";
		}
		if($this->MetaDescription) {
			$tags .= "<meta name=\"description\" content=\"" . Convert::raw2att($this->MetaDescription) . "\" />\n";
		}
		if($this->ExtraMeta) { 
			$tags .= $this->ExtraMeta . "\n";
		} 
		$thispage = $this->getAbsoluteLiveLink(false);
		//Facebook Meta tags
		$tags .= "<meta property=\"fb:app_id\" content=\"207604255917606\"/>\n";
		$tags .= "<meta property=\"og:title\" content=\"$this->Title\" />\n";
		$tags .= "<meta property=\"og:url\" content=\"$thispage\"/>\n";
		$tags .= "<meta property=\"og:type\" content=\"movie\"/>\n";
		$tags .= "<meta property=\"og:image\" content=\"http://alldragracing.tv/assets/logo-tv.jpg\"/>\n";
		$tags .= "<meta property=\"og:site_name\" content=\"AllDragRacing.tv\"/>\n";
		$tags .= "<meta property=\"og:description\" content=\"Full Content. Full Throttle. Join Today!\"/>\n";
		$this->extend('MetaTags', $tags);

		return $tags;
	}
	
	
	public function LatestVideos(){
		$vids = DataObject::get('VideoHolderPage',false,"Rand()",false,'10');
		return $vids;
	}
}
