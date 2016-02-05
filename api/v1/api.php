<?

//http://coreymaynard.com/blog/creating-a-restful-api-with-php/

require_once 'API.class.php';
class MyAPI extends API
{
    protected $User;

    public function __construct($request, $origin) {
        parent::__construct($request);

        // Abstracted out for example
        /*$APIKey = new Models\APIKey();
        $User = new Models\User();

        if (!array_key_exists('apiKey', $this->request)) {
            throw new Exception('No API Key provided');
        } else if (!$APIKey->verifyKey($this->request['apiKey'], $origin)) {
            throw new Exception('Invalid API Key');
        } else if (array_key_exists('token', $this->request) &&
             !$User->get('token', $this->request['token'])) {

            throw new Exception('Invalid User Token');
        }

        $this->User = $User;*/
    }

    /*
     * Start endpoint definitions.
     */

     protected function sponsors($args) {
       if(  $this->method == 'GET'  ) {
         if(  count($args) == 0  ) {
           //TODO process the most recent year
         }
         if(  is_numeric($args[0])  ) {
           $year = $args[0] + 0;

           //TODO handle sponsor list as db query
           //return json_encode(Array("year"=>$year));
           return fread(fopen('sponsors', 'r'),filesize('sponsors'));
         } else {
           return "You must specify a numeric year.";
         }
       } else {
         return "Only accepts GET requests";
       }
     }
 }

 if(!array_key_exists('HTTP_ORIGIN', $_SERVER)) {
   $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
 }

 try {
   $API = new MyAPI($_REQUEST['request'], $_SERVER['HTTP_ORIGIN']);
   echo $API->processAPI();
 } catch (Exception $e) {
   echo json_encode(Array('error' => $e->getMessage()));
 }


 ?>
