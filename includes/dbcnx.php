<?php

class dbcnx
{
    protected static $db;

    private function __construct()
    {
        try {
            self::$db = new PDO('mysql:host=localhost;dbname=rento;charset=utf8', 'root', '');
            self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            self::$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        } catch (PDOException $ex) {
            $error = "Connection Error : " . $ex->getMessage();
            error_log( '['. date("Y-m-d H:i:s") . "] SQL Database Error :" . $error  . "\r\n", 3, __DIR__ . "/../log/sql_errors.log" );
        }
    }

    public static function getcnx()
    {
        if (!self::$db) {
            new dbcnx();
        }
        return self::$db;
    }
}