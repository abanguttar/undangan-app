<?php

use Inertia\Inertia;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return   redirect('/uttarerlinda');
    // return '<h1>Haloo</h1>';
});

Route::get('cache/{img}', [Controller::class, 'cacheImg']);

Route::get('fetch-comments', function () {
    $comments = collect(DB::table('comments')
        ->select('name', 'text')
        ->selectRaw("DATE_FORMAT(created_at, '%d %M %H:%i') as send_at")->get());

    return response()->json([
        'success' => true,
        'message' => 'ok',
        'comments' => $comments
    ], 200);
});
Route::get('/uttarerlinda', function () {
    $csrf_token = csrf_token();
    $comments = collect(DB::table('comments')
        ->select('name', 'text')
        ->selectRaw("DATE_FORMAT(created_at, '%d %M %H:%i') as send_at")->get());
    return Inertia::render('Undangan', compact('csrf_token', 'comments'));
});
Route::post('/uttarerlinda', function (Request $request) {
    $validation = Validator::make([
        'name' => $request->input('name'),
        'text' => $request->input('text'),
    ], [
        'name' => 'required|max:30',
        'text' => 'required|max:120',
    ], [
        'required' => ':attribute|tidak boleh kosong!',
        'max' => ':attribute|tidak boleh melibihi :max!',
    ]);

    if ($validation->fails()) {
        return response()->json([
            'success' => false,
            'message' => $validation->errors()->all()
        ], 422);
    }

    $comment = new Comment;

    $comment->name = $request->input('name');
    $comment->text = $request->input('text');

    $comment->save();
    return response()->json([
        'success' => true,
        'message' => 'sukses'
    ], 200);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
