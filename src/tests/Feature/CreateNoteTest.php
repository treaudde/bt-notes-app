<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Class CreateNoteTest
 * @package Tests\Feature
 */
class CreateNoteTest extends TestCase
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
    public function testCanCreateNote()
    {
        $noteToCreate = [
            'note_title' => 'Note',
            'note_text' => 'Text'
        ];

        $this->post('api/notes', $noteToCreate, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonFragment([
                'note_title' => 'Note',
                'note_text' => 'Text'
            ]);

        $this->assertDatabaseHas('notes', $noteToCreate);
    }

    /**
     *
     */
    public function testNoteValidationTitle()
    {
        $noteToCreate = [
            'note_text' => 'Text'
        ];

        $this->post('api/notes', $noteToCreate, ['Accept' => 'application/json'])
            ->assertStatus(422)
            ->assertJsonFragment([
                'errors' => [
                    'note_title' => ["The note title field is required."]
                ]
            ]);
    }

    /**
     *
     */
    public function testNoteValidationText()
    {
        $noteToCreate = [
            'note_title' => 'Title'
        ];

        $this->post('api/notes', $noteToCreate, ['Accept' => 'application/json'])
            ->assertStatus(422)
            ->assertJsonFragment([
                'errors' => [
                    'note_text' => ["The note text field is required."]
                ]
            ]);
    }
}
