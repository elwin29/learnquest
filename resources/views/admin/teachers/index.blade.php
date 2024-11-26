<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-row justify-between items-center">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Manage Teachers') }}
            </h2>
            <a href="{{ route('admin.teachers.create') }}" class="font-bold py-3 px-5 bg-indigo-700 text-white rounded-lg hover:bg-indigo-600 transition">
                Add New
            </a>
        </div>
    </x-slot>
    
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 space-y-6">
                @forelse($teachers as $teacher)
                <div class="item-card flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md">
                    <div class="flex flex-row items-center gap-x-4">
                        <img src="{{ Storage::url($teacher->user->avatar) }}" alt="" class="rounded-lg object-cover w-16 h-16">
                        <div class="flex flex-col">
                            <h3 class="text-indigo-900 text-lg font-semibold">{{ $teacher->user->name }}</h3>
                            <p class="text-gray-500 text-sm">{{ $teacher->user->occupation }}</p>
                        </div>
                    </div>
                    <div class="mt-3 md:mt-0 flex flex-col md:flex-row md:items-center gap-x-6">
                        <div class="text-sm text-gray-500 text-center md:text-left">
                            <p class="font-medium">Date</p>
                            <p class="text-gray-800">{{ $teacher->created_at->format('Y-m-d H:i') }}</p>
                        </div>
                        <div class="flex flex-row items-center gap-x-3" style="margin-top: -4px;">
                            <form action="{{ route('admin.teachers.destroy', $teacher) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="font-medium py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-500 transition">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                @empty
                    <p class="text-center text-gray-500">
                        No teachers available.
                    </p>
                @endforelse
            </div>
        </div>
    </div>
</x-app-layout>
