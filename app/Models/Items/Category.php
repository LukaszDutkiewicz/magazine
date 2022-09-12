<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class Category extends Model
{

    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'user_id'];

    public function items()
    {
        return $this->hasMany(Item::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
