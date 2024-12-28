import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'

interface Comment {
    id: string,
    author: string,
    text: string
}

interface CommentSectionProps {
    postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

    const handleAddComment = () => {
        if (newComment.trim() && authorName.trim()) {
            const newCommentObj: Comment = {
                id: new Date().toISOString(),
                author: authorName,
                text: newComment,
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
            setAuthorName('');
        }
    };

    const handleEditComment = (commentID: string) => {
        const commentToEdit = comments.find((comment) => comment.id === commentID);
        if (commentToEdit) {
            setNewComment(commentToEdit.text);
            setAuthorName(commentToEdit.author);
            setEditingCommentId(commentID);
        }
    };

    const handleSaveEditedComment = () => {
        if (newComment.trim() && authorName.trim() && editingCommentId) {
            const updatedComments = comments.map((comments) => 
                comments.id === editingCommentId
                    ? { ...comments, text: newComment, author: authorName }
                    : comments
            );
            setComments(updatedComments);
            setNewComment('');
            setAuthorName('');
            setEditingCommentId(null)
        }
    };

    return (
        <div className="mt-8">
            <h2 className='text-2xl font-semibold'>Comments</h2>

            <div className='mt-4 space-y-4'>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <Card key={comment.id}>
                            <CardContent className='p-4'>
                                <div className="font-semibold"> {comment.author} </div>
                                <p>{comment.text}</p>

                                <Button
                                    onClick={() => handleEditComment(comment.id)}
                                    className='mt-2 bg-[#2A254B] text-white hover:bg-amber-600'>
                                    Edit
                                </Button>

                            </CardContent>
                        </Card>

                    ))
                ) : (

                    <p className='text-slate-400'>No comment yet</p>
                )
                }

            </div>

            <div className='mt-6'>

                <input 
                type="text"
                value={authorName}
                onChange={(e: any) => setAuthorName(e.target.value)}
                placeholder="Your name"
                className="w-full mb-2"
                />
                <input 
                type="text"
                value={newComment}
                onChange={(e: any) => setNewComment(e.target.value)}
                placeholder="Add a Comment"
                className="w-full mb-2"
                />
                <Button
                onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
                className='mt-4 bg-[#2A254B] hover:bg-amber-600'>
                    {editingCommentId ? 'Save' : 'Submit'}

                </Button>

            </div>
            </div>

    )
}

