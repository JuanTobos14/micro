<?php

namespace App\Http\Controllers;

use App\Models\ProgramacionTema;
use Illuminate\Http\Request;

class ProgramacionTemaControler extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rows = ProgramacionTema::all();
        /* Siempre hay que generar la respuesta */
        return response()->json(
            ['data' => $rows], 200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /* $data captura los valores que lleguen en este caso, ya que no hay interfaz*/
        $data = $request->all();
        $newModel = new ProgramacionTema();
        
        /* Setear valores*/
        $newModel->id = $data['id'];
        $newModel->nombre = $data['name'];
        $newModel->cod = $data['code'];
        $newModel->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $row = ProgramacionTema::where('nombre', 'Pepe');

        $row = ProgramacionTema::find($id);
        return response()->json(
            ['data' => $row], 200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->all();
        $row = ProgramacionTema::find($id);
        $row->nombre = $data['name'];
        $row->cod = $data['code'];
        $row->save();

        return response()->json(
            ['data' => $row], 200
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $row = ProgramacionTema::find($id);
        $row->delete();
        return response()->json(
            ['data' => $row], 200
        );
    }
}
