<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use App\Services\Categories\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public CategoryService $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function create(Request $request)
    {
        $category = $request->get('category');
        $category['user_id'] = $request->user()->id;
        $this->categoryService->create($category);
    }
    public function get($id)
    {
        $category = $this->categoryService->get($id);
        return response()->json(['category' => $category]);
        return response()->json(['message' => 'Prawiłowow dodano kategorię']);
    }

    public function destroy($id)
    {
        $this->categoryService->destroy($id);
        return response()->json(['message' => 'Prawiłowow usunięto kategorię o id ' . $id]);
    }
    public function update(Request $request, $id)
    {
        $category = $request->get('category');
        $this->categoryService->update($category, $id);
        return response()->json(['message' => 'Prawidłowo zaaktualiowano kategorie o id ' . $id]);
    }
}
