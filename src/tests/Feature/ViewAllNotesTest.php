<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Domain\Notes\Entities\Note;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ViewAllNotesTest extends TestCase
{

    use RefreshDatabase;

    public function setUp() : void
    {
        parent::setUp();

        //create 10 notes
        for ($x=1; $x<=10; $x++) {
            Note::create(
              [
                  'note_title' => 'Note '.$x,
                  'note_text' => 'Note Text '.$x
              ]
            );
        }

    }

    public function testCanViewAllNotes()
    {
        $notes = $this->get('api/notes', ['Accept' => 'application/json']);
        $notes->assertStatus(200);

        for($x=1; $x<=10; $x++){
            $notes->assertJsonFragment([
                'note_title' => 'Note '.$x,
                'note_text' => 'Note Text '.$x
            ]);
        }
    }

}
