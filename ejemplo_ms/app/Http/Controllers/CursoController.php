<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //llamar a la tabla de Persona
        $rows = Curso::all();
        return response()
        ->json(['data'=> $rows], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $curso = new Curso();
        $curso->codigo = $data['pk'];
        $curso->nombre = $data['name'];
        $curso->idDocente = $data['fk'];
        $curso->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //llamar a la tabla de Persona
        $row = Curso::find($id);
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
        $row = Curso::find($id);
        $row->nombre = $data['name'];
        $row->idDocente = $data['fk'];
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
        $row = Curso::find($id);
        if(empty($row)){
            return response()->json(['data'=>'No existe'], 404);
        }
        $row->delete();
        return response()->json(['data'=>'Datos eliminados'], 200);
    }
}
