<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Domain\Notes\Entities\Note;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ViewNoteTest extends TestCase
{

    use RefreshDatabase;
    /**
     * User can view a note
     */
    public function testUserCanViewSingleNote()
    {
        //create the note
        $noteData = [
            'note_title' => 'Test Note 1',
            'note_text' => 'Test Note Text'
        ];

        $note = Note::create($noteData);

        //get the note
        $this->get("api/notes/{$note->id}", ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJson($noteData);
    }
}
