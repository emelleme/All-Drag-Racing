<?php

global $project;
$project = 'mysite';

global $databaseConfig;
$databaseConfig = array(
	"type" => 'MySQLDatabase',
	"server" => 'localhost',
	"username" => 'root',
	"password" => 'd3v-Emelle',
	"database" => 'alldragracing_dev',
	"path" => '',
);

MySQLDatabase::set_connection_charset('utf8');
Director::set_environment_type("dev");
// This line set's the current theme. More themes can be
// downloaded from http://www.silverstripe.org/themes/
SSViewer::set_theme('tutorial');

LeftAndMain::setApplicationName("Emelle.me Content Manager");
LeftAndMain::set_loading_image('http://dev.emelle.me/assets/images/Logo.loading.png','height:100px;width:584px');
// Set the site locale
i18n::set_locale('en_US');

DataObject::add_extension('Member', 'DragRole');

// enable nested URLs for this site (e.g. page/sub-page/)
SiteTree::enable_nested_urls();
