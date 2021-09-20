<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;


class TaskController extends Controller
{
    public function index()
    {
        $tasks=Task::orderBy('id','DESC')->get();
        return $tasks;
    }

  

    public function store(Request $request)
    {
        $this->validate($request,[
            'keep'=>'required'

        ]);
        Task::create($request->all());

    }


    public function edit($id)
    {
        $tasks=Task::findOrFail($id);
        return $tasks;


    }

    public function update(Request $request,$id)
    {

    }

    public function destroy($id)
    {
        $tasks=Task::findOrFail($id);
        $tasks->delete();
    }
}
