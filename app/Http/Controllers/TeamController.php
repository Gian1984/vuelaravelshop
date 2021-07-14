<?php

namespace App\Http\Controllers;



use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        return response()->json(Team::all(),200);
    }

    public function store(Request $request)
    {
        $member = Team::create([
            'firstname'=> $request->firstname,
            'lastname'=> $request->lastname,
            'email'=> $request->email,
            'role'=> $request->role,
            'image'=> $request->image,
            'quote'=> $request->quote,
            'author'=> $request->author,
        ]);

        return response()->json([
            'status' => (bool) $member,
            'data'   => $member,
            'message' => $member ? 'Team member Created!' : 'Error creating team member'
        ]);
    }

    public function show(Team $member)
    {
        return response()->json($member,200);
    }

    public function uploadMember(Request $request)
    {
        if($request->hasFile('image')){
            $name = time()."_".$request->file('image')->getClientOriginalName();
            $request->file('image')->move(public_path('images'), $name);
        }
        return response()->json(asset("images/$name"),201);
    }

    public function update(Request $request, $id)
    {

        $member = Team::findOrFail($id);

        $member->update(
            $request->only([
                'firstname',
                'lastname',
                'email',
                'role',
                'image',
                'quote',
                'author',
            ])
        );

        $member->save();

        return $member;

    }

    public function destroy($id)
    {
        return Team::findOrFail($id)->delete();
    }
}
