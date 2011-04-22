<?php 
class HomePage extends Page
{
	static $has_one = array (
	);
 
 
	public function getCMSFields() {
		$f = parent::getCMSFields();
 
		return $f;
	}
}

class HomePage_Controller extends Page_Controller
{
	

}
