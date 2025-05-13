<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
    }

    public function index()
    {
        $this->load->view('templates/header');
        $isDev = getenv('CI_ENV') !== 'production';
        $this->load->view('home', ['isDev' => $isDev]);
    }
}
