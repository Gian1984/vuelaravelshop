<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;


class Team extends Model
{
    use HasFactory, HasApiTokens, SoftDeletes ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'role',
        'image',
        'quote',
        'author'
    ];
}
