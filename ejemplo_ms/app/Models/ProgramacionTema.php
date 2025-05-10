<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramacionTema extends Model
{
    protected $table = "programacion_temas";
    public $timestamps = false; /* Evita que la tabla exija tener los campos CreateAdd y UpdateAdd */
}
