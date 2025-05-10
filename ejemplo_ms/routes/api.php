<?php

use App\Http\Controllers\CursoController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\ProgramacionTemaControler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(PersonaController::class)->group(function(){
    Route::get('personas', 'index');
    Route::post('persona', 'store');
    Route::get('persona/{id}', 'show');
    Route::put('persona/{id}', 'update');
    Route::delete('persona/{id}', 'destroy');
});

//Esto es un REST 
Route::controller(ProgramacionTemaControler::class)->group(function(){
    Route::get('temas', 'index');
    Route::post('tema', 'store');
    Route::get('tema/{id}', 'show');
    Route::put('tema/{id}', 'update');
    Route::delete('tema/{id}', 'destroy');
});

Route::controller(CursoController::class)->group(function(){
    Route::get('cursos', 'index');
    Route::post('curso', 'store');
    Route::get('curso/{id}', 'show');
    Route::put('curso/{id}', 'update');
    Route::delete('curso/{id}', 'destroy');
});