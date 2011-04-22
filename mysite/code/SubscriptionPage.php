<?php 
class SubscriptionPage extends Page
{
	static $has_one = array (
	);
 
	public function getCMSFields() {
		$f = parent::getCMSFields();
 
		return $f;
	}
}

class SubscriptionPage_Controller extends Page_Controller
{
	public function init(){
		parent::init();
		if(!Session::get('RegisteredEmail')){
			if($member = Member::currentUser()){
				if(!$member->inGroup('registered-users')){
					Director::redirect('/register?nogroup');
				}else{
					Session::set('RegisteredEmail',$member->Email);
				}
			}else{
				Director::redirect('Security/login?backURL=/subscribe');
			}
		}
	}
	
	public function test(){
		var_dump($member = Member::currentUser());
	}
	
	public function RegisteredEmail(){
		$email = Session::get('RegisteredEmail');
		return $email;
	}
	
	public function confirm(){
		//var_dump($this->request);
		$adminemail = new Email('lloyd@emelle.me', 'lloyd@emelle.me', "New Subscription Complete");
        $adminemail->setTemplate('NewSubscriptionEmail'); 
        $d = array(
        	'data' => $this->request
    	);
    	$adminemail->populateTemplate($d);
		//All set. Clean up and redirect User to submission Complete Page
		//send mail
        $adminemail->send();
        var_dump($adminemail);
	}
	
	public function cancel(){
		Director::redirect('/register');
	}
	
	public function success(){
		//var_dump($this->request);
		$user = DataObject::get_one('Member', "Email='".Session::get('RegisteredEmail')."'");
        $user->addToGroupByCode('subscribers');
        $adminemail = new Email('lloyd@emelle.me', 'lloyd@emelle.me', "New All Drag Racing Subscription: ".Session::get('RegisteredEmail'));
    	$adminemail->populateTemplate($d);
		//All set. Clean up and redirect User to submission Complete Page
		//send mail
        $adminemail->send();
        Session::clear('RegisteredEmail');
        Director::redirect('/videos');
	}

}
