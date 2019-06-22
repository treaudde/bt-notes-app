<?php

namespace Tests\Feature;

use Tests\TestCase;
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
        $this->get("notes/{$note->id}")
            ->assertStatus(200)
            ->assertJson($noteData);
    }
}
