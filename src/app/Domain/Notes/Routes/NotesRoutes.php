<?php

namespace App\Domain\Notes\Routes;

use Illuminate\Support\Facades\Route;

/**
 * Class NotesRoutes
 */
class NotesRoutes
{
    const CONTROLLER_PATH = '\App\Domain\Notes\Http\Controllers\NoteController';

    public static function routes()
    {
        Route::resource('notes', self::CONTROLLER_PATH);
    }
}
