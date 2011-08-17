<?php 
class RegistrationPage extends Page
{
	static $has_one = array (
	);
 
	public function getCMSFields() {
		$f = parent::getCMSFields();
 
		return $f;
	}
}

class RegistrationPage_Controller extends Page_Controller
{
	public function init(){
		parent::init();
	
		/* if(!Session::get('skipfb')){
			$facebook = new Facebook(array(
			  'appId'  => '207604255917606',
			  'secret' => '8f37c6b77dbf8ce43d319200f73c010f',
			  'cookie' => true, // enable optional cookie support
			));
			$session = $facebook->getSession();
		
			if (@$session) {
			  try {
				$uid = $facebook->getUser();
				$me = $facebook->api('/me');
				//Facebook User, Check to see if they are a registered User.
				$user = DataObject::get_one('Member', "Email='".$me['email']."'");
				if($user->inGroup('registered-users')){
					//User is A registered member! Log them in and direct them to the videos page
					$user->logIn();
				
					//Check to see if the user has subscribed
					if($user->inGroup('subscribers')){
						Director::redirect('/videos');
					}else{
						Director::redirect('/subscribe');
					}
				}else{
					Session::set('skipfb', true);
				}
			  } catch (FacebookApiException $e) {
				error_log($e);
			  }
			}
		}else{
			Session::clear('skipfb');
		} */
	}
	
	public function count(){
		var_dump($this->request->postVars());
	}

	public function process(){
		define('FACEBOOK_APP_ID', '207604255917606');
		define('FACEBOOK_SECRET', '8f37c6b77dbf8ce43d319200f73c010f');

		$response = $this->parse_signed_request($_REQUEST['signed_request'], 
				                   FACEBOOK_SECRET);
		if($response){
			//Check to see if email is already registered
			$member = DataObject::get_one('Member',"Email ='".$response['registration']['email']."'");
			if($member){
				$member->addToGroupByCode('registered-users');
				Director::redirect('/subscribe');
			}else{
				//Add new member to the database
				$member = new Member;
				$member->FirstName = $response['registration']['name'];
				$member->Surname = $response['registration']['name'];
				$member->Email = $response['registration']['email'];
				$member->Location = $response['registration']['location']['name'];
				$member->Gender = $response['registration']['gender'];
				$member->CarBrand = $response['registration']['carbrand'];
				
				$member->write();
				$member->changePassword($response['registration']['password']);
				$member->addToGroupByCode('registered-users');
				$member->write();
				
				if($current = Member::currentUser()){
				$current->logOut();
				}
				$member->logIn();
				
				Session::set('RegisteredEmail',$member->Email);
				Director::redirect('/subscribe');
			}
		}
	}
	
	public function test(){
		$facebook = new Facebook(array(
		  'appId'  => '207604255917606',
		  'secret' => '8f37c6b77dbf8ce43d319200f73c010f',
		  'cookie' => true, // enable optional cookie support
		));
		$session = $facebook->getSession();
		
		if (@$session) {
		  try {
			$uid = $facebook->getUser();
			$me = $facebook->api('/me');
			var_dump($me);
			exit;
		  } catch (FacebookApiException $e) {
			error_log($e);
		  }
		}
		//var_dump($session = $facebook->api('/emelleme'));
		
	}
	
	private function parse_signed_request($signed_request, $secret) {
	  list($encoded_sig, $payload) = explode('.', $signed_request, 2); 

	  // decode the data
	  $sig = $this->base64_url_decode($encoded_sig);
	  $data = json_decode($this->base64_url_decode($payload), true);

	  if (strtoupper($data['algorithm']) !== 'HMAC-SHA256') {
		error_log('Unknown algorithm. Expected HMAC-SHA256');
		return null;
	  }

	  // check sig
	  $expected_sig = hash_hmac('sha256', $payload, $secret, $raw = true);
	  if ($sig !== $expected_sig) {
		error_log('Bad Signed JSON signature!');
		return null;
	  }

	  return $data;
	}
	
	private function base64_url_decode($input) {
    return base64_decode(strtr($input, '-_', '+/'));
}

}
