<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function cacheImg($img)
    {
        $path = public_path('image/' . $img);
        $file = file_get_contents($path);
        $mime = mime_content_type($path);
        return response($file, 200, [
            'Content-Type' => $mime,
            'Cache-Control' => 'public, max-age=12400'
        ]);
    }
    public function cacheImgCover($img)
    {
        $path = public_path('image/vertical-' . $img);
        $file = file_get_contents($path);
        $mime = mime_content_type($path);
        return response($file, 200, [
            'Content-Type' => $mime,
            'Cache-Control' => 'public, max-age=12400'
        ]);
    }
}
