<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;

use function Pest\Laravel\delete;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rows = Persona::all();
        return response()
        ->json(['data'=> $rows], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $newPersona = new Persona();
        $newPersona->nombre = $data['name'];
        $newPersona->email = $data['email'];
        $newPersona->edad = $data['age'];
        $newPersona->save();

        return response()->json(['data'=>'Datos guardados'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $row = Persona::find($id);
        if(empty($row)){
            return response()->json(['data'=>'No existe'], 404);
        }
        return response()->json(['data'=>$row], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $row = Persona::find($id);
        if(empty($row)){
            return response()->json(['data'=>'No existe'], 404);
        }
        $data = $request->all();
        $row->nombre=$data['name'];
        $row->email=$data['email'];
        $row->edad=$data['age'];
        $row->save();
        return response()->json(['data'=>'Datos guardados'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $row = Persona::find($id);
        if(empty($row)){
            return response()->json(['data'=>'No existe'], 404);
        }
        $row->delete();
        return response()->json(['data'=>'Datos eliminados'], 200);

    }
}
