<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Domain\Notes\Entities\Note;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Class DeleteNoteTest
 * @package Tests\Feature
 */
class DeleteNoteTest extends TestCase
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
    public function testCanDeleteNote()
    {
        $note = Note::create([
            'note_title' => 'Note',
            'note_text' => 'Text'
        ]);

        $this->delete('api/notes/'.$note->id)
            ->assertJsonFragment([true])
            ->assertStatus(200);

        $this->assertDatabaseMissing('notes', ['id' => $note->id, 'note_title' => 'Note', 'note_text' => 'Text']);
    }

    public function testDeleteNoteNotFound()
    {

        $this->delete('api/notes/not_found')
            ->assertStatus(404);

    }
}


