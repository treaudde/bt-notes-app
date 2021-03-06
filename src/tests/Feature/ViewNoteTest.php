<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Domain\Notes\Entities\Note;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Class ViewNoteTest
 * @package Tests\Feature
 */
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

    public function testViewNoteNotFound()
    {
        //get the note
        $this->get("api/notes/not_found", ['Accept' => 'application/json'])
            ->assertStatus(404);
    }

}
