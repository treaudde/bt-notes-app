<?php

namespace App\Domain\Notes\Entities;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $fillable = [
        'note_title',
        'note_text'
    ];
}
