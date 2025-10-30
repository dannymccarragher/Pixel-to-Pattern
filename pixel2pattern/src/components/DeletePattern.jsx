"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const DeletePattern = ({ id }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Delete this pattern?")) return;

        try {
            const res = await fetch(`${API_URL}/patterns/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error();

            alert("Pattern deleted!");
            router.push("/");
        } catch (err) {
            console.error("Error deleting pattern: ", err);
            alert("Error deleting pattern");
        }
    };

    return (
        <Button variant="contained" color="error" onClick={handleDelete}>
            Delete Pattern
        </Button>
    );
};

export default DeletePattern;