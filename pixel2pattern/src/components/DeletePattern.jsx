import { Button } from "@mui/material";

const DeletePattern = ({ id }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleDelete = async () => {
        try {
            const res = await fetch(`${API_URL}/delete/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            })
            if (!res.ok) {
                throw new Error(`Failed to delete pattern with ID: ${id}`);
            }
            // redirect to home page after successful deletion
           next.router.push('/');
        } catch (err) {
            console.error("Error deleting pattern: ", err);
        }
    }
    return (
        <div>
            <Button variant="contained" color="error" onClick={handleDelete}>Delete Pattern</Button>
        </div>
    )
}

export default DeletePattern;