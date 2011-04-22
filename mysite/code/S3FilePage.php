<?php 
class S3FilePage extends Page
{
	static $has_one = array (
		'S3Test' => 'S3File'
	);
 
 
	public function getCMSFields() {
		$f = parent::getCMSFields();
		$f->addFieldToTab("Root.Content.S3 Storage", $s3 = new S3UploadField('S3Test','Send a file to Amazon S3'));
                $s3->setVar('s3bucket', 'alldragracing');
 
		return $f;
	}
}
