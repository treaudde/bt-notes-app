<?php

namespace Tests\Feature;

use \Exception;
use Tests\TestCase;
use App\Domain\Notes\Entities\Note;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;

/**
 * Class EditNoteTest
 * @package Tests\Feature
 */
class EditNoteTest extends TestCase
{
    use RefreshDatabase;

    /**
     *
     */
    public function setUp() : void
    {
        parent::setUp();
    }

    /**
     *
     */
    public function testCanEditNote()
    {
        $note = Note::create([
            'note_title' => 'Note',
            'note_text' => 'Text'
        ]);

        $this->put(
            'api/notes/'.$note->id,
            ['note_title' => 'Note Edited', 'note_text' => 'Text Edited'],
            ['Accept' => 'application/json']
        )->assertStatus(200)
        ->assertJsonFragment(['note_title' => 'Note Edited', 'note_text' => 'Text Edited']);

        $this->assertDatabaseHas('notes', ['note_title' => 'Note Edited', 'note_text' => 'Text Edited']);
    }

    /**
     *
     */
    public function testValidateNoteTitle()
    {
        $note = Note::create([
            'note_title' => 'Note',
            'note_text' => 'Text'
        ]);

        $this->put(
            'api/notes/'.$note->id,
            ['note_text' => 'Text Edited'],
            ['Accept' => 'application/json']
        )->assertStatus(422)
            ->assertJsonFragment([
                'errors' => [
                    'note_title' => ["The note title field is required."]
                ]
            ]);

    }

    /**
     *
     */
    public function testValidateNoteText()
    {
        $note = Note::create([
            'note_title' => 'Note',
            'note_text' => 'Text'
        ]);

        $this->put(
            'api/notes/'.$note->id,
            ['note_title' => 'Note Edited'],
            ['Accept' => 'application/json']
        )->assertStatus(422)
            ->assertJsonFragment([
                'errors' => [
                    'note_text' => ["The note text field is required."]
                ]
            ]);

    }


}
