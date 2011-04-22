<?php

if(isset($_POST['PHPSESSID'])) {
	Session::start($_POST['PHPSESSID']);
}
S3File::set_auth('0VT8E2AZ1QFFYJWAKA82', 'X7h0KeunPabZ+X118aLXHTaVeLFzIvCRJx8AMBx0');
S3File::set_default_bucket('alldragracing');
