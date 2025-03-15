import React, { useState } from 'react';
import { Check, Trash2, Edit2, X, Save } from 'lucide-react';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm transition-all duration-200 ${todo.completed ? 'opacity-75' : ''}`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-colors duration-200 flex items-center justify-center
          ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-green-500'}`}
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </button>
      
      {isEditing ? (
        <div className="flex-grow flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="p-1.5 text-green-600 hover:bg-green-50 rounded-full transition-colors"
          >
            <Save size={18} />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <>
          <span className={`flex-grow text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-1.5 text-red-600 hover:bg-red-50 rounded-full transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}