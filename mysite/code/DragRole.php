<?php
/**
 * ForumRole
 *
 * This decorator adds the needed fields and methods to the {@link Member}
 * object.
 *
 * @package forum
 */
class DragRole extends DataObjectDecorator {

	/**
	 * Define extra database fields
	 *
	 * Return an map where the keys are db, has_one, etc, and the values are
	 * additional fields/relations to be defined
	 */
	function extraStatics() {
		$fields = array(
			'db' => array(
				'Location' => 'Varchar',
				'Gender' => 'Varchar',
				'CarBrand' => 'Varchar',
				'TotalImpressions' => 'Int'
			),
			'has_one' => array(
			),
			'has_many' => array(
			),
			'defaults' => array(
				'TotalImpressions' => 0
			),
			'searchable_fields' => array(
				
			),
			'indexes' => array(
			),
		);
		
		return $fields;
	}
	
	function updateCMSFields(FieldSet &$fields) {
		//$allForums = DataObject::get('Forum');
		$fields->removeByName('FirstName');
		$fields->removeByName('PersonalDetails');
		//$fields->removeByName('Password');
		//$fields->removeByName('pin');
		
	}
}
