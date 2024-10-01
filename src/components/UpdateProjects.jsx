import { useState, useEffect } from 'react';

const UpdateProjects = () => {
    const [projects, setProjects] = useState([]);
    const [editProjectId, setEditProjectId] = useState(null); // Store actual project ID for editing
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        technologies: '',
        role: '',
        github: '',
        showincv: false,
    });

    useEffect(() => {
        // Fetch projects from the backend
        fetch(import.meta.env.VITE_API_URL + '/api/projects/all')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/delete/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setProjects(projects.filter((project) => project.id !== id));
                alert('Successfully deleted the project!')
            } else {
                alert('Failed to delete project.');
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const handleEdit = (project) => {
        setEditProjectId(project._id); // Store project ID to edit
        setFormData(project); // Prepopulate the form with the selected project's data
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSave = async (e) => {
       e.preventDefault();
            if (editProjectId) {
                // Update project (POST)
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/edit/${editProjectId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    const updatedProjects = projects.map((project) =>
                        project.id === editProjectId ? { ...formData, id: editProjectId } : project
                    );
                    setProjects(updatedProjects);
                    alert('Project updated successfully.');
                    setFormData({
                        name: '',
                        description: '',
                        technologies: '',
                        role: '',
                        github: '',
                        showincv: false,
                    });
                } else {
                    alert('Failed to update project.');
                }
            } else {
                // Add new project (POST)
                const response = await fetch(import.meta.env.VITE_API_URL + '/api/projects/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    const newProject = await response.json();
                    setProjects([...projects, newProject]); // Add new project to the list
                    alert('Project added successfully.');
                    setFormData({
                        name: '',
                        description: '',
                        technologies: '',
                        role: '',
                        github: '',
                        showincv: false,
                    });
                } else {
                    alert('Failed to add project.');
                }
        setEditProjectId(null); // Clear edit state
    };
}

    return (
        <div className="min-h-screen mt-16 bg-gray-100 py-12 px-6 sm:px-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Manage Projects</h2>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <form onSubmit={handleSave}>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Project Name"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Project Description"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows="4"
                                required
                            />
                            <input
                                type="text"
                                name="technologies"
                                value={formData.technologies}
                                onChange={handleChange}
                                placeholder="Technologies"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Role"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <input
                                type="text"
                                name="github"
                                value={formData.github}
                                onChange={handleChange}
                                placeholder="GitHub Link"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="showincv"
                                    checked={formData.showincv}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span>Show in CV</span>
                            </label>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {editProjectId ? 'Save Changes' : 'Add Project'}
                            </button>
                        </div>
                    </form>
                </div>

                {projects.map((project) => (
                    <div key={project._id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                            <div>
                                <button
                                    onClick={() => handleEdit(project)}
                                    className="text-indigo-600 hover:underline focus:outline-none mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(project._id)}
                                    className="text-red-600 hover:underline focus:outline-none"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-2">{project.description}</p>
                        <p className="text-gray-600 mb-2">
                            <strong>Technologies:</strong> {project.technologies}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <strong>Role:</strong> {project.role}
                        </p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-indigo-600 hover:underline"
                        >
                            GitHub Link
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpdateProjects;
