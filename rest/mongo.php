<?php

error_reporting(E_ALL);
ini_set('display_errors', 'on');
  
//require 'vendor/autoload.php' ;
  
class db {
    private $user = "8lasek";
    private $pass = "pass8lasek";
    private $host = "172.20.44.25";
    private $base = "8lasek";
    private $dataCollName = "ankieta";
    private $userCollName = "users";
    private $sessionCollName = "session";
    private $conn;
    private $dbase;
    private $data_coll;
    private $user_coll;
    private $session_coll;
  
  
  
    function __construct() {

      $this->conn = new MongoDB\Client("mongodb://{$this->user}:{$this->pass}@{$this->host}/{$this->base}");
      $this->data_coll = $this->conn->selectCollection($this->base, $this->dataCollName);
      $this->user_coll = $this->conn->selectCollection($this->base, $this->userCollName);
      $this->session_coll = $this->conn->selectCollection($this->base, $this->sessionCollName);
    
    }
  
    function select() {
      $cursor = $this->data_coll->find();
      $table = iterator_to_array($cursor);
      return $table ;
    }

    function session($array) {
      $tmp = $this->session_coll->find(array('sessionID' => $array['sessionID']));
      if ($tmp == NULL) {
        return false;
      }
      return true;
    }

    public function register($user_to_add) {
      $cursor = $this->user_coll->find(array('username' => $user_to_add['username']));
      if ($cursor->isDead()) {
        $ret = $this->user_coll->insertOne($user_to_add);
      } else {
        return false;
      }
      return true;
    }

    public function login($array) {

      $usernam = $array['username'];
      $pass = $array['password'];
      $cursor = $this->user_coll->find(array('username' => $usernam, 'password' => $pass));

      if ($cursor->isDead()) {
        return false;
      } else {
        $session_id = md5(uniqid($usernam, true));
        $start = date('Y-m-d H:i:s', time());
        $ret = $this->session_coll->insertOne(array('sessionID' => $session_id, 'start' => $start));
      }
      return $session_id;
    }
  
    function insert($data) {

      $query = array('data' => $data['data'], 'czas' => $data['czas']);

      $cursor = $this->data_coll->find($query);
      if ($cursor->isDead()) {
        $ret = $this->data_coll->insertOne($data);
      } else {
        return false;
      }
      return true;
    }

    public function logout($session) {

      $tmp = $this->session_coll->find(array('sessionID' => $session));

      if ($tmp != NULL) {
        $this->session_coll->deleteOne(array('sessionID' => $session));
      } else {
        return false;
      }

      return true;
    }

}
?>
