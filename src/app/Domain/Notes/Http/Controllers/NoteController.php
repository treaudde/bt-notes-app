<?php

namespace App\Domain\Notes\Http\Controllers;

use Illuminate\Http\Request;
use App\Domain\Notes\Entities\Note;
use App\Http\Controllers\Controller;
use App\Domain\Notes\Http\Requests\CreateNoteRequest;
use App\Domain\Notes\Http\Requests\UpdateNoteRequest;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            Note::orderBy('created_at', 'desc')->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateNoteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateNoteRequest $request)
    {
        //get the title and text to create the request
        $noteData = [
            'note_title' => $request->get('note_title'),
            'note_text' => $request->get('note_text')
        ];

        return response()->json(Note::create($noteData));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        return response()->json($note);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {
        $updateNoteData = [
            'note_title' => $request->get('note_title'),
            'note_text' => $request->get('note_text')
        ];

        $note->update($updateNoteData);
        return response()->json($note->refresh());

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        //
    }
}
