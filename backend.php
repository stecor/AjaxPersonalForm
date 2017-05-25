<?php

// Return JSON default data if requested
if ($_REQUEST['act'] == 'clear')
{
  $clearData = array('name' => "",
                     'postal' => "",
                     'phone' => "",
                     'address' => "");

  echo json_encode($clearData);
}
// Return JSON default data if requested
else if ($_REQUEST['act'] == 'default')
{
  $defaultData = array('name' => "Mark",
                       'postal' => "L5B-4G6",
                       'phone' => "(905) 975-1212",
                       'address' => "65 James Street West");

  echo json_encode($defaultData);
}
// Validate the data, then return results of validation
else if ($_REQUEST['act'] == 'validate')
{
  $validateData = array();

  if (preg_match("/^[A-Za-z]{3,15}$/",$_REQUEST['name'])) $validateData['name'] = 1;
  else $validateData['name'] = 0;

  if (preg_match("/^\\([0-9]{3}\\)\\s?[0-9]{3}-[0-9]{4}$/",$_REQUEST['phone'])) $validateData['phone'] = 1;
  else $validateData['phone'] = 0;

  if (preg_match("/^[A-Z][0-9][A-Z]-[0-9][A-Z][0-9]$/",
  	                          $_REQUEST['postal'])) $validateData['postal'] = 1;
  else $validateData['postal'] = 0;

  if (preg_match("/^[0-9]{1,3} [A-Za-z]{3,10} [A-Za-z]{3,10} (West)|(East)|(North)|(South)$/",
  	                          $_REQUEST['address'])) $validateData['address'] = 1;
  else $validateData['address'] = 0;

  echo json_encode($validateData);
}
else echo "Should never happen";

?>
